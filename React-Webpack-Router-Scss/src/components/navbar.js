import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom'

export class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    {/*<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">*/}
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/">React Webpack Router</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/home">Home <span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/featurette">Featurette</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <form className="form-inline mt-2 mt-md-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </Router>
        )
    }
}