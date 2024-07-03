const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const coursesController = require("../Controller/coursesController");
// const { Router } = require("express");
// const { body, validationResult } = require("express-validator");
// const router = Router();

router
  .route("/")
  // Get All Courses
  .get(coursesController.getAllCourses)
  // Create New Course
  .post(
    [
      body("title")
        .notEmpty()
        .withMessage("Title Is Empty")
        .isLength({ min: 3 })
        .withMessage("Length must be more than 3 digits"),
      body("price").notEmpty().withMessage("price Is Empty"),
    ],
    coursesController.addNewCourse
  );

router
  .route("/:courseId")
  // Get Single Course By Id
  .get(coursesController.getSingleCourse)
  // Update Course
  .patch(coursesController.updateCourse)
  // Delete Course
  .delete(coursesController.deleteCourse);

module.exports = router;
