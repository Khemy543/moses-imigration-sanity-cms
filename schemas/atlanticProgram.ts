export default {
  name: 'atlantic-program',
  type: 'document',
  title: 'Atlantic-Immigration-Program',
  fields: [
    {
      name: 'myId',
      type: 'number',
      title: 'Position',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'component',
      type: 'string',
      title: 'Component',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
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
