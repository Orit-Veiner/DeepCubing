import React, { useState  } from 'react';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

const NetworksSelection = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const selectedItem = (itemName) => {
        props.setNetwork(itemName);
    }

        return (
            <div className="page-wrapper">
            <div className="container-fluid">
            <Container>
                <Row>
                <Col lg="3">Networks: </Col> 
              <Col lg="9">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
            {props.selectedNetwork}
        </DropdownToggle>
        <DropdownMenu>
            {props.netwroksNames.map((item, i) =>
                <DropdownItem key={i} onClick={() => selectedItem(item)}>{item}</DropdownItem>
            )}
        </DropdownMenu>
        </Dropdown>
              </Col>                             
           </Row>                                                               
            </Container>
                
            </div>
               
            </div>
            
           
        );
}

export default NetworksSelection;