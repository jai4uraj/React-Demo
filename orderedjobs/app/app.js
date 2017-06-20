/**
 * Created by Dhananjay on 6/19/2017.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import OrderedJobs from '../src/OrderedJobs';

var obj = React.createElement(OrderedJobs, {});
ReactDOM.render(obj, document.getElementById('Orderedjobs'));
