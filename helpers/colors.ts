export const makeShadowColor = (shadowColor: string) => {
  const pattern = /\(([^)]+)\)/;
  const values = shadowColor.match(pattern)?.pop()?.split(",");

  values?.push(" .15");

  return `hsla(${values?.join()})`;
};
