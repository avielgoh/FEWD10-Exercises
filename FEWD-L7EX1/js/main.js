$(document).ready(function() {

  // toggle slide the <p> tags on click of the parent <h3> tag
  $('.accordion h3').click(function() {
    $(this).next().slideToggle();
  });

  // expand all the <p> tags on click of the <a> tag
  $('.accordion a').click(function(event) {
    event.preventDefault(); // prevents the default action of the HTML element from happening
    $(this).parent().find('p').slideToggle();

    // change the text of the <a> tag between expand and collapse
    if ($(this).text() === "Expand all") {
      $(this).html("<b>Collapse all</b>");
    } else {
      $(this).html("Expand all");
    };
  });
});
