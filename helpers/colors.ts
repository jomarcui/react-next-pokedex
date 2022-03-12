export const makeShadowColor = (shadowColor: string, opacity: number) => {
  const pattern = /\(([^)]+)\)/;
  const values = shadowColor.match(pattern)?.pop()?.split(",");

  values?.push(opacity.toString());

  return `hsla(${values?.join()})`;
};
