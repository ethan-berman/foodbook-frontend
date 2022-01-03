import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RECIPE_DETAIL} from "../../features/common/constants";
import {selectRecipeContent} from "../../features/currentRecipe/currentRecipeSlice";
import { Suspense} from "react";

function RecipeDetail(){
    let { rid } = useParams();
    const dispatch = useDispatch();
    const recipe = useSelector(selectRecipeContent);

    useEffect(()=>{
        dispatch({type:RECIPE_DETAIL, payload: rid});
    }, [dispatch]);

    // useEffect(()=>{
    //     console.log(recipe);
    // }, [recipe]);
    if(recipe.recipe && recipe.author && recipe.instructions && recipe.ingredients){
        return (

            <div className="container card">
                <div className="card-body">
                    {/*<Suspense>*/}
                    {/*{recipe.keys && ( <h1> {recipe.recipe.name} </h1>)}*/}
                    <h1>{recipe.recipe.name}</h1>
                    <p> By {recipe.author.username}</p>
                    {/*</Suspense>*/}
                </div>
            </div>

        )
    }
    else{
        return(
            <div className="container card">
                <div className="card-body">
                </div>
            </div>
        )
    }
};

export default RecipeDetail;