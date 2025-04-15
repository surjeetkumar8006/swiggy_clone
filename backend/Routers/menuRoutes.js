const express = require("express");
const router = express.Router();
const menuController = require("../Controllers/menuController.js");

router.get("/", menuController.getAllMenuItems);
router.get("/:id", menuController.getMenuItemById);
router.post("/", menuController.addMenuItem);
router.patch("/:id", menuController.updateMenuItem);
router.delete("/:id", menuController.deleteMenuItem);

module.exports = router;
