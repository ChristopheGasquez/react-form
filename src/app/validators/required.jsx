export default function required() {
  return (value) => {
    return !Boolean(value) ? { error: 'required' } : false;
  };
}
