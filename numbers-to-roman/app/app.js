/**
 * Created by Dhananjay on 6/21/2017.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RomanNumbers from '../src/RomanNumbers';

var obj = React.createElement(RomanNumbers, {});
ReactDOM.render(obj, document.getElementById('RomanNumber'));