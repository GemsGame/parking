const getBrandsSuccess = (response) => ({
    type:'GET_BRANDS_SUCCESS',
    payload:response
});
const getBrandsError = (response) => ({
    type:'GET_BRANDS_ERROR',
    payload:response
});
export const getBrands = () => dispatch => {
    fetch('api/cars/brands/', {method:'GET'}).then(response => response.json())
    .then(result => dispatch(getBrandsSuccess(result)))
    .catch(error => dispatch(getBrandsError(error)));
}