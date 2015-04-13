var main = function () {
  "use strict";

  var addCommentFromInputBox = function () {
    // $ in front of variable below bc it will hold a jQuery object
    var $new_comment;

    // the following if statement fixes a bug
    // it won't publish an empty comment now
    if ($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      // the following lines calling hide() and fadeIn() and in the next
      // block of code allow for a comment to not just appear but fade in
      $new_comment.hide();
      $(".comments").append($new_comment);
      $new_comment.fadeIn();
      $(".comment-input input").val("");
    }
  };

  $(".comment-input button").on("click", function (event) {
    addCommentFromInputBox();
  });

  $(".comment-input input").on("keypress", function (event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox();
    }
  });
};

$(document).ready(main);
