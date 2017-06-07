/**
 * Created by Dhananjay on 6/7/2017.
 */
import React, {Component} from 'react';

class WeekDaysCount extends Component {
    constructor() {
        super();
        this.state = {date: ''};
    }

    /*
     * Validate Date Function
     */

    validateDate(date) {
        if (date == '') {
            return false;
        }
        if (this.DateFormateValidation(date) == false) {
            return false;
        }
        return true;
    }

    DateFormateValidation(d) {
        // regular expression to match required date format
        var re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
        var regs = '';
        if (regs = d.match(re)) {

            // day value between 1 and 31
            if (regs[1] < 1 || regs[1] > 31) {
                console.log("Invalid value for day: " + regs[1]);
                return false;
            }
            // month value between 1 and 12
            if (regs[2] < 1 || regs[2] > 12) {
                console.log("Invalid value for month: " + regs[2]);
                return false;
            }
            // year value between 1902 and 2017
            if (regs[3] < 1902 || regs[3] > (new Date()).getFullYear()) {
                console.log("Invalid value for year: " + regs[3] + " - must be between 1902 and " + (new Date()).getFullYear());
                return false;
            }
            if (regs[2] == 2) {
                if (regs[1] > 29) {
                    console.log("fab month day check");
                    return false;
                }
            }
            if (regs[2] == 2) {
                var leapYear = regs[3] % 4;
                if (leapYear > 0) {
                    if (regs[1] > 28) {
                        console.log("it is not a leap year");
                        return false;
                    }
                    else if (regs[1] > 29) {
                        console.log("it is not a leap year");
                        return false;
                    }
                }
            }
        } else {
            console.log("Invalid date format: " + d);
            return false;
        }
    }

    startAndEndDateValidation(s, e) {
        if (s > e) {
            return false
        }
        return true;
    }

    /*
     * Function for calculate number of business days between 2 dates
     * */
    businessDays() {
        var startdate = '07/06/2017';
        var enddate = '30/06/2017';
        if (this.validateDate(startdate) && this.validateDate(enddate) && startdate < enddate) {

        }
    }


    render() {
        var comingDate = this.state.date;
        /*var validateDateResult = '';
         var validateDateValidation = '';
         if (this.state.date != '') {
         validateDateResult = this.validateDate(comingDate);
         validateDateValidation = this.Datevalidation(comingDate);
         console.log("Validate Date Function Return", validateDateResult);
         console.log("validateDateValidation Date Function Return", validateDateValidation);
         }*/

        return (
            <div>
                <div class="jumbotron">
                    <h1>Hello, world!</h1>
                    <p>Validate Date Function Return",{/*{validateDateResult}*/}</p>
                </div>

            </div>
        );
    }
}


export default WeekDaysCount;
