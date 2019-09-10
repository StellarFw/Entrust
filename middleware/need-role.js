exports.needRole = {
  name: "entrust.needRole",
  description: "The user needs to have a role that match with the requirement",

  async preProcessor(action, next) {
    const actionDef = action.actionTemplate;

    // only apply the middleware when the roles are set on the meta property.
    // Otherwise the operation is allowed but print an alert to inform about
    // the missing roles specification.
    if (
      !actionDef.hasOwnProperty("meta") ||
      !actionDef.meta.hasOwnProperty("roles")
    ) {
      return next();
    }

    const api = action.api;

    // try to get the logged user
    const { user } = await api.actions.call("auth.checkSession", {
      token: action.params.token
    });
    if (!user) {
      return next(api.config.entrust.errors.noUserLogged);
    }

    if (!actionDef.meta.roles.includes(user.role.slug)) {
      return next(api.config.entrust.errors.userNotAuthorized);
    }

    return next();
  }
};
