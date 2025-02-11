const Course = require("../models/Course");
const { mongooseToObject, multipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  // [GET] /me/stored/course
  storedCourses(req, res, next) {
    Course.find()
      .then((courses) => {
        res.render("me/stored-courses", { courses: multipleMongooseToObject(courses) });
      })
      .catch((error) => next(error));
  }

  trashCourses(req,res, next) {
    Course.findDeleted()
      .then((courses) => {
        res.render("me/trash-courses", { courses: multipleMongooseToObject(courses) });
      })
      .catch((error) => next(error));
  }
}

module.exports = new MeController();
