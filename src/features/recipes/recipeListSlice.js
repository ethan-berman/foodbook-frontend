import {createSelector, createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: "idle",
    entities: [],
    error: "",
}
const recipeListSlice = createSlice({
    name: 'recipeList',
    initialState,
    reducers: {
        startFetch(state, action){
            state.status = "loading";
        },
        processFetch(state, action){
            state.status = "idle";
            let x = {};
            for (let item of action.payload){
                x[item.rid] = item;
            }
            state.entities = x;
            state.error = "";
        },
        endFetch(state, action){
            state.status = "errored";
            state.error = action.payload;
        }
    }
});

export default recipeListSlice.reducer;
export const {startFetch, processFetch, endFetch} = recipeListSlice.actions;

const selectRecipeList = (state) => state.recipeList.entities

export const selectRecipes = createSelector(selectRecipeList, (entities) =>
    Object.values(entities)
)