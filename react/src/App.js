import React from 'react';
import axios from 'axios';
import Status from './Status';
import { Accordion } from 'react-bootstrap';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = { "status": "default" , "message":"" }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        const emailid = document.querySelector(".form-container .email-id").value;
        
        if (emailid === "") {
            this.setState({
                "status":"failure",
                "message": "Please enter email id."
            });
        }
        else {
            this.setState({ 
                'status':"loading"
            })
        }    
    }

    componentDidUpdate() {
        if (this.state.status === "loading") {
            const emailid = document.querySelector(".form-container .email-id").value;
            axios.post("/subscribe/email",{"emailid":emailid})
            .then( (response) => {
                // console.log(response);
                console.log(response.status);
                if (response.status === 201) {
                    console.log(response.status.code);
                    this.setState({
                        "status":"success",
                        "message": "You have been subscribed successfully."
                    });
                }
            })
            .catch((error) => { 
               if (error.response.status === 400) {
                    this.setState({
                        "status":"failure",
                        "message": "This email id is already in use."
                    });
                }

                else {
                    this.setState({
                        "status":"failure",
                        "message": `Request failed. Server returned ${error.response.status} error code.`
                    });
                }


            });
        }
    }

    validateEmail() {
        console.log("EVENT FIRED");
        
    }

    render() { 
        return(
            <div class = "form-container">
                <label>Subscribe here </label> 
                <input class="email-id" placeholder="Enter Email Id"></input>
                <button class="submit-btn" onClick={this.onSubmit}>SIGN ME UP</button>

                <Status status={this.state.status} message={this.state.message}></Status>
            </div>

            

        );
    }


}
