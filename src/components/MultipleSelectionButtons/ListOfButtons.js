import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonSelection from './ButtonSelection.js';
import './ButtonSelection.css';

class ListOfButtons extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <div className="container-fluid">
                    <Container>
                        <Row>
                            <Col lg="3">{this.props.title}</Col>
                            <Col lg="9">
                                {this.props.buttonsValues.map((item, i) =>
                                    <ButtonSelection
                                        key={i} value={item}
                                        addButtonSelection={this.props.addButtonSelection}
                                        removeButtonSelection={this.props.removeButtonSelection}
                                        type={this.props.type}
                                    />
                                )}
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>



        );
    };
}

export default ListOfButtons;