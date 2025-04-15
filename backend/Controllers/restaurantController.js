const fs = require("fs");
const dataPath = "../frontend/src/Utils/Restaurant.json";
let data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

exports.getAllRestaurants = (req, res) => {
  res.json(data);
};

exports.getRestaurantById = (req, res) => {
  const restaurantId = req.params.id;
  const restaurant = data.find((item) => item.info.id === restaurantId);
  if (!restaurant) {
    return res.status(404).json({ error: "Restaurant not found" });
  }
  res.json(restaurant);
};

exports.addRestaurant = (req, res) => {
  const newRestaurant = req.body;
  let lastId = 100;
  if (data.length > 0) {
    const lastRestaurant = data[data.length - 1];
    lastId = parseInt(lastRestaurant.info.id) || 100;
  }
  newRestaurant.id = (lastId + 1).toString();
  data.push({ info: newRestaurant });
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  res.status(201).json({
    message: "Restaurant added successfully",
    data: newRestaurant,
  });
};

exports.updateRestaurant = (req, res) => {
  const restaurantId = req.params.id;
  const updateData = req.body;
  const index = data.findIndex((item) => item.info.id === restaurantId);
  if (index === -1)
    return res.status(404).json({ error: "Restaurant not found" });
  data[index].info = { ...data[index].info, ...updateData };
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  res.json({ message: "Restaurant updated", data: data[index].info });
};

exports.deleteRestaurant = (req, res) => {
  const restaurantId = req.params.id;
  const newData = data.filter((item) => item.info.id !== restaurantId);
  if (newData.length === data.length) {
    return res.status(404).json({ error: "Restaurant not found" });
  }
  data = newData;
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  res.json({ message: "Restaurant deleted" });
};
