import { put, takeEvery, call } from "redux-saga/effects"
import { GET_FLIGHTS, setFlightsCreator } from "../store/flightsReducer";
import axios from "axios";

const getFlightsAPI = (date) => {
    const options = {
        method: 'GET',
        url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/ru/SVO-sky/JFK-sky/${date}`,
        headers: {
            'x-rapidapi-key': 'b8b6b6f8e7mshd691456de9a22d7p1228e3jsne2aebab42dc3',
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
        }
    };

    return axios.request(options)
    .then(response => response.data)
    .catch(e => console.log(e));
}

function* getFlightsWorker({date}) {
    try {
        const result = yield call(getFlightsAPI, date);
        yield put(setFlightsCreator(result));
    } catch {
        
    }
}

export function* flightWatcher() {
    yield takeEvery(GET_FLIGHTS, getFlightsWorker)
}