/**
 * Created by User on 5/24/2017.
 */
import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav class="navbar fixed-top navbar-toggleable-md navbar-light" id="mainNav">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
                    Menu <i class="fa fa-bars"></i>
                </button>
                <div class="container">
                    <a class="navbar-brand" href="#page-top">Car Enquiry</a>
                    <div class="collapse navbar-collapse" id="navbarExample">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
