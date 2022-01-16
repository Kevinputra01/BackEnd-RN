const express = require("express");
const router = express.Router();

const { addTodays, getAllTodays, getToday, updateToday, deleteToday } = require("../controllers/today");
router.post("/add-today", addTodays);
router.get("/today", getAllTodays);
router.get("/today/:id", getToday);
router.patch("/today/:id", updateToday);
router.delete("/today/:id", deleteToday);

const { addHomeworks, getAllHomeworks, getHomework, updateHomework, deleteHomework } = require("../controllers/homework");
router.post("/add-homework", addHomeworks);
router.get("/homework", getAllHomeworks);
router.get("/homework/:id", getHomework);
router.patch("/homework/:id", updateHomework);
router.delete("/homework/:id", deleteHomework);

const { getAllCollections, getCollection } = require("../controllers/collection");
router.get("/collections", getAllCollections);
router.get("/collections/:id", getCollection);


module.exports = router;