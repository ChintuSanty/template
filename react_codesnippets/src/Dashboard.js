import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import FormFeilds from './components/Forms/FormFeilds';

const Dashboard = () => {
    return (
        <Container fluid>
            <Row>
                <Col md="2" className="p-0">
                    <ListGroup>
                        <ListGroupItem>Forms</ListGroupItem>
                        <ListGroupItem>Menu Item 2</ListGroupItem>
                        <ListGroupItem>Menu Item 3</ListGroupItem>
                        <ListGroupItem>Menu Item 4</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md="10">
                   <FormFeilds />
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;
