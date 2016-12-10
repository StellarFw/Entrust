# Entrust

**Attention: this is a working in progress, you can use this is production but you must take attention because this can not perform as expected!**

Entrust is an authorization solution for Stellar made to bring roles and permissions to the platform.

## Composition

### Actions

**entrust.createRole**

Create a new role.

- Inputs
  - **`name`**: role name
  - **`slug`**: role slug
- Output
  - **`role`**: the new created model

**entrust.promoteUser**

Promote a user to a given role.

- Inputs
  - **`user`**: identifier of the user to promote
  - **`role`**: slug of the role to be attributed to the user
- Output
  - **`user`**: updated user model

> TODO: finish the documentation
