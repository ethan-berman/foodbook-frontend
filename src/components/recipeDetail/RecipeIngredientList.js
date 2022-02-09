import React from "react";
import {RecipeIngredientListItem} from "./index";

function RecipeIngredientList(props){
    const ingredients = props.ingredients;
    return (
        <React.Fragment>
            <ul className="list-group">
                {ingredients.map((item, index) =>
                    <RecipeIngredientListItem ingredient={item} key={index}/>
                )}
            </ul>
        </React.Fragment>
    )

}
export default RecipeIngredientList;