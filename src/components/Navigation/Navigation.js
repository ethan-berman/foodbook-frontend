import { NavLink} from "react-router-dom";
import {selectLoginStatus, selectUser} from "../../features/user/userSlice";
import {useSelector} from "react-redux";
import React from "react";
import "./Navigation.css";
function Navigation() {
    const user = useSelector(selectUser);
    const login_status = useSelector(selectLoginStatus);
    const loggedIn = login_status === "logged in";
    return (
        <div className="container card">
            <div className="card-body">
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>

                        <li className="nav-item"> <NavLink className="nav-link" to="recipes/new"> New Recipe </NavLink></li>
                    </ul>
                    <div className="navbar-nav mx-auto text-center">
                        <NavLink className="navbar-brand" to="/">Foodbook</NavLink>
                    </div>
                    <ul className="navbar-nav ms-auto">
                        {!loggedIn &&
                        <React.Fragment>
                            <li className="nav-item"><NavLink className="nav-link" to="login">Login</NavLink></li>
                            <li className="nav-item"> <NavLink className="nav-link" to="signup">Signup</NavLink></li>

                        </React.Fragment>
                        }
                        {loggedIn &&
                        <React.Fragment>
                            <li className="nav-item nav-link">{user.username} </li>
                            <li className="nav-item"><NavLink className="nav-link" to="logout"> Logout </NavLink></li>
                        </React.Fragment>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Navigation;