import ClientError from './ClientError.js';

class InputError extends ClientError {
  constructor(message) {
    super(message);
    this.name = 'InputError';
  }
}

export { InputError }; 