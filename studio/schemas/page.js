export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage'
    },
    {
      name: 'moreImages',
      title: 'Additional Images',
      type: 'array',
      of: [{ type: 'moreImage' }]
    }
  ]
}
