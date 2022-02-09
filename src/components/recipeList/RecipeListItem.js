import {Link} from "react-router-dom";
import React from "react";
function RecipeListItem (props){
    console.log(props);
    console.log(props.recipe);
    const recipe = props.recipe;
    const recipe_link = "/recipes/" + recipe.rid + "/";
    return (
        <React.Fragment>
            <Link to={recipe_link}>
                <li className="list-group-item">
                    {recipe.name}
                </li>
            </Link>
        </React.Fragment>
    )
}
export default RecipeListItem;