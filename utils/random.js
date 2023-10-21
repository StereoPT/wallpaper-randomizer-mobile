export const random = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export const choice = (array) => {
  const arrayLength = array.length;
  const randomIndex = random(0, arrayLength);

  return array[randomIndex];
};
