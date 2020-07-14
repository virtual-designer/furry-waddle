const lang = navigator.language;

var timeField = document.getElementById("time");

setInterval(function(){
	var time = new Date();
	
  var fullTime = time.toLocaleString(lang, {
  	timeZone: document.form.timezone.value,
  	hour: 'numeric',
  	minute: 'numeric', 
  	second: 'numeric',
  	hour12: true
  });
	
	timeField.innerHTML = fullTime;
}, 1000);
