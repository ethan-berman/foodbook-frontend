import {call, put, takeEvery} from "redux-saga/effects";
import {processFetch, startFetch, endFetch} from "./currentRecipeSlice";
import {getAllEntities} from "../common/services";

export function* fetchRecipeDetail(action) {
    try {
        let rid = action.payload;
        yield put(startFetch());
        const results = yield call(getAllEntities, 'recipes/' + rid);
        console.log(results);
        yield put(processFetch(results));
    } catch (err) {
        yield put(endFetch(err.message));
    }
}
export function* currentRecipeSaga(){
    yield takeEvery("RECIPE_DETAIL", fetchRecipeDetail);
}
export default currentRecipeSaga;