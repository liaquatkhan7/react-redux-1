import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieDetails extends Component {
    render(){
        if(!this.props.movie){
            return <h1>Select Movie</h1>
        }
        return(
            <div>

            </div>
        )
    }
}

function mapStateToProps (m){
    return {
        movie: m.activeUser
    }
}