import * as React from 'react';
import Header from '../header/Header';
import { Weather } from '../models/Weather';
import SelectedWeather from './SelectedWeather';
import './WeatherDisplayer.css';
import { WeatherList } from './WeatherList';

interface IProps {
  weatherList: Weather[];
  cityName: string;
}

interface IState {
  selectedWeather: Weather;
  weatherIcon: string;
}

function getWeatherIcon(selectedWeather: Weather): string {
  if (selectedWeather.weather && selectedWeather.weather.length > 0) {
    return selectedWeather.weather[0].main;
  }
  return '';
}

class WeatherDisplayer extends React.PureComponent<IProps, IState> {
  public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    if (nextProps.weatherList.length > 0 && prevState.selectedWeather.main === undefined) {
      const selectedWeather = nextProps.weatherList[0];
      return {
        selectedWeather,
        weatherIcon: getWeatherIcon(selectedWeather),
      }
    }
    return null;
  }
  public state = {
    selectedWeather: new Weather(),
    weatherIcon: '',
  }


  public render () {
    return (
      <div className="city-item-view">
        <Header name={this.props.cityName} />
      <div className="city-item">
        <SelectedWeather
          weather={this.state.selectedWeather}
        />
      </div>
      <div className="footer">
        <WeatherList weatherList={this.props.weatherList} selectedWeather={this.state.selectedWeather} changeSelectedWeather={this.changeSelectedWeather} />
      </div>
      </div>
    );
  }
  public changeSelectedWeather = (selectedWeather: Weather) => {
    this.setState({
      selectedWeather,
      weatherIcon: getWeatherIcon(selectedWeather),
    });
  }
}

export default WeatherDisplayer;