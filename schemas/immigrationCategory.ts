export default {
  name: 'immigration-category',
  type: 'document',
  title: 'Immigration Category',
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
      name: 'image',
      type: 'image',
      title: 'image',
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
      name: 'section_bg_color',
      type: 'string',
      title: 'Background Color of Section',
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
              name: 'icon',
              title: 'Icon Class',
              type: 'string',
            },
            {
              name: 'url',
              title: 'Url',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
