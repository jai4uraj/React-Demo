import React, {Component} from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import TestUtils from 'react/lib/react-addons-test-utils';
import Artist from '../src/Artist';



var TestUtils = React.addons.TestUtils;

describe('Artist', () => {
    var component;

    beforeEach( () => {
        component = TestUtils.renderIntoDocument(<Artist name="Dhananjay"/>)
    });

    it("Should display the correct Artist Name", () => {
        expect(component.getDOMNode().textContent).toMatch(/Artist name: Dhananjay K/);
    });

});