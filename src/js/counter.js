// https://www.w3schools.com/howto/howto_js_countdown.asp
function displayTime(initial) {
  let rightNow = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = rightNow - initial;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + " Days " + hours + " Hours "
  + minutes + " Minutes " + seconds + " Seconds ";
}

// Immediately call the function to display when the page loads.
const twitterBought = new Date(2022, 10, 28).getTime();
displayTime(twitterBought);

// Subsequently update the page every 1 second.
let interval = setInterval(displayTime, 1000, twitterBought);
