const express = require("express");
const router = express.Router();
const {
  createDocument,
  findDocument,
  updateDocument,
  deleteDocument,
} = require("../controllers/DocumentControllers");
const { verifyLogin } = require("../middlewares/adminmiddle");

router.post("/createDocument", verifyLogin, createDocument);

router.get("/getDocuments", verifyLogin, findDocument);
router.put("/updateDocument/:id", updateDocument);
router.delete("/deleteDocument/:id", deleteDocument);

module.exports = router;
