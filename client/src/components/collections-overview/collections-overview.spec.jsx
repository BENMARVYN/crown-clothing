import React from "react";
import { shallow } from "enzyme";
import { CollectionsOverview } from "./collections-overview.component";

let mockCollections;
beforeEach(() => {
  mockCollections = [];
});

describe("Testing CollectionsOverview component", () => {
  it("Should match snapshot", () => {
    expect(
      shallow(<CollectionsOverview collections={mockCollections} />)
    ).toMatchSnapshot();
  });
});
