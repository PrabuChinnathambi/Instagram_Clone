import React, { Component } from 'react';
import { connect } from 'react-redux';
import counter from '../Reducers/counter';
import users from '../../redux/reducers/userReducer';


const mapStateToProps=(props)=> {
    return{
        inc:props.counter
    }
}

export class Reduxclass extends Component {


    render() {

        return (
            <div>
                <h2>counterclass:{this.props.inc}</h2>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Reduxclass);
