module.exports = (req, res, next) => {
  if (req.loggedInUser.role === 'PlayerUser') {
    next();
  } else {
    res.status(401).json({
      message: 'You are not authorize to access this endpoint',
    });
  }
};
