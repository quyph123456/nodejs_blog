const express = require("express");
const coursesController = require("../app/controllers/CoursesController");
const router = express.Router();

router.get("/create", coursesController.create);
router.get("/:id/edit", coursesController.edit);
router.put("/:id", coursesController.update);
router.delete("/:id", coursesController.destroy);
router.post("/store", coursesController.store);
router.get("/:slug", coursesController.show);
router.get("/", coursesController.show);

module.exports = router;
