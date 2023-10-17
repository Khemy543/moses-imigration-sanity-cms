export default {
    name: 'beware-of-fraud',
    type: 'document',
    title: 'Beware of Fraud',
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
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle',
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
        name: 'image_position',
        type: 'string',
        title: 'Position of Image',
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
    ],
  }
  
  