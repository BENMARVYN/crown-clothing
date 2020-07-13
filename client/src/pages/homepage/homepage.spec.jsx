import React from "react";
import { shallow } from "enzyme";
import HomePage from "./homepage.component";

describe("Testinf HomePage component", () => {
  it("Should be match snapshot", () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
  });
});
