import React from 'react';
import ReactDOM from 'react-dom';

let weatherData = {
    "coord":{
        "lon":-121.29,
        "lat":37.96
    },
    "weather":[{
        "id":800,
        "main":"Clear",
        "description":"clear sky",
        "icon":"01d"
    }],
    "base":"stations",
    "main":{
        "temp":57.43,
        "pressure":1018,
        "humidity":54,
        "temp_min":55.4,
        "temp_max":60.8
    },
    "visibility":16093,
    "wind":{
        "speed":13.87,
        "deg":320
    },
    "clouds":{"all":1},
    "dt":1480636680,
    "sys":{
        "type":1,
        "id":495,
        "message":0.1691,
        "country":"US",
        "sunrise":1480691027,
        "sunset":1480725946
    },
    "id":5399020,
    "name":"Stockton",
    "cod":200
};
class Forecast extends React.Component {
    constructor() {
        super();

        this.state = {
            time: 1,
            icon: '',
            location: '',
            temp:"",
            weather_code:"",
        }
    }

    // componentDidMount(city) {
    //     let key = "98c355d73f22c6eb33c4bc0bd22031fe";
    //     fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=1fbaf6e0d29ea877ae5852504eef4e82')
    //         .then((response)=>{
    //             console.log(response);
    //             return response.json()}).then((data)=>{
    //         console.log(data);
    //         let date = new Date();
    //         let time = date.getHours();
    //         this.setState({time:time,temp:Math.round(data.main.temp),location:city,weather_code:data.weather[0].id})
    //     }).catch((error)=>{
    //         console.log(error)
    //     });
    //     let date = new Date();
    //     let time = date.getHours();
    //     this.setState({time:time,temp:Math.round(weatherData.main.temp),location:city,weather_code:weatherData.weather[0].id})
    // }
    fetchWeatherData(city){
        let date = new Date();
        let time = date.getHours();
        this.setState({time:time,temp:Math.round(weatherData.main.temp),location:city,weather_code:weatherData.weather[0].id})
    }

    componentDidMount (city){
        fetch('http://freegeoip.net/json/').then((response)=>{
            return response.json();
        }).then((data)=>{
            let city = data.city;
            this.fetchWeatherData(city);
        }).catch((error)=>{
            console.log(error)
        });

    }
    render () {
        return (
            <div className="Icon" data-hour={this.state.time}>
                <div className="Sky"></div>
                <WeatherIcon src={this.state.icon} weatherCode={this.state.weather_code} timeOfDay={this.state.time}/>
                <Information location={this.state.location} temp={this.state.temp} />
            </div>
        )
    }
}

class Information extends React.Component {
    render () {
        return (
            <div className="Information">
                <div className="Location">{this.props.location}</div>
                <div className="Temperature">{this.props.temp} &deg; F</div>
            </div>
        )
    }
}

class WeatherIcon extends React.Component {
    render () {
        let timeOfDay = this.props.timeOfDay > 7 && this.props.timeOfDay < 18 ? 'day' : 'night';
        let className = 'WeatherIcon wi wi-owm-'+timeOfDay+'-'+this.props.weatherCode;
        return (<i className={className}></i>);
    }
}

export default Forecast;