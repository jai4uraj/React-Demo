/**
 * Created by Dhananjay on 6/21/2017.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import PrimeFactors from '../src/PrimeFactors';

var obj = React.createElement(PrimeFactors, {});
ReactDOM.render(obj, document.getElementById('PrimeFactors'));