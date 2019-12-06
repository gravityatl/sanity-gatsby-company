import { MdBusiness } from 'react-icons/md'

export default {
  name: 'homeContent',
  title: 'Home Content',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  icon: MdBusiness,
  fields: [
    {
      name: 'headline',
      title: 'Homepage Headline',
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
    }
  ]
}