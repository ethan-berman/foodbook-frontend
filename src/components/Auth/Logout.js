import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {useNavigate} from "react-router";
function Logout(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch({type:"INITIATE_LOGOUT"});
        navigate("/");
    }, [dispatch, navigate])
    return (
        <React.Fragment></React.Fragment>
    )
}
export default Logout;