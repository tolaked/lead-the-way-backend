require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const surveyRoutes = require('./api/Routes');
const expressMiddlewares = require('./api/config/middlewares');

const app = express();
const MONGO_URI = process.env.MONGO_URI;
// MongoDB connection
mongoose.connect(MONGO_URI,
   {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
  mongoose.set('useCreateIndex', true);

// app.use(bodyParser.json());
expressMiddlewares(app)


// app.use(
//   cors({
//   origin: "*",
//   methods:"GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS",
//   preflightContinue: false,
//   optionsSuccessStatus: 204
// })
// )

// app.all("/*", (req,res, next)=>{
//   res,header("Access-Control-Allow-Origin","*"),
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next()
// })

// app.use(cors())
// Routes
app.use(surveyRoutes);

// Start server
app.get('/',(req, res)=>{
  try{
    res.status(200).json({
      message:'Welcome to Lead the way'
    })
  }

catch(error){
  next(new Error(error))
}
});

module.exports = app