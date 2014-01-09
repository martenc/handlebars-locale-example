// locale: us, uk, fr
var local_segment = window.location.pathname.replace("/", "").replace("/", "");

var Ajax = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
Ajax.onreadystatechange = function(){
	if (Ajax.readyState==4 && Ajax.status==200)
	{
		var Content = JSON.parse(Ajax.responseText);
		var Source = document.getElementById("Handlebars-Template").textContent;
		var Template = Handlebars.compile(Source);
		var HTML = Template({ Content : Content });
		document.body.innerHTML = HTML;
	}
}
Ajax.open("GET","../_data/content_" + local_segment + ".json", true);
Ajax.send();