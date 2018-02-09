import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {get} from '../store/actions';

class City extends Component {
  componentDidMount(){
    const {city} = this.props.match.params
    console.log(city)
    this.props.history.push('/' + city)
    this.props.getCityWeather(city)
  }

  render(){
    const {city} = this.props.match.params
    // this.props.getCityWeather(city)
    // this.props.history.push('/' + city)

    return (
      <div className='row'>
      <h1>{city}</h1>
      <div className='small-12 medium-5 large-3 columns card'>
      {/* {this.props.weather.temp} */}
        </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
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