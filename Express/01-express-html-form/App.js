let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let absolutePath = __dirname + "/views/index.html";
let publicPath = __dirname + "/public";

app.use("/json",(req,res,next)=>{
    res.send(console.log(req.method + " " + req.path + " - " + req.ip)); //root-level request-logger middleware
    next();

});

app.use(bodyParser.urlencoded({extended: false})); // body-parser middleware

app.use("/public",express.static(publicPath)); //Displays static assets like the stylesheet here

app.get("/",(req, res) => {
    res.sendfile(absolutePath); //serves the html form when the user access the root
});

app.get("/:test/echo", (req,res) => {
    res.json({echo: req.params.test}); //gets the route parameter input from the users
});

app.get("/name", (req,res) => {
    first = req.query.firstName;
    last = req.query.lastName;
    res.json({name: first + " " + last});
});

app.post("/name", (req, res) => {
    firstname = req.body.first;
    lastname = req.body.last;
    email = req.body.email;

    res.json({name: firstname + " " + lastname, 
                email: email});                     //posts the html form input
});



















app.listen(3000);