import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { furthest: null };
    }

    async componentDidMount() {
        const furthest = localStorage.getItem("aot_furthest");
        if (furthest) {
            this.setState({ furthest });
        }
    }

    render() {
        const { furthest } = this.state;

        return (
            <div className="App">
                <BrowserRouter>
                    <header>
                        <nav>
                            <Link to="/">Home</Link>
                        </nav>
                    </header>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Home furthest={furthest} />}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
