const tenants = (state = [], action) => {
    switch(action.type) {
        case 'GET_TENANTS_SUCCESS':
            return action.payload;
            default:
                return state;
    }
}

export default tenants;