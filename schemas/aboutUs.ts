export default {
  name: 'about-us',
  type: 'document',
  title: 'About Us',
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
        hotspot: true,
      },
    },
  ],
}
