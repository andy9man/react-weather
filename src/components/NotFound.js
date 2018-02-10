import React, { Component } from 'react';



class NotFound extends Component {

    render(){

        return(
            <div>
                <h1 className="margin-bottom-large">City Not Found</h1>
                <div className="row margin-horiz-small margin-vert-small">

                    <div className="small-12 medium-6 columns">
                        Please choose another city
                    </div>
                </div>

            </div>
        )
    }
}

export default NotFound