/**
 * Created by Dhananjay on 6/1/2017.
 */
import React, {Component} from 'react';
import FizzBuzz from '../src/FizzBuzz'

class Index extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div class="container">
                <div class="container-fluid">
                    <div class="row">
                        <div class="jumbotron">
                            <h1 ref="h1">FizzBuzz Test React jasmine Karma!!</h1>
                            <div><FizzBuzz name="Dhananjay" /></div>                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;