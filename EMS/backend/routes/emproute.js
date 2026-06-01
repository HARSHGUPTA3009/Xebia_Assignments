const express = require("express");
const router = express.Router();
const Employee = require("../models/emp");

router.post("/", async (req, res) => {
  const employee = await Employee.create(req.body);
  res.json(employee);
});

router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

router.put("/:id", async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(employee);
});

router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;