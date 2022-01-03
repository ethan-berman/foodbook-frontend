import {call, put, takeEvery} from "redux-saga/effects";
import {processFetch, startFetch, endFetch} from "./recipeListSlice";
import {getAllEntities} from "../common/services";


export function* fetchRecipeList() {
    try {
        yield put(startFetch());
        const results = yield call(getAllEntities, 'recipes');
        console.log(results);
        yield put(processFetch(results));
    } catch (err) {
        yield put(endFetch(err.message));
    }
}
export function* recipeListSaga(){
    yield takeEvery("LIST_RECIPES", fetchRecipeList);
}
export default recipeListSaga;