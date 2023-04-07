import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
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
    defineField({
      title: "Language",
      type: "string",
      name: "language",
      options: {
        list: [
            {title: 'English', value: 'en'},
            {title: 'Turkish', value: 'tr'}
          ]
      }
    }),
  ],
})
