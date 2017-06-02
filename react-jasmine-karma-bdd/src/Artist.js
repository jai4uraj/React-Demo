import React, {Component} from 'react';

class Artist extends Component {
    constructor() {
        super();
        //this.state = [{x: '', y: ''}]
    }

    valdate(x,y){

        var numX = parseInt(x);
        var numY = parseInt(y);

        if(numX != '' && numY != '')
        {
            return true
        }
        if(numX != 0 && numY != 0)
        {
            return true
        }
        if(numX !=parseInt(numX) && numY !=parseInt(numY) )
        {
            return true
        }
        if(numX !=parseFloat(numX) && numY !=parseFloat(numY) )
        {
            return true
        }
        if(numX > 0 && numY > 0) {
            return true
        }
        if(parseInt(numX) && parseInt(numY)){
            return true
        }
    }

    add(x, y) {
        if(this.valdate(x, y)) {
            return x + y;
        }
    }

    subtract(x,y) {
        if(this.valdate(x, y)) {
            return x - y;
        }
    }


    multiply(x,y) {
        if(this.valdate(x, y)) {
            return x * y;
        }
}

    divide(x, y) {
    if(this.valdate(x, y)) {
        return (y === 0) ? 0 : x / y;
    }
    else {
        return 0;
    }
}



    render() {
        /*
        console.log("props x = ",this.props.x);
        console.log("props y = ",this.props.y);
        var resultAdd = this.add(this.props.x, this.props.y);
        this.state.addresult = resultAdd;
        var resultSubs = this.subtract(this.props.x, this.props.y);
        this.state.subsresult = resultSubs;
*/
        return (
            <div>Artist name : {this.props.name}</div>
        );
    }
}

export default Artist;


