import React, {Component} from 'react';
import ReactTestUtils from 'react-dom/test-utils';
//import TestUtils from 'react-addons-test-utils';

import Artist from '../src/Artist';

//var ReactTestUtils = React.addons.TestUtils;

describe('Artist', () => {

/*    it("Should display the correct Artist Name", () => {
        var renderer = TestUtils.createRenderer();
        var label = renderer.render(<Artist name="Dhananjay" />);
        //console.log("props = ",label.props.children[1]);
        expect(label.props.children[1]).toBe("Dhananjay");
    });

    it("Should display the incorrect Artist Name", () => {
        var renderer = TestUtils.createRenderer();
        var label = renderer.render(<Artist name="Dhananjay123" />);
        //console.log("props = ",label.props.children[1]);
        expect(label.props.children[1]).toBe("Dhananjay123");
    });

    it("Should display the add result", () => {
        var renderer = TestUtils.createRenderer();
        var label = renderer.render(<Artist x="2" y="2" />);
        //var result = label.add(2,2);
        console.log("props = ",label.props.children[1]);
        expect(label.props.children[1]).toBe(4);
    });*/

    it("Should display the add result", () => {
        var label = ReactTestUtils.renderIntoDocument(<Artist x="2" y="2"/>);
        var addResult = label.add(2,2);
        console.log("label = "+addResult);
        //expect(label.state.addresult).toBe(4);
        expect(addResult).toBe(4);
    });

    it("Should display the substract result", () => {
        var label = ReactTestUtils.renderIntoDocument(<Artist x="2" y="2"/>);
        var subsResult = label.subtract(2,2);
        console.log("label = "+subsResult);
        //expect(label.state.subsresult).toBe(0);
        expect(subsResult).toBe(0);
    });

});