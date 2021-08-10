import React, { Component } from 'react';
import './login.css'
import { createBrowserHistory } from 'history';
import Axios from 'axios';
import { useContext } from 'react';
import AppContext from '../AppContext';

const history = createBrowserHistory();
export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSignup = (e) => {
        this.props.history.push('/register');
    }
    handleChangeLogin = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = () => {
        try {
            const { email, password } = this.state;

            const payloads = {
                email: email,
                password: password
            }

            Axios.post('http://localhost:5000/login', payloads)
                .then((data) => {
                    console.log(data);
                    this.props.history.push('/home');
                })

            

        } catch (error) {
            console.log({ error })
        }



    }
    render() {
        const { email, password } = this.state;
        return (
            <div>
                <div className="wrapper">
                    <div className="main-content_login">
                        <div className="header">
                            <img src="https://i.imgur.com/zqpwkLQ.png" />
                        </div>
                        <div className="l-part">
                            <input type="text" placeholder="Username" className="input-2" name="email" onChange={(e) => this.handleChangeLogin(e)} />
                            <div className="overlap-text">
                                <input type="password" placeholder="Password" className="input-2" name="password" onChange={(e) => this.handleChangeLogin(e)} />
                                <a href="#">Forgot?</a>
                            </div>
                            <input type="button" value="Log in" className="btn" onClick={this.handleSubmit} />
                        </div>
                    </div>
                    <div className="sub-content">
                        <div className="s-part">
                            Don't have an account?<a onClick={this.handleSignup}>Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
