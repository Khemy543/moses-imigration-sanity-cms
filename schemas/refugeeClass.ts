export default {
  name: 'refugee-class',
  type: 'document',
  title: 'Refugee Class',
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
