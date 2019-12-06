export default {
    name: 'faq',
    title: 'FAQ',
    type: 'array',
    fields: [
      {
        name: 'question',
        title: 'Question',
        type: 'string',
        options: {
          isHighlighted: true
        }
      },
      {
        name: 'answer',
        title: 'Answer',
        type: 'text',
        options: {
          isHighlighted: true
        }
      }
    ]
  }
  