let api = null;

const users = {
  admin: {
    id: null,
    email: "user1@example.com",
    password: "test123456",
  },
  nonAdmin: {
    id: null,
    email: "user2@example.com",
    password: "test123456",
  },
};

const adminRole = {
  id: null,
  name: "Admin Role",
  slug: "admin",
  permissions: [],
};

const createTemporaryUsers = async () => {
  const User = api.models.get("user");
  const Role = api.models.get("role");

  // Create test rules
  adminRole.id = (await Role.create(adminRole)).id;

  // Create temporary users
  users.admin.id = (await User.create(users.admin)).id;
  users.nonAdmin.id = (await User.create(users.nonAdmin)).id;
};

describe("Entrust: isRole", () => {
  before(done => {
    engine.start(async (_, a) => {
      api = a;

      await createTemporaryUsers();
      done();
    });
  });

  after(async () => {
    return new Promise(resolve => engine.stop(resolve));
  });

  it("returns true when the user match's with the role", async () => {
    const { hasRole } = await api.actions.call("entrust.isRole", {
      user: users.admin.id,
      role: "admin",
    });
    should(hasRole).be.true;
  });

  it("returns false when the user doesn't match the role", async () => {
    const { hasRole } = await api.actions.call("entrust.isRole", {
      user: users.admin.id,
      role: "superUser",
    });
    should(hasRole).be.false;
  })
});
