import React, { Component } from 'react';
import {connect} from 'react-redux'
import {get} from '../store/actions';

class City extends Component {
  componentDidMount() {
    const {city} = this.props.match.params;
    this.props.getCityWeather(city);
  }

  componentWillReceiveProps(newProps) {
    if( this.props.match.params.city !== newProps.match.params.city ) {
      this.props.getCityWeather(newProps.match.params.city);
    }
  }

  render() {
    const {city} = this.props.match.params;
    const {weather, loadingData} = this.props;
    return (
      <div>
        <h1 className="margin-bottom-large">{city}</h1>
        {
          loadingData ?
            <div className="row text-center">
              <div className="small-12 medium-6 columns">
                <span className="loading-indicator medium"></span>
              </div>
            </div>
          :
            <div className="row margin-horiz-small margin-vert-small">

              <div className="small-12 medium-6 columns">
                <ul style={ {listStyle: 'none'} }>
                  <li><strong>Humidity: </strong>{weather.humidity}</li>
                  <li>
                    <strong>Temperature: </strong>
                    <ul style={ {listStyle: 'none'} }>
                      <li><strong>Average: </strong>{weather.tempAve}</li>
                      <li><strong>High: </strong>{weather.tempMax}</li>
                      <li><strong>Low: </strong>{weather.tempMin}</li>
                    </ul>
                  </li>
                  <li><strong>Status: </strong>{weather.conditionDefined} <img style={{height: 15}} src={weather.weatherIcon} /></li>
                </ul>
              </div>
              <div className="small-12 medium-6 columns">
                <img
                  src="https://tr4.cbsistatic.com/hub/i/r/2017/01/20/ee6024e1-e4fc-41f9-86ac-e3218acbd53f/resize/770x/19d4850a976902db6b5bd1c898c41978/svetlana57-seattle.jpg"
                  alt="{city}"
                />
              </div>

            </div>
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    loadingData: state.loadingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCityWeather(city){
      dispatch(get(city))
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(City)