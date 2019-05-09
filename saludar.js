function Saludar (){ 
	var saludo = "";
	var tiempo = new Date().getHours();

	if(tiempo < 12){
		saludo= "Buenos dias!";
	} else if (tiempo < 19){
		saludo ="Buenas tardes!";
	} else {
	  	saludo = "Buenas noches!";
	}	
	document.getElementById ("saludo").innerHTML= saludo; 
	}
