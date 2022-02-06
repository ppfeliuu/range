/**
 * @jest-environment jsdom
 */

// Vendors
import React from "react";
import { shallow, mount } from "enzyme";
import configureNewAdapter from "../../../setupTests";
import Range from "../range.component";

configureNewAdapter();

describe("Fixed test", () => {
  let wrapper;

  it("Fixed reange test", () => {
    wrapper = shallow(<Range />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("Fragment").exists()).toBe(false);
  });
});
