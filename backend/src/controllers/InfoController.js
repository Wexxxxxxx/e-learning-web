const mongoose = require("mongoose");
const Info = require("../models/InfoModel");

// GETT SINGILE INFO
const GetInfo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such info" });
    }

    const result = await Info.findById(id);

    return !result
      ? res.status(400).json({ error: "No such info" })
      : res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//  GET ALL INFO
const GetAllInfo = async (req, res) => {
  try {
    const result = await Info.find();

    return !result
      ? res.status(400).json({ error: "No such info" })
      : res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//  CREATE INFO
const CreateInfo = async (req, res) => {
  try {
    const { firstName, lastName, age, address, email } = req.body;

    const result = await Info.create({
      firstName,
      lastName,
      age,
      address,
      email,
    });

    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//  UPDATE INFO
const UpdateInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, age, address, email } = req.body;

    const result = await Info.findOneAndUpdate(
      { _id: id },
      { firstName, lastName, age, address, email },
      { new: true }
    );

    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.massage });
  }
};

//  DELETE INFO
const DeleteInfo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such info" });
    }

    const result = await Info.findOneAndDelete({ _id: id });

    return !result
      ? res.status(400).json({ error: "No such info" })
      : res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  GetInfo,
  GetAllInfo,
  CreateInfo,
  UpdateInfo,
  DeleteInfo,
};
