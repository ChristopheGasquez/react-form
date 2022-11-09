import { VALIDATOR_NAME } from '../constants/validator-key.jsx';

export default function minLength(min) {
  return function minLength(value) {
    minLength.key = VALIDATOR_NAME.MIN_LENGTH;
    minLength.message = `Min length: ${ min } (${ value?.length }/${ min })`;

    return (value && value.length < min)
      ? {
        error: VALIDATOR_NAME.MIN_LENGTH,
        expected: min,
        actual: value?.length
      }
      : false;
  };
}
