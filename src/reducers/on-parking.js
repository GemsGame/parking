const onParking = (state = [], action) => {
    switch(action.type) {
        case 'GET_ON_PARKING_SUCCESS':
            return action.payload;
            default:
                return state;
    }
}
export default onParking;