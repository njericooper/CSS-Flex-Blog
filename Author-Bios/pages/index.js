
var today = new Date();
var date = String(today.getDate() +1).padStart(2, '0');
var month = String(today.getMonth() +1).padStart(2, '0');
var year = today.getFullYear();
today = month +'-'+ date +'-' + year;
document.getElementById("date").innerHTML = today;