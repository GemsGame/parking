import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllCars } from '../../actions/cars';
import { onParking, toParking, leaveParking } from '../../actions/onParking';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import './itemList.scss';

const ItemList = ({ getAllCars: getCars, onParking: getCarsOnParking, cars, toParking, leaveParking }) => {

  
    useEffect(() => {
        getCars();
        getCarsOnParking();
    }, []);
    
  

  
    return (
        <>
       
            <div className="item-car">
                <div className="item-car__col">id</div>
                <div className="item-car__col">Марка</div>
                <div className="item-car__col header">Модель</div>
                <div className="item-car__col header">Арендатор</div>
                <div className="item-car__col header">Номер</div>
            </div>
            {cars.map((item, i) => <Item car={item} key={i} update={getCarsOnParking} toParking={toParking} leaveParking={leaveParking}/>)}
        </>);

}

ItemList.propTypes = {

};

const mapStateToProps = state => ({
    cars: state.cars.filter(item => {
        if (state.parkingValues === false) {
            if (item[state.carValues]) {

                if (item[state.carValues].name) {
                    return item[state.carValues].name.includes(state.filter);
                } else {
                    return item[state.carValues].includes(state.filter);
                }
            }
            if (state.filter.length === 0) {
                return item;
            }
        } else {
            let result = [];
            state.onParking.map(i => {
                if (i.car === item.id) {
                    result.push(item);
                };
            });
            if (result.length > 0) {
                if (result[0][state.carValues].name) {
                    return result[0][state.carValues].name.includes(state.filter);
                } else return result[0];
            }
        }


    }),
})
const mapDispatchToProps = {
    getAllCars,
    onParking,
    toParking,
    leaveParking
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
 