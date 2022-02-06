/**
 * @jest-environment jsdom
 */
// Vendors
import React from "react";
import { mount } from "enzyme";
import configureNewAdapter from "../../../../setupTests";
// Hooks
import useRangeHook from "../normal-range.hook";
// Handlers
import RangeHandlers from "../../handlers/normal-range.handlers";
// Module mocks
jest.mock("../../handlers/normal-range.handlers");

describe("Normal Range / Hook", () => {
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
    const CONTEXT_DATA = ["value", "min", "max"];
    mount(<TestComponent />);
    CONTEXT_DATA.forEach((data) => expect(HookData).toHaveProperty(data));
  });
});
