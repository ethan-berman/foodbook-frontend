import { put, takeEvery, all, call } from 'redux-saga/effects';
import recipeListSaga from "../features/recipes/recipeListSaga";
import currentRecipeSaga from "../features/currentRecipe/currentRecipeSaga";

export function* helloSaga() {
    yield call(console.log, "hello users");
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        recipeListSaga(),
        currentRecipeSaga()
    ])
}