import { defineType, defineField } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'client', title: 'Client', type: 'string' }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'metricHero', title: 'Metric Hero', type: 'string' }),
    defineField({ name: 'problem', title: 'Problem', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'intervention', title: 'Intervention', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'result', title: 'Result', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'techUsed', title: 'Tech Used', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
  ],
});
