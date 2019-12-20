import { MdPerson } from 'react-icons/md'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: MdPerson,
  liveEdit: false,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    },
    {
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          title: 'Question and Answer',
          type: 'object',
          fields: [
            {
              title: 'Question',
              name: 'question',
              type: 'string'
            },
            {
              title: 'Answer',
              name: 'answer',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      name: 'bioEvent',
      title: 'Bio Event',
      type: 'array',
      of: [
        {
          title: 'Title and Description',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string'
            },
            {
              title: 'Description',
              name: 'description',
              type: 'text'
            }
          ]
        }
      ]
    }

  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
