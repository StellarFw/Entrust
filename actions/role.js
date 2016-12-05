'use strict'

// constant with the inputs declaration
const inputsDeclaration = {}

// constant with the edit input declaration
const editInputDeclaration = JSON.parse(JSON.stringify(inputsDeclaration))
editInputDeclaration._id = { required: true }

module.exports = [{
  name: 'authorize.createRole',
  description: 'Create a new Role',

  inputs: inputsDeclaration,

  run(api, action, next) {
    // create a new model instance
    var newModel = new(api.models.get('role'))(action.params)

    // save it
    newModel.save()
      .catch(error => { next(error) })
      .then(model => {
        // append the new model on the response object
        action.response.role = newModel

        // finish the action execution
        next()
      })
  }
}, {
  name: 'authorize.getRoles',
  description: 'Get all Roles',

  run(api, action, next) {
    api.models.get('role')
      .find({})
      .catch(error => { next(error) })
      .then(resources => {
        action.response.roles = resources
        next()
      })
  }
}, {
  name: 'authorize.getRole',
  description: 'Get a Role',

  inputs: {
    _id: { required: true }
  },

  run(api, action, next) {
    // search for the request post on the DB
    api.models.get('role')
      .findById(action.params._id)
      .catch(error => { next(error) })
      .then(resource => {
        // append the model to the response object
        action.response.role = resource

        // finish the action execution
        next()
      })
  }
}, {
  name: 'authorize.editRole',
  description: 'Edit a Role',

  inputs: editInputDeclaration,

  run(api, action, next) {
    // search for the Role and update it
    api.models.get('role')
      .findByIdAndUpdate(action.params._id, action.params, { upsert: true, new: true })
      .catch(error => { next(error) })
      .then(model => {
        // append the updated model to the response object
        action.response.role = model

        // finish the action execution
        next()
      })
  }
}, {
  name: 'authorize.removeRole',
  description: 'Remove a Role',

  inputs: {
    _id: { required: true }
  },

  run(api, action, next) {
    // search and remove the model
    api.models.get('role')
      .findByIdAndRemove(action.params._id)
      .catch(error => { next(error) })
      .then(() => { next() })
  }
}]
