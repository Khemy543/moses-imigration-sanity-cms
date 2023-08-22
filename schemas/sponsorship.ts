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
      type: 'text',
      title: 'body',
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
