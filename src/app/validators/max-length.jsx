export default function maxLength(max) {
  return (value) => {
    return (value && value.length > max)
      ? {
        error: 'maxLength',
        expected: max,
        actual: value?.length
      }
      : false;
  };
}
