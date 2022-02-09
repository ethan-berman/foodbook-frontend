import {call, put, takeEvery} from "redux-saga/effects";
import {processFetch, startFetch, endFetch} from "./recipeListSlice";
import {getAllEntities, getWithParams} from "../common/services";
import {endIngredientSearch, processIngredientSearch} from "../newRecipe/newRecipeSlice";


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
export function* startRecipeSearch(action){
    try {
        let params = action.payload;
        yield put(startFetch());
        const results = yield call(getWithParams, 'find_recipe', params);
        console.log(results);
        yield put(processFetch(results));
    } catch(err){
        yield put(endFetch(err.message));
    }
}
export function* recipeListSaga(){
    yield takeEvery("LIST_RECIPES", fetchRecipeList);
    yield takeEvery("SEARCH_RECIPES", startRecipeSearch);
}
export default recipeListSaga;