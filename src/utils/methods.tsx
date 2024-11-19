export const debounce = <Args extends unknown[], Return>(
  func: (...args: Args) => Return,
  delay: number
) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Args): void => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
