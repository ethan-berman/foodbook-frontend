import React, {useMemo, useState} from "react";
import {debounce} from "lodash";
import {useDispatch} from "react-redux";
import {Form} from "react-bootstrap";

function Search(props){
    const [searchText, setSearchText] = useState("");
    const action_type = props.action;
    const dispatch = useDispatch();
    const recipe_search = (query) => {
        let params = {name:query};
        dispatch({type:action_type, payload:params});
    }
    const changeHandler = (event) => {
        let query = event.target.value;
        setSearchText(query);
        recipe_search(query);
    }
    const debouncedChangeHandler = useMemo(
        () => debounce(changeHandler, 300)
        , []);
    return (
        <div className="container card">
            <div className="card-body">
                <Form>
                    <Form.Group>
                        {/*<Form.Label>Search</Form.Label>*/}
                        <Form.Control className="form-control" type="text" defaultValue={searchText} onChange={debouncedChangeHandler} />
                    </Form.Group>

                </Form>
            </div>
        </div>
    )
}
export default Search;