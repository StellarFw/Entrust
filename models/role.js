"use strict";

export default {
  attributes: {
    /**
     * Human readable name for the role.
     */
    name: {
      type: "string",
      required: true,
    },

    /**
     * Unique identifier for the role.
     *
     * This is the recommended way to refer to a group.
     */
    slug: {
      type: "string",
      required: true,
      autoMigrations: {
        unique: true,
      },
    },

    /**
     * Optional list of permissions associated to the role.
     *
     * This can be used to a more fine grain permission control and
     * to create a base set of permissions for a group of users.
     */
    permissions: {
      type: "json",
      defaultsTo: [],
    },

    /**
     * Metadata for the role.
     */
    meta: {
      type: "json",
      defaultsTo: {},
    },
  },
};
