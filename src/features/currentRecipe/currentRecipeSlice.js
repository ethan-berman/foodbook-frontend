import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: "idle",
    content: {},
    error: "",
}
const currentRecipeSlice = createSlice({
    name: 'currentRecipe',
    initialState,
    reducers: {
        startFetch(state, action){
            state.status = "loading";
        },
        processFetch(state, action){
            state.status = "idle";
            state.content = action.payload;
            state.error = "";
        },
        endFetch(state, action){
            state.status = "errored";
            state.error = action.payload;
        }
    }
});

export default currentRecipeSlice.reducer;
export const {startFetch, processFetch, endFetch} = currentRecipeSlice.actions;

export const selectRecipeContent = (state) => state.rootReducer.currentRecipe.content;