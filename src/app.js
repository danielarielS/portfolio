import React from "react";
import axios from "./axios";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info);
    }
    componentDidMount() {}

    render() {
        if (this.state.hasError) {
            return (
                <h1>
                    Oops something went wrong, we are working on it but for now
                    please refresh this page!
                </h1>
            );
        }
        return (
            <React.Fragment>
                <BrowserRouter>
                    <header>
                        <Link to="/about" className="aboutNav">
                            About Me
                        </Link>
                        <Link to="/contact" className="friendsNav">
                            Contact
                        </Link>
                        <Link to="/" className="online_search">
                            Portfolio
                        </Link>
                    </header>
                    <section>
                        <Route path="/about" render={() => <About />} />
                        <Route path="/contact" render={() => <Contact />} />
                    </section>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
