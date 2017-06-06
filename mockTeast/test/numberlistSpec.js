/**
 * Created by User on 6/6/2017.
 */
import React, {Component} from 'react';
import ReacttestUtils from 'react-addons-test-utils';
import NumberList from '../src/NumberList';

describe("NumberList", function () {
    it("number should not blank", function () {
        var label = ReacttestUtils.renderIntoDocument(<NumberList num="" />);
        var result = label.isValidNumber();
        //console.log("Result :- ", result);
        expect(result).toBe(false);
    });

    it("number should not < 0", function () {
        var label = ReacttestUtils.renderIntoDocument(<NumberList num="-10" />);
        var result = label.isValidNumber(-10);
        expect(result).toBe(false);
    });

    it("Should not a float Numabe", function () {
        var label = ReacttestUtils.renderIntoDocument(<NumberList num="5.6" />);
        var result = label.isValidNumber(5.6);
        expect(result).toBe(false);
    });

    it("number should not a string", function () {
        var label = ReacttestUtils.renderIntoDocument(<NumberList num="abcd" />);
        var result = label.isValidNumber("abcd");
        expect(result).toBe(false);
    });

    it("Number should not be any spacial Characters like (@ , ~, & etc) ", function () {
        var label = ReacttestUtils.renderIntoDocument(<NumberList num="@" />);
        var result = label.isValidNumber("@");
        expect(result).toBe(false);
    });

    it("Should return False if ant spacial Characters in array list", function () {
        var label = ReacttestUtils.renderIntoDocument(<NumberList num="1,4,7,@,8,12,a,6" />);
        var result = label.arrangeNumbers("1,4,7,@,8,12,a,6");
        expect(result).toBe(false);
    });

    it("check function to return Even Number and odd Number", function () {
        var label = ReacttestUtils.renderIntoDocument(<NumberList num="1,4,7,3,8,12,21,6" />);
        var result = label.arrangeNumbers("1,4,7,3,8,12,21,6");
        expect(result).toEqual({ even: '4,8,12,6', odd: '7,3,21' });
    });

    it("check function to return Even Number", function () {
        var label = ReacttestUtils.renderIntoDocument(<NumberList num="1,4,7,3,8,12,21.5,6" />);
        var result = label.arrangeNumbers("1,4,7,3,8,12,21,6");
        //console.log("Result 6 :- ", result.even);
        expect(result.even).toEqual('4,8,12,6');
    });

    it("check function to return Odd Number", function () {
        var label = ReacttestUtils.renderIntoDocument(<NumberList num="1,4,7,3,8,12,21,6" />);
        var result = label.arrangeNumbers("1,4,7,3,8,12,21,6");
        expect(result.odd).toEqual('7,3,21');
    });

});