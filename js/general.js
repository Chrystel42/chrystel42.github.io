 //Pour voir les règles
 regles.onclick = function () {
     document.getElementById('regleJeu').style.display = "block";
     document.getElementById('reglesDuJeu').style.display = "block";
 }

 //Pour fermer les règles
 fermer.onclick = function () {
     document.getElementById('reglesDuJeu').style.display = "none";
 }

 //Pour voir mon CV
 var voirMonCV = document.getElementById('boutonCV')
 voirMonCV.onclick = function () {
     window.open('cv-chrystel-alinc.pdf');
 }

 //Pour retourner à l'acceuil en cliquant sur Acceuil dans le menu
 menuAccueil.onclick = function () {
     document.location.reload();
 }

 //Pour retourner à l'accueil quand on clique sur le bouton accueil
 boutonAccueil.onclick = function () {
     document.location.reload();
 }