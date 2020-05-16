import React from 'react';
import { mount } from 'enzyme';
import { render } from "@testing-library/react";
import WhiteKey from "../../components/whitekeys";


describe("<WhiteKeys />", () => {
    it("renders the whitekeys", () => {
        const letter = 'c';
        const highlightClass = 'c';

        const renderedKey = mount(<WhiteKey  letter={letter} highlightClass={highlightClass} />);
        expect(renderedKey.find(".c")).to.have.length(1);
    });

});
