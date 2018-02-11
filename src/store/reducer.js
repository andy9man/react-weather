import { ADD_CITY, LOAD_DATA, DATA_STATUS_HANDLER, FLAG_RESET } from './actions'

// const CreateUid = () => {
//     // Math.random should be unique because of its seeding algorithm.
//     // Convert it to base 36 (numbers + letters), and grab the first 9 characters
//     // after the decimal.
//     return Math.random().toString(36).substr(2, 15);
//  };

const initialState = {
    city: [
        {name: 'Seattle', image: 'https://images.pexels.com/photos/37350/space-needle-seattle-washington-cityscape.jpg'},
        {name: 'San Francisco', image: 'https://images.pexels.com/photos/281184/pexels-photo-281184.jpeg'},
        {name: 'Burbank', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Burbank_media_district_from_Griffith_Park_2015-11-07.jpg/1200px-Burbank_media_district_from_Griffith_Park_2015-11-07.jpg'},
        {name: 'Dallas', image: 'https://fortunedotcom.files.wordpress.com/2016/06/texas-dallas-gettyimages-76207406.jpg'},
        {name: 'Washington', image: 'https://fthmb.tqn.com/SJ7ydb7TT-3A0OVYr7Z3V9uHO4o=/960x0/filters:no_upscale()/capitol-building-170402241-58ddb7bf5f9b58468374c174.jpg'},
        {name: 'Chicago', image: 'https://images.frmonline.com/sites/frc/pct/chicago/moving-to-living-in-chicago-784.jpg'},
        {name: 'Tulsa', image: 'https://images.fineartamerica.com/images-medium-large-5/riverside-view-of-tulsa-oklahoma-skyline-gregory-ballos.jpg'},
    ],
    weather: undefined,
    loadingData: true,
    addCityError: false,
    addCitySuccess: false
}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_CITY:
            return {...state, city: state.city.concat([action.payload])}
        case LOAD_DATA:
            return {...state, weather: action.payload};
        case DATA_STATUS_HANDLER:
            return { ...state, [action.payload.type]: action.payload.result, displayAlert: action.payload.result};
        case FLAG_RESET:
            return { ...state, loadingData: true, addCityError: false, addCitySuccess: false };
        default:
            return state;
    }


}
