import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Main.scss';
import Item from '../../components/Item';
import ItemList from '../../components/ItemList';

const Main = props => {
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
