export type FiledType = {
  name: string;
  descriptor: PropertyDescriptor;
};

export const objectCreator = <T>(fields: FiledType[]) => (): T => {
  const obj: any = {};

  fields.forEach(field =>
    Object.defineProperty(obj, field.name, field.descriptor)
  );

  obj.toString = () => fields.map(field => obj[field.name]).join("");

  return obj;
};
