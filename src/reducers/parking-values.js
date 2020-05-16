const parkingValues = (state = false, action) =>  {
    switch(action.type) {
        case 'RULES_CHANGE_PARKING_VALUES':
            return action.payload;
            default:
                return state;
    }
  
  }
  
  export default parkingValues;