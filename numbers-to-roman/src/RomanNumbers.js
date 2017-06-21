/**
 * Created by Dhananjay on 6/21/2017.
 */
import React, {Component} from 'react';

class RomanNumbers extends Component {
    constructor(){
        super();
        this.state = { num:'' };
    }

    isValidNumber(num){
        if(num == '' || num <= 0 || isNaN(num) || num > 3000 ){
            return false;
        }
    }

    romanNumber(num){
        this.isValidNumber(num);

        /*var decimal = [1000, 500, 100, 50, 10, 5, 1];
        var roman = ["M", "D", "C", "L", "X", "V", "I"];*/

        var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

        /*if( decimal.indexOf(num) != -1 ){
            return roman[ decimal.indexOf(num) ];
        }*/
        var result = '';
        for (var i = 0;i<=decimal.length;i++) {
            // looping over every element of our arrays
            while (num%decimal[i] < num) {
                // keep trying the same number until it won't fit anymore
                result += roman[i];
                // add the matching roman number to our result string
                num -= decimal[i];
                // remove the decimal value of the roman number from our number
            }
        }
        return result;
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="jumbotron">
                      <h1>Roman Numbers!</h1>
                      <p>...</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default RomanNumbers;
