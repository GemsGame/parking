const carValues = (state = 'car_brand', action) =>  {
  switch(action.type) {
      case 'RULES_CHANGE_CAR_VALUES':
          return action.payload;
          default:
              return state;
  }

}

export default carValues;