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
          hotspot: true
        }
      },
    ],
  }
  