export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'Some frontend will require a slug to be set to be able to show the skill',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        description: 'You can use this field to schedule skills where you show them',
        type: 'datetime'
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'blockText'
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
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'category' } }]
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent'
      },
      {
        name: 'relatedprojects',
        title: 'Related Projects',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'project' } }]
      }
    ],
    preview: {
      select: {
        title: 'title',
        publishedAt: 'publishedAt',
        image: 'mainImage'
      },
      prepare ({ title = 'No title', publishedAt, image }) {
        return {
          title,
          subtitle: publishedAt
            ? new Date(publishedAt).toLocaleDateString()
            : 'Missing publishing date',
          media: image
        }
      }
    }
  }
  