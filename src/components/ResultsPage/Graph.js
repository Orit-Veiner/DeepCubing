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
                            <h3>Benchmark Results</h3>
                        </Col>
                    </Row>
                        <Row>
                            <Col lg="12">
                                <Progress color="success" value={this.props.graph1 * 100}>{this.props.graph1}</Progress>
                                <Progress color="info" value={this.props.graph2}>{this.props.graph2}</Progress>
                                <Progress color="warning" value={this.props.graph3}>{this.props.graph3}</Progress>
                            </Col>
                        </Row>
                    </Container></div></div>
        );
    }

}

export default Graph;