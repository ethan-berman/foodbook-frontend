
function RecipeInstructionListItem(props){
    const instruction = props.instruction;

    return (
        <li className="list-group-item">
            {instruction.content}
        </li>
    )

}
export default RecipeInstructionListItem;