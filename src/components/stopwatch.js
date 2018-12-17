
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
        this.update=this.update.bind(this);
        this.reset=this.reset.bind(this);
    }
    update(){
        const {status, start} = this.state;
        if(status==='running'){
            this.setState({
                elapsed: new Date().getTime() - start
            });
            setTimeout(this.update,10);
        }
    }
    start(){
        this.setState({
            status:'running',
            start:new Date().getTime()
        });
        setTimeout(this.update,10);
        // this.timer = setInterval(this.handleUpdate, 1000)
    }
    stop(){
        this.setState({
            status:'stopped'
        });
    }
    reset(){
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0 
        })
    }
    render(){
        const {elapsed,status}=this.state;
        return(
        <div>
            <h1><Time elapsed={elapsed}/></h1>
            <p>{status}</p>
            <button onClick={this.start}>Start</button>
            <button onClick={this.stop}>Stop</button>
            <button onClick={this.reset}>Reset</button>
        </div>
        );
    }
}