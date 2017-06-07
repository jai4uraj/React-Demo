/**
 * Created by Dhananjay on 6/7/2017.
 */
import React, {Component} from 'react';
import ReacttestUtils from 'react-addons-test-utils';
import WeekDaysCount from '../src/WeekDaysCount';

describe("WeekDaysCount", function () {
    it("Date should not be blank", function () {
        var label = ReacttestUtils.renderIntoDocument(<WeekDaysCount date=""/>);
        var result = label.validateDate('');
        expect(result).toBe(false);
    });
    it("Day should not be zeor", function () {
        var label = ReacttestUtils.renderIntoDocument(<WeekDaysCount date="00/02/2012"/>);
        var result = label.validateDate('00/02/2012');
        expect(result).toBe(false);
    });
    it("month should not be zeor", function () {
        var label = ReacttestUtils.renderIntoDocument(<WeekDaysCount date="31/00/2012"/>);
        var result = label.validateDate('31/00/2012');
        expect(result).toBe(false);
    });

    it("Year should not be zeor", function () {
        var label = ReacttestUtils.renderIntoDocument(<WeekDaysCount date="31/12/0000"/>);
        var result = label.validateDate('31/12/0000');
        expect(result).toBe(false);
    });

    it("February day should not be grater than 29", function () {
        var label = ReacttestUtils.renderIntoDocument(<WeekDaysCount date="30/02/2012"/>);
        var result = label.validateDate('30/02/2012');
        expect(result).toBe(false);
    });

    it("February day should 29 then it is Leap year", function () {
        var label = ReacttestUtils.renderIntoDocument(<WeekDaysCount date="29/02/2012"/>);
        var result = label.validateDate('29/02/2012');
        expect(result).toBe(true);
    });

    it("February day should 28 then it is not a Leap year", function () {
        var label = ReacttestUtils.renderIntoDocument(<WeekDaysCount date="28/02/2013"/>);
        var result = label.validateDate('28/02/2013');
        expect(result).toBe(true);
    });

    it("start date is less then end date", function () {
        var label = ReacttestUtils.renderIntoDocument(<WeekDaysCount startdate="07/06/2017" enddate="30/06/2017"/>);
        var result = label.startAndEndDateValidation('07/06/2017', '30/06/2017');
        expect(result).toBe(true);
    });

    it("start date is not less then end date", function () {
        var label = ReacttestUtils.renderIntoDocument(<WeekDaysCount startdate="30/06/2017" enddate="07/06/2017"/>);
        var result = label.startAndEndDateValidation('30/06/2017', '07/06/2017');
        expect(result).toBe(false);
    });

});