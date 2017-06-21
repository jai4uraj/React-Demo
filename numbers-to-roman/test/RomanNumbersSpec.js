/**
 * Created by Dhananjay on 6/21/2017.
 */
import React, {Component} from 'react';
/*import ReactTestUtils from 'react-addons-test-utils';*/
import ReactTestUtils from 'react-dom/test-utils';

import RomanNumbers from '../src/RomanNumbers';

describe("Roman Numbers", function () {
    it("Should check blank value to return false", function () {
        var label = ReactTestUtils.renderIntoDocument(<RomanNumbers num=""/>);
        var result = label.isValidNumber('');
        expect(result).toBe(false);
    });

    it("Should check negative value and 0 to return false", function () {
        var label = ReactTestUtils.renderIntoDocument(<RomanNumbers num="-10"/>);
        var result = label.isValidNumber('-10');
        expect(result).toBe(false);
    });

    it("Should check 0 to return false", function () {
        var label = ReactTestUtils.renderIntoDocument(<RomanNumbers num="0"/>);
        var result = label.isValidNumber('0');
        expect(result).toBe(false);
    });

    it("Should check character ABC to return false", function () {
        var label = ReactTestUtils.renderIntoDocument(<RomanNumbers num="abc"/>);
        var result = label.isValidNumber('abc');
        expect(result).toBe(false);
    });

    it("Should convert number to Roman Numerals", function () {
        var label = ReactTestUtils.renderIntoDocument(<RomanNumbers num="1"/>);
        expect(label.romanNumber(1)).toEqual('I');
        expect(label.romanNumber(100)).toEqual('C');
        expect(label.romanNumber(40)).toEqual('XL');
        expect(label.romanNumber(6)).toEqual('VI');
        /*var result = label.romanNumber(1);
        expect(result).toEqual('I');*/
    });

});