"use strict";

// constant with the inputs declaration
const inputsDeclaration = {};

// constant with the edit input declaration
const editInputDeclaration = JSON.parse(JSON.stringify(inputsDeclaration));
editInputDeclaration.id = { required: true };

export default [
  {
    name: "entrust.createRole",
    description: "Create a new Role",

    inputs: inputsDeclaration,

    run(api, action, next) {
      api.models
        .get("role")
        .create(action.params)
        .then((model) => {
          action.response.role = model;
          next();
        });
    },
  },
  {
    name: "entrust.getRoles",
    description: "Get all Roles",

    run(api, action, next) {
      api.models
        .get("role")
        .find({})
        .catch((error) => {
          next(error);
        })
        .then((resources) => {
          action.response.roles = resources;
          next();
        });
    },
  },
  {
    name: "entrust.getRole",
    description: "Get a Role",

    inputs: {
      id: { required: true },
    },

    run(api, action, next) {
      api.models
        .get("role")
        .findOne({ id: action.params.id })
        .catch((error) => {
          next(error);
        })
        .then((resource) => {
          action.response.role = resource;
          next();
        });
    },
  },
  {
    name: "entrust.editRole",
    description: "Edit a Role",

    inputs: editInputDeclaration,

    run(api, action, next) {
      // search for the Role and update it
      api.models
        .get("role")
        .update({ id: action.params.id }, action.params)
        .catch((error) => {
          next(error);
        })
        .then((model) => {
          action.response.role = model;
          next();
        });
    },
  },
  {
    name: "entrust.removeRole",
    description: "Remove a Role",

    inputs: {
      id: { required: true },
    },

    run(api, action, next) {
      // search and remove the model
      api.models
        .get("role")
        .destroy({ id: action.params.id })
        .catch((error) => {
          next(error);
        })
        .then(() => {
          next();
        });
    },
  },
];
