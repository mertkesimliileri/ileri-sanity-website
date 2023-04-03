import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'career',
  title: 'Career',
  type: 'document',
  fields: [
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})