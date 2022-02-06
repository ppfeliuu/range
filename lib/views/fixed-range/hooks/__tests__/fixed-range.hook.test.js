/**
 * @jest-environment jsdom
 */
// Vendors
import React from "react";
import { mount } from "enzyme";
import configureNewAdapter from "../../../../setupTests";
// Hooks
import useRangeHook from "../fixed-range.hook";

// Handlers
import RangeHandlers from "../../handlers/fixed-range.handlers";
// Module mocks
jest.mock("../../handlers/fixed-range.handlers");

describe("Fixed Range / Hook", () => {
  configureNewAdapter();

  RangeHandlers.mockReturnValue({
    loadData: jest.fn(),
  });

  let HookData = null;
  const TestComponent = () => {
    HookData = useRangeHook();
    return null;
  };

  it("should provide hook data", () => {
    const CONTEXT_DATA = ["marks", "min", "max"];
    mount(<TestComponent />);
    CONTEXT_DATA.forEach((data) => expect(HookData).toHaveProperty(data));
  });
});
