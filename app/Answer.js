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
        fetch('https://api.openweathermap.org/data/2.5/weather?q=london' + '&APPID=' + key + '&units=metric')
            .then((response) => response.json())
            .then((res) => {
                this.setState({
                    city: res
                });
            })
            .catch(alert);
    }

    render () {
        console.log(this.state.city);
        console.log(this.state.city.name);
        console.log(this.state.city.main);
        let city = this.state.city.main;
        let cityName = this.state.city.name;
        let wind = this.state.city.wind;
        let country = this.state.city.sys;
        let answer = function () {

            for (let item in city) {
                console.log(city[item]);
                return <div className="answer">
                    <h3>{cityName}, {country.country}</h3>
                    <ul>
                        <li>t&deg;</li>
                        <li>{Math.round(city.temp)}</li>
                    </ul>
                    <ul>
                        <li>Humidity<br/>(%)</li>
                        <li>{city.humidity}</li>
                    </ul>
                    <ul>
                        <li>Pressure<br/>(mm Hg)</li>
                        <li>{city.pressure * 0.75}</li>
                    </ul>
                    <ul>
                        <li>Wind<br/>(meter/sec)</li>
                        <li>{wind.speed}</li>
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


