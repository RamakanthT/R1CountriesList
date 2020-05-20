import React, {Component} from 'react';

class ClickCounter extends Component {

    constructor(){
        super();
        this.state = {
            "counter":0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){

        console.log("clicked");
        // this.state.counter = this.state.counter + 1;
        // this.forceUpdate();
        // or

       // this.setState({counter: this.state.counter + 1});

       //or
        // using this.setState({counter: this.state.counter + 1}); multiple times wont work
        //we need to use below code

       this.setState((staty) => {
           return {counter:staty.counter + 1}
       });

       this.setState((staty) => {
        return {counter:staty.counter + 1}
    });
    }
    render(){
        return (
            <div className="click-counter">Click Counter <br/>
            <button onClick={this.handleClick}>Click me</button>
            <p>Counter: {this.state.counter}</p>
            </div>
        )
    }
}

export default ClickCounter;