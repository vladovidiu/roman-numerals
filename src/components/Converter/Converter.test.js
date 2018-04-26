import React from "react";

import Converter from "./Converter";
import {mount} from "enzyme";

describe("Converter test suite", () => {
    const errorText = "Check input's validity.";
    it("should raise an error", () => {
        const wrapper = mount(<Converter />);
        const input = wrapper.find(".form-control");
        input.simulate("change", {target: {value: "asv"}});

        expect(wrapper.state().error).toBe(errorText);
    });

    it("should not raise any errors", () => {
        const wrapper = mount(<Converter />);
        const input = wrapper.find(".form-control");
        input.simulate("change", {target: {value: "XX"}});

        expect(wrapper.state().error).toBe("");
    });

    it("should not raise any errors", () => {
        const wrapper = mount(<Converter />);
        const input = wrapper.find(".form-control");
        input.simulate("change", {target: {value: "123"}});

        expect(wrapper.state().error).toBe("");
    });
});
