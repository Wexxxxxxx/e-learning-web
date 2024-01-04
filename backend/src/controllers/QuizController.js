const mongoose = require("mongoose");
const quiz = require("../models/QuizModel");

const GetQuizId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such info" });
    }

    const result = await quiz.findById(id);

    return !result
      ? res.status(400).json({ error: "No such info" })
      : res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const GetAllQuiz = async (req, res) => {
  try {
    const result = await quiz.find();

    return !result
      ? res.status(400).json({ error: "No such info" })
      : res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const CreateQuiz = async (req, res) => {
  try {
    const { quiz_id, title, category, date, items, word, totalitems } =
      req.body;

    console.log(quiz_id, title, category, date, items, word, totalitems);

    const result = await quiz.create({
      quiz_id,
      title,
      category,
      date,
      items,
      word,
      totalitems,
    });

    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const DeleteQuiz = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such info" });
    }

    const result = await quiz.findOneAndDelete({ _id: id });

    return !result
      ? res.status(400).json({ error: "No such info" })
      : res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const UpdateQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const { quiz_id, title, category, date, items, word, totalitems } =
      req.body;

    const result = await user.findOneAndUpdate(
      { _id: id },
      {
        quiz_id,
        title,
        category,
        date,
        items,
        word,
        totalitems,
      },
      { new: true }
    );

    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  CreateQuiz,
  GetAllQuiz,
  DeleteQuiz,
  UpdateQuiz,
  GetQuizId,
};
