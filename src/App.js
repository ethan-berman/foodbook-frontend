import logo from './logo.svg';
import './App.css';
import React, {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RecipeList} from "./components/recipeList";
import {Search} from "./components/common";
function App() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({"type":"LIST_RECIPES"});
    }, [dispatch]);
    return (
        <div className="container card">
            <div className="card-body">

                <Search action="SEARCH_RECIPES"/>
                {/*<ul>*/}
                {/*    { recipes.map((recipe, index)=>*/}
                {/*        <li key={index}>*/}
                {/*            {recipe.name}*/}
                {/*        </li>*/}
                {/*    )}*/}
                {/*</ul>*/}
                <RecipeList />
            </div>
        </div>
    );
}

export default App;
