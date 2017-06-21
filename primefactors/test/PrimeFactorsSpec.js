/**
 * Created by Dhananjay on 6/21/2017.
 */
import React, {Component} from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import PrimeFactors from '../src/PrimeFactors';

describe("PrimeFactors", function () {
   it("should return false when value is blank", function () {
        var label = ReactTestUtils.renderIntoDocument(<PrimeFactors num = ''/>);
        var result = label.fnFactor('');
        expect(result).toEqual(false);
    });

    it("should return false when value is 0 or lass then 0", function () {
        var label = ReactTestUtils.renderIntoDocument(<PrimeFactors num = '0'/>);
        var result = label.fnFactor('0');
        var result = label.fnFactor('-10');
        expect(result).toEqual(false);
    });
    it("should return false when value is not an integer", function () {
        var label = ReactTestUtils.renderIntoDocument(<PrimeFactors num = 'abc'/>);
        var result = label.fnFactor('abc');
        expect(result).toEqual(false);
    });

    it("Should Calculate Prime Factors of an integer 1", function () {
        var label = ReactTestUtils.renderIntoDocument(<PrimeFactors num = '1'/>);
        var result = expect(label.fnFactor(1)).toEqual([]);
        /*var result = label.fnFactor('1');
        expect(result).toEqual([]);*/
    });

    it("Should Calculate Prime Factors of an integer 2", function () {
        var label = ReactTestUtils.renderIntoDocument(<PrimeFactors num = '2'/>);
        var result = expect(label.fnFactor(2)).toEqual([2]);
        /*var result = label.fnFactor(2);
        expect(result).toEqual([2]);*/
    });

    it("Should Calculate Prime Factors of an integer 3", function () {
        var label = ReactTestUtils.renderIntoDocument(<PrimeFactors num = '3'/>);
        var result = expect(label.fnFactor(3)).toEqual([3]);
    });

    it("Should Calculate Prime Factors of an integer 4", function () {
        var label = ReactTestUtils.renderIntoDocument(<PrimeFactors num = '4'/>);
        var result = expect(label.fnFactor(4)).toEqual([2,2]);
    });

    it("Should Calculate Prime Factors of an integer 5", function () {
        var label = ReactTestUtils.renderIntoDocument(<PrimeFactors num = '5'/>);
        var result = expect(label.fnFactor(5)).toEqual([5]);
    });

    it("Should Calculate Prime Factors of an integer 6", function () {
        var label = ReactTestUtils.renderIntoDocument(<PrimeFactors num = '6'/>);
        var result = expect(label.fnFactor(6)).toEqual([2,3]);
    });

    it("Should Calculate Prime Factors of an integer 7", function () {
        var label = ReactTestUtils.renderIntoDocument(<PrimeFactors num = '7'/>);
        var result = expect(label.fnFactor(7)).toEqual([7]);
    });

    it("Should Calculate Prime Factors of an integer 8", function () {
        var label = ReactTestUtils.renderIntoDocument(<PrimeFactors num = '8'/>);
        var result = expect(label.fnFactor(8)).toEqual([2,2,2]);
    });

    it("Should Calculate Prime Factors of an integer 9", function () {
        var label = ReactTestUtils.renderIntoDocument(<PrimeFactors num = '9'/>);
        var result = expect(label.fnFactor(9)).toEqual([3,3]);
    });

});