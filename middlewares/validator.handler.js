const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    //js closure
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
