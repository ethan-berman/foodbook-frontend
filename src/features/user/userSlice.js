import {createSlice} from "@reduxjs/toolkit";

const localToken = localStorage.getItem("SavedToken");
const initialState = {
    status: "logged out",
    data: {},
    error: "",
    token: localToken,
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        startFetch(state, action){
            state.status = "loading";
        },
        processFetch(state, action){
            state.data = action.payload.user;
            state.token = action.payload.token;
            state.status = "logged in";
            state.erorr = "";
        },
        endFetch(state, action){
            state.status = "errored";
            state.error = action.payload;
            state.token = "";
        },
        processLogout(state, action){
            state.status = "logged out";
            state.error = "";
            state.token = "";
        },
    }

});
export default userSlice.reducer;
export const {startFetch, processFetch, endFetch, processLogout} = userSlice.actions;

export const selectUser = (state) => state.rootReducer.user.data;
export const selectLoginStatus = (state) => state.rootReducer.user.status;