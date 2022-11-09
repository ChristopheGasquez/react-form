import { VALIDATOR_NAME } from '../constants/validator-key.jsx';

export default function required() {
  return function required(value) {
    required.key = VALIDATOR_NAME.REQUIRED;
    required.message = `Required field`;

    return !Boolean(value) ? { error: VALIDATOR_NAME.REQUIRED } : false;
  };
}
