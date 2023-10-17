// export default {
//   name: 'express-entry',
//   type: 'document',
//   title: 'Express-Entry',
//   fields: [
//     {
//       name: 'title',
//       type: 'string',
//       title: 'title',
//     },
//     {
//       name: 'body',
//       type: 'array',
//       title: 'body',
//       of: [
//         {
//           type: 'block'
//         }
//       ]
//       },
//     {
//       name: 'image',
//       type: 'image',
//       title: 'image',
//       options: {
//         hotspot: true,
//       },
//     },
//   ],
// }

export default {
  name: 'express-entry',
  type: 'document',
  title: 'Express-Entry',
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
    {
      name: 'backgroundColor',
      type: 'string',
      title: 'Background Color',
    },
    {
      name: 'backimage',
      type: 'image',
      title: 'Background Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'externalLink',
      type: 'string',
      title: 'External Link',
    },
    {
      name: 'list',
      type: 'array',
      title: 'Resource List',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}

