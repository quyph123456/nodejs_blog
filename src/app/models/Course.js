const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-updater");
const mongooseDelete = require('mongoose-delete');


const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true },
  { strict: false } // Cho phép lấy dữ liệu không khai báo trong schema
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {overrideMethods: true, deletedAt: true})

module.exports = mongoose.model("Course", Course);
