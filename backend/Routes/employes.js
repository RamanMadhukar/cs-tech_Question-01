const express = require('express');
const router = express.Router();
const {employes, getEmployes, getEmployesId, updateEmployes, deleteEmp, searchEmployes} = require("../Controller/employes")


router.post("/employes", employes);
router.get("/employes", getEmployes);
router.get("/employes/:id", getEmployesId);
router.put("/update/:id", updateEmployes);
router.delete("/delete/:id", deleteEmp);
router.get("/search", searchEmployes);





module.exports = router;