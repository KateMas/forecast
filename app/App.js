import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    render() {
        return (
            <form method="post" action="">
                <div className="wrapper">
                    <input className="js-input" type="text" placeholder="Enter city"/>
                    <span className="close"></span>
                </div>
                <button>Request</button>
            </form>
        )
    }
}

ReactDOM.render(
    <Form/>,
    document.getElementById('app')
);