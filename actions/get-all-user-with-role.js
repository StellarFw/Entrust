exports.default = {
  name: 'entrust.getAllUserWithRole',
  description: `Get all users that have the requested role`,

  inputs: {
    role: {
      required: true,
      description: `Role slug to searching for`
    }
  },

   run (api, action) {
     // get user mode
     const User = api.models.get('user')

     // get role data
     return api.actions.call('entrust.getRoleBySlug', { role: action.params.role })
      // search for all users that have this role
      .then(({ role }) => User.find({ role: role.id }))
      // append the result to the response
      .then(users => { action.response.users = users })
      // catch the error when the role doesn't exists
      .catch(_ => { throw new Error('The role does not exists') })
   }
}
