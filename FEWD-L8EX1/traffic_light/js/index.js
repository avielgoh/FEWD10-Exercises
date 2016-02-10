//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function() {
  $('#stopButton').click(function() {
    $('.bulb').css('background-color', 'black'); // change other lights back to black first
    $('#stopLight').css('background-color', 'red');
  });

  $('#slowButton').click(function() {
    $('.bulb').css('background-color', 'black');
    $('#slowLight').css('background-color', 'orange');
  });

  $('#goButton').click(function() {
    $('.bulb').css('background-color', 'black');
    $('#goLight').css('background-color', 'green');
  });
});
