import React, {Component} from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import TestUtils from 'react-addons-test-utils';

import Artist from '../src/Artist';

//var ReactTestUtils = React.addons.TestUtils;

describe('Artist', () => {

    it("Should display the correct Artist Name", () => {
        var renderer = TestUtils.createRenderer();
        var label = renderer.render(<Artist name="Dhananjay" />);
        console.log("Artist props = ",label.props.children[1]);
        expect(label.props.children[1]).toBe("Dhananjay");
    });

    it("Should display the incorrect Artist Name", () => {
        var renderer = TestUtils.createRenderer();
        var label = renderer.render(<Artist name="Dhananjay123" />);
        console.log("Your props = ",label.props.children[1]);
        expect(label.props.children[1]).toBe("Dhananjay123");
    });

    /*it("Should display the add result", () => {
        var renderer = TestUtils.createRenderer();
        var label = renderer.render(<Artist x="2" y="2" />);
        //var result = label.add(2,2);
        console.log("props = ",label.props.children[1]);
        expect(label.props.children[1]).toBe(4);
    });*/

    it("Should display the add result", () => {
        var label = ReactTestUtils.renderIntoDocument(<Artist x="2" y="2"/>);
        var addResult = label.add(2,2);
        console.log("Add = "+addResult);
        expect(addResult).toBe(4);
    });

    it("Should display the substract result", () => {
        var label = ReactTestUtils.renderIntoDocument(<Artist x="2" y="2"/>);
        var subsResult = label.subtract(2,2);
        console.log("Substract = "+subsResult);
        expect(subsResult).toBe(0);
    });

    it("should multiply two numbers together result 10x2 =20 ", () => {
        var label = ReactTestUtils.renderIntoDocument(<Artist x="10" y="2"/>);
        var multiplyResult = label.multiply(10,2);
        console.log("Multiply = "+multiplyResult);
        expect(multiplyResult).toBe(20);
    });

    it("should divide correctly result 10/2 =2 ", () => {
        var label = ReactTestUtils.renderIntoDocument(<Artist x="10" y="2"/>);
        var divideResult = label.divide(10,2);
        console.log("Divide = "+divideResult);
        expect(divideResult).toBe(5);
    });

    it("should return 0 when dividing by 0 result 10/0 =0 ", () => {
        var label = ReactTestUtils.renderIntoDocument(<Artist x="10" y="0"/>);
        var divideResult = label.divide(10,0);
        console.log("Divide 0 = "+divideResult);
        expect(divideResult).toBe(0);
    });

});