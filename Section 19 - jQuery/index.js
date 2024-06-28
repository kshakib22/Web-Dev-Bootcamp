// $("h1").addClass("bad-title");
// $("button").html("<em>Click<em>");

// $("button").click(function () {
//   $("h1").removeClass("bad-title");
//   $("h1").addClass("big-title");
// });

$("input").keydown(function (event) {
  console.log(event.key);
});

$(document).keydown(function (event) {
  $("h1").text(event.key);
});
