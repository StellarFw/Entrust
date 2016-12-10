'use strict'

exports.default = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    slug: {
      type: 'string',
      unique: true,
      required: true
    },
    permissions: {
      type: 'array',
      default: []
    }
  }
}
