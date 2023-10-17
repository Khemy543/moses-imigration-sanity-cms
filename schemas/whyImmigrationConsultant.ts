export default {
    name: 'why-immigration-consultant',
    type: 'document',
    title: 'Why Immigration Consultation',
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
  
  