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
    const Role = api.models.get("role");

    const results = await Role.find({ slug: params.role });
    response.role = results[0];
  }
}
