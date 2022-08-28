const { response } = require('express');
let express = require('express');
let app = express();

let absolutePath = __dirname + "/views/index.html";
let publicPath = __dirname + "/public";

app.get("/",(req, res) => {
    res.sendfile(absolutePath);
    app.use(express.static(publicPath));
});

app.listen(3000);