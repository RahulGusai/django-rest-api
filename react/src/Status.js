import React from 'react';
import Spinner from 'react-bootstrap/Spinner';


export default class Status extends React.Component {
    constructor(props) {
        super(props);
        

    }

    render() {
        if (this.props.status === "default") {
            return null;
        }

        else{
            if (this.props.status === "loading") {
                return(
                    <div class="status-wrapper">
                        <Spinner animation="border" role="status"></Spinner>
                        <label class="loading">loading</label>
                    </div>
                );  
            }

            else if (this.props.status === "success") {
                return(
                    <div class="status-wrapper">
                        <i class="fa fa-check success-icon" aria-hidden="true"></i>
                        <label class="success-info">{this.props.message}</label>
                    </div>
                );
            }

            else if (this.props.status === "failure") {
                return(
                    <div class="status-wrapper">
                        <i class="fas fa-exclamation-triangle failure-icon"></i>
                        <label class="error-info">{this.props.message}</label>
                    </div>
                );  
            }
    

        }
    }
}