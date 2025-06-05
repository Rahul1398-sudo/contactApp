import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  first_Name: {
    type: String,
    required: true,
  },
  last_Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^.+@.+\..+$/,
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{10}$/,
  },
  address: {
    type: String,
    required: true,
  },
});

const contact = mongoose.model("Contact", contactSchema);
// module.exports contact;
export default contact;

//note-jab v ham data ko export krege to server.js me hame import krna hoga
//note-jab v ham data ko new files banaye wnha  hame server.js me se (import mongoose from "mongoose";
// )krna hoga
