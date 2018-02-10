import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addCity} from '../store/actions';




class AddCity extends Component {
    constructor(props){
        super(props)

        this.state = {
            newCity: ''
        }
    }

    render(){

        return(
            <div>
                <h1 className="margin-bottom-large">Add a City</h1>
                <div className="row margin-horiz-small margin-vert-small">

                    <div className="small-12 medium-6 columns">
                        <input id='city' type='text' onInput={(e) => this.setState({newCity: e.target.value})} />
                    
                        <button className="button btn-cta " onClick={() => {
                            this.props.appAddCity(this.state.newCity);
                        }}>Add City</button>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      city: state.city
    }
  }

const mapDispatchToProps = (dispatch) => {
    return{
        appAddCity(cityName){
            dispatch(addCity(cityName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCity)