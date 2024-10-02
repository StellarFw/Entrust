export default {
  entrust: (api) => ({
    errors: {
      // ---------------------------------------------------------------------
      // User not logged
      // ---------------------------------------------------------------------
      noUserLogged: {
        code: "no_user_logged",
        message: "There is no logged user",
      },

      // ---------------------------------------------------------------------
      // User don't have authorization to perform a task
      // ---------------------------------------------------------------------
      userNotAuthorized: {
        code: "not_authorized",
        message: "The user don't have authorization",
      },
    },
  }),
};
