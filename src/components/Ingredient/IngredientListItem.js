import React, {useEffect} from "react";
import {addIngredientToRecipe, selectNextIndex} from "../../features/newRecipe/newRecipeSlice";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";
function IngredientListItem(props){
    const dispatch = useDispatch();
    const ingredient = props.ingredient;
    const nextIndex = useSelector(selectNextIndex);
    const thisIndex = props.index;
    // var payload = {
    //     ingredient: ingredient,
    // }
    // useEffect(()=>{
    //     payload.index = index;
    // }, [index])
    const handleAdd = (ingredient, index) => {
        console.log(index);
        let payload = {ingredient: ingredient, index: index};
        dispatch(addIngredientToRecipe(payload));
    }
    return (
        <React.Fragment>
            <div className="row">
            <li className="list-group-item ">
                    <span className="col ms-auto">{ingredient.name}</span>
                    <div className="col btn-group ms-auto">
                        <Button  onClick={() => handleAdd(ingredient,nextIndex)}>+</Button>
                    </div>

            </li>
            </div>
        </React.Fragment>
    )
};
export default IngredientListItem;