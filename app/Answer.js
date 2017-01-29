import React from 'react';
import ReactDOM from 'react-dom';

class Answer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: []
        };
    }
    componentDidMount() {
        let key = "98c355d73f22c6eb33c4bc0bd22031fe";
        fetch('http://api.openweathermap.org/data/2.5/weather?q=odessa'+ '&APPID=' + key)
            .then((response) => response.json())
            .then((res) => {
                this.setState({
                    city: res
                });
            })
            .catch(alert);
    }

    render () {
        //console.log(this.state.city);
        console.log(this.state.city.main);
        let city = this.state.city.main;
        let answer = function () {

            for (let item in city) {
                console.log(city[item]);
                return <div className="answer">
                    <ul>
                        <li>temp</li>
                        <li>{city.temp}</li>
                    </ul>
                    <ul>
                        <li>humidity</li>
                        <li>{city.humidity}</li>
                    </ul>
                </div>
            }
        }();



        return (
            <div>
                {answer}
            </div>
        )
    }
}

export default Answer;