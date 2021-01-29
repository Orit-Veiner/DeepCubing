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
        const netwroksNames = [ 
        'Resnet-50',
        'MobileNet-V2',
        'BERT-Large-384',
        'VGG-11',
        'DLRM'];

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
                                netwroksNames={netwroksNames}
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

                            {this.props.apiResults !== null ? 
                                <Graph 
                                    graph1={0.6}
                                    graph2={50.9}
                                    graph3={75.2}
                                /> : null}
                        </Container>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;