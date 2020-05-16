const filter = (state = [], action) => {
    switch (action.type) {
        case 'FILTER_CHANGE':
            return action.payload;
        default:
            return state;
    }
}

export default filter;