const { response } = require('express');
let express = require('express');
let app = express();

app.get("/", (request, response) => {
    response.send("Hello World");
});

app.get("/newroute", (request, response) => {
    response.send("Another page")
})

app.listen(3000);