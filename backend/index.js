const express = require('express');
const app = express();

// importing config files
const mongoConnect = require("./connect");
mongoConnect(); // Invoke the function to connect to MongoDB

// importing routes
const userRoutes = require('./routes/users/users');

// calling routes
app.use('/', userRoutes); // Use the userRoutes middleware for the "/users" path

// listening port
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
