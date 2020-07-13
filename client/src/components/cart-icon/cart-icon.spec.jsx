import React from "react";
import { shallow } from "enzyme";
import { CartIcon } from "./cart-icon.component";

let mockToggleCartHidden;

beforeEach(() => {
  mockToggleCartHidden = jest.fn();
});

describe("Testing CartIcon component", () => {
  it("Should match snapshot", () => {
    expect(
      shallow(
        <CartIcon toggleCartHidden={mockToggleCartHidden} itemCount={0} />
      )
    ).toMatchSnapshot();
  });
});
