const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/config');

exports.verifyToken = (req, resp, next) => {
  if (req.headers.authorization) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET_KEY, async (err) => {
      if (err) {
        return resp.status(403).send({ code: 403, message: 'Forbidden' });
      }
      return next();
    });
  } else {
    return resp.status(401).send({ code: 401, message: 'Unauthorized' });
  }
};

exports.generateToken = (req, resp) => {
  const generatedToken = jwt.sign('test_payload', SECRET_KEY);
  return resp.status(200).send(generatedToken);
};
