import { combineReducers } from 'redux';
import cars from './cars';
import brands from './brands';
import models from './models';
import tenants from './tenants';
import onParking from './on-parking';
import filter from './filter';
import carValues from './car-values';
import parkingValues from './parking-values';
export const rootReducer = combineReducers({
  cars,
  brands,
  models,
  tenants,
  onParking,
  filter,
  carValues,
  parkingValues,
});

