import React, { Component } from 'react';
import ReactTestUtils from 'react-dom/test-utils';
//import TestUtils from 'react-addons-test-utils';
import Fizzbuzz from '../src/FizzBuzz';

describe("Fizzbuzz", function () {
    it("contains spec with an expectation", function () {
      //console.log("Dhananjay");
      expect(true).toBe(true);
    });

    it("Should display the Fizz if multiples of 3", () => {
      var label = ReactTestUtils.renderIntoDocument(<Fizzbuzz number="3" />);
      var addResult = label.GetFizzBuzzValueFor(3);
      //console.log("Fizz = " + addResult);
      expect(addResult).toBe("Fizz");
    });

    it("Should display the Buzz if multiples of 5", () => {
        var label = ReactTestUtils.renderIntoDocument(<Fizzbuzz number="5" />);
        var addResult = label.GetFizzBuzzValueFor(5);
        //console.log("Buzz = " + addResult);
        expect(addResult).toBe("Buzz");
    });

    it("Should display the FizzBuzz if multiples of 5 and 3", () => {
        var label = ReactTestUtils.renderIntoDocument(<Fizzbuzz number="15" />);
        var addResult = label.GetFizzBuzzValueFor(15);
        //console.log("FizzBuzz = " + addResult);
        expect(addResult).toBe("FizzBuzz");
    });
    it("Should Return The Same Number If No Other Requirement", () => {
        var label = ReactTestUtils.renderIntoDocument(<Fizzbuzz number="1" />);
        var addResult = label.GetFizzBuzzValueFor(1);
        //console.log("Same Number = " + addResult);
        expect(addResult).toBe("1");
    });
    it("Should Return The Same Number If No Other Requirement", () => {
        var label = ReactTestUtils.renderIntoDocument(<Fizzbuzz number="2" />);
        var addResult = label.GetFizzBuzzValueFor(2);
        //console.log("Same Number = " + addResult);
        expect(addResult).toBe("2");
    });
    it("Should Return The Same Number If No Other Requirement", () => {
        var label = ReactTestUtils.renderIntoDocument(<Fizzbuzz number="4" />);
        var addResult = label.GetFizzBuzzValueFor(4);
        //console.log("Same Number = " + addResult);
        expect(addResult).toBe("4");
    });

});