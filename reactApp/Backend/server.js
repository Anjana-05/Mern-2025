const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const router = require('./routers/egRouters');
dotenv.config();


const app= express();
const PORT=process.env.PORT;
app.use(express.json())
app.use(router)

connectDB();


app.listen(3000,() =>{
    console.log(`server running port http://localhost:${PORT}`);
});

