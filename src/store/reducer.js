import { ADD_CITY, LOAD_DATA, DATA_STATUS_HANDLER } from './actions'

// const CreateUid = () => {
//     // Math.random should be unique because of its seeding algorithm.
//     // Convert it to base 36 (numbers + letters), and grab the first 9 characters
//     // after the decimal.
//     return Math.random().toString(36).substr(2, 15);
//  };

const initialState = {
    city: [
        'Seattle',
        'San Jose',
        'Burbank',
        'Dallas',
        'Washington',
        'Chicago',
        'Tulsa',
    ],
    weather: undefined,
    loadingData: true
}

export const reducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_CITY:
            return {...state, city: state.city.concat(action.payload)}
        case LOAD_DATA:
            return {...state, weather: action.payload};
        case DATA_STATUS_HANDLER:
            return { ...state, [action.payload.type]: action.payload.result, displayAlert: action.payload.result};
        default:
            return state;
    }


}
