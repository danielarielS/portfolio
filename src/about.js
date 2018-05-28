import React from "react";
import axios from "./axios";
import { BrowserRouter, Route, Link } from "react-router-dom";

export class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <section id="aboutHolder">
                    <p>
                        I have recently entered the world of Web Development
                        with my completion of the SPICED Academy Full Stack
                        JavaScript Development coding bootcamp, which made me
                        skilful in many of today's used tools. Before joining
                        the Tech world I was working as a teaching fellow at the
                        Academic College Tel Aviv-Yaffo, in the Economics
                        department, conducting frontal lectures, as well as
                        helping to structure the courses, those included intro
                        to finance, micro and macro economics. During my earlier
                        years I have worked a lot with people, first as an event
                        manager at a conference and wedding venue and later as a
                        restaurant manager. Both gave me a lot of experience
                        dealing with customers as well as employees and handling
                        the day-to-day operations of a small to medium business.
                        I am very eager to continue my path in the Web
                        Development world, both front-end and back-end alike and
                        expand my knowledge of the following technologies:
                    </p>
                </section>
                <section id="techHolder">
                    <div className="eachTechHolder">
                        <img src="/logo/js.png" />
                    </div>
                    <div className="eachTechHolder">
                        <img src="/logo/node.png" />
                    </div>
                    <div className="eachTechHolder">
                        <img src="/logo/express.png" />
                    </div>
                    <div className="eachTechHolder">
                        <img src="/logo/html.png" />
                    </div>
                    <div className="eachTechHolder">
                        <img src="/logo/css.png" />
                    </div>
                    <div className="eachTechHolder">
                        <img src="/logo/react.png" />
                    </div>
                    <div className="eachTechHolder">
                        <img src="/logo/redux.png" />
                    </div>
                    <div className="eachTechHolder">
                        <img src="/logo/jquery.png" />
                    </div>
                    <div className="eachTechHolder">
                        <img src="/logo/socket.png" />
                    </div>
                    <div className="eachTechHolder">
                        <img src="/logo/vue.png" />
                    </div>
                    <div className="eachTechHolder">
                        <img src="/logo/sql.png" />
                    </div>
                    <div className="eachTechHolder">
                        <img src="/logo/handlebars.png" />
                    </div>
                    <div className="eachTechHolder">
                        <img src="/logo/github.png" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
