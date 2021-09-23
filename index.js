const express = require('express');
const mongoose = require('mongoose');
const authRouter = require("./authRoutes");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json()); // for parsing JSON
app.use("/auth", authRouter);

const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://authnode:authnodepassword@cluster0.hanzr.mongodb.net/auth_roles?retryWrites=true&w=majority")
        app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})

    } catch (e) {
        console.log(e)
    }
}

start();