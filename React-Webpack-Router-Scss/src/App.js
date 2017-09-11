import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './components/navbar';
import {Jumbotron} from './components/jumbotron';
import { Home } from './components/home';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Featurette } from './components/featurette';
import { Footer } from './components/footer';

import { HashRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render(
    <Navbar />,
    document.getElementById('react-navbar')
);

ReactDOM.render(
    <div>
        <Jumbotron />
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} pageName={Home} />
                <Route path="/about" component={About} pageName={About} />
                <Route path="/featurette" component={Featurette} pageName={Featurette} />
                <Route path="/contact" component={Contact} pageName={Contact} />
            </div>
        </Router>
    </div>,
    document.getElementById('react-container')
);
ReactDOM.render(
    <Footer />,
    document.getElementById('react-footer-container')
);