import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

describe("Testing App component", () => {
  it("Should match", () => {
    expect(
      shallow(<App currentUser={null} checkUserSession={() => null} />)
    ).toMatchSnapshot();
  });
});
