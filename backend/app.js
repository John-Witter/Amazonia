const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes')
const { ValidationError } = require('sequelize');
const { enviroment } = require('./config')
const isProduction = enviroment === 'production';
const app = express();
const data = require('./data.js')

app.use(morgan('dev'))
app.use(cookieParser());
app.use(express.json());
if (!isProduction) {
    app.use(cors())
}
app.use(helmet({
    contentSecurityPolicy: false
}));
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true,
        }
    })
)
app.use(routes)
// app.use((_req, _res, next) => {
//     const err = new Error("The requested resource couldn't be found.");
//     err.title = "Resource Not Found";
//     err.errors = ["The requested resource couldn't be found."];
//     err.status = 404;
//     next(err);
// });
app.get("/", (req, res) => res.send("Hello World"));

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: "Product not Found" });
    }
})

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.use((err, _req, _res, next) => {
    // check if error is a Sequelize error:
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = 'Validation error';
    }
    next(err);
});

app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});




module.exports = app;
