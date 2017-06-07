/**
 * Created by User on 6/6/2017.
 */
import React, {Component} from 'react';

class NumberList extends Component {
    constructor() {
        super();
        this.state = {num: ''}
    }

    isValidNumber(num) {
        var result = true;
        if (isNaN(num)) {
            result = false;
        }
        if (num <= 0) {
            result = false;
        }
        if (!(parseInt(num) == parseFloat(num))) {
            result = false;
        }
        return result;
    }

    arrangeNumbers(n) {
        var inputArray = n.split(',');
        var evenNumList = [];
        var oddNumList = [];
        for (var i = 1; i < inputArray.length; i++) {
            if (this.isValidNumber(inputArray[i])) {
                if ((inputArray[i] % 2) == 0) {
                    var even = evenNumList.push(inputArray[i]);
                }
                else {
                    var odd = oddNumList.push(inputArray[i]);
                }
            }
            else {
                return false;
            }
        }
        var retrunobj = {};
        retrunobj.even = evenNumList.join();
        retrunobj.odd = oddNumList.join();
        return retrunobj;
    }

    render() {

        var number = this.state.num;
        var result = '';
        if (number != '') {
            result = this.arrangeNumbers(number);
        }
        return (
            <div class="jumbotron">
                <h1>Hello, React!</h1>
                <p>{this.state.num}</p>
                <p>Function Return Even :- {result.even}</p>
                <p>Function Return Odd :- {result.odd}</p>
            </div>
        );
    }
}