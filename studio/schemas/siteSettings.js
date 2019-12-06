import { MdSettings } from 'react-icons/md'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  icon: MdSettings,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'logo',
      title: 'Logo',
      description: "JPG/PNG recommended size 600x600",
      type: 'image'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'primaryColor',
      type: 'color',
      title: 'Primary color'
    },
    {
      name: 'secondaryColor',
      type: 'color',
      title: 'Secondary color'
    },
    {
      name: 'tertiaryColor',
      type: 'color',
      title: 'Tertiary color'
    }
  ]
}
