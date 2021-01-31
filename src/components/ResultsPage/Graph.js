import React, { Component } from 'react';
import { Progress, Container, Row, Col } from 'reactstrap';

class Graph extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <div className="container-fluid"><br /><br />
                    <Container>
                        <Row>
                            <Col lg="12">
                                <Row>
                                    <Col lg="1">
                                        <div>CubeEngine:</div>
                                    </Col>
                                    <Col lg="11">
                                        <Progress color="success" value={this.props.graph1 / 10}>{(this.props.graph1).toFixed(2)}</Progress>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="1">
                                        <div>OpenVino:</div>
                                    </Col>
                                    <Col lg="11">
                                        <Progress color="info" value={this.props.graph2 / 10}>{(this.props.graph2).toFixed(2)}</Progress>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="1">
                                        <div>ONNX:</div>
                                    </Col>
                                    <Col lg="11">
                                        <Progress color="warning" value={this.props.graph3 / 10}>{(this.props.graph3).toFixed(2)}</Progress>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container></div></div>
        );
    }

}

export default Graph;