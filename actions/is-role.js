exports.default = {
  name: "entrust.isRole",
  description: "Check if the given user has the given role",

  inputs: {
    user: {
      description: "User identifier",
      required: true,
    },
    role: {
      description: "Role slug to check if the user have",
      required: true,
    },
  },

  async run(api, { params, response }) {
    const User = api.models.get("user");

    const user = await User.findOne({ id: params.user });
    const { role } = await api.actions.call("entrust.getRoleBySlug", {
      role: params.role,
    });

    response.hasRole = role && role.id === user.role;
  },
};
