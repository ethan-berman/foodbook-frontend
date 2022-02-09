import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

const {useState} = require("react");

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            username: username,
            password: password,
        };
        dispatch({type:"ATTEMPT_LOGIN",payload:data});
        navigate('/');
    }
    return (
        <div className="container card">
            <div className="card-body">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label> Username </Form.Label>
                        <Form.Control value={username}
                                      onChange={handleUsernameChange}
                                      type="text"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Password</Form.Label>
                        <Form.Control value={password}
                                      onChange={handlePasswordChange}
                                      type="password"/>
                    </Form.Group>
                        <Button type="submit"> Submit</Button>
                    {/*<input value={username} onChange={handleUsernameChange} />*/}
                    {/*<input type="password" value={password} onChange={handlePasswordChange} />*/}
                    {/*<button onClick={handleSubmit}> submit</button>*/}
                </Form>
            </div>
        </div>
    )
}
export default Login;