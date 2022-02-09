import { put, all, call } from 'redux-saga/effects';
import recipeListSaga from "../features/recipes/recipeListSaga";
import currentRecipeSaga from "../features/currentRecipe/currentRecipeSaga";
import userSaga from "../features/user/userSaga";
import newRecipeSaga from "../features/newRecipe/newRecipeSaga";
import {getAllEntities} from "../features/common/services";
import {endFetch, processFetch} from "../features/user/userSlice";
export function* helloSaga() {
    yield call(console.log, "hello users");
}
export function* startSaga() {
    try {
        const results = yield call(getAllEntities, "user", {});
        if (results.error) {
            yield put(endFetch(results.error))
        } else if (results.user && results.token) {
            yield put(processFetch(results));
        }
    } catch(err){
        yield put(endFetch(err.message));
    }
}


export default function* rootSaga() {
    yield all([
        helloSaga(),
        startSaga(),
        recipeListSaga(),
        currentRecipeSaga(),
        userSaga(),
        newRecipeSaga(),
    ])
}