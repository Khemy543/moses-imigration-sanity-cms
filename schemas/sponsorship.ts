export default {
  name: 'sponsorship',
  type: 'document',
  title: 'Sponsorship',
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
