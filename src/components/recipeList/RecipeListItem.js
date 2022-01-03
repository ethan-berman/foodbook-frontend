import {useEffect} from "react";
import {Link} from "react-router-dom";
import {RECIPE_DETAIL} from "../../features/common/constants";
import {useDispatch} from "react-redux";

function RecipeListItem (props){
    const dispatch = useDispatch();
    console.log(props);
    console.log(props.recipe);
    const recipe = props.recipe;
    const recipe_link = "/recipe/" + recipe.rid + "/";
    useEffect(()=>{
        console.log(recipe);
        // console.log(this.recipe);
    }, []);
    return (
        <div className="container card">
            <div className="container body">
                <Link to={recipe_link} style={{ textDecoration: 'none' }}>
            <li>
                {recipe.name}

            </li>
                </Link>
            </div>
        </div>
    )
}
export default RecipeListItem;