/**
 * Created by Dhananjay on 6/19/2017.
 */
import React, {Component} from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import OrderedJobs from '../src/OrderedJobs';

describe("OrderedJobs", function () {
    it("jobs should not be blank", function () {
        var label = ReactTestUtils.renderIntoDocument(<OrderedJobs job_name=""/>);
        var result = label.registerIndependent();
        expect(result).toBe(false);
    });

    it("should extract a jobs name from the input string", function () {
        var label = ReactTestUtils.renderIntoDocument(<OrderedJobs job="a"/>);
        var result = label.registerIndependent('a');
        var outPutResult = label.getSortedJobNames();
        expect(outPutResult).toBe('a');
    });
    it("should add multiple jobs", function () {
        var label = ReactTestUtils.renderIntoDocument(<OrderedJobs job="a"/>);
        var result = label.registerIndependent('a');
        var result = label.registerIndependent('b');
        var result = label.registerIndependent('c');
        var result = label.registerIndependent('d');
        var outPutResult = label.getSortedJobNames();
        expect(outPutResult).toBe('abcd');
    });

    it("should no duplicate jobs added", function () {
        var label = ReactTestUtils.renderIntoDocument(<OrderedJobs job="a"/>);
        var result = label.registerIndependent('a');
        var result = label.registerIndependent('b');
        var result = label.registerIndependent('c');
        var result = label.registerIndependent('b');
        var outPutResult = label.getSortedJobNames();
        expect(outPutResult).toBe('abc');
    });

    it("should multiple jobs single Dependency", function () {
        var label = ReactTestUtils.renderIntoDocument(<OrderedJobs job="a" dependentJob=""/>);
        var result = label.register('a');
        var result = label.register('b', 'c' );
        var result = label.register('c');
        var outPutResult = label.getSortedJobNames();
        expect(outPutResult).toBe('acb');
    });


    /*it("should multiple jobs multiple Dependency", function () {
        var label = ReactTestUtils.renderIntoDocument(<OrderedJobs job="a" dependentJob=""/>);
        var result = label.register('a');
        var result = label.register('b', 'c' );
        var result = label.register('c', 'f');
        var result = label.register('d', 'a');
        var result = label.register('e', 'b');
        var result = label.register('f');
        var outPutResult = label.getSortedJobNames();
        expect(outPutResult).toBe('acb');
    });*/

    it("should extract a job's dependency from the input string a => b", function () {
        var job_name = 'a';
        var dependent_job = 'b';
        var label = ReactTestUtils.renderIntoDocument(<OrderedJobs job="job_name" dependentJob="dependent_job"/>);
        var result = label.register(job_name, dependent_job);
        var outPutResult = label.getSortedJobNames();
        expect(outPutResult).toBe('ba');
    });

    it("should extract a job's dependency from the input string b => a, and  c => b", function () {
        var label = ReactTestUtils.renderIntoDocument(<OrderedJobs job="b" dependentJob="a"/>);
        var result = label.register('b', 'a');
        var result = label.register('b', 'c');
        var outPutResult = label.getSortedJobNames();
        expect(outPutResult).toBe('acb');
    });

    it("should raise an error if a job depends on itself a => a,", function () {
        var label = ReactTestUtils.renderIntoDocument(<OrderedJobs job="a" dependentJob="a"/>);
        var result = label.register('a', 'a');

        console.log('outPutResult', result);

        expect().toThrow('jobs cannot depend upon themselves');
        //expect(result).toThrow('jobs cannot depend upon themselves');
    });


});