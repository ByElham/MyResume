import { ExperienceEntry } from '../types';

export const experienceData: ExperienceEntry[] = [
  {
    id: 'uq',
    roleKey: 'roles.uq.role',
    organizationKey: 'roles.uq.organization',
    periodKey: 'roles.uq.period',
    locationKey: 'roles.uq.location',
    bulletsKey: [
      'roles.uq.bullets.0',
      'roles.uq.bullets.1',
      'roles.uq.bullets.2',
    ],
    techStack: ['Deep Learning', 'Computer Vision', 'PyTorch', 'Model Benchmarking', 'Empirical Research'],
  },
  {
    id: 'ta',
    roleKey: 'roles.ta.role',
    organizationKey: 'roles.ta.organization',
    periodKey: 'roles.ta.period',
    locationKey: 'roles.ta.location',
    bulletsKey: [
      'roles.ta.bullets.0',
      'roles.ta.bullets.1',
      'roles.ta.bullets.2',
    ],
    techStack: ['Python', 'Algorithms', 'Data Structures', 'Code Review', 'Mentoring'],
  },
  {
    id: 'council',
    roleKey: 'roles.council.role',
    organizationKey: 'roles.council.organization',
    periodKey: 'roles.council.period',
    locationKey: 'roles.council.location',
    bulletsKey: [
      'roles.council.bullets.0',
      'roles.council.bullets.1',
      'roles.council.bullets.2',
    ],
    techStack: ['Leadership', 'Event Management', 'AI Workshops', 'Hackathons', 'Community Outreach'],
  },
];
