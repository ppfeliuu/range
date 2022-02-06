// Vendors
import axios from "axios";
// Handlers
import RangeHandlers from "../fixed-range.handlers";

jest.mock("axios");

describe("Fixed Range / Event Handlers", () => {
  const params = {
    setValue: jest.fn(),
    setMaxValue: jest.fn(),
    setMinValue: jest.fn(),
  };
  const eventHandlers = RangeHandlers(params);

  beforeEach(() => jest.clearAllMocks());

  it("Should load data", async () => {
    eventHandlers.loadData();
    expect(axios.get).toHaveBeenCalledWith(
      `https://demo1429763.mockable.io/fixed`
    );
  });
});
