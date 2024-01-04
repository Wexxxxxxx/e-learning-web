const express = require("express");
const router = express.Router();

const {
  GetInfo,
  GetAllInfo,
  CreateInfo,
  UpdateInfo,
  DeleteInfo,
} = require("../controllers/InfoController");

router.get("/", GetAllInfo);
router.get("/:id", GetInfo);
router.post("/", CreateInfo);
router.patch("/:id", UpdateInfo);
router.delete("/:id", DeleteInfo);

module.exports = router;
