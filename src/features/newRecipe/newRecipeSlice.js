import {createSelector} from "@reduxjs/toolkit";

const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
    status: "idle",
    results: [],
    ingredients: {},
    instructions: [],
    error: "",
}
const newRecipeSlice = createSlice({
    name: "newRecipe",
    initialState,
    reducers: {
        startIngredientSearch(state, action){
            state.status = "searching";
        },
        processIngredientSearch(state, action){
            state.status = "idle";
            const results = action.payload.results;
            let x = {};
            for(let i = 0; i < results.length; i++){
                x[i] = results[i];
            }
            state.results = results;
            state.error = "";
        },
        endIngredientSearch(state, action){
            state.status = "errored";
            state.error = action.payload;
        },
        addIngredientToRecipe(state, action){
            console.log(action.payload);
            state.ingredients[action.payload.index] = action.payload.ingredient;
        },
        removeIngredientFromRecipe(state, action){
            // state.ingredients =
            // let x = state.ingredients.filter(e => e.name !== action.payload.name);
            // console.log(x);
            // state.ingredients = x;
            delete state.ingredients[action.payload];

        }
    }
});

export default newRecipeSlice.reducer;
export const { startIngredientSearch, processIngredientSearch, endIngredientSearch, addIngredientToRecipe, removeIngredientFromRecipe} = newRecipeSlice.actions;

export const selectSearchResults = (state) => state.rootReducer.newRecipe.results;
export const selectIngredientList = (state) => state.rootReducer.newRecipe.ingredients;

export const selectNextIndex = createSelector(selectIngredientList, (entities) => {
    let x = Object.keys(entities);
    var index = 0;
    if(x.length >= 1){
        index =  Math.max(...x)+1;
    } else if(x[0] === null){
        index = 1;
    }
    return index;
});