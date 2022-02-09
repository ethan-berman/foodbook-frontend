import React from "react";
import {RecipeInstructionListItem} from "./index";

function RecipeInstructionList(props){
    const instructions = props.instructions;

    return (
        <React.Fragment>
            <ol className="list-group">
                {instructions && instructions.map((item, index) =>
                    <RecipeInstructionListItem instruction={item} key={index} />
                )}
            </ol>
        </React.Fragment>
    )
}
export default RecipeInstructionList;