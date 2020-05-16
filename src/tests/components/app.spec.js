import React from "react";
import { render } from "@testing-library/react";

import App from "../../components/App";

describe("<App />", () => {
    it("It renders App without crashing", () => {
        let wrapper = mount( <App />);
        expect(wrapper.find(".white-key")).to.have.length(7);
        expect(wrapper.find(".black-key")).to.have.length(5);
    });

});