exports.default = {
  name: 'entrust.getRoleBySlug',
  description: `Get an role by his slug`,

  inputs: {
    role: {
      required: true,
      description: 'Role slug to search form'
    }
  },

  run (api, action) {
    return api.models.get('role')
      .find({ slug: action.params.role })
      .then(result => { action.response.role = result[0] })
  }
}
