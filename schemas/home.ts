export default {
  name: 'home',
  type: 'document',
  title: 'Home',
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
