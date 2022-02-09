import {useMemo, useState} from "react";
import {debounce} from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {
    removeIngredientFromRecipe,
    selectIngredientList,
    selectSearchResults
} from "../../features/newRecipe/newRecipeSlice";
import {IngredientList} from "../Ingredient";
import React from "react";
import {Search} from "../common";
import {Button} from "react-bootstrap";

function RecipeCreate(){
    const [ingList, setIngList] = useState([{ ingredient: "", quantity: "", units: "" }]);
    const [instList, setInstList] = useState([{instruction:"", number: ""}]);
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();
    const search_results = useSelector(selectSearchResults);
    const ingredientList = useSelector(selectIngredientList);
    const show_results = search_results.length > 0;
    console.log(ingredientList);
    const headers = Object.keys(ingredientList);
    let show_ingredients = headers.length > 0;
    const ingredient_search = (query) => {
        let params = {name: query};
        dispatch({type:"INITIATE_INGREDIENT_SEARCH", payload: params});
    }
    const changeHandler = (event) => {
        let query = event.target.value;
        setSearchText(query);
        ingredient_search(query);
    };
    const handleRemove = (elem) => {
        dispatch(removeIngredientFromRecipe(elem));
    };
    const debouncedChangeHandler = useMemo(
        () => debounce(changeHandler, 300)
        , []);

    return (
        <React.Fragment>
            <div className="container card">
                <div className="card-body">
                    <Search action="INITIATE_INGREDIENT_SEARCH"/>

                    {show_results && <IngredientList ingredients={search_results}/>}
                </div>
            </div>
            {show_ingredients &&
            <div className="container card">
                <div className="card-body">
                    <ul className="list-group">
                        {headers.map((item, index) =>
                            <div key={index}>
                                <li className="list-group-item">
                                    <p> {ingredientList[item].name}</p>
                                    <Button onClick={() => handleRemove(item)}> remove </Button>
                                </li>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
            }
        </React.Fragment>
    )
}
export default RecipeCreate;