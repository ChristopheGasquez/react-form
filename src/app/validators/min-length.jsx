export default function minLength(min) {
  return (value) => {
    return (value && value.length < min)
      ? {
        error: 'minLength',
        expected: min,
        actual: value?.length
      }
      : false;
  };
}
