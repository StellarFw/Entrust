'use strict'

module.export = {
  event: 'core.models.add.user',
  description: `Add the role field to the user model`,

  run (api, params, next) {
    // get the mongoose Schema
    const Schema = params.mongoose.Schema

    // add two new fields to the user model
    //  - role: user role
    //  - permissions: special user permissions who are merged with the role
    //    ones
    params.schema.add({
      role: { type: Schema.Types.ObjectId, ref: 'role' },
      permissions: { type: Schema.Types.Mixed, default: [] }
    })

    // finish the event execution
    next()
  }
}
