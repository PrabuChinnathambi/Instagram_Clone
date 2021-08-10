import React, { Component } from 'react';
import './forms.css';
import FileBase from 'react-file-base64';
import Axios from 'axios';
import { createBrowserHistory } from 'history';
import Redux from './Redux';
import Reduxclass from './Reduxclass';
import CurrentUser from './CurrentUser';



const history = createBrowserHistory();

export class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: '',
            isflag2: false

        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmitFrom = (e) => {

        const { creator, title, message, tags, selectedFile } = this.state;
        if (creator != '' & title != '' & message != '' & tags != '') {

            const payloadFroms = {
                creator: creator,
                title: title,
                message: message,
                tags: tags,
                selectedFile: selectedFile
            }
            console.log(payloadFroms);

            Axios.post('http://localhost:5000/post', payloadFroms)
                .then((res) => {
                    console.log(res.data)
                    this.setState({
                        creator: '',
                        title: '',
                        message: '',
                        tags: '',
                        selectedFile: ''
                    })
                    this.props.history.push('/home');
                })
                .catch((error) => {
                    console.log(error);
                })
        }

    }

    convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }

      handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await this.convertBase64(file)
        console.log(base64)
      }



    render() {
        const { creator, title, message, tags, selectedFile } = this.state;
        console.log(creator);
        console.log(selectedFile);

        return (
            <div className="form_part">
                <form>
                    <div>
                        <h2>You can add something...</h2>
                        <h3>What you likes...</h3>
                    </div>
                    <div className="input_part">
                        <input type="text" placeholder="Creator" name="creator" required="" className="input-1" value={creator} onChange={(e) => this.handleInput(e)} />
                        <input type="text" placeholder="Title" name="title" required="" className="input-1" value={title} onChange={(e) => this.handleInput(e)} />
                        <input type="text" placeholder="Message" name="message" required="" className="input-1" value={message} onChange={(e) => this.handleInput(e)} />
                        <input type="text" placeholder="Tags" name="tags" required="" className="input-1" value={tags} onChange={(e) => this.handleInput(e)} />
                        <input ref="file" type="file" name="file"
                            className="upload-file"
                            id="file"
                            onChange={this.handleChangeImage}
                            encType="multipart/form-data"
                            required />

                        <input type="submit" value="Upload" className="btn" onClick={(e) => this.handleSubmitFrom(e)} />
                    </div>
                </form>
                <Redux />
                <Reduxclass />
                <CurrentUser />
            </div >
        )
    }
}

export default Forms
