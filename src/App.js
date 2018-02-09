import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import City from './components/City';
import {
  Switch,
  Route
} from 'react-router-dom';
import {get} from './store/actions';
import {connect} from 'react-redux';


const NoMatch = () => (
  <div><h1>Page Not Found...!</h1></div>
)

const Home = () => (
  <div><h1>Welcome!</h1></div>
)

class App extends Component { 
  render() {
    return (
      <div className="App margin-horiz-large margin-vert-large">
        <h1>Hojo Weather Forecast</h1>
        <Nav />
          <div className='card'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/:city' render={(props) => {console.log(props); return <City {...props}/>}} />
              <Route component={NoMatch} />
            </Switch>
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
