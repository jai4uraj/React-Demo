/**
 * Created by Dhananjay on 6/21/2017.
 */
import React, {Component} from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import RomanToNumber from '../src/RomanToNumber';

describe("Roman To Decimal Number", function () {
    it("Should return false if value is blank", function () {
        var lable = ReactTestUtils.renderIntoDocument(<RomanToNumber/>);
        var result = lable.isValidNumber('');
        expect(result).toBe(false);
    });

    it("Should return false if value is a number '12'", function () {
        var lable = ReactTestUtils.renderIntoDocument(<RomanToNumber/>);
        var result = lable.isValidNumber('12');
        expect(result).toBe(false);
    });

    it("Should return number when value id Roman", function () {
        var lable = ReactTestUtils.renderIntoDocument(<RomanToNumber/>);
        /*var result = lable.romanToNumber('I');
         expect(result).toEqual(1);*/

        expect(lable.romanToNumber('I')).toEqual(1);
        expect(lable.romanToNumber('V')).toEqual(5);
        expect(lable.romanToNumber('X')).toEqual(10);

    });

    it("Should return number when value id Roman II ", function () {
        var lable = ReactTestUtils.renderIntoDocument(<RomanToNumber/>);
        expect(lable.romanToNumber('II')).toEqual(2);
        expect(lable.romanToNumber('LXXXVII')).toEqual(87);
        expect(lable.romanToNumber('MB')).toEqual(1000);

    });
});