export const makeShadowColor = (shadowColor: string, opacity: number) => {
  const pattern = /\(([^)]+)\)/;
  const values = shadowColor.match(pattern)?.pop()?.split(",");

  values?.push(opacity.toString());

  return `hsla(${values?.join()})`;
};

export const changeOpacity = (backgroundColor: string, opacity: number) => {
  const pattern = /\(([^)]+)\)/;
  const values = backgroundColor.match(pattern)?.pop()?.split(",");

  values?.push(opacity.toString());

  return `hsla(${values?.join()})`;
};
