import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import PrimeNmuber from "../src/PrimeNmuber";


describe("PrimeNmuber", function () {
    /*it("Contains spec witn an expectation", function () {
        expect(true).toBe(true);
    });*/

    it("number is not blank", () => {
        var label = ReactTestUtils.renderIntoDocument(<PrimeNmuber num=""/>);
        var result = label.isinputValid();
        //console.log(result);
        expect(result).toBe(false);
    });
    it("number is not negative", () => {
        var label = ReactTestUtils.renderIntoDocument(<PrimeNmuber num="-10"/>);
        var result = label.isinputValid(-10);
        //console.log("result", result);
        expect(result).toBe(false);
    });
    it("input is not a number", () => {
        var label = ReactTestUtils.renderIntoDocument(<PrimeNmuber num="abcd"/>);
        var result = label.isinputValid("abcd");
        console.log("input is not a number", result);
        expect(result).toBe(false);
    });
    it("input should not be decimal number", () => {
        var label = ReactTestUtils.renderIntoDocument(<PrimeNmuber num="5.7"/>);
        var result = label.isinputValid(5.7);
        console.log("input should not be decimal number", result);
        expect(result).toBe(false);
    });

    it("is 10 a prime number ?", () => {
        var label = ReactTestUtils.renderIntoDocument(<PrimeNmuber num="10"/>);
        var result = label.getPrimeNumber(10);
        console.log(result);
        expect(result).toBe(false);
    });
});