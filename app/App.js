import React from 'react';
import ReactDOM from 'react-dom';
//import Forecast from './Forecast';
import Answer from './Answer';

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className="wrapper">
                        <input className="js-input" type="text" placeholder="Enter city" value={this.state.value} onChange={this.handleChange}/>
                        <span className="close"></span>
                    </div>
                    <button>Request</button>
                </form>
                <Answer/>
            </div>
        )
    }
}

ReactDOM.render(
    <Request/>,
    document.getElementById('app')
);




ReactDOM.render(
    <Request />,
    document.getElementById('app')
);
