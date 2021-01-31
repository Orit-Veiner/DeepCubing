import React, { Component } from 'react';
import {  Container, Row, Col } from 'reactstrap';
import NetworksSelection from './NetworksSelection.js';
import SubmitButton from './SubmitButton.js';
import './Form.css';
import ListOfButtons from './MultipleSelectionButtons/ListOfButtons.js';
import Graph from './ResultsPage/Graph.js';
import Header from './header.js';

class Form extends Component {
    render() {
        const networkNamesMapping = { 
        'Resnet-50': 'RESNET_50',
        'MobileNet-V2': 'MOBILENET_V2',
        'BERT-Large-384': 'BERT',
        'VGG-11': 'VGG_11',
        'DLRM': 'DLRM'
    };

    const networkNames = Object.keys(networkNamesMapping);

        const batchSizesNames = [ 
            1,
            4,
            8,
            16,
            32,
            64
        ];

        const maxNumOfCores = 12;
        const numberOfCoresNames = [...Array(maxNumOfCores+1).keys()].slice(1);;
        const resultsTitle = <h3>Benchmark Results</h3>;

        return (
            <div id="main-wrapper">
            <Header /><br /><br />
                <div className="page-wrapper">
                    <div className="container-fluid">
                        <div className="static-slider-head">
                            <Container>
                            <Row className="justify-content-center">
                            <Col lg="12">
                                <NetworksSelection 
                                networkNames={networkNames}
                                setNetwork={this.props.setNetwork}
                                selectedNetwork={this.props.selectedNetwork}
                                />
                            </Col>
                            </Row>

                            <Row>
                                <Col lg="12">
                             
                                    <ListOfButtons 
                                        buttonsValues={batchSizesNames}
                                        addButtonSelection={this.props.addButtonSelection}
                                        removeButtonSelection={this.props.removeButtonSelection}
                                        type="batch"
                                        title="Batch Sizes:"
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col lg="12">
                             
                                    <ListOfButtons 
                                        buttonsValues={numberOfCoresNames}
                                        addButtonSelection={this.props.addButtonSelection}
                                        removeButtonSelection={this.props.removeButtonSelection}
                                        type="core"
                                        title="Number of Cores:"
                                    />
                                </Col>
                            </Row>

                            <SubmitButton
                            {...this.props} />
                            
                            {this.props.apiResults.length > 0 ? resultsTitle : null}
                            {this.props.apiResults.length > 0 ?
                                this.props.apiResults.map((response, i) => {
                                    return ( 
                                    <Graph 
                                        key={i}
                                        graph1={response.data[0]}
                                        graph2={response.data[1]}
                                        graph3={response.data[2]}
                                    />)                          
                                })
                                 : null}
                        </Container>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;