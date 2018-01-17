
const express = require("express");
const router = express.Router();
const Contact = require('../models/contacts');

//retriewing data
router.get("/contacts", (req, res, next) => {
  Constant.find(function(err, contacts) {
    res.json(contacts);
  });
});

// add contact
router.post("/contact", (req, res, next) => {
  let newContact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone
  });

  // save contact
  newContact.save((err, contact) => {
    if (err) {
      res.json({ msg: "failed to add contact" });
    } else {
      res.json({ msg: "Contact to add contact" });
    }
  });
});

// delete contact
router.delete("/contact", (req, res, next) => {
  Contact.remove({ _id: req.param.id }, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
module.exports = router;
