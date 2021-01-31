import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Header extends Component {

    render() {
        return (
            <div className="topbar" id="top" style={{backgroundColor: '#7273ff'}}>
                <div className="header6">
                    <Container>
                        <Row>
                            <Col lg="3"></Col>
                            <Col lg="6">
                                <h1>DeepCubing My Heart Out</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }

}

export default Header;