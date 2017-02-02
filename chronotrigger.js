var timerID = 0;
function chrono(){ //Function chronometre
 var dateActuelle=new Date();
	timerID=setInterval(function() { var dateActualisee=new Date();
	 	                      chrono=dateActualisee-dateActuelle;
	 	                      chrono= new Date(chrono);
	 	                      document.getElementById("chronotime").innerHTML =chrono.getMinutes()+":"+chrono.getSeconds();
	 						
	 					    }, 100);	
	}
	

 
function stop(){clearInterval(timerID)}
