import axios from 'axios';

export const API_URL = "http://api.openweathermap.org/data/2.5/weather";
export const DATA_STATUS_HANDLER = 'DATA_STATUS_HANDLER';
export const LOAD_DATA = 'LOAD_DATA';
export const ADD_CITY = 'ADD_CITY';
export const FLAG_RESET = "FLAG_RESET";

// export const addCity = (payload) => {
//   return {type: ADD_CITY, payload}
// }

export const dataResultHandler = (actionType, stateObjectType, stateObjectResult) => {
  return {
    type: actionType,
    payload: {
      type: stateObjectType,
      result: stateObjectResult
    }
  }
}

export const get = (city, units = 'imperial') => {
  return (dispatch, getState, url) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingError', false) );
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
    console.log(`Getting Data... ${url}`);
    units = units ? 'imperial' : 'metric'

    axios.get(url,
      {params: {
        APPID: '341b9c981559718765cdcfba706783db',
        units: units,
        q: `${city}`
      }}
    )
      .then( (response) => {
        //setTimeout( () => { dispatch( {type: LOAD_DATA, payload: products} ) }, 1);
        const {data: {main, weather}} = response
        console.log("response")
        console.log(response)
        const returnObj = {
          cityName: city,
          temp: Math.round(main.temp),
          tempAve: Math.round((main.temp_min+main.temp_max)/2),
          tempMin: Math.round( main.temp_min ),
          tempMax: Math.round( main.temp_max ),
          conditionDefined: weather[0].description,
          condition: weather[0].main,
          humidity: main.humidity,
          weatherIcon: `http://openweathermap.org/img/w/${weather[0].icon}.png`
        }
        dispatch( {type: LOAD_DATA, payload: returnObj} );
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', false) );
      })
      .catch( error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            //  console.log(error.response.data.message);
            //  console.log(error.response.status);
            //  console.log(error.response.headers);
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in loading data...");
        console.log(error);
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingError', true) );
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', false) );

    })
  }
}

export const addCity = (city, cityImage) => {
  return (dispatch, getState, url) => {
    console.log(`Checking if city exists... ${url}`);

    axios.get(url,
      {params: {
        APPID: '341b9c981559718765cdcfba706783db',
        units: 'imperial',
        q: `${city}`
      }}
    )
      .then( (response) => {
        console.log(`${city} was found... adding it to menu`);
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'addCitySuccess', true) );
        dispatch( {type: ADD_CITY, payload: {name: city, image: cityImage} } );
        // dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', false) );
      })
      .catch( error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            //  console.log(error.response.data.message);
            //  console.log(error.response.status);
            //  console.log(error.response.headers);
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in loading data...");
        console.log(error);
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'addCityError', true) );



    })
  }
}

// export const edit = (id, obj) => {
//   return (dispatch, getState, url) => {
//     console.log(`Updating Data... ${id}`);
//     console.log(ProductObj);
//     axios.put(`${url}/${id}`, obj)
//       .then( (response) => {
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'editSuccess', result: true}} );
//       })
//       .catch( error => {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             //  console.log(error.response.data.message);
//             //  console.log(error.response.status);
//             //  console.log(error.response.headers);
//             console.log(`Error Response: ${error.response}`);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//           // http.ClientRequest in node.js
//           console.log(`Error Request: ${error.request}`);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log(`General Error: ${error.message}`);
//         }
//         console.log("Error has occured in updating data...");
//         console.log(error);
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'editError', result: true}} );
//     })
//   }
// }

// export const delete = (id) => {
//   return (dispatch, getState, url) => {
//     console.log(`Deleting Data... ${id}`);
//     axios.delete(`${url}/${id}`)
//       .then( (response) => {
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'deleteSuccess', result: true}} );
//       })
//       .catch( error => {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             //  console.log(error.response.data.message);
//             //  console.log(error.response.status);
//             //  console.log(error.response.headers);
//             console.log(`Error Response: ${error.response}`);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//           // http.ClientRequest in node.js
//           console.log(`Error Request: ${error.request}`);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log(`General Error: ${error.message}`);
//         }
//         console.log("Error has occured in deleteing data...");
//         console.log(error);
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'deleteError', result: true}} );
//     })
//   }
// }

// export const add = (obj) => {
//   return (dispatch, getState, url) => {
//     console.log('Adding Data...');
//     console.log(obj);
//     axios.post(url, obj)
//       .then( response => {
//         console.log(response);
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'addSuccess', result: true}} );
//       })
//       .catch( error => {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             //  console.log(error.response.data.message);
//             //  console.log(error.response.status);
//             //  console.log(error.response.headers);
//             console.log(`Error Response: ${error.response}`);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//           // http.ClientRequest in node.js
//           console.log(`Error Request: ${error.request}`);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log(`General Error: ${error.message}`);
//         }
//         console.log("Error has occured in adding data...");
//         console.log(error);
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'addError', result: true}} );
//     })
//   }
// }