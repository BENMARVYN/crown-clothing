import React from "react";
import { shallow } from "enzyme";
import { CollectionItem } from "./collection-item.component";

let mockProps;
beforeEach(() => {
  mockProps = {
    item: {
      name: "Test Item",
      price: 399,
      imageUrl: "https://image.png",
    },
    addItem: jest.fn(),
  };
});

describe("Testing CollectionItem component", () => {
  it("Should match snapshot", () => {
    expect(
      shallow(
        <CollectionItem item={mockProps.item} addItem={mockProps.addItem} />
      )
    ).toMatchSnapshot();
  });
});
