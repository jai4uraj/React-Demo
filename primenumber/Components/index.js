/**
 * Created by User on 6/5/2017.
 */
import React, {Component} from 'react';
import PrimeNumber from '../src/PrimeNmuber';

class Index extends Component {
    render() {
        return (
            <div class="container">
                <div class="container-fluid">
                    <div class="row">
                        <div class="jumbotron">
                            <h1 ref="h1">I am Prime Number.</h1>
                            <div><PrimeNumber /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
