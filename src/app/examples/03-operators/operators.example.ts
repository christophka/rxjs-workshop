import {
  Example,
  ExampleStep,
} from 'src/app/ui/example-components/types/example.type';

export const operatorsExample: Example = {
  link: '/example/03-operators',
  title: 'Operators',
  description: 'Why do they exist and why are they awesome?',
};

export const steps: ExampleStep[] = [
  {
    link: '00',
    title: 'Introduction',
    description: 'Introduction about operators',
  },
  {
    link: '01',
    title: 'Basics',
    description: 'Learn how to use operators',
  },
  {
    link: '02',
    title: 'Countdown',
    description: 'Restartable countdown',
  },
];
