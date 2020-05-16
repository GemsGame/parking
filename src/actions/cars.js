import { store } from 'react-notifications-component';

const getAllCarsSuccess = (result) => ({
    type: 'GET_ALL_CARS_SUCCESS',
    payload: result
});

const getAllCarsError = (result) => ({
    type: 'GET_ALL_CARS_ERROR',
    payload: result
});


const addCarSuccess = (result) => ({
    type: 'ADD_CAR_SUCCESS',
    payload: result
});

const addCarError = (result) => ({
    type: 'ADD_CAR_ERROR',
    payload: result
});

export const getAllCars = () => dispatch => {
    fetch('api/cars/', {
        method: 'GET',
    }).then(response => response.json()).then(result => dispatch(getAllCarsSuccess(result)))
        .catch(error => dispatch(getAllCarsError(error)));
}


export const addCar = (form) => dispatch => {
    fetch('api/cars/add/',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(form)
        }).then(response => response.json()
        ).then(result => {

            if(Object.prototype.hasOwnProperty.call(result, 'id')) {
            store.addNotification({
                title: "Автомобиль добавлен!",
                message: " ",
                type: "success",
                insert: "top",
                container: "bottom-center",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: false,
                    showIcon: true,
                }
            });
            dispatch(addCarSuccess(result))

        } else {
            let err = Object.keys(result).map(item =>  {
                
                return `${item} - ${result[item][0]}`;
            }).toString();
            store.addNotification({
                title: "Ошибка! Проверьте форму",
                message: err,
                type: "danger",
                insert: "top",
                container: "bottom-center",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: false,
                    showIcon: true,
                }
            });
            
        
            dispatch(addCarError(result));
        }
        })
        .catch(error => {

            store.addNotification({
                title: "Ошибка! Проверьте форму",
                message: error,
                type: "danger",
                insert: "top",
                container: "bottom-center",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: false,
                    showIcon: true,
                }
            });

            dispatch(addCarError(error));
        })
}
