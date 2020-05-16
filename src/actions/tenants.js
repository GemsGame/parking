const getTenatsSuccess = (result) => ({
    type:'GET_TENANTS_SUCCESS',
    payload:result,
});
const getTenatsError = (result) => ({
    type:'GET_TENANTS_ERROR',
    payload:result,
})


export const getTenants = () => dispatch => {
    fetch('api/tenants/', {method:'GET'}).then(response => response.json())
    .then(result => dispatch(getTenatsSuccess(result)))
    .catch(error => dispatch(getTenatsError(error)));
}