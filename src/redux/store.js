import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import recipeListReducer from "../features/recipes/recipeListSlice";
import currentRecipeReducer from "../features/currentRecipe/currentRecipeSlice";
import userReducer from "../features/user/userSlice";
import newRecipeReducer from "../features/newRecipe/newRecipeSlice";
const sagaMiddleWare = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare];

const appReducer = combineReducers({
    recipeList: recipeListReducer,
    currentRecipe: currentRecipeReducer,
    user: userReducer,
    newRecipe: newRecipeReducer,
});
const rootReducer = (state,action) =>{
    if(action.type === "INITIATE_LOGOUT"){
        localStorage.setItem("SavedToken","");
        return appReducer(undefined, action);
    }
    return appReducer(state,action);
}
const store = configureStore({
    reducer: {
        rootReducer
    },
    middleware: middleware
});
sagaMiddleWare.run(rootSaga);

export { store };
