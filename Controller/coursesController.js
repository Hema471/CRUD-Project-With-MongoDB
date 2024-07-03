const text = require("../utils/StatusTexts");
const Course = require("../courseModel/courseModel");

// Get
const getAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find();
    res.json({
      status: text.SUCCESS,
      data: { courses: allCourses },
    });
  } catch {
    res.status(400).json({
      status: text.ERROR,
      message: text.MESSAGE,
    });
  }
};

// Get
const getSingleCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const myCourse = await Course.findById(courseId).exec();
    // console.log(typeof courseId);
    if (!myCourse) {
      res.status(404).json({
        status: text.FAIL,
        data: { message: "Course Not Found" },
      });
    } else {
      res.status(200).json({
        status: text.SUCCESS,
        data: { courses: myCourse },
      });
    }
  } catch {
    res.status(400).json({
      status: text.ERROR,
      message: text.MESSAGE,
    });
  }
};

// Post
const addNewCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json({
      status: text.SUCCESS,
      data: { courses: newCourse },
    });
  } catch {
    res.status(400).json({
      status: text.ERROR,
      message: text.MESSAGE,
    });
  }
};

// Patch
const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    await Course.findByIdAndUpdate(courseId, req.body);
    res.status(200).json({
      status: text.SUCCESS,
      data: { message: "Updated Successfully" },
    });
  } catch {
    res.status(400).json({
      status: text.ERROR,
      message: text.MESSAGE,
    });
  }
};

// Delete
const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    await Course.findByIdAndDelete(courseId);
    res.status(200).json({
      status: text.SUCCESS,
      data: { message: "Deleted Successfully" },
    });
  } catch {
    res.status(400).json({
      status: text.ERROR,
      message: text.MESSAGE,
    });
  }
};

module.exports = {
  getAllCourses,
  getSingleCourse,
  addNewCourse,
  updateCourse,
  deleteCourse,
};
