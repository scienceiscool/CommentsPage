var main = function () {
 "use strict";

 $(".comment-input button").on("click", function (event) {

  //console.log("Hello World!");
  //$(".comments").append("<p>this is a new comment</p>");

  var $new_comment = $("<p>"),
     // $ in front of above variable bc it will hold a jQuery object
   comment_text = $(".comment-input input").val();

  // the following if statement fixes a bug
  // it won't publish an empty comment now
  if ($(".comment-input input").val() !== "") {
    $new_comment.text(comment_text);
    $(".comments").append($new_comment);
    $(".comment-input input").val("");
  }
 });
};

$(document).ready(main);
