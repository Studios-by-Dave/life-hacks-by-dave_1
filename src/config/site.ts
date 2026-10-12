export const site = {
  name: 'Life Hacks by Dave',
  shortName: 'Life Hacks',
  founder: 'Dave Richardson',
  domain: 'https://www.lifehacksbydave.com',
  tagline: 'A living library of discovery, natural living, environmental awareness & faith.',
  description:
    'Life Hacks by Dave is a living library of practical techniques, personal discoveries, environmental research, natural-living resources and faith-centered insights, gathered by Dave Richardson.',
  mission:
    'To share practical techniques, personal discoveries, environmental awareness, research, natural-living resources, and faith-centered insights in the hope of helping fellow human beings live healthier, more informed, and more intentional lives.',
  language: 'en',
  locale: 'en_US',
} as const;

export type Site = typeof site;
