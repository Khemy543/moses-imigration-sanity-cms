export default {
  name: 'rural-and-northern-immigration-pilot',
  type: 'document',
  title: 'Rural And Northern Immigration Pilot',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'title',
    },
    {
      name: 'body',
      type: 'array',
      title: 'body',
      of: [
        {
          type: 'block'
        }
      ]
      },
    {
      name: 'image',
      type: 'image',
      title: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
