const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).json({ msg: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decoded.userId };
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};