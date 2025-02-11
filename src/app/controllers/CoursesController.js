const Course = require("../models/Course");
const { mongooseToObject, multipleMongooseToObject } = require("../../util/mongoose");

class CoursesController {
  // [GET]/courses/:slug
  show(req, res, next) {
    let slug = req.params.slug ? req?.params?.slug : "";
    if (slug) {
      Course.findOne({ slug: req.params.slug })
        .then((course) => {
          res.render("courses/show", { course: mongooseToObject(course) });
        })
        .catch((error) => next(error));
    } else {
      Course.find()
        .then((courses) => {
          res.render("home", { courses: multipleMongooseToObject(courses) });
        })
        .catch((error) => next(error));
    }
  }

  // [GET]/courses/
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST]/courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/maxresdefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => next(error));
  }

  // [GET]/courses/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", { course: mongooseToObject(course) });
      })
      .catch((error) => next(error));
  }
  // [GET]/courses/edit
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [DELETE]/courses/:id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new CoursesController();
