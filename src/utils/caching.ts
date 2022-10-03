const generateKey = (args: unknown[]) =>
  args.map((arg) => `${JSON.stringify(arg)}`).join('|');
const cache2 = Object.create(null);

/**
 *Caching function
 *
 * @param {*} args
 */

export const caching = (fn: any) => {
  return (...args: any) => {
    const key = generateKey(args);
    const value = cache2[key];

    if (value) {
      return value;
    }

    const result = fn(...args);
    cache2[key] = result;

    return result;
  };
};
