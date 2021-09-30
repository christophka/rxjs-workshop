import { Injectable } from '@angular/core';
import { BehaviorSubject, PartialObserver } from 'rxjs';

export enum LogLevel {
  Error = 'error',
  Warn = 'warn',
  Info = 'info',
  Log = 'log',
  Debug = 'debug',
}

/**
 * Log message
 */
interface Log {
  /** logging level */
  level: LogLevel;
  /** timestamp when message was logged */
  timestamp: Date;
  /** logged message */
  message: string;
  /** additional stuff that was logged */
  optionalParams: any[];
  /** logger scope */
  scope?: string;
}

type LogFn = (message: string, ...optionalParams: any[]) => void;
/**
 * Logger instance
 */
export type Logger = {
  [P in LogLevel]: LogFn;
};

/**
 * Abstract base implementation for a logger
 */
abstract class AbstractLogger implements Logger {
  /**
   * writes the given `log`.
   *
   * @param log Log message
   */
  protected abstract write(log: Log): void;

  /**
   * Creates a logger for the given `scope`.
   *
   * @param scope Name of the scope
   *
   * @returns
   * Logger
   */
  public scopedLogger(scope: string): Logger {
    return {
      error: this.generateLogLevelFn(LogLevel.Error, scope),
      warn: this.generateLogLevelFn(LogLevel.Warn, scope),
      info: this.generateLogLevelFn(LogLevel.Info, scope),
      log: this.generateLogLevelFn(LogLevel.Log, scope),
      debug: this.generateLogLevelFn(LogLevel.Debug, scope),
    };
  }

  private generateLogLevelFn(level: LogLevel, scope?: string) {
    return (message: string, ...optionalParams: any[]) =>
      this.write({
        level,
        message,
        optionalParams,
        scope,
        timestamp: new Date(),
      });
  }

  // Here we are just generating unscoped logging functions
  error = this.generateLogLevelFn(LogLevel.Error);
  warn = this.generateLogLevelFn(LogLevel.Warn);
  info = this.generateLogLevelFn(LogLevel.Info);
  log = this.generateLogLevelFn(LogLevel.Log);
  debug = this.generateLogLevelFn(LogLevel.Debug);
}

@Injectable({ providedIn: 'root' })
export class ConsoleService extends AbstractLogger {
  /**
   * set to true in order to clear the dev tools console
   */
  private static readonly CLEAR_DEV_CONSOLE = false;
  /**
   * set to false in order to skip writing to the dev console
   */
  private static readonly WRITE_TO_DEV_CONSOLE = true;

  /**
   * Everything that was logged
   */
  private readonly logSubject = new BehaviorSubject<Log[]>([]);
  public readonly logs$ = this.logSubject.asObservable();

  /**
   * Clears all logs
   */
  public clear() {
    if (ConsoleService.CLEAR_DEV_CONSOLE) {
      console.clear();
    }

    this.writeToConsole({
      message: 'logs cleared',
      level: LogLevel.Debug,
      timestamp: new Date(),
      optionalParams: [],
    });

    // Clears logs
    this.logSubject.next([]);
  }

  protected write(log: Log) {
    this.writeToConsole(log);
    this.logSubject.next([...this.logSubject.value, log]);
  }

  private writeToConsole(log: Log) {
    const { level, message, optionalParams, scope } = log;

    if (ConsoleService.WRITE_TO_DEV_CONSOLE) {
      console[level](`[CS] ${scope ? scope : ''}`, message, ...optionalParams);
    }
  }
}

/**
 * Creates an rxjs Observer from a given `logger`, that can be passed
 * as a parameter to `subscribe`.
 *
 * @param logger A logger instance
 * @param name A name for the log observer that is added to messages
 *
 * @returns
 * Observer that can be passed to an `Observable`s `subscribe` method.
 *
 * @example
 * const logger: Logger;
 * myObservable$.subscribe(logObserver(logger));
 */
export function logObserver<T>(logger: Logger, name = ''): PartialObserver<T> {
  const prefix = name.length > 0 ? `${name}: ` : '';
  return {
    next: (value) => logger.log(`${prefix}next ${value}`, value),
    complete: () => logger.info(`${prefix}complete`),
    error: (error) => logger.error(`${prefix}error ${error}`, error),
  };
}
