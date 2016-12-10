'use strict'

exports.default = {
  event: 'auth.loginResponse',
  description: `This was automatically generated`,

  run (api, params, next) {
    // if the role is null|undefined we set role field to null
    if (!params.user.role) {
      params.user.role = null
      return next()
    }

    // populate the user role
    api.actions.call('entrust.getRole', { id: params.user.role })
      .catch(error => { next(error) })
      .then(({ role }) => {
        // set the role property
        params.user.role = role

        // finish the event execution
        next()
      })
  }
}
