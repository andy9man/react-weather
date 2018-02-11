import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addCity, FLAG_RESET} from '../store/actions';




class AddCity extends Component {
    constructor(props){
        super(props)

        this.state = {
            newCity: '',
            newCityImage: '',
        }
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        this.props.flagReset();
    }

    handleInput(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        const {newCity, newCityImage} = this.state;
        this.props.addSuccess && this.props.history.push(`/${this.state.newCity}`)
        return(
            <div>
                <h1 className="margin-bottom-large">Add a City</h1>
                <div className="row margin-horiz-small margin-vert-small">

                    <div className="small-12 medium-6 columns">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            console.log(`Attempting to add a new city...\n City: ${newCity}\nImage: ${newCityImage}`)
                            this.props.appAddCity(newCity, newCityImage);
                        }}>

                            <div className="row">
                                <div className="columns md-text-field with-floating-label">
                                    <input id='city' name="newCity" type='text' onInput={this.handleInput} required />
                                    <label htmlFor="city">City Name</label>
                                    {this.props.addError && <span className="error"><strong>{this.state.newCity}</strong> was not found</span>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="columns md-text-field with-floating-label">
                                    <input id="cityImage" name="newCityImage" type="text" onInput={this.handleInput} />
                                    <label htmlFor="cityImage">City Image URL</label>
                                </div>
                            </div>

                            <button className="button btn-cta ">Add City</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      city: state.city,
      addSuccess: state.addCitySuccess,
      addError: state.addCityError
    }
  }

const mapDispatchToProps = (dispatch) => {
    return{
        appAddCity(cityName, cityImage){
            dispatch( addCity(cityName, cityImage) );
        },
        flagReset() {
            dispatch( {type: FLAG_RESET} );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCity)