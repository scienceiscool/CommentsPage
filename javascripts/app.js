var main = function () {
  "use strict";

  // create new ul element
  var $newUL = $("<ul>");

  var $listItemOne = $("<li>").text("First list item");
  var $listItemTwo = $("<li>").text("Second list item");
  var $listItemThree = $("<li>").text("Third list item");

  // create two new p elements
  var $newParagraphElement = $("<p>").text("Hey, I'm a paragraph. Second line in the footer.");
  var $footerFirstChild = $("<p>").text("I'm the first child of the footer.");

  // attach new p elements to the DOM
  // notice: one is appending, one is prepending
  $("footer").append($newParagraphElement);
  $("footer").prepend($footerFirstChild); // equivalent to:
    // $footerFirstChild.appendTo($("footer"));

  // attach list items to unordered list, still need to attach to main tree
  $newUL.append($listItemOne);
  $newUL.append($listItemTwo);
  $newUL.append($listItemThree);

  // attach ul element and subtree to main tree
  $("main").append($newUL);

  // remove elements
  $("ul").remove();
  //$newUL.empty(); // equivalent to the above line
  $("footer:first-child").remove();
  $("footer:nth-child(3)").remove();

  var addCommentFromInputBox = function () {
    // $ in front of variable below bc it will hold a jQuery object
    var $new_comment; // create new jQuery object variable

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
