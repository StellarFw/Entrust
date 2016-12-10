'use strict'

module.export = {
  event: 'core.models.add.user',
  description: `Add the role field to the user model`,

  run (api, params, next) {
    // get the user model
    const User = params.model

    // add two new fields to the user model
    //  - role: user role
    //  - permissions: special user permissions who are merged with the role
    //    ones
    Object.defineProperties(User.attributes, {
      role: {
        model: 'role'
      },

      permissions: {
        type: 'array',
        default: []
      }
    })

    // finish the event execution
    next()
  }
}
