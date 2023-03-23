// Set the date we're counting down to
var countDownDate = new Date("Nov 12, 2023 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate the days, hours, minutes, and seconds left
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in the element with id="countdown"
  document.getElementById("d").innerHTML = days;
  document.getElementById("h").innerHTML = hours;
  document.getElementById("m").innerHTML = minutes;
  document.getElementById("s").innerHTML = seconds;

  // If the countdown is finished, display "EXPIRED"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "WAKTU SUDAH HABIS";
  }
}, 1000);
