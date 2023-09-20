export default {
  name: 'atlantic-program',
  type: 'document',
  title: 'Atlantic-Immigration-Program',
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
