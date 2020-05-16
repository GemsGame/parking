import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './NewCar.scss';
import Input from '../../components/Input';
import { Button } from 'react-bootstrap';
import { addCar } from '../../actions/cars';
import { getBrands } from '../../actions/brands';
import { getModels } from '../../actions/models';
import { getTenants } from '../../actions/tenants';

import Select from '../../components/Select';

const NewCar = props => {
    const { close, addCar, getBrands, getModels, brands, models, tenants, getTenants } = props;
    const [form, setForm] = useState({car_brand:null, car_model:null, car_tenant:'', car_number:''});

    const handleChange = (event)  => {
        setForm({ ...form, [event.target.id]: event.target.value });
        console.log(form);
    }
    useEffect(() => {
        getBrands();
        getTenants();
    }, []);
    return (
        <div className="new-car">
            <div className="new-car__box">
                <div className="new-car__close-button" onClick={close}>
                    <i className="fas fa-times"></i>
                </div>
                <div className="new-car__content">
                    <div className="new-car__select-buttons">
                        <Select className="neu-select"
                            id='car_brand'
                            options={brands}
                            optionHeader="Выбрать марку..."
                            onChange={(e) => handleChange(e, getModels(e.target.value))} />
                        <Select className="neu-select"
                            id='car_model'
                            options={models}
                            optionHeader="Выбрать модель..."
                            onChange={(e) => handleChange(e)} />

                        <Select className="neu-select"
                            id='car_tenant'
                            options={tenants}
                            optionHeader="Выбрать арендатора..."
                            onChange={(e) => handleChange(e)} />

                        <Input className="neu-input" style={{ textAlign: 'center' }} placeholder="Номер" id="car_number" onChange={(e) => handleChange(e)} />
                    </div>

                    <div className="new-car__send-button">
                        <Button variant="neu" onClick={() => addCar(form)}>Cохранить</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

NewCar.propTypes = {

}


const mapStateToProps = state => ({
    brands: state.brands,
    models: state.models,
    tenants: state.tenants,
})

const mapDispatchToProps = {
    addCar,
    getBrands,
    getModels,
    getTenants
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCar);
