import {createSlice} from "@reduxjs/toolkit";

export default function createResourceSlice(name, initialState){
    const slice = createSlice({
        name: name,
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
    return slice;
}
