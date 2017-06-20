/**
 * Created by Dhananjay on 6/19/2017.
 */
import React, {Component} from 'react';

class OrderedJobs extends Component {
    constructor() {
        super();
        this.state = {job_name: '', dependentJob: '', job_list: []}
    }


    registerIndependent(job_name) {
        if (job_name == '' || job_name == undefined) {
            return false;
        }
        var job_list = this.state.job_list;
        if (job_list.indexOf(job_name) == -1) {
            job_list.push(job_name);
            /*console.log(job_list);*/
        }
    }

    register(job_name, dependentJob) {
        var job_list = this.state.job_list;

        if(job_name==dependentJob){
            //console.log('throw error');
            throw 'jobs cannot depend upon themselves 111111';
            return false;
        }
        if (job_list.indexOf(job_name) == -1) {
            this.registerIndependent(dependentJob);
            this.registerIndependent(job_name);
        }
        else {
            this.addJobBeforeDependency(job_name, dependentJob);
        }

    }

    addJobBeforeDependency(job_name, dependentJob) {
        var joblist = this.state.job_list;
        this.state.job_list = [];
        for (var job in joblist) {
            if (joblist[job] == job_name) {
                this.registerIndependent(dependentJob);
                this.registerIndependent(job_name);
            }
            else {
                this.registerIndependent(joblist[job]);
                console.log("joblist job",joblist[job]);
            }
        }
    }

    getSortedJobNames() {
        return this.state.job_list.join('');
        /*console.log(this.state.job_list.join(''));*/
    }


    render() {
        /*var job = 'a';
        this.registerIndependent(job);
        this.register('b', 'a');
        this.register('c', 'b');
        this.getSortedJobNames();*/
        return (
            <div class="container">
                <div class="row">
                    <div class="jumbotron">
                        <h1>Ordered Jobs!</h1>
                    </div>
                    <h2>result :{this.state.job_list.join('')} </h2>
                </div>
            </div>
        );
    }
}

export default OrderedJobs;
