import {call, put, takeEvery} from "redux-saga/effects";
import {processFetch, startFetch, endFetch, processLogout} from "./userSlice";
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
        localStorage.setItem("SavedToken", "")
        yield put(endFetch(err.message));
    }

}
export function* createSignupAttempt(action){
    try {
        let data = action.payload;
        yield put(startFetch());
        const results = yield call(makePost, 'signup',data);
        console.log(results);
        localStorage.setItem("SavedToken", results.token);
        yield put(processFetch(results))
    }
    catch(err){
        yield put(endFetch(err.message));
    }
}
export function* beginLogout(){
    yield put(processLogout());
    localStorage.setItem("SavedToken", "");
}
export function* userSaga(){
    yield takeEvery("ATTEMPT_LOGIN",createLoginAttempt);
    yield takeEvery("ATTEMPT_SIGNUP", createSignupAttempt);
    // yield takeEvery("INITIATE_LOGOUT", beginLogout);
}

export default userSaga;