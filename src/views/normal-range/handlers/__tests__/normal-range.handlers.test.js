// Vendors
import axios from "axios";
// Handlers
import RangeHandlers from "../normal-range.handlers";
// Api
import { getNormal } from "../../../../api/api";

jest.mock("axios");
jest.mock("../../../../api/api");

describe("Normal Range / Event Handlers", () => {
  const params = {
    setValue: jest.fn(),
    setMaxValue: jest.fn(),
    setMinValue: jest.fn(),
  };
  const eventHandlers = RangeHandlers(params);

  beforeEach(() => jest.clearAllMocks());

  it("should load data 1", async () => {
    const spy = jest
      .spyOn(eventHandlers, "loadData")
      .mockImplementationOnce(() => {
        return Promise.resolve([]);
      });
    eventHandlers.loadData();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
