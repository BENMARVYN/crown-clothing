import React from "react";
import { shallow } from "enzyme";
import { CollectionPreview } from "./collection-preview.component";

let mockData;
beforeEach(() => {
  mockData = {
    title: "Test",
    items: [],
    match: { url: "/test/" },
    history: { push: jest.fn() },
  };
});

describe("Testing CollectionPreview component", () => {
  it("Should match snapshot", () => {
    expect(
      shallow(
        <CollectionPreview
          title={mockData.title}
          items={mockData.items}
          match={mockData.match}
          history={mockData.history}
        />
      )
    ).toMatchSnapshot();
  });
});
