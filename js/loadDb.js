$(function () {
  var people = [];

  $.getJSON("database/vids.json", function (data) {
    $.each(data.video, function (i, f) {
      var tblRow =
        "<tr>" +
        "<td>" +
        f.firstName +
        "</td>" +
        "<td>" +
        f.lastName +
        "</td>" +
        "<td>" +
        f.job +
        "</td>" +
        "<td>" +
        f.roll +
        "</td>" +
        "</tr>";
      $(tblRow).appendTo("#movies");
    });
  });
});
