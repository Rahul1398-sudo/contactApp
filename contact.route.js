import express from "express";
const router = express.Router();
import Contact from "../models/contact.model.js";

//Routes

router.get("/home", async (req, res) => {
  const contacts = await Contact.find();
  res.render("home", { contacts });
});

router.get("/add-contact", (req, res) => {
  res.render("add-contact");
});

router.get("/update-contact/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("update-contact", { contact });
});

router.get("/show-contact/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("show-contact", { contact });
});
// res.json(contacts); ye json me dikhane ke liye use kiye hai

router.post("/add-contact", async (req, res) => {
  try {
    const contact = await Contact.insertOne({
      first_Name: req.body.first_Name,
      last_Name: req.body.last_Name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });
    res.redirect("/home");
  } catch (err) {
    res.status(400).send("Validation Failed: " + err.message);
  }
});

router.post("/update-contact/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/home");
  } catch (err) {
    res.status(400).send("Validation Failed: " + err.message);
  }
});

router.get("/delete-contact/:id", async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/home");
});

export default router;
