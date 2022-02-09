import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectRecipes} from "../../features/recipes/recipeListSlice";
import {RECIPE_LIST} from "../../features/common/constants";
import {RecipeListItem} from "./index";
import React from "react";
function RecipeList() {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch({type:RECIPE_LIST});
    }, [dispatch]);
    const recipes = useSelector(selectRecipes);
    const show = recipes.length > 0;
    return (
        <React.Fragment>
        {show &&
        <div className="container card">
            <div className="card-body">
                <ul className="list-group">
                    {recipes.map((recipe, index)=>
                        <RecipeListItem recipe={recipe} key={index} />
                    )}
                </ul>
            </div>
        </div>
        }
        </React.Fragment>
    )

}

export default RecipeList;