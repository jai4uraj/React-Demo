/**
 * Created by Dhananjay on 6/19/2017.
 */
import React, {Component} from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import OrderedJobs from '../src/OrderedJobs';

describe("OrderedJobs", function () {
    it("jobs should not be blank", function () {
        var label = ReactTestUtils.renderIntoDocument(<OrderedJobs job=""/>);
        var result = label.registerIndependent();
        expect(result).toBe(false);
    });
    it("should extract a jobs name from the input string", function () {
        var input = 'a =>';
        var label = ReactTestUtils.renderIntoDocument(<OrderedJobs job="input"/>);
        var result = label.registerIndependent(input);
        expect(result).toBe('a');
    });
    it("should extract a jobs name from the input string", function () {
        var input = 'b =>';
        var label = ReactTestUtils.renderIntoDocument(<OrderedJobs job="input"/>);
        var result = label.registerIndependent(input);
        expect(result).toBe('b');
    });

    it("should extract a job's dependency from the input string a => b", function () {
        var input = 'a => b';
        var label = ReactTestUtils.renderIntoDocument(<OrderedJobs job="input" />);
        var result = label.registerIndependent(input);
        console.log('Result', result);

        expect(result).toBe('ba');
    });

    /*it("should extract a job's dependency from the input string a => \n\ b => \n\ c => c", function () {
        var input = 'a => \n\ b => \n\ c => c';
        var label = ReactTestUtils.renderIntoDocument(<OrderedJobs job="input" />);
        var result = label.registerIndependent(input);
        console.log('Result', result);

        expect(result).toBe('ba');
    });*/

});