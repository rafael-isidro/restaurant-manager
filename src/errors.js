class Errors extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

// eslint-disable-next-line
const errorHandler = async (error, req, res, next) => {
  if (error instanceof Errors) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  console.error(error);

  return res.status(500).json({ message: 'Internal server error' });
};

module.exports = {
  Errors,
  errorHandler,
};
