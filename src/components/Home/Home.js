import React, { Component } from 'react'
import Forms from '../Forms/Forms'
import Header from '../Header/Header'
import Posts from '../Posts/Posts'
import './home.css'
import Axios from 'axios';

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data: [],
            isflag:false
        }
    }

    componentDidMount() {
      
        Axios.get('http://localhost:5000/posts')
            .then((res) => {
                console.log(res.data);
                this.setState({
                    data: res.data
                })
                
            })

    }

    
    
    render() {
        console.log(this.state.data);
        
        return (
            <>
                <div>
                    <Header />
                </div>
                <div className="posts_forms">
                    <div className="posts_card">
                        <Posts data={this.state.data}/>
                    </div>
                    <div>
                        
                    </div>
                    <div className="forms_card">
                        <Forms/>
                    </div>
                </div>

            </>
        )
    }
}

export default Home
