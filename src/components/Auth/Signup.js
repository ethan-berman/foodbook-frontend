import {useDispatch} from "react-redux";
import { useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

const {useState} = require("react");

function Signup(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handlePassword2 = (event) => {
        setPassword2(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(password !== password2){
            return;
        }
        let data = {
            username: username,
            password: password
        }
        dispatch({type:"ATTEMPT_SIGNUP",payload:data});
        navigate('/');
    }
    return (
        <div className="container card">
            <div className="card-body">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label> Username </Form.Label>
                        <Form.Control value={username}
                                      onChange={handleUsername}
                                      type="text"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Password </Form.Label>
                        <Form.Control value={password}
                                      onChange={handlePassword}
                                      type="password"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Confirm Password </Form.Label>
                        <Form.Control value={password2}
                                      onChange={handlePassword2}
                                      type="password"/>
                    </Form.Group>
                    <Button type="submit"> Submit </Button>
                    {/*<input value={username} onChange={handleUsername}/>*/}
                    {/*<input type="password" value={password} onChange={handlePassword}/>*/}
                    {/*<input type="password" value={password2} onChange={handlePassword2}/>*/}
                    {/*<button onClick={handleSubmit}> Submit </button>*/}
                </Form>
            </div>
        </div>
    )
}
export default Signup;