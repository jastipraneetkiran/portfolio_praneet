import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    }),
    defineField({
      name: 'compnayImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text Company Image',
        }
      ]
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'text',
    }),
    defineField({
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    }),
    defineField({
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkingHere',
      type: 'boolean',
    }),
    defineField({
      name: 'tecnologies',
      title: 'Tecnologies',
      type: 'array',
      of:[{type:'reference',to:{type:'skill'}}],
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of:[{type:'string'}],
    }),
  ],
})
