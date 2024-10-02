"use strict";

export default {
  event: "identify.beforeSearchUsers",
  description: `Populate the role when search users`,

  run(api, params, next) {
    params.search.populate("role");
    next();
  },
};
