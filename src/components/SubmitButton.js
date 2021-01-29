import React, { Component } from 'react';
import { Button, Container, Row, Col, Alert } from 'reactstrap';
import axios from 'axios';

class SubmitButton extends Component {

    messages = [];
    validateForm = () => {

        let isValid = true;
        let i = 1;
        this.messages = [];
  
        if (this.props.selectedNetwork === 'select') {
            this.messages.push(<Alert key={i} color="danger">Please select network</Alert>);
            isValid = false;
            i++;
        }
        if (!(this.props.batchSizes.length > 0)) {
            this.messages.push(<Alert key={i} color="danger">Please select at least one batch size</Alert>);
            isValid = false;
            i++;
        }
        if (!(this.props.NumberOfCores.length > 0)){
            this.messages.push(<Alert key={i} color="danger">Please select at least one core</Alert>);
            isValid = false;
            i++;
        }

        this.props.setMessagesElements(this.messages);

        return isValid;

    }

    submitClick = (props) => {

        const isValid = this.validateForm();

        if (isValid) {
            axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                console.log(response);
                this.props.setApiResults(response);
            })
            .catch(error => {
                console.log('error => ' + error);
            })
        }
        
    }

    render() {
        return (
            <div className="page-wrapper">
            <div className="container-fluid">
            <Container>
            <Row>
          
              <Col lg="12" className="align-self-center">
              <Button color="success" onClick={this.submitClick}>Initiate Benchmark</Button>{' '}
              </Col> 
       
            </Row>
            </Container>
            <br />
            {this.props.validationMessagesElements}
            </div>
            </div>
        );
    }
}

export default SubmitButton;