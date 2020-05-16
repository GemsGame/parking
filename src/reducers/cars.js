const cars = (state = [], action) => {
    switch(action.type) {
        case "GET_ALL_CARS_SUCCESS":
            return action.payload;
            case "GET_ALL_CARS_ERROR":
                return state;
                default:
                    return state;
    }
}

export default cars;