import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Search.scss';
import Input from '../../components/Input';
import Select from '../../components/Select/Select';
import Portal from '../../components/Portal';
import Modal from '../../components/Modal';
import useModal from '../../hooks/useModal';
import NewCar from '../NewCar';

const Search = ({ filterChange, ChangeCarValue, ChangeParkingValue, parkingValues }) => {
const { isOpen, open, close} = useModal();

    return (
        <Container fluid>
            <Row className='search-row'>
                <Col className='search'>
                    <div className="search__sort-inputs">
                        <Input className="neu-input" placeholder="Поиск.." onChange={e => filterChange(e.target.value)} />
                        <Select className="neu-select"
                            options={[{name:'Марка', id:'car_brand'}, {name:'Модель', id:'car_model'}, {name:'Арендатор', id:'car_tenant'}, {name:'Номер', id:'car_number'}]}
                            onChange={e => ChangeCarValue(e.target.value)} />
                      <Button variant="neu-black" onClick={() => ChangeParkingValue(!parkingValues)}><i className="fas fa-car"></i></Button>
                    </div>
                    <div className="add-car">
                        <Portal>
                            <Modal isOpen={isOpen}>
                              <NewCar close={close()}/>
                            </Modal>
                        </Portal>
                        <Button variant="neu" onClick={open()}>Добавить автомобиль</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

Search.propTypes = {

}
const mapStateToProps = state => ({
    parkingValues: state.parkingValues,
})
const mapDispathToProps = dispatch => {
    return {
        filterChange: text => dispatch({ type: 'FILTER_CHANGE', payload: text }),
        ChangeCarValue: text => dispatch({ type: 'RULES_CHANGE_CAR_VALUES', payload: text }),
        ChangeParkingValue: text => dispatch({ type: 'RULES_CHANGE_PARKING_VALUES', payload: text }),
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Search);