// Vendors
import axios from "axios";
// Handlers
import RangeHandlers from "../range.handlers";

jest.mock("axios");

describe("Range / Event Handlers", () => {
  const params = {
    setValue: jest.fn(),
    value: "",
  };
  const eventHandlers = RangeHandlers(params);

  beforeEach(() => jest.clearAllMocks());

  it("onChange range", () => {
    const newValue = [1, 5000];
    const event = jest.fn();
    eventHandlers.handleChange(event, newValue);
    expect(params.setValue).toHaveBeenCalled();
  });
});
