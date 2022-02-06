// Vendors
import React from "react";
import { shallow, mount } from "enzyme";
import configureNewAdapter from "../../../setupTests";
import FixedRange from "../fixed-range.component";

configureNewAdapter();

describe("Fixed test", () => {
  let wrapper;

  it("Fixed reange test", () => {
    wrapper = shallow(<FixedRange />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("Wrapper").exists()).toBe(true);
  });
});
