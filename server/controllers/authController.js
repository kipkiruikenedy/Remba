//login
const login = (req, res) => {
  res.send("login logic");
};

//adduser
const adduser = (req, res) => {
  res.send("adduser logic");
};

const viewAllUsers = (req, res) => {
  res.send("all users logic");
};
const newCustomer = (req, res) => {
  res.send("newCustomer logic");
};

module.exports = {
  login,
  adduser,
  newCustomer,
  viewAllUsers,
};
