import {call, put, takeEvery} from "redux-saga/effects";
import {processFetch, startFetch, endFetch} from "./userSlice";
import {makePost} from "../common/services";

export function* createLoginAttempt(action){
    try {
        let data = action.payload;
        yield put(startFetch());
        const results = yield call(makePost, 'login', data);
        console.log(results);
        if(results.error){
            yield put(endFetch(results.error))
        } else if (results.token && results.user) {
            localStorage.setItem("SavedToken", results.token)
            yield put(processFetch(results));
        }
    } catch (err) {
        yield put(endFetch(err.message));
    }

}
export function* createSignupAttempt(action){
    try {
        let data = action.payload;
        yield put(startFetch());
        const results = yield call(makePost, 'signup',data);
        console.log(results);
        yield put(processFetch(results))
    }
    catch(err){
        yield put(endFetch(err.message));
    }
}
export function* userSaga(){
    yield takeEvery("ATTEMPT_LOGIN",createLoginAttempt);
    yield takeEvery("ATTEMPT_SIGNUP", createSignupAttempt);
}

export default userSaga;