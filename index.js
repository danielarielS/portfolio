const express = require("express");
const app = express();
const compression = require("compression");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const csurf = require("csurf");
const { upload } = require("./s3");
const uidSafe = require("uid-safe");
const path = require("path");
const fs = require("fs");
const https = require("https");

app.use(compression());
app.use(bodyParser());

app.use(express.static(__dirname + "/public"));
const server = require("http").Server(app);
const io = require("socket.io")(server, {
    origins:
        "localhost:8080 192.168.50.96:8080 https://thedogweb.herokuapp.com:*"
});
const cookieSessionMiddleware = cookieSession({
    secret: "a very secretive secret",
    maxAge: 1000 * 60 * 60 * 24 * 90
});
app.use(cookieSessionMiddleware);
io.use(function(socket, next) {
    cookieSessionMiddleware(socket.request, socket.request.res, next);
});
app.use(csurf());

function formatDate(date) {
    var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
}

app.use(function(req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});
if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
server.listen(process.env.PORT || 8080, function() {
    console.log("I'm listening on 8080.");
});
