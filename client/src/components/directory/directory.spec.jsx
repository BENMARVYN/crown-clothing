import React from "react";
import { shallow } from "enzyme";
import Directory from "./directory.component";

describe("Testing Directory component", () => {
  const mockSections = [
    {
      id: 1,
      title: "test titile",
      imageUrl: "https://testimg.png",
      size: "lg",
      history: "None",
      linkUrl: "https://muriuki.dev",
      match: "None",
    },
  ];
  it.skip("Should match snapshot", () => {
    expect(shallow(<Directory sections={mockSections} />)).toMatchSnapshot();
  });
});
