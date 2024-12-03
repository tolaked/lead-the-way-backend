const morgan = require('morgan');
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

 const expressMiddlewares = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: false}))
    app.use(morgan('dev'))
    app.use(helmet())
}

module.exports = expressMiddlewares