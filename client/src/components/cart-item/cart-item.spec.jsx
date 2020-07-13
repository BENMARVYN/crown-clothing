import React from "react";
import { shallow } from "enzyme";
import { CartItem } from "./cart-item.component";

let mockItem;
beforeEach(() => {
  mockItem = {
    imageUrl: "https://fakeimage.com/img.png",
    price: 399,
    name: "Fake Item",
    quantity: 1,
  };
});

describe("Testing CartItem", () => {
  it("Should match snapshot", () => {
    expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
  });
});
