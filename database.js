import mongoose from "mongoose";

 const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/contacts-crud")
    .then(() => console.log("Database successfully connected"));
};
export default connectDB;


// NOTE -> Agar mai const ke aage export likhta hu to mujhe server.js me import krte waqt ( impot {connectDB}) krna hoga nhi to mai direct export default connectDB krdunga to isse v kaam ho jayega.

// const connectDB = () => {
//   mongoose
//   .connect("mongodb://127.0.0.1:27017/contacts-crud")
//   .then(() => console.log("Database successfully connected"));
// };