import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import {
  Switch,
  Route
} from 'react-router-dom';
import {get} from './store/actions';
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount(){
    this.props.getCityWeather("London")
  }
  
  render() {
    console.log(this.props.weather)
    return (
      <div className="App margin-horiz-large margin-vert-large">
        <h1>Hojo Weather Forecast</h1>
        <Nav />
          <div className='card'>
            
          </div>
        

      </div>
    );
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


export default connect(mapStateToProps, mapDispatchToProps)(App)
