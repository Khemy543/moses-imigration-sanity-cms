export default {
  name: 'open-work-permit',
  type: 'document',
  title: 'Open Work Permit',
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
      name: 'section_bg_color',
      type: 'string',
      title: 'Background Color of Section',
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

