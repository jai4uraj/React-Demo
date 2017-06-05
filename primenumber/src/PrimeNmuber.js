/**
 * Created by User on 6/5/2017.
 */
import React, {Component} from 'react';

class PrimeNmuber extends Component {
    constructor(){
        super();
        this.state = { num: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({num : e.target.value})
    }

    handleSubmit(){
        alert('A input value was submitted: ' + this.state.num);
        event.preventDefault();
        return false;
    }

    isinputValid(n){
        console.log(parseFloat(n) + " : "+ parseInt(n));
        var result = true;
        if(isNaN(n)){
            result = false;
        }
        if(n<0){
            result = false;
        }
        if(!(parseFloat(n) == parseInt(n))){
            result = false;
        }
        return result;
    }


    getPrimeNumber(n){
        if(this.isinputValid(n)){
        var result =true;
        for(var i=2;  i< n/2; i++){
            if(n % i == 0){
                console.log(n + "this is a prime number");
                result=false;
                break;
            }
        }
        return result;
        }
    }


    render() {
        var inputValue = this.state.num;
        console.log("Input Value :- ", inputValue);
        this.getPrimeNumber(inputValue);
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Type a Number</label>
                    <input type="text" class="form-control" value={this.state.num} onChange={this.handleChange} />
                </div>
                <input type="submit" class="btn btn-default" value="Submit" />
            </form>
        );
    }
}

export default PrimeNmuber;
