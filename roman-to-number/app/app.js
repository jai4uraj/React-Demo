/**
 * Created by Dhananjay on 6/21/2017.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RomanToNumber from '../src/RomanToNumber';

var obj = React.createElement(RomanToNumber, {});
ReactDOM.render(obj, document.getElementById('RomanToNumber'));