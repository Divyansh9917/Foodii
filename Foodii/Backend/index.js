const express = require('express');
const app = express();
const port = 4000;
const mongoDB = require("./db");
require("dotenv").config();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
})

// Connect to MongoDB
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json())
app.use('/api',require("./Routes/Signup"));
app.use('/api',require("./Routes/Login"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
