import {
  Example,
  ExampleStep,
} from 'src/app/ui/example-components/types/example.type';

export const subjectsExample: Example = {
  link: '/example/02-subjects',
  title: 'Subjects',
  description: 'This collection teaches about Subjects and its variants.',
};

export const steps: ExampleStep[] = [
  {
    link: '00',
    title: 'Introduction',
    description: 'What are Subjects',
  },
  {
    link: '01',
    title: 'Behavior Subject',
    description: 'Why use a Behavior Subject?',
  },
  {
    link: '02',
    title: 'Replay Subject',
    description: 'Why use a Replay Subject?',
  },
  {
    link: '03',
    title: 'Using Subjects',
    description: 'Applications for Subjects',
  },
];
