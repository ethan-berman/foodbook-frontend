import {endIngredientSearch, processIngredientSearch, startIngredientSearch} from "./newRecipeSlice";
import {call, put, takeEvery} from "redux-saga/effects";
import {getWithParams} from "../common/services";

export function* searchIngredient(action){
    try{
        let params = action.payload;
        yield put(startIngredientSearch());
        const results = yield call(getWithParams,"lookup",params);
        console.log(results);
        yield put(processIngredientSearch(results));
    } catch(err){
        yield put(endIngredientSearch(err.message));
    }
}
export function* newRecipeSaga(){
    yield takeEvery("INITIATE_INGREDIENT_SEARCH", searchIngredient);
}
export default newRecipeSaga;