const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.viewDashboard);
router.get("/dashboard", adminController.viewDashboard);
router.get("/member", adminController.viewMember);
router.get("/event", adminController.viewEvent);
router.get("/position", adminController.viewPosition);
router.get("/certificate", adminController.viewCertificate);

module.exports = router;
