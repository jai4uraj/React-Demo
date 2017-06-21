/**
 * Created by Dhananjay on 6/21/2017.
 */
import React, {Component} from 'react';

class PrimeFactors extends Component {
    constructor() {
        super();
        this.state = {num: '', result:[]};
    }

    fnFactor(num) {
        var result = this.state.result;
        if (num == '' || num <= 0 || isNaN(num)) {
            return false;
        }

        /*
         * Step 1
         if(num==1){
            return [];
         }
         */

        /*
         * Step 2
        if (num === 2) {
            return [2];
        }
        if (num === 3) {
            return [3];
        }*/

        /*
         * Step 3
        if(num > 1){
            if(0 === num % 2){
                result.push(2);
                num /= 2;
            }
            if(num > 1) {
                result.push(num);
            }
        }*/

        /*
         * Step 4
        while(num > 1){
            if(0 === num % 2){
                result.push(2);
                num /= 2;
            }
            else if(0 === num % 3){
                result.push(3);
                num /= 3;
            }
            else {
                result.push(num);
                break;
            }
        }*/

        /*
         * Step 5
        while(num > 1){
            var diviser = 2;
            while(diviser <= num){
                while(0 === num % diviser){
                    result.push(diviser);
                    num /= diviser;
                }
                diviser ++;
            }
        }*/

        /*
         * Step 6
        while(num > 1){
            for(var diviser = 2; diviser <= num; diviser ++){
                for(; 0 === num % diviser; num /= diviser){
                    result.push(diviser);
                }
            }
        }*/
        for(var diviser = 2; diviser <= num; diviser ++){
            for(; 0 === num % diviser; num /= diviser){
                result.push(diviser);
            }
        }

        return result;

    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="jumbotron">
                        <h1>Prime Factors!</h1>
                        <p>...</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default PrimeFactors;


