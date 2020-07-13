import { shallow } from "enzyme";
import NoMatchPage from "./404.component";
import React from "react";

describe("Testing 404 component", () => {
    it("Should match snapshot", () => {
        expect(shallow(<NoMatchPage />)).toMatchSnapshot()
    })
})