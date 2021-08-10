import React, { Component } from 'react';
import home_icon from './home_icon.png';
import chat_icon from './chat_icon.png';
import heart_icon from './heart_icon.png';

import './header.css';

export class Header extends Component {
    render() {
        return (
            <div className="header_container">
                <div className="header_img">
                    <img src="https://i.imgur.com/zqpwkLQ.png" />
                </div>
                <div className="search_box">
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="header_icons">
                    <div>
                        <img src={home_icon} alt="home_icon" className="home_icon" />
                    </div>
                    <div>
                        <img src={chat_icon} alt="home_icon" />
                    </div>
                    <div>
                        <img src={heart_icon} alt="home_icon" />
                    </div>
                    <div className="profile_pic">
                        <img src={home_icon} alt="bkj"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
