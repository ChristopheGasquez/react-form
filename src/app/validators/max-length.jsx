import { VALIDATOR_NAME } from '../constants/validator-key.jsx';

export default function maxLength(max) {
  return function maxLength(value) {
    maxLength.key = VALIDATOR_NAME.MAX_LENGTH;
    maxLength.message = `Max length: ${ max } (${ value?.length }/${ max })`;

    return (value && value.length > max)
      ? {
        error: VALIDATOR_NAME.MAX_LENGTH,
        expected: max,
        actual: value?.length
      }
      : false;
  };
}
