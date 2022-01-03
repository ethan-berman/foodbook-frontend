import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectRecipes} from "../../features/recipes/recipeListSlice";
import {RECIPE_LIST} from "../../features/common/constants";
import {RecipeListItem} from "./index";
function RecipeList() {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch({type:RECIPE_LIST});
    }, [dispatch]);
    const recipes = useSelector(selectRecipes);
    return (
        <div>
            <ul>
                {recipes.map((recipe, index)=>
                    <RecipeListItem recipe={recipe} key={index} />
                )}
            </ul>
        </div>
    )

}

export default RecipeList;