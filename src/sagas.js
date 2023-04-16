import { call, put, takeEvery, throttle } from 'redux-saga/effects'
import { GET_USERS_FETCH, getUsersSuccess } from "./actions";

function *workGetUsersFetch(){
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const users = yield response.json();
    // const response1 = yield call(fetch, 'https://jsonplaceholder.typicode.com/profile');
    // const response2 = yield call(fetch, 'https://jsonplaceholder.typicode.com/profile');
    yield put(getUsersSuccess(users));
}

function *mySaga(){
//  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
    yield throttle('2000', GET_USERS_FETCH, workGetUsersFetch);
//  This will fetch after every 2 seconds
}

export default mySaga;