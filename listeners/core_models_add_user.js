'use strict'

exports.default = {
  event: 'core.models.add.user',
  description: `Add the role field to the user model`,

  run (api, params, next) {
    // get the user model
    const User = params.model

    // add two new fields to the user model
    //  - role: user role
    //  - permissions: special user permissions who are merged with the role
    //    ones
    User.attributes = Object.assign(User.attributes, {
      role: {
        model: 'role'
      },

      permissions: {
        type: 'array',
        defaultsTo: []
      }
    })

    // finish the event execution
    next()
  }
}
