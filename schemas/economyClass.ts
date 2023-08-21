export default {
    name: 'economy-class',
    type: 'document',
    title: 'Economy Class',
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
          hotspot: true
        }
      },
    ],
  }
  