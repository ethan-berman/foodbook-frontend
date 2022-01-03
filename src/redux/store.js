import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import recipeListReducer from "../features/recipes/recipeListSlice";
import currentRecipeReducer from "../features/currentRecipe/currentRecipeSlice";
const sagaMiddleWare = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare];

const store = configureStore({
    reducer: {
        recipeList: recipeListReducer,
        currentRecipe: currentRecipeReducer,
    },
    middleware: middleware
});
sagaMiddleWare.run(rootSaga);

export { store };