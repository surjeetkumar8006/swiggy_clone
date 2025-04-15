const express = require("express");
const router = express.Router();
const helpController = require("../Controllers/helpController.js");

router.get("/", helpController.getAllHelp);
router.get("/:id", helpController.getHelpById);
router.post("/", helpController.addHelp);
router.patch("/:id", helpController.updateHelp);
router.delete("/:id", helpController.deleteHelp);

module.exports = router;
