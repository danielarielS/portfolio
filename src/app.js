import React from "react";
import axios from "./axios";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { About } from "./about";
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
                    <div>
                        <header>
                            <Link to="/" className="portfolioNav">
                                Portfolio
                            </Link>
                            <Link to="/about" className="aboutNav">
                                About Me
                            </Link>
                            <Link to="/contact" className="contactNav">
                                Contact
                            </Link>
                        </header>
                        <section>
                            <img src="/back.jpeg" id="orangeImage" />
                            <div />
                            <Route
                                exact
                                path="/about"
                                render={() => <About />}
                            />
                            <Route path="/contact" render={() => <Contact />} />
                        </section>
                    </div>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
