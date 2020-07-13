import React from "react";
import { shallow } from "enzyme";
import Spinner from "./spinner.component";

describe("Testing Spinner component", () => {
  it("Should match snapshot", () => {
    expect(shallow(<Spinner />)).toMatchSnapshot();
  });
});
