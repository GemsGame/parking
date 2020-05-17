import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Main.scss';
import ItemList from '../../components/ItemList';

const Main = () => {
    return (
        <Container fluid>
            <Row className="table-row">
                <Col className="table">
                 <ItemList/>
                </Col>
            </Row>
        </Container>
    )
}
export default Main;
