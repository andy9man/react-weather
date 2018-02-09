import { LOAD_DATA } from './actions'

// const CreateUid = () => {
//     // Math.random should be unique because of its seeding algorithm.
//     // Convert it to base 36 (numbers + letters), and grab the first 9 characters
//     // after the decimal.
//     return Math.random().toString(36).substr(2, 15);
//  };

const initialState = {

}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_DATA: 
            return {...state, weather: action.payload}
        default:
            return state;
    }


}
