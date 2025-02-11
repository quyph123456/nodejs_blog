document.addEventListener("DOMContentLoaded", function () {
  $("#delete-course-modal").on("show.bs.modal", function (event) {
    let button = $(event.relatedTarget);
    let id = button.data("id");
    console.log(id);
  });
});
