// Vendors
import axios from "axios";
// Handlers
import { getNormal, getFixed } from "../api";

jest.mock("axios");

describe("Fixed Range / Event Handlers", () => {
  beforeEach(() => jest.clearAllMocks());

  it("fetches successfully data from an API", async () => {
    const values = [1, 100];

    axios.get.mockImplementationOnce(() => Promise.resolve(values));

    await expect(getNormal()).resolves.toEqual(values);
  });

  it("fetches successfully data from an API", async () => {
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

    axios.get.mockImplementationOnce(() => Promise.resolve(values));

    await expect(getFixed()).resolves.toEqual(values);
  });
});
