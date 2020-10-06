//jshint esversion:6

 exports.getDate = function() {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "2-digit",
    month: "long"
  };

  //https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
  return today.toLocaleDateString("en-US", options);

}

exports.getDay = function() {
  var today = new Date();

  var options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);

}
