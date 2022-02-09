import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RecipeDetail} from "./components/recipeDetail";
import {Navigation} from "./components/Navigation";
import {Login, Logout, Signup} from "./components/Auth";
import {RecipeCreate} from "./components/recipeCreate";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/recipes/:rid" element={<RecipeDetail />} />
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/recipes/new" element={<RecipeCreate />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
