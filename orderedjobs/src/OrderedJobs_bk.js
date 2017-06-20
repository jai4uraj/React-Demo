/**
 * Created by Dhananjay on 6/19/2017.
 */
import React, {Component} from 'react';

class OrderedJobs extends Component {
    constructor() {
        super();
        this.state = {job: '', dependent: '', singleJob: []}
    }


    registerIndependent(job) {
        console.log('Job', job);

        if (job == '' || job == undefined) {
            return false;
        }
        var singleJob = this.state.singleJob;
        job = job.replace(/\s/g, "");
        singleJob = job.split(/=>/);
        console.log('instruction1', singleJob);

        if(singleJob[1]!=''){
            singleJob = singleJob[1] + singleJob[0];
        }else{
            singleJob = singleJob[0];
        }
        console.log('instruction', singleJob);
        return singleJob;

    }

    /*registerDependent(job, dependent) {
        console.log('jobs', job, "dependent", dependent);

    }*/


    render() {



        return (
            <div class="container">
                <div class="row">
                    <div class="jumbotron">
                        <h1>Ordered Jobs!</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderedJobs;
