export default {
  name: 'family-class',
  type: 'document',
  title: 'Family Class',
  fields: [
    {
      name: 'myId',
      type: 'number',
      title: 'Position',
    },
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
      name: 'component',
      type: 'string',
      title: 'Component',
    },
    {
      name: 'image',
      type: 'image',
      title: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'backimage',
      type: 'image',
      title: 'Background Image',
      options: {
        hotspot: true,
      },
    },
  ],
}
