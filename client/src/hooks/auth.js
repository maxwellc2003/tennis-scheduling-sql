const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    return false;
  } else {
    return true;
  }
};  

module.exports = withAuth;
