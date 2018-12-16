
import React, {Component} from 'React';

export default class Stopwatch extends Component{
    constructor(props){
        super(props);
        this.state={
            status:'stopped',
            start:null,
            elapsed:0
        }
        this.start=this.start.bind(this);
        this.stop=this.stop.bind(this);
    }
    start(){
        this.setstate={
            status:'running',
            start:new Date().getTime()
        }
    }
    stop(){
        this.setState={
            status:'stopped'
        }
    }

    render(){
        const {elapsed,status}=this.state;
        return(
        <div>
            <h1>{elapsed}</h1>
            <p>{status}</p>
            <button onClick={this.start}>Start</button>
            <button onClick={this.stop}>Stop</button>
        </div>
        )
    }
}