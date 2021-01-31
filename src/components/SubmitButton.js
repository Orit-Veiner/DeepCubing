import React, { Component } from 'react';
import { Button, Container, Row, Col, Alert } from 'reactstrap';
import axios from 'axios';

class SubmitButton extends Component {

    messages = [];
    validateForm = () => {

        let isValid = true;
        let i = 1;
        this.messages = [];
  
        if (this.props.selectedNetwork === 'Select') {
            this.messages.push(<Alert key={i} color="danger">I cannot be fooled. Please select a network. I can wait.</Alert>);
            isValid = false;
            i++;
        }
        if (!(this.props.batchSizes.length > 0)) {
            this.messages.push(<Alert key={i} color="danger">Please select at least one batch size.</Alert>);
            isValid = false;
            i++;
        }
        if (!(this.props.NumberOfCores.length > 0)){
            this.messages.push(<Alert key={i} color="danger">Please select at least one core.</Alert>);
            isValid = false;
            i++;
        }

        this.props.setMessagesElements(this.messages);

        return isValid;

    }


    submitClick = (props) => {


        const networkNamesMapping = { 
            'Resnet-50': 'RESNET_50',
            'MobileNet-V2': 'MOBILENET_V2',
            'BERT-Large-384': 'BERT',
            'VGG-11': 'VGG_11',
            'DLRM': 'DLRM'
        };

        const isValid = this.validateForm();

        if (isValid) {            
            const numOfBatches = this.props.batchSizes.length;
            const numOfCores = this.props.NumberOfCores.length;

            //Get each core and each batch at a time
            for (let batchIndex = 0; batchIndex < numOfBatches; batchIndex++) {
                let batch = this.props.batchSizes[batchIndex];
                for (let coreIndex = 0; coreIndex < numOfCores; coreIndex++) {
                    let core = this.props.NumberOfCores[coreIndex];
                    
                //Request for backend
                let config = {
                    method: 'post',
                    url: 'http://localhost:8080/benchmark',
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                    data : {
                        model: networkNamesMapping[this.props.selectedNetwork],
                        batchSize: batch,
                        coresNum: core
                    }
                };
    
                axios(config)
                .then(response => {
                    this.props.pushApiResponses(response);
                })
                .catch(error => {
                    console.log('error => ' + error);
                });
                }
            }

            this.props.setApiResults(this.props.apiResponses);
        }
        
    }

    render() {
        return (
            <div className="page-wrapper">
            <div className="container-fluid">
            <Container>
            <Row>
              <br /><br /><br />
              <Col lg="12" className="align-self-center">
              <Button style={{backgroundColor: '#7273ff', fontWeight: 'bold'}} color="black" onClick={this.submitClick}>Initiate Benchmarks</Button>{' '}
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