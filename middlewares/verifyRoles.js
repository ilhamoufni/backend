const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.role) res.sendStatus(401);

    console.log(req.role);

    const roles = [...allowedRoles];

    const result = roles.includes(req.role);

    if (!result) res.sendStatus(401);

    next();
  };
};

module.exports = verifyRoles;
