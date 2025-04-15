const express = require("express");
const router = express.Router();
const restaurantController = require("../Controllers/restaurantController"); 

router.get("/", restaurantController.getAllRestaurants);
router.get("/:id", restaurantController.getRestaurantById);
router.post("/", restaurantController.addRestaurant);
router.patch("/:id", restaurantController.updateRestaurant);
router.delete("/:id", restaurantController.deleteRestaurant);

module.exports = router;
