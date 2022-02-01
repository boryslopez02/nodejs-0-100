const express = require('express');
const app = express();
const port = 3000;

// * MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');

app.set('views', __dirname + '/src/views');

app.use(express.static(__dirname + '/src/public'));

// * RUTAS
app.use("/", require("./src/router/index"));
app.use("/clientes", require("./src/router/clientes"));
// * 404 
app.use("/", require("./src/router/404"));

app.listen(port, (req, res) => {
    console.log("SERVIDOR ANDANDO EN EL PUERTO: " + port);
});