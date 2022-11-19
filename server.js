const express = require('express');
const cors = require('cors');
const app = express();


//Middleware 
var corsOptions = {
    origin: 'http//localhost:8081'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router
const router = require('./routes/productRoutes');
app.use('/api/products', router);


//Server

let port = 5055;
app.listen(port, () => {
    console.log(' Listening on: ' + port);
})