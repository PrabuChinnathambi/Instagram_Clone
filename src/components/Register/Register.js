import React, { Component } from 'react'
import { createBrowserHistory } from 'history';
import './register.css';
import Axios from 'axios';

const history = createBrowserHistory();

export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            fullname: "",
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }
    handleSubmit = () => {
        const { email, fullname, username, password } = this.state;
        const payload = {
            email: email,
            fullname: fullname,
            username: username,
            password: password
        }
        Axios.post('http://localhost:5000/register', payload)
            .then((data) => {
                console.log(data);
                this.props.history.push('/login');
            })
    }
    handleAlert = () => {
        alert("Oops....!!!! This feature is not implemented... Sorry for this... Thank You");
    }

    render() {
        const { email, fullname, username, password } = this.state;

        return (
            <div>
                <div className="register">
                    <div className="main-contents">
                        <div className="header">
                            <img src="https://i.imgur.com/zqpwkLQ.png" />
                        </div>
                        <div className="text_style">
                            <h5>Sign up to see photos and videos from your friends.</h5>
                        </div>
                        <div className="facebook_login_btn">
                            <input type="button" value="Log in with Facebook" className="btn" onClick={this.handleAlert} />
                        </div>
                        <div className="K-1uj">
                            <div className="s311c"></div>
                            <div className="_0tv-g">or</div>
                            <div className="s311c"></div>
                        </div>
                        <div className="l-part">
                            <input type="text" placeholder="Email" className="input-1" name="email" onChange={(e) => this.handleChange(e)} />
                            <input type="text" placeholder="Full Name" className="input-1" name="fullname" onChange={(e) => this.handleChange(e)} />
                            <input type="text" placeholder="User Name" className="input-1" name="username" onChange={(e) => this.handleChange(e)} />
                            <input type="password" placeholder="Password" className="input-1" name="password" onChange={(e) => this.handleChange(e)} />

                            <input type="button" value="Sign Up" className="btn" onClick={this.handleSubmit} />
                        </div>
                    </div>
                    <div className="sub-content">
                        <div className="s-part">
                            Have an account?<a onClick={() => this.props.history.push('/login')}>Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
