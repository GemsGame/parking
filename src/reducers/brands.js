const brands = (state = [], action) => {
     switch(action.type) {
         case 'GET_BRANDS_SUCCESS':
             return action.payload;
             default:
                 return state;
     }
}

export default brands;