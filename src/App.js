import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectRecipes} from "./features/recipes/recipeListSlice";
import {RecipeList} from "./components/recipeList";
function App() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({"type":"LIST_RECIPES"});
    }, [dispatch]);
    const recipes = useSelector(selectRecipes);
    return (
        <div className="App">
            {/*<ul>*/}
            {/*    { recipes.map((recipe, index)=>*/}
            {/*        <li key={index}>*/}
            {/*            {recipe.name}*/}
            {/*        </li>*/}
            {/*    )}*/}
            {/*</ul>*/}
            <RecipeList />
        </div>
    );
}

export default App;
