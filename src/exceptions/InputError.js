const ClientError = require('../exceptions/ClientError');

class InputError extends ClientError {
  constructor(message) {
    super(message);
    this.name = 'InputError';
  }
}

module.exports = InputError;
