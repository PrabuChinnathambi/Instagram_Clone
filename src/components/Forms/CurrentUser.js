import React, { Component } from 'react';
import { connect } from 'react-redux';
import currentuser from '../../redux/reducers/userReducer';


const mapStateToProps = (props) => {
    return {
        currenruser: props.currenruser
    }
    console.log(props.currenruser);
}

export class CurrentUser extends Component {
    
    
    render() {
        return (
            <div>
                <h1>currentuser:{this.props.currenruser}</h1>
            </div>
        )
    }
}

export default connect(mapStateToProps)(CurrentUser);
