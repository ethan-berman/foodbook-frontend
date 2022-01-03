import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

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
                <form>
                    <input value={username} onChange={handleUsernameChange} />
                    <input type="password" value={password} onChange={handlePasswordChange} />
                    <button onClick={handleSubmit}> submit</button>
                </form>
            </div>
        </div>
    )
};
export default Login;