"use strict";

export default [
  {
    name: "entrust.promoteUser",
    description: `Promote the user to a given role`,

    inputs: {
      user: {
        description: `Identifier of the user to promote`,
        required: true,
      },
      role: {
        description: `Slug of the role to be attributed to the user`,
        required: true,
      },
    },

    run(api, action, next) {
      // get the role ID
      api.models
        .get("role")
        .findOne({ slug: action.params.role })
        .catch((error) => {
          next(error);
        })
        .then((role) => {
          if (!role) {
            return next(`The given role does not exists!`);
          }

          // update the user entry with the new role
          api.actions
            .call("auth.updateUser", {
              user: {
                id: action.params.user,
                role: role.id,
              },
            })
            .catch((error) => {
              next(error);
            })
            // append the updated user to the action response and finish the
            // execution
            .then(({ user }) => {
              action.response.user = user;
              next();
            });
        });
    },
  },
];
