const { Errors } = require('../errors');

const validatePicture = async (req, res, next) => {
  try {
    const picture = req.file;
    if (!picture) throw new Errors('The picture field is required', 400);

    next();
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = validatePicture;
