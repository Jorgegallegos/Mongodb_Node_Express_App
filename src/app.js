const path=require("path");
const express = require('express');
const morgan= require("morgan");
const mongoose=require("mongoose");
const app= express();

//connecting to db with moongose
mongoose.connect('mongodb://localhost:27017/crud-mongo')
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err));

//importing routes
const indexRoutes=require('./routes/index');

//settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));//obtener datos de un formulario

//routes
app.use('/',indexRoutes);

app.listen(3000, () => {
    console.log("Server on port 3000");
});