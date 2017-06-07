/**
 * Created by Dhananjay on 6/7/2017.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import WeekDaysCount from '../src/WeekDaysCount';

var obj = React.createElement(WeekDaysCount, {});
ReactDOM.render(obj, document.getElementById('WeekDaysCountId'));