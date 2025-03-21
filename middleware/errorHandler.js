// errorHandler.js

// Middleware to handle errors
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging purposes

  // Send a generic error response
  res.status(500).send({
    message: 'An unexpected error occurred!',
    error: err.message,
  });
};

// Middleware to handle 404 errors (Not Found)
const notFoundHandler = (req, res, next) => {
  res.status(404).send({
    message: 'Resource not found!',
  });
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
