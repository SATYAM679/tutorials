export const createUser = (req, res) => {
  const user = req.body;
  const id = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  const newUser = { ...user, id };
  users.push(newUser);
  res.send(`User ${newUser.firstName} is added`);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`user with ${id} is deleted from db.`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  let { firstName, lastName, role, zombieKillCount, humanKillCount } = req.body;

  let user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (role) {
    user.role = role;
  }
  if (zombieKillCount) {
    user.zombieKillCount = zombieKillCount;
  }

  if (humanKillCount) {
    user.humanKillCount = humanKillCount;
  }
  res.send(user);
};
