const express = require('express');
const myRoutes = require('./routes/myRoutes')

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/v1',myRoutes);

app.listen(3001,()=>{
    console.log("Server Online ")
})