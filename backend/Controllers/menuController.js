const fs = require("fs");
const menuPath = "../frontend/src/Utils/Menu.json";
let Menudata = JSON.parse(fs.readFileSync(menuPath, "utf-8"));

exports.getAllMenuItems = (req, res) => {
  res.json(Menudata);
};

exports.getMenuItemById = (req, res) => {
  const menuId = req.params.id;
  const menuItem = Menudata.flatMap(
    (block) => block?.card?.card?.itemCards || []
  ).find((item) => item?.card?.info?.id === menuId);

  if (!menuItem) {
    return res.status(404).json({ error: "Menu item not found" });
  }
  res.json(menuItem);
};

exports.addMenuItem = (req, res) => {
  const newItem = req.body;
  let lastId = 200;
  if (Menudata.length > 0) {
    const lastItem = Menudata[Menudata.length - 1];
    lastId = parseInt(lastItem.id) || 200;
  }
  newItem.id = (lastId + 1).toString();
  Menudata.push(newItem);
  fs.writeFileSync(menuPath, JSON.stringify(Menudata, null, 2));
  res.status(201).json({
    message: "Menu item added successfully",
    data: newItem,
  });
};

exports.updateMenuItem = (req, res) => {
  const menuId = req.params.id;
  const updateData = req.body;

  const menuItem = Menudata.flatMap(
    (block) => block?.card?.card?.itemCards || []
  ).find((item) => item?.card?.info?.id === menuId);

  if (!menuItem) {
    return res.status(404).json({ error: "Menu item not found" });
  }

  menuItem.card.info = { ...menuItem.card.info, ...updateData };

  fs.writeFileSync(menuPath, JSON.stringify(Menudata, null, 2));
  res.json({ message: "Menu item updated", data: menuItem });
};

exports.deleteMenuItem = (req, res) => {
  const menuId = req.params.id;

  const block = Menudata.find((block) =>
    block?.card?.card?.itemCards.some((item) => item?.card?.info?.id === menuId)
  );

  if (!block) {
    return res.status(404).json({ error: "Menu item not found" });
  }

  block.card.card.itemCards = block.card.card.itemCards.filter(
    (item) => item?.card?.info?.id !== menuId
  );

  fs.writeFileSync(menuPath, JSON.stringify(Menudata, null, 2));

  res.json({ message: "Menu item deleted" });
};
