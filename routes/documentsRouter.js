const express = require("express");
const router = express.Router();
const {
  createDocument,
  findDocument,
  updateDocument,
  deleteDocument,
} = require("../controllers/DocumentControllers");
const verifyJwt = require("../middlewares/verifyJwt");

router.use(verifyJwt);

router.route("/documents").get(findDocument).post(createDocument);

router.put("/documents/:id", updateDocument);
router.delete("/documents/:id", deleteDocument);

// router.post("/createDocument", verifyLogin, createDocument);

// router.get("/getDocuments", verifyLogin, findDocument);
// router.put("/updateDocument/:id", updateDocument);
// router.delete("/deleteDocument/:id", deleteDocument);

module.exports = router;
