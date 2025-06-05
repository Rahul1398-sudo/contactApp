const app = express();
import express from "express";
import mongoose from "mongoose";
import ContactRoutes from "./routes/contact.route.js";
import connectDB from "./config/database.js";

//Middle-ware-> taaki html file ko read kar sake
app.set("view engine", "ejs"); // EJS templating
// app.use(express.json());

app.use(express.urlencoded({ extended: false })); // To read form data
//form ke data ko accept karne ke lye as a request
app.use(express.static("public"));
// To serve static files like CSS, JS, Images

//Routes
app.use(ContactRoutes);

//Database connection
connectDB();

// port connection
app.listen(5432, () => {
  console.log("Server started successfully on port 5432");
});
