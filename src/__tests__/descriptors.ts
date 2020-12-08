import { Numeric, NumericMN, DateFormat } from "../descriptors";

describe("Numeric", () => {
  test("add 0", () => {
    const obj = { test: 10 };

    Object.defineProperty(obj, "test", Numeric(4));

    obj.test = 123;
    expect(obj.test).toEqual("0123");
  });

  test("move -", () => {
    const obj = { test: 10 };
    Object.defineProperty(obj, "test", Numeric(4));

    obj.test = -12;
    expect(obj.test).toEqual("-012");
  });

  test("delete fraction part", () => {
    const obj = { test: 10 };
    Object.defineProperty(obj, "test", Numeric(4));

    obj.test = -12.12;
    expect(obj.test).toEqual("-012");
  });
});

describe("NumericMN", () => {
  test("add 0", () => {
    const obj = { test: 10 };
    Object.defineProperty(obj, "test", NumericMN(4, 3));

    obj.test = 123.456;
    expect(obj.test).toEqual("0123.456");

    obj.test = 123;
    expect(obj.test).toEqual("0123.000");

    obj.test = 56.01;
    expect(obj.test).toEqual("0056.010");

    Object.defineProperty(obj, "test", NumericMN(6, 2));

    obj.test = 123456.7;
    expect(obj.test).toEqual("123456.70");

    obj.test = 123;
    expect(obj.test).toEqual("000123.00");

    obj.test = 56.01;
    expect(obj.test).toEqual("000056.01");

    Object.defineProperty(obj, "test", NumericMN(15, 2));

    obj.test = 123456789012345.7;
    expect(obj.test).toEqual("123456789012345.70");

    obj.test = 123;
    expect(obj.test).toEqual("000000000000123.00");

    obj.test = 56.01;
    expect(obj.test).toEqual("000000000000056.01");
  });
});

describe("DateFormat", () => {
  test("ISO string", () => {
    const obj = { test: new Date().toISOString() };
    Object.defineProperty(obj, "test", DateFormat());

    const date = new Date().toISOString();
    obj.test = date;
    expect(obj.test).toEqual(date.slice(0, 10).replace(/-/g, ""));
  });

  test("Date object", () => {
    const obj = { test: new Date() };
    Object.defineProperty(obj, "test", DateFormat());

    const date = new Date();
    obj.test = date;
    expect(obj.test).toEqual(
      date
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, "")
    );
  });

  test("No Value", () => {
    const obj = { test: "" };
    Object.defineProperty(obj, "test", DateFormat());

    obj.test = "No Value";
    expect(obj.test).toEqual("No Value");
  });
});
