// Vendors
import React from "react";
import { shallow, mount } from "enzyme";
import configureNewAdapter from "../../../setupTests";
import NormalRange from "../normal-range.component";

configureNewAdapter();

describe("Fixed test", () => {
  let wrapper;

  it("Fixed reange test", () => {
    wrapper = shallow(<NormalRange />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("Wrapper").exists()).toBe(true);
  });
});
