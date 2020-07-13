import React from "react";
import { shallow } from "enzyme";
import { CheckoutItem } from "./checkout-item.component";

let mockProps;
beforeEach(() => {
  mockProps = {
    cartItem: {
      imageUrl: "https://img.png",
      name: "Test Item",
      quantity: 10,
      price: 399,
    },
    dispatch: jest.fn(),
  };
});

describe("Testing CheckoutItem component", () => {
  it("Should match snapshot", () => {
    expect(
      shallow(
        <CheckoutItem
          cartItem={mockProps.cartItem}
          dispatch={mockProps.dispatch}
        />
      )
    ).toMatchSnapshot();
  });
});
