'use strict'

exports.default = {
  event: 'auth.loginResponse',
  description: `This was automatically generated`,

  run (api, params, next) {
    // populate the user role
    api.actions.call('authorize.getRole', { _id: params.user.role })
      .catch(error => { next(error) })
      .then(({ role }) => {
        // set the role property
        params.user.role = role

        // finish the event execution
        next()
      })
  }
}
