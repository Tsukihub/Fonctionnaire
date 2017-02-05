////////////////////////////////////////afficher longeur et mettre en maj/minuscules////////////////////////////////////
var motDelUtilisateur = prompt("saisissez un mot").toLowerCase();
console.log("le mot a une longeur de " + motDelUtilisateur.length);
console.log("le mot s'écrit " + motDelUtilisateur.toUpperCase()+" en majuscules");
console.log("le mot en minuscules est : " + motDelUtilisateur);
//////////////////////////////////compter le nombre de voyelles et consonnes///////////////////////////////////////////
var voyelles=["a", "e", "i", "o", "u", "y"];
var CompteurVoyelle=0;
var CompteurConsonne=0;

for (var i = 0; i < motDelUtilisateur.length; i++) {
	for (var x = 0; x < voyelles.length; x++) {
		if (motDelUtilisateur[i]===voyelles[x]){
			CompteurVoyelle+=1;
		}
		}
	}	

CompteurConsonne=(motDelUtilisateur.length)-CompteurVoyelle;
console.log("Mot contient " +CompteurVoyelle+ " voyelles et " + CompteurConsonne+ " consonnes");
/////////////////////////////////////////inverser le mot ///////////////////////////////////////////////////
function inverser(){
	var motInversé="";
	for (var i = 0; i < motDelUtilisateur.length; i++) {
		motInversé=motDelUtilisateur[i]+motInversé;
	}

			return motInversé;
}
console.log("le mot inversé est " +inverser());

////////////////////////detecter palindrome//////////////////////////////////////////////////////////


	if (inverser()==motDelUtilisateur) {
				console.log("ceci est un Palindrome");
	}else{
	console.log("ceci n'est pas un Palindrome");
}

/////////////////////////////////////////conversion de caractères//////////////////////////////////////////////////

var tableConversion=[["a","4"], ["b","8"], ["e","3"], ["o","0"], ["l","1"], ["s","5"]];




function convertirEnLeetSpeak(motConvetir) {
	var motConverti="";
	lettreLeet="";
	 for (var i = 0; i < motConvetir.length; i++) {
	 
	 	motConverti+=trouverLettreLeet(motConvetir[i]);
}
return motConverti;
}
function trouverLettreLeet(lettreIndexI) {

	for (var x = 0; x < tableConversion.length; x++) {

		if(lettreIndexI==tableConversion[x][0]){
			return tableConversion[x][1];
			var indice=1;

		}
	
	}
		if (!indice){
			return lettreIndexI;
		}
}
console.log("le mot en leet est "+convertirEnLeetSpeak(motDelUtilisateur));


