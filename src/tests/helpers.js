import { expect, should, assert, use as chaiUse } from "chai";
import chaiInterface from "chai-interface";
import { sinon, spy } from "sinon";
import { mount, render, shallow } from "enzyme";
/**
 * We need to import Highcharts so that it
 * does not throw an error while running tests
 * */
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

chaiUse(chaiInterface);

global.expect = expect;
global.should = should();
global.assert = assert;
global.sinon = sinon;
global.spy = spy;

global.mount = mount;
global.render = render;
global.shallow = shallow;