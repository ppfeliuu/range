import {
  getLastArrItemNormal,
  getLastArrItemFixed,
  getFirstArrItemFixed,
  getFirstArrItemNormal,
} from "../utils";

describe("Utils", () => {
  beforeEach(() => {});

  it("should return last item from array", () => {
    const values = ["1", "100"];
    expect(getLastArrItemNormal(values)).toBe(100);
    expect(getFirstArrItemNormal(values)).toBe(1);
  });

  it("should return last item from array", () => {
    const values = [
      {
        value: 1.99,
      },
      {
        value: 5.99,
      },
      {
        value: 10.99,
      },
      {
        value: 30.99,
      },
      {
        value: 50.99,
      },
      {
        value: 70.99,
      },
    ];
    expect(getLastArrItemFixed(values)).toBe(70.99);
    expect(getFirstArrItemFixed(values)).toBe(1.99);
  });
});
