import * as React from 'react';
import { Weather } from '../models/Weather';
import './CityItemView.css';
import WeatherIconSelector from './WeatherIconSelector';

interface IProps {
  weatherList: Weather[];
}

interface IState {
  selectedWeather: Weather;
}

function formatDate(date: string) {
  const formatedDate = new Date(date.replace(' ', 'T'));
  const time = `${formatedDate.getHours()}`.length === 1 ? `0${formatedDate.getHours()}:00` : `${formatedDate.getHours()}:00`;
  return `${formatedDate.getMonth() + 1} / ${formatedDate.getDate()} ${time}`;
}

class CityItemView extends React.PureComponent<IProps, IState> {
  public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    if (nextProps.weatherList.length > 0 && prevState.selectedWeather.name === undefined) {
      return {
        selectedWeather: nextProps.weatherList[0]
      }
    }
    return null;
  }
  public state = {
    selectedWeather: new Weather(),
  }


  public render () {
    return (
      <div className="city-item">
        <SelectedWeatherView weather={this.state.selectedWeather} />
        <div className="weather-list">
          {this.props.weatherList.map(item => <WeatherView key={item.dt} weather={item} changeSelectedWeather={this.changeSelectedWeather} />)}
        </div>
      </div>
    );
  }
  private changeSelectedWeather = (selectedWeather: Weather
  ) => {
    this.setState({selectedWeather})
  }
}

export default CityItemView;

interface IWeatherViewProps {
  weather: Weather;
  changeSelectedWeather: ((weather: Weather) => void);
}

const WeatherView: React.SFC<IWeatherViewProps> = ({weather, changeSelectedWeather}) => {
  const onClick = () => changeSelectedWeather(weather);

  return (
    <button onClick={onClick} className="weather-list-item-button">
      <div className="weather-list-date">
        {formatDate(weather.dt_txt)}
      </div>
      <div className="weather-item">
        <div>
          {Math.round(weather.main.temp)}
        </div>
        <div>
          <WeatherIconSelector type={weather.weather[0].main} />
        </div>
      </div>
    </button>
  );
}

interface IPropsView {
  weather: Weather;
}
const SelectedWeatherView: React.SFC<IPropsView> = ({ weather }) => {
  if (weather.main === null || weather.main === undefined) {
    return null;
  }
  return (
    <div>
      <div className="current-weather">
        {Math.round(weather.main.temp)}
      </div>
      <WeatherIconSelector type={weather.weather[0].main} />
    </div>
  );
}