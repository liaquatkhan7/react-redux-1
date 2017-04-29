import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component{
    render(){
        if(!this.props.user){
            return(
                <h4>Select a User</h4>
            )
        } 
        return(
            <div>
                <h2>{ this.props.user.first } { this.props.user.last }</h2>
                <h3>{ this.props.user.age}</h3>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetails)