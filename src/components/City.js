import React, { Component } from 'react';
import {connect} from 'react-redux'
import {get} from '../store/actions';
import noImage from '../assets/no-image-available.jpg';


const cityImageHelper = (city, cityArray) => {
  const cityObj = cityArray.find(cityObj => cityObj.name === city);
  console.log("CITY IMAGE HELPER...");
  console.log(cityObj)
  return (cityObj === undefined) ? noImage : cityObj.image === "" ? noImage : cityObj.image;
}
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
    const {weather, loadingData, loadingError} = this.props;
    return (
      <div>
        {
          loadingData ?
            <div>
              <h1 className="margin-bottom-large">{city} </h1>
              <div className="row text-center">
                <div className="small-12 medium-6 columns">
                  <span className="loading-indicator medium"></span>
                </div>
              </div>
            </div>
          :
            loadingError ?
              <div>
                <h1 className="margin-bottom-large">{city}</h1>
                <div className="row text-center">
                  <div className="small-12 columns">
                    <h2 style={ {color: 'red', fontWeight: 'bold'} }>This City Was Not Found</h2>
                    <p><em>Please select from a city above</em></p>
                  </div>
                </div>
              </div>

              :
                  <div>
                    <h1 className="margin-bottom-large">
                      {city}
                      <img
                        alt={weather.conditionDefined}
                        title={weather.conditionDefined}
                        src={weather.weatherIcon}
                      />
                    </h1>
                    <div className="row margin-horiz-small margin-vert-small">

                      <div className="small-12 medium-4 columns">
                        <ul style={ {listStyle: 'none'} }>
                          <li className="city-details"><strong>Humidity: </strong>{weather.humidity}%</li>
                          <li className="city-details">
                            <strong>Temperature: </strong>
                            <ul style={ {listStyle: 'none', marginTop: 20} }>
                              <li className="city-details"><strong>Average: </strong>{weather.tempAve}&deg;</li>
                              <li className="city-details"><strong>High: </strong>{weather.tempMax}&deg;</li>
                              <li className="city-details"><strong>Low: </strong>{weather.tempMin}&deg;</li>
                            </ul>
                          </li>
                          <li className="city-details"><strong>Status: </strong>{weather.condition}</li>
                        </ul>

                      </div>
                      <div className="small-12 medium-8 columns">
                        <img
                          src={cityImageHelper(city, this.props.city)}
                          alt={city}
                        />
                      </div>

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
    city: state.city,
    loadingData: state.loadingData,
    loadingError: state.loadingError
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