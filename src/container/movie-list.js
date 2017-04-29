import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import selectedMovie from '../action/index-action'
class MovieList extends Component {

    createListItem(){
        return this.props.movie.map((mov) => {
            return <li 
            key={mov.id}
            onClick={ () => { this.props.MovieList(mov) } }> 
                {mov.movieName}
             </li>
        })
    }
    
    render(){
        return(
            <div>
                <ul>
                    {this.createListItem()}
                </ul>
            </div>
        )
    }

}

function mapStateToProps (state) {
    return {
        movie: state.movie
    }
}

function matchDispatchToProps (dispatch){
    return bindActionCreators( { MovieList: MovieList }, dispatch )
}

export default connect(mapStateToProps, matchDispatchToProps)(MovieList)