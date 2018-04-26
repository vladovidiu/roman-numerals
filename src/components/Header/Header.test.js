import React from "react";

import Header from "./Header";
import {mount} from "enzyme";

describe("Header test suite", () => {
    it("should display any text passed", () => {
        const text = "Test";
        const wrapper = mount(<Header appName={text} />);
        const a = wrapper.find(".navbar-brand");
        expect(a.text()).toBe("Test");
    });
});
