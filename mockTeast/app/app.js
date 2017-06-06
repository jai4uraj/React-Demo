import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Index from '../src/NumberList';

var obj = React.createElement(Index, {});

ReactDOM.render(obj, document.getElementById('maockId'));