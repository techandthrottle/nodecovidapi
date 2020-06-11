const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;


connection.once('open', () => {
    console.log("MongoDB connection established successfully");
});

const profileRouter = require('./routes/profile.route');
const userRouter = require('./routes/user.route');
const covidRouter = require('./routes/data_maintenance.route');
const covidOperationRouter = require('./routes/operation.route');

app.use('/profile', profileRouter);
app.use('/user', userRouter);
app.use('/covid', covidRouter);
app.use('/covid', covidOperationRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})