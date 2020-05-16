import { store } from 'react-notifications-component';

const onParkingSuccess = (result) => ({
    type: 'GET_ON_PARKING_SUCCESS',
    payload: result
});
const onParkingError = (result) => ({
    type: 'GET_ON_PARKING_ERROR',
    payload: result
});

const addToParkingSuccess = (result) => ({
    type: 'ADD_CAR_TO_PARKING_SUCCESS',
    payload: result
});
const addToParkingError = (result) => ({
    type: 'ADD_CAR_TO_PARKING_ERROR',
    payload: result
});

const leaveParkingSuccess = (result) => ({
    type: 'LEAVE_PARKING_SUCCESS',
    payload: result
});
const leaveParkingError = (result) => ({
    type: 'LEAVE_PARKING_ERROR',
    payload: result
});
export const onParking = () => dispatch => {
    fetch('api/stat/here/').then(response => response.json())
        .then(result => dispatch(onParkingSuccess(result)))
        .catch(err => dispatch(onParkingError(err)));
}


export const toParking = (carId, callback) => dispatch => {
    let date = new Date();
    fetch('api/stat/add/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({"time_in": date.toLocaleTimeString(), "days": date.toLocaleDateString(), "last_flag": false, "car": carId})
    }).then(response => response.json()).then(result => {
   
        store.addNotification({
            title: "Автомобиль заехал на парковку!",
            message: `Время: ${date.toLocaleTimeString()}`,
            type: "success",
            insert: "top",
            container: "bottom-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 7000,
                onScreen: false,
                showIcon: true,
            }
        });
        dispatch(addToParkingSuccess(result));
        callback();

    }).catch(error => dispatch(addToParkingError(error)));

}

export const leaveParking = (carId, callback) => dispatch => {
    let date = new Date();
    fetch('api/stat/add/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({"time_out": date.toLocaleTimeString(), "last_flag": true, "car": carId})
    }).then(response => response.json()).then(result => {
   
        store.addNotification({
            title: "Автомобиль покинул парковку!",
            message: `Время: ${date.toLocaleTimeString()}`,
            type: "warning",
            insert: "top",
            container: "bottom-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 7000,
                onScreen: false,
                showIcon: true,
            }
        });
        dispatch(leaveParkingSuccess(result));
        callback();
    }).catch(error => {
        store.addNotification({
            title: "Автомобиля нет на парковке!",
            message: `Уже уехал :)`,
            type: "danger",
            insert: "top",
            container: "bottom-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 7000,
                onScreen: false,
                showIcon: true,
            }
        });
        dispatch(leaveParkingError(error));
    });

}