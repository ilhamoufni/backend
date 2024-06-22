const express = require("express");
const router = express.Router();
const {
  createDocument,
  findDocument,
  updateDocument,
  deleteDocument,
  filterDocuments,
} = require("../controllers/DocumentControllers");
const verifyJwt = require("../middlewares/verifyJwt");
const verifyRoles = require("../middlewares/verifyRoles");
const ROLES = require("../utils/constants");

router.use(verifyJwt);

router
  .route("/documents")
  .get(verifyRoles(ROLES.admin, ROLES.chef, ROLES.user), findDocument)
  .post(verifyRoles(ROLES.admin, ROLES.chef, ROLES.user), createDocument);

router.put(
  "/documents/:id",
  verifyRoles(ROLES.admin, ROLES.chef),
  updateDocument
);

router.post("/filter-documents", filterDocuments);

router.delete(
  "/documents/:id",
  verifyRoles(ROLES.admin, ROLES.chef),
  deleteDocument
);

// router.post("/createDocument", verifyLogin, createDocument);
// router.get("/getDocuments", verifyLogin, findDocument);
// router.put("/updateDocument/:id", updateDocument);
// router.delete("/deleteDocument/:id", deleteDocument);

module.exports = router;
