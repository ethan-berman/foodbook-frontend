import {Link, NavLink} from "react-router-dom";
import {selectUser} from "../../features/user/userSlice";
import {useSelector} from "react-redux";

function Navigation() {
    const username = useSelector(selectUser);

    return (
        <div className="container card">
            <div className="card-body">
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>

                        <li className="nav-item"> <NavLink className="nav-link" to="recipes/new"> New Recipe </NavLink></li>
                        <li className="nav-item">{username.username} </li>
                    </ul>
                    <div className="mx-auto">
                        <a className="navbar-brand" href="/">Foodbook</a>
                    </div>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"> <NavLink className="nav-link" to="login">Login</NavLink></li>
                        <li className="nav-item"> <NavLink className="nav-link" to="signup">Signup</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Navigation;