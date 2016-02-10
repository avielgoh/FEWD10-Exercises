$(document).ready(function() {

  var count = 0; // declare variable of count and set to 0

  $('.up').click(function() {
    $(this).parent().css('background-color', 'green');
    count += 1; // increment count
    $('.score span').html(count);
  });

  $('.down').click(function() {
    $(this).parent().css('background-color', 'red');
    count -= 1; // decrement count
    $('.score span').html(count);
  });
});
