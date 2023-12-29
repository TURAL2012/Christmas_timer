var countDownDate = new Date("Dec 31, 2023 00:00:00").getTime();



var x = setInterval(function() {

    var now = new Date().getTime();
      
    var distance = countDownDate - now;
      
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    document.querySelector(".time").innerHTML = days + " Day " + hours + " Hours "
    + minutes + " minutes " + seconds + " seconds";
      

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("time").innerHTML = "Happy Christmas";
    }
  }, 1000);