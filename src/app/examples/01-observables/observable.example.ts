import {
  Example,
  ExampleStep,
} from 'src/app/ui/example-components/types/example.type';

export const observableExample: Example = {
  link: '/example/01-observables',
  title: 'Observables',
  description: 'Learn something about the basics of Observables',
};

export const steps: ExampleStep[] = [
  {
    link: '00',
    title: 'Introduction',
    description: 'Introduction about observables',
  },
  {
    link: '01',
    title: 'Observables',
    description: 'Learn something about the basics of Observables',
  },
  {
    link: '02',
    title: 'Observer',
    description: 'An Observer consumes an Observable',
  },
  {
    link: '03',
    title: 'Subscription',
    description: 'Handling interest in an Observable',
  },
  {
    link: '04',
    title: 'Async Observables',
    description: 'Adding the dimension of time to Observables',
  },
  {
    link: '05',
    title: 'Subjects',
    description: 'What are subjects?',
  },
  {
    link: '06',
    title: 'Using Subjects',
    description: 'Applications for Subjects',
  },
];
