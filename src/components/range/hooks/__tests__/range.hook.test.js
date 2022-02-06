/**
 * @jest-environment jsdom
 */
// Vendors
import React from "react";
import { mount } from "enzyme";
import configureNewAdapter from "../../../../setupTests";
// Hooks
import useRangeHook from "../range.hook";

// Handlers
import RangeHandlers from "../../handlers/range.handlers";
// Module mocks
jest.mock("../../handlers/range.handlers");

describe("Range Component / Hook", () => {
  configureNewAdapter();

  RangeHandlers.mockReturnValue({
    handleChange: jest.fn(),
  });

  const props = {
    min: "",
    max: "",
  };

  let HookData = null;
  const TestComponent = () => {
    HookData = useRangeHook(props);
    return null;
  };

  it("should provide hook data", () => {
    const CONTEXT_DATA = ["handleChange", "value"];
    mount(<TestComponent />);
    CONTEXT_DATA.forEach((data) => expect(HookData).toHaveProperty(data));
  });
});
