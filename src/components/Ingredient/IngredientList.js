import IngredientListItem from "./IngredientListItem";

function IngredientList(props) {
    const ingredients = props.ingredients;

    return (
        <div className="container card">
            <div className="card-body">
                <ul className="list-group">
                {ingredients && ingredients.map((item,index) =>
                    <IngredientListItem ingredient={item} index={index} key={index} />
                    )}
                </ul>
            </div>
        </div>
    )
}
export default IngredientList;