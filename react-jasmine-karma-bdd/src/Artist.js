import React, {Component} from 'react';

class Artist extends Component {
    constructor() {
        super();
        //this.state = [{x: '2', y: '2'}]
        this.state = {addresult: []}
        this.state = {subsresult: []}
    }


    add(x, y) {
        return parseInt(x) + parseInt(y);
    }

    subtract(x,y) {
        return parseInt(x) - parseInt(y);
    }

    render() {
        //console.log("props x = ",this.props.x);
        //console.log("props y = ",this.props.y);
/*
        var resultAdd = this.add(this.props.x, this.props.y);
        this.state.addresult = resultAdd;
        var resultSubs = this.subtract(this.props.x, this.props.y);
        this.state.subsresult = resultSubs;
*/

        return (
                <span>This is some static text</span>
        );
    }
}

export default Artist;


