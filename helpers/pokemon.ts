export const formatId = (number: number, howManyZeros: number) => {
  return ("000000000" + number.toString()).slice(-howManyZeros);
};
