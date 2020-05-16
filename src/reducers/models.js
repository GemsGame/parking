const models = (state = [], action) => {
    switch(action.type) {
        case 'GET_MODELS_SUCCESS':
            return action.payload;
            default:
                return state;
    }
}

export default models;