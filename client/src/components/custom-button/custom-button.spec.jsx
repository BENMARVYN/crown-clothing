import React from "react";
import { shallow } from "enzyme";
import CustomButton from "./custom-button.component";

describe("Testing CustomButton", () => {
  it("Should match snapshot", () => {
    expect(shallow(<CustomButton children="Test" />)).toMatchSnapshot();
  });
});
