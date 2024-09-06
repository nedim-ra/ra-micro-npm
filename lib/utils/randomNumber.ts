/**
 * Generates a random integer between `min` and `max` (inclusive).
 *
 * @param min - The minimum value (inclusive).
 * @param max - The maximum value (inclusive).
 * @returns A random integer between min and max.
 */
const randomNumber = (min: number, max: number): number => {
  console.log("Hello from lib randomNumber");
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default randomNumber;
