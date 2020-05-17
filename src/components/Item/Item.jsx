import React from 'react'
import PropTypes from 'prop-types';
import './Item.scss';
import { Button } from 'react-bootstrap';

const Item = props => {
    const { id, car_brand, car_model, car_tenant, car_number } = props.car;
    const { toParking, leaveParking, update } = props;
    return (
        <div className="item-car">
            <div className="item-car__col">
                {id}
            </div>
            <div className="item-car__col">
                {car_brand !== null ? car_brand.name : 'не установлено'}
            </div>
            <div className="item-car__col">
                {car_model !== null ? car_model.name : 'не установлено'}
            </div>
            <div className="item-car__col">
                {car_tenant !== null ? car_tenant.name : 'не установлено'}
            </div>
            <div className="item-car__col flex-col">
                {car_number}
                <div className="item-car__number">
                    <Button variant="micro-neu" onClick={() => toParking(id, update)}><i className="fas fa-car"></i></Button>
                    <Button variant="micro-neu" onClick={() => leaveParking(id, update)} style={{ padding: '0.3rem 0.5rem' }}><i className="fas fa-car-side"></i></Button>
                </div>
            </div>
        </div>
    )
}

Item.propTypes = {
    id: PropTypes.string,
    car_brand: PropTypes.string,
    car_model: PropTypes.string,
    car_tenant: PropTypes.string,
    car_number: PropTypes.string
}

export default Item;
