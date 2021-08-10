import React, { Component } from 'react';
import { useContext } from 'react';
import './posts.css'
import emptyPerson from './empty.jpg';
import heart_icon from './icons8-heart-50.png';
import save_icon from './icons8-save-50.png';
import tag_icon from './icons8-sent-50.png';
import chat_icon from './icons8-topic-50.png';
import AppContext from '../AppContext';


export const Posts = (props) => {

    const data = props.data;
    const myContext = useContext(AppContext);
    


    return (
        <div className="post_container">
            
            <div>
                {
                    data.reverse().map((item, index) => {
                        return (
                            <div className="post_card" key={index}>
                                <div className="post_creator">
                                    <img src={emptyPerson} alt="empty" /><h2>{item.creator}</h2>
                                </div>
                                <div className="selected_img">
                                    <img src={item.selectedFile} alt="no" />
                                </div>
                                <div className="icon_center">
                                    <img src={heart_icon} alt="heart" className="heart_icon" />
                                    <img src={chat_icon} alt="heart" className="chat_icon" />
                                    <img src={tag_icon} alt="heart" className="tag_icon" />
                                    <img src={save_icon} alt="heart" className="save_icon" />
                                </div>
                                <div className="post_title">
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="post_message">
                                    <h3>@{item.message}</h3>
                                </div>
                                <div className="post-tags">
                                    <a href="#">
                                    </a>
                                </div>
                                <div>

                                </div>

                            </div>

                        );
                    })
                }
            </div>

        </div>
    )

}

export default Posts

