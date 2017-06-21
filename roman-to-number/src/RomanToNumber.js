/**
 * Created by Dhananjay on 6/21/2017.
 */
import React, {Component} from 'react';

class RomanToNumber extends Component {
    constructor() {
        super();
        this.state = {val: ''};
    }

    isValidNumber(val) {
        if (val == '' || !isNaN(val)) {
            return false;
        }
    }

    romanToNumber(val){
        this.isValidNumber(val);
        /*if(val == 'I'){
            return 1;
        }*/
        /*var decimal = [1000, 500, 100, 50, 10, 5, 1];
        var roman =     ["M", "D", "C", "L", "X", "V", "I"];

        if(roman.indexOf(val) != -1){
         return decimal[roman.indexOf(val)];
         }
    */
        var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var roman =   ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

        var result = 0;
        for (var i = 0;i<=decimal.length;i++) {
            while (val.indexOf(roman[i]) === 0){
                //checking for the first characters in the string
                result += decimal[i];
                //adding the decimal value to our result counter
                val = val.replace(roman[i],'');
                //remove the matched Roman letter from the beginning
            }
        }
        return result;
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="jumbotron">
                        <h1>Roman to Number</h1>
                        <p>...</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default RomanToNumber;
