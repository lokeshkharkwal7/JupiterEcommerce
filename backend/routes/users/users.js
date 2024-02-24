
const express = require("express");
const USER = require("../../model/user");
const router = express.Router();
router.use(express.json());

// create
router.post("/users", async (req, res) => {
  const {
    name,
    email,
    phonenumber,
    city,
    state,
    pincode,
    gender,
    card,
    address,
  } = req.body;
  try {
    const status = await USER.create({
      name: name,
      email: email,
      city: city,
      gender: gender,
      card: card,
      phonenumber: phonenumber,
      state: state,
      pincode: pincode,
      address: address,
    });
    console.log(status);
    res.send(status);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;


