import React from 'react';
import { mount } from 'enzyme';
import { render } from "@testing-library/react";
import BlackKey from "../../components/blackkeys";


describe("<BlackKey />", () => {

    it("ensure renders the blackkeys", () => {

        const renderedKey = mount(<BlackKey />);
        expect(renderedKey.find(".black-key")).to.have.length(1);
    });

});