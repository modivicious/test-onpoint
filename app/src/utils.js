export const getElementDimensions = (ref) => {
  const width = ref.current.clientWidth;
  const height = ref.current.clientHeight;
  return { width, height };
};
