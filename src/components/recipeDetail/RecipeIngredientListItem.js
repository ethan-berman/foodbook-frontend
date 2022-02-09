import React from "react";
function RecipeIngredientListItem(props){
    const ingredient = props.ingredient;

    return (
        <React.Fragment>
            <li className="list-group-item">
                {ingredient.ingredient_name}
            </li>
        </React.Fragment>
    )


}
export default RecipeIngredientListItem;