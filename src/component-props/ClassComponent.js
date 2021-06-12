import React from 'react';


class StateFullClassComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("********** Component constructed **********");
        this.state = { counter: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }

    componentDidMount() {
        console.log("********** Component mounted **********");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("********** Component Did update **********", prevProps, this.props, prevState, this.state);
    }

    componentWillUnmount() {
        console.log("********** Component unmounted **********");
    }

    incrementCounter() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    }

    decrementCounter() {
        this.setState((prevState) => ({
            counter: prevState.counter - 1
        }));
    }

    render() {
        return <div>
            <div>Counter {this.state.counter}</div>
            <div>
                <button onClick={this.incrementCounter}>Increment</button>
                <button onClick={this.decrementCounter}>Decrement</button>
            </div>
        </div>
    };
}

export default StateFullClassComponent;