const getModelsSuccess = (result) => ({
    type:'GET_MODELS_SUCCESS',
    payload: result
});
const getModelsError= (result) => ({
    type:'GET_MODELS_ERROR',
    payload: result
})

export const getModels = (id) => dispatch => {
    fetch(`api/cars/brands/${id}/`, {method:'GET'}).then(response => response.json())
    .then(result => dispatch(getModelsSuccess(result)))
    .catch(err => dispatch(getModelsError(err)));
}