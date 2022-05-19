const logoutController = (req, res) => {
  res.clearCookie("id").json("you are loged out");
};

module.exports = logoutController;
