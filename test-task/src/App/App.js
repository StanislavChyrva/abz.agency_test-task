import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.scss';
import './variables.scss';
import {Provider} from "react-redux";
import store from "../store/store"
import Header from "../client/components/Header/Header";
import AppRoutes from "./AppRoutes";
import Footer from "../client/components/Footer/Footer";


function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App-wrapper">
                    <div className="App">
                         <Header/>
                        <AppRoutes/>
                        <Footer
                            link="abz.agency"
                            href="https://abz.agency/"
                            text="specially for the test task"
                        />
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
