$(document).ready(function() {
  $("div#click-one").click(function(event) {
    var whatToSay = "Hello!";
    alert(whatToSay);
  });
  $("div#click-two").click(function(event) {
    var whatToSay = "Bonjour!";
    alert(whatToSay);
  });
});
