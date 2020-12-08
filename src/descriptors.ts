export type NumericType = number | string;

export const Numeric = (length: number, defaultValue?: string) => {
  let value: NumericType;

  const setter = (newValue: NumericType) => {
    value = String(newValue || 0).split(".")[0];
    if (value.length > length) value = value.slice(0, length);
    else {
      if (value[0] == "-")
        value = `-${value.slice(1).padStart(length - 1, "0")}`;
      else value = value.padStart(length, "0");
    }

    return value;
  };

  setter(defaultValue);

  return {
    set: setter,
    get: () => value,
    enumerable: true
  };
};

export const NumericMN = (
  Mlength: number,
  Nlength: number,
  defaultValue?: any
) => {
  let value: NumericType;

  const setter = (newValue: NumericType) => {
    let [m, n] = String(newValue || 0).split(".");
    m = m || "0";
    n = n || "0";

    if (m.length > Mlength) m = m.slice(0, Mlength);
    else {
      if (m[0] == "-") m = `-${m.slice(1).padStart(Mlength - 1, "0")}`;
      else m = m.padStart(Mlength, "0");
    }

    if (n.length > Nlength) n = n.slice(0, Nlength);
    else {
      n = n.padEnd(Nlength, "0");
    }

    value = `${m}.${n}`;
    return value;
  };

  setter(defaultValue);

  return {
    set: setter,
    get: () => value,
    enumerable: true
  };
};

export type CharacterType = string;

export const Character = (length: number, defaultValue?: string) => {
  let value: CharacterType;

  const setter = (newValue: CharacterType) => {
    value = String(newValue || "");
    if (value.length > length) value = value.slice(0, length);
    else {
      value = value.padEnd(length);
    }

    return value;
  };

  setter(defaultValue);

  return {
    set: setter,
    get: () => value,
    enumerable: true
  };
};

export type DateFormatType = Date | string;

export const DateFormat = (defaultValue?: string) => {
  let value: DateFormatType;

  const setter = (newValue: DateFormatType) => {
    value = newValue instanceof Date ? newValue.toISOString() : newValue;

    if (value != void 0 && value.length >= 8)
      value = value.slice(0, 10).replace(/-/g, "");
    else value = "        ";

    return value;
  };

  setter(defaultValue);

  return {
    set: setter,
    get: () => value,
    enumerable: true
  };
};
