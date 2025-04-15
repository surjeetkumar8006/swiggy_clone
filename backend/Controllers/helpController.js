const fs = require("fs");
const path = require("path");
const helpPath = "../frontend/src/Utils/help.json";
let helpData = JSON.parse(fs.readFileSync(helpPath, "utf-8"));

exports.getAllHelp = (req, res) => {
  res.json(helpData);
};

exports.getHelpById = (req, res) => {
  const { id } = req.params;
  const helpItem = helpData.find(item => item.id === id);
  if (!helpItem) return res.status(404).json({ error: "Help item not found" });
  res.json(helpItem);
};

exports.addHelp = (req, res) => {
  const newItem = req.body;
  let lastId = helpData.length > 0 ? parseInt(helpData[helpData.length - 1].id) : 0;
  newItem.id = (lastId + 1).toString();
  helpData.push(newItem);
  fs.writeFileSync(helpPath, JSON.stringify(helpData, null, 2));
  res.status(201).json({ message: "Help item added", data: newItem });
};

exports.updateHelp = (req, res) => {
  const { id } = req.params;
  const index = helpData.findIndex(item => item.id === id);
  if (index === -1) return res.status(404).json({ error: "Help item not found" });

  helpData[index] = { ...helpData[index], ...req.body };
  fs.writeFileSync(helpPath, JSON.stringify(helpData, null, 2));
  res.json({ message: "Help item updated", data: helpData[index] });
};

exports.deleteHelp = (req, res) => {
  const { id } = req.params;
  const newData = helpData.filter(item => item.id !== id);
  if (newData.length === helpData.length)
    return res.status(404).json({ error: "Help item not found" });

  helpData = newData;
  fs.writeFileSync(helpPath, JSON.stringify(helpData, null, 2));
  res.json({ message: "Help item deleted" });
};
