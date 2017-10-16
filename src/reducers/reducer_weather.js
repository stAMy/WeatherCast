import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    switch (action.type) {
    case FETCH_WEATHER: 
        return state.concat([action.payload.data]);  //Creating a new array with all the old stuff with the new stuff in it with concat
        return [ action.payload.data, ...state]; // [city, city, city] NOT [city, [city, city] ]
    }

    return state;
}

