window.onload = function () {
    var hauteur = window.innerHeight;
    document.getElementById('jeu').style.height = hauteur;
    var boutonPlay = document.getElementById('bouton');

    boutonPlay.onclick = function () {

        //masque le contenu de la div instruction
        document.getElementById('blood').style.display = 'none';
        document.getElementById('intro').style.display = 'none';
        document.getElementById('bouton').style.display = 'none';
        // Masque le score
        // document.getElementById('score').style.display = 'block';

        //Remplace le background
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundImage = "url('./images/decor.jpg')";
        //affiche le brouillard
        document.getElementById('mist').style.display = 'block';
        //affiche le redneck
        document.getElementById('container').style.display = 'block';
        document.getElementById('contenu').style.display = 'block';
        //affiche la zombie Girl
        document.getElementById('containerZombieGirl').style.display = 'block';
        document.getElementById('contenuZombieGirl').style.display = 'block';
        //affiche le Zombie avec la poele
        document.getElementById('containerZombiePoele').style.display = 'block';
        document.getElementById('contenuZombiePoele').style.display = 'block';
        //affiche le Zombie momie
        document.getElementById('containerZombieMomie').style.display = 'block';
        document.getElementById('contenuZombieMomie').style.display = 'block';
        //affiche le Zombie Frankenstein
        document.getElementById('containerZombieFrank').style.display = 'block';
        document.getElementById('contenuZombieFrank').style.display = 'block';
        //affiche le Zombie Frankenstein
        document.getElementById('containerZombieBoy').style.display = 'block';
        document.getElementById('contenuZombieBoy').style.display = 'block';
        //Affiche le score
        // document.getElementById('score').style.display = 'block';
        animationPersonnages();
    };

    //SPITES***************
    //Redneck à la hache
    var masque = window.document.getElementById('container');
    var sprite = window.document.getElementById('contenu');


    var decompositionDuSprite = {
        perso: [{
            largeurMasque: '340px', //0
            hauteurMasque: '310px',
            topDeImage: '58px',
            leftDeImage: '-17px'
        }, {
            largeurMasque: '340px', //1
            hauteurMasque: '310px',
            topDeImage: '58px',
            leftDeImage: '-360px'
        }, {
            largeurMasque: '340px', //2
            hauteurMasque: '310px',
            topDeImage: '58px',
            leftDeImage: '-702px'
        }, {
            largeurMasque: '340px', //3
            hauteurMasque: '310px',
            topDeImage: '58px',
            leftDeImage: '-1064px'
        }, {
            largeurMasque: '340px', //4
            hauteurMasque: '310px',
            topDeImage: '58px',
            leftDeImage: '-1408px'
        }, {
            largeurMasque: '340px', //5
            hauteurMasque: '310px',
            topDeImage: '58px',
            leftDeImage: '-1746px'
        }, {
            largeurMasque: '340px', //6
            hauteurMasque: '310px',
            topDeImage: '58px',
            leftDeImage: '-2086px'


            //Attaque à la hache
        }, {
            largeurMasque: '229px', //7
            hauteurMasque: '310px',
            topDeImage: '-277px',
            leftDeImage: '-17px'
        }, {
            largeurMasque: '169px', //8
            hauteurMasque: '310px',
            topDeImage: '-277px',
            leftDeImage: '-359px'
        }, {
            largeurMasque: '146px', //9
            hauteurMasque: '310px',
            topDeImage: '-277px',
            leftDeImage: '-704px'
        }, {
            largeurMasque: '167px', //10
            hauteurMasque: '310px',
            topDeImage: '-277px',
            leftDeImage: '-1405px'
        }, {
            largeurMasque: '211px', //11
            hauteurMasque: '310px',
            topDeImage: '-277px',
            leftDeImage: '-1745px'
        }, {
            largeurMasque: '293px', //12
            hauteurMasque: '310px',
            topDeImage: '-277px',
            leftDeImage: '-2090px'

        }]
    };

    //Zombie Girl
    var masqueGirl = window.document.getElementById('containerZombieGirl');
    var spriteGirl = window.document.getElementById('contenuZombieGirl');

    var decompositionDuSpriteGirl = {
        persoGirl: [{
            largeurMasque: '120px', //0
            hauteurMasque: '189px',
            topDeImage: '-21px',
            leftDeImage: '-43px'
        }, {
            largeurMasque: '120px', //1
            hauteurMasque: '189px',
            topDeImage: '-21px',
            leftDeImage: '-279px'
        }, {
            largeurMasque: '120px', //2
            hauteurMasque: '189px',
            topDeImage: '-21px',
            leftDeImage: '-512px'
        }, {
            largeurMasque: '120px', //3
            hauteurMasque: '189px',
            topDeImage: '-21px',
            leftDeImage: '-745px'
        }, {
            largeurMasque: '120px', //4
            hauteurMasque: '189px',
            topDeImage: '-21px',
            leftDeImage: '-979px'
        }, {
            largeurMasque: '120px', //5
            hauteurMasque: '189px',
            topDeImage: '-21px',
            leftDeImage: '-1442px'
        }, {
            largeurMasque: '120px', //6
            hauteurMasque: '189px',
            topDeImage: '-21px',
            leftDeImage: '-1675px'
        }, {
            largeurMasque: '120px', //7
            hauteurMasque: '189px',
            topDeImage: '-21px',
            leftDeImage: '-1908px'
        }, {
            largeurMasque: '120px', //8
            hauteurMasque: '189px',
            topDeImage: '-21px',
            leftDeImage: '-2141x'
        }, {
            largeurMasque: '120px', //9
            hauteurMasque: '189px',
            topDeImage: '-21px',
            leftDeImage: '-2374px'
        }]
    };


    //Zombie avec Poele
    var masqueZombiePoele = window.document.getElementById('containerZombiePoele');
    var spriteZombiePoele = window.document.getElementById('contenuZombiePoele');

    var decompositionDuSpriteZombiePoele = {
        persoZombiePoele: [{
            largeurMasque: '153px', //0
            hauteurMasque: '184px',
            topDeImage: '-13px',
            leftDeImage: '-3px'
        }, {
            largeurMasque: '153px', //1
            hauteurMasque: '184px',
            topDeImage: '-13px',
            leftDeImage: '-250px'
        }, {
            largeurMasque: '153px', //2
            hauteurMasque: '184px',
            topDeImage: '-13px',
            leftDeImage: '-447px'
        }, {
            largeurMasque: '153px', //3
            hauteurMasque: '184px',
            topDeImage: '-13px',
            leftDeImage: '-681px'
        }, {
            largeurMasque: '153px', //4
            hauteurMasque: '184px',
            topDeImage: '-13px',
            leftDeImage: '-898px'
        }, {
            largeurMasque: '153px', //5
            hauteurMasque: '184px',
            topDeImage: '-13px',
            leftDeImage: '-1135px'
        }, {
            largeurMasque: '153px', //6
            hauteurMasque: '184px',
            topDeImage: '-13px',
            leftDeImage: '-1354px'
        }, {
            largeurMasque: '153px', //7
            hauteurMasque: '184px',
            topDeImage: '-13px',
            leftDeImage: '-1555px'
        }]
    };


    //Zombie momie
    var masqueZombieMomie = window.document.getElementById('containerZombieMomie');
    var spriteZombieMomie = window.document.getElementById('contenuZombieMomie');

    var decompositionDuSpriteZombieMomie = {
        persoZombieMomie: [{
            largeurMasque: '140px', //0
            hauteurMasque: '185px',
            topDeImage: '-9px',
            leftDeImage: '-42px'
        }, {
            largeurMasque: '140px', //1
            hauteurMasque: '185px',
            topDeImage: '-9px',
            leftDeImage: '-289px'
        }, {
            largeurMasque: '140px', //2
            hauteurMasque: '185px',
            topDeImage: '-9px',
            leftDeImage: '-506px'
        }, {
            largeurMasque: '140px', //3
            hauteurMasque: '185px',
            topDeImage: '-9px',
            leftDeImage: '-775px'
        }, {
            largeurMasque: '140px', //4
            hauteurMasque: '185px',
            topDeImage: '-9px',
            leftDeImage: '-1010px'
        }, {
            largeurMasque: '140px', //5
            hauteurMasque: '185px',
            topDeImage: '-9px',
            leftDeImage: '-1249px'
        }, {
            largeurMasque: '140px', //6
            hauteurMasque: '185px',
            topDeImage: '-9px',
            leftDeImage: '-1492px'
        }, {
            largeurMasque: '140px', //7
            hauteurMasque: '185px',
            topDeImage: '-9px',
            leftDeImage: '-1728px'
        }]
    };

    //Zombie Frankenstein
    var masqueZombieFrank = window.document.getElementById('containerZombieFrank');
    var spriteZombieFrank = window.document.getElementById('contenuZombieFrank');

    var decompositionDuSpriteZombieFrank = {
        persoZombieFrank: [{
            largeurMasque: '116px', //0
            hauteurMasque: '178px',
            topDeImage: '-12px',
            leftDeImage: '-50px'
        }, {
            largeurMasque: '116px', //1
            hauteurMasque: '178px',
            topDeImage: '-12px',
            leftDeImage: '-276px'
        }, {
            largeurMasque: '116px', //2
            hauteurMasque: '178px',
            topDeImage: '-12px',
            leftDeImage: '-466px'
        }, {
            largeurMasque: '116px', //3
            hauteurMasque: '178px',
            topDeImage: '-12px',
            leftDeImage: '-652px'
        }, {
            largeurMasque: '116px', //4
            hauteurMasque: '178px',
            topDeImage: '-12px',
            leftDeImage: '-862px'
        }, {
            largeurMasque: '116px', //5
            hauteurMasque: '178px',
            topDeImage: '-12px',
            leftDeImage: '-1063px'
        }, {
            largeurMasque: '116px', //6
            hauteurMasque: '178px',
            topDeImage: '-12px',
            leftDeImage: '-1260px'
        }, {
            largeurMasque: '116px', //7
            hauteurMasque: '178px',
            topDeImage: '-12px',
            leftDeImage: '-1474px'
        }]
    };

    //Zombie Boy
    var masqueZombieBoy = window.document.getElementById('containerZombieBoy');
    var spriteZombieBoy = window.document.getElementById('contenuZombieBoy');

    var decompositionDuSpriteZombieBoy = {
        persoZombieBoy: [{
            largeurMasque: '146px', //0
            hauteurMasque: '186px',
            topDeImage: '-13px',
            leftDeImage: '-46px'
        }, {
            largeurMasque: '146px', //1
            hauteurMasque: '186px',
            topDeImage: '-13px',
            leftDeImage: '-294px'
        }, {
            largeurMasque: '146px', //2
            hauteurMasque: '186px',
            topDeImage: '-13px',
            leftDeImage: '-772px'
        }, {
            largeurMasque: '146px', //3
            hauteurMasque: '186px',
            topDeImage: '-13px',
            leftDeImage: '-999px'
        }, {
            largeurMasque: '146px', //4
            hauteurMasque: '186px',
            topDeImage: '-13px',
            leftDeImage: '-1236px'
        }, {
            largeurMasque: '146px', //5
            hauteurMasque: '186px',
            topDeImage: '-13px',
            leftDeImage: '-1476px'
        }, {
            largeurMasque: '146px', //6
            hauteurMasque: '186px',
            topDeImage: '-13px',
            leftDeImage: '-1717px'

        }]
    };

    //Redneck 
    var i = 1;
    var k = 7;
    var masqueAvancer = masque.offsetLeft;
    var masqueTop = 486;




    window.onkeydown = function (event) {

        var code = event.keyCode;

        //Redneck qui marche
        masque.style.width = decompositionDuSprite.perso[i].largeurMasque;
        masque.style.height = decompositionDuSprite.perso[i].hauteurMasque;
        sprite.style.top = decompositionDuSprite.perso[i].topDeImage;
        sprite.style.left = decompositionDuSprite.perso[i].leftDeImage;

        switch (code) {
            case 39: //droite
                masqueAvancer += 10;
                sprite.style.transform = "scaleX(1)";
                if (i == 6) {
                    i = 0;
                }
                sprite.style.left = decompositionDuSprite.perso[i++].leftDeImage;

                //déplacement du masque vers la droite
                masque.style.left = masqueAvancer + "px";

                break;

            case 37: //gauche
                if (masqueAvancer > 0) {
                    masqueAvancer -= 10;
                    sprite.style.transform = "scaleX(-1)";
                    if (i == 6) {
                        i = 0;
                    }
                    sprite.style.left = decompositionDuSprite.perso[i++].leftDeImage;


                    // déplacement du masque vers la gauche
                    masque.style.left = masqueAvancer + "px";
                }

                break;
            case 38: //se déplace vers le haut  
                if (masqueTop > 362) { //233
                    masqueTop -= 20;

                    if (i == 6) {
                        i = 0;
                    }
                    masque.style.top = masqueTop + "px";
                }
                break;

            case 40: //se déplace vers le bas
                if (masqueTop < 614) {
                    masqueTop += 20;

                    if (i == 6) {
                        i = 0;
                    }
                    masque.style.top = masqueTop + "px";
                }
                break;
            case 13:

                //Mouvement de la hache
                // if (k == 13) {
                //     k = 7;
                // }
                // sprite.style.top = decompositionDuSprite.perso[k].topDeImage;
                // sprite.style.left = decompositionDuSprite.perso[k].leftDeImage;
                // masque.style.width = decompositionDuSprite.perso[k].largeurMasque;
                // k++;
                var k = 7;
                var monInterval = setInterval(function () {
                    if (k <= 12) {
                        sprite.style.left = decompositionDuSprite.perso[k].leftDeImage;
                        sprite.style.top = decompositionDuSprite.perso[k].topDeImage;
                        k++;
                    } else {
                        clearInterval(monInterval);
                        sprite.style.top = decompositionDuSprite.perso[i].topDeImage;
                        sprite.style.left = decompositionDuSprite.perso[i].leftDeImage;
                    }

                }, 30);

            
                // COLLISIONS
                // Collision Zombie Girl  
                
                var deplacementMasque = document.getElementById('containerZombieGirl');
                var coorRedneck = masque.getBoundingClientRect();
                var coorZombieGirl = masqueGirl.getBoundingClientRect();

                if (coorRedneck.left < coorZombieGirl.left + coorZombieGirl.width &&
                    coorRedneck.left + coorRedneck.width > coorZombieGirl.left &&
                    coorRedneck.top < coorZombieGirl.top + coorZombieGirl.height &&
                    coorRedneck.height + coorRedneck.top > coorZombieGirl.top) {
                    // console.log('collision');
                    leftZombieGirl = 1900;
                    resultScore = parseInt(monScore.innerHTML, 0) + 50;
                    monScore.innerHTML = resultScore;
                }


                //Collision Zombie avec la Poele
                var deplacementMasqueZombiePoele = document.getElementById('containerZombiePoele');
                var coorRedneck = masque.getBoundingClientRect();
                var coorZombiePoele = masqueZombiePoele.getBoundingClientRect();

                if (coorRedneck.left < coorZombiePoele.left + coorZombiePoele.width &&
                    coorRedneck.left + coorRedneck.width > coorZombiePoele.left &&
                    coorRedneck.top < coorZombiePoele.top + coorZombiePoele.height &&
                    coorRedneck.height + coorRedneck.top > coorZombiePoele.top) {
                    // console.log('collision');
                    leftZombiePoele = 2500;
                    resultScore = parseInt(monScore.innerHTML, 0) + 50;
                    monScore.innerHTML = resultScore;
                }


                //collision Zombie Momie
                var deplacementMasqueZombieMomie = document.getElementById('containerZombieMomie');

                var coorRedneck = masque.getBoundingClientRect();
                var coorZombieMomie = masqueZombieMomie.getBoundingClientRect();

                if (coorRedneck.left < coorZombieMomie.left + coorZombieMomie.width &&
                    coorRedneck.left + coorRedneck.width > coorZombieMomie.left &&
                    coorRedneck.top < coorZombieMomie.top + coorZombieMomie.height &&
                    coorRedneck.height + coorRedneck.top > coorZombieMomie.top) {
                    // console.log('collision');
                    leftZombieMomie = 3000;
                    resultScore = parseInt(monScore.innerHTML, 0) + 50;
                    monScore.innerHTML = resultScore;
                }


                //collision Zombie Frankenstein
                var deplacementMasqueZombieFrank = document.getElementById('containerZombieFrank');

                var coorRedneck = masque.getBoundingClientRect();
                var coorZombieFrank = masqueZombieFrank.getBoundingClientRect();

                if (coorRedneck.left < coorZombieFrank.left + coorZombieFrank.width &&
                    coorRedneck.left + coorRedneck.width > coorZombieFrank.left &&
                    coorRedneck.top < coorZombieFrank.top + coorZombieFrank.height &&
                    coorRedneck.height + coorRedneck.top > coorZombieFrank.top) {
                    // console.log('collision');
                    leftZombieFrank = 3250;
                    resultScore = parseInt(monScore.innerHTML, 0) + 50;
                    monScore.innerHTML = resultScore;
                }


                //collision Zombie Boy
                var deplacementMasqueZombieBoy = document.getElementById('containerZombieBoy');

                var coorRedneck = masque.getBoundingClientRect();
                var coorZombieBoy = masqueZombieBoy.getBoundingClientRect();

                if (coorRedneck.left < coorZombieBoy.left + coorZombieBoy.width &&
                    coorRedneck.left + coorRedneck.width > coorZombieBoy.left &&
                    coorRedneck.top < coorZombieBoy.top + coorZombieBoy.height &&
                    coorRedneck.height + coorRedneck.top > coorZombieBoy.top) {
                    // console.log('collision');
                    leftZombieBoy = 3600;
                    resultScore = parseInt(monScore.innerHTML, 0) + 50;
                    monScore.innerHTML = resultScore;
                }

                break;
        };
    };

//Gestion de score
var monScore = document.getElementById("scoreNumb");
var resultScore = 0;             

function testScore() {
   

    if (resultScore >= 150) {
        console.log('condition = 150')
        var html5 = document.getElementById('html5')
        html5.style.display = 'block';
    }
    if (resultScore >= 300) {
        document.getElementById('css3').style.display = 'block';
    }
    if (resultScore >= 450) {
        document.getElementById('javascript').style.display = 'block';
    }
    if (resultScore >= 600) {
        document.getElementById('angular').style.display = 'block';
    }
    if (resultScore >= 750) {
        document.getElementById('mongodb').style.display = 'block';
    }
    if (resultScore >= 950) {
        document.getElementById('nodejs').style.display = 'block';
    }
    if (resultScore >= 1100) {
        document.getElementById('meteor').style.display = 'block';
        setTimeout(function(){ 
            document.getElementById('blood').style.display = 'block';
         }, 3000);
    }  
    
    requestAnimationFrame(testScore);
}
testScore();

    var leftZombieGirl = 1200;
    var leftZombiePoele = 1400;
    var leftZombieMomie = 1600;
    var leftZombieFrank = 1800;
    var leftZombieBoy = 2000;


    var limite = 0; //new
    var j = 0;
    var l = 0;
    var m = 0;
    var g = 0;
    var d = 0;

    var animationPersonnages = function () {
        // Zombie girl déplacement
        var deplacementMasque = document.getElementById('containerZombieGirl');
        var arreter = window.setInterval(function () {
            if (leftZombieGirl < limite) {
                // alert("Game Over");
                deplacementMasque.style.display = "none";
                document.getElementById('gameOver').style.display = "block";
                document.getElementById('zomb').style.display = "block";
                document.getElementById('boutonAccueil').style.display = "block";
                clearInterval(arreter);
                boutonAccueil.onclick = function () {
                    document.location.reload();
                }
            }
            leftZombieGirl -= 8;
            if (j == 0) {
                j = 9;
                spriteGirl.style.left = decompositionDuSpriteGirl.persoGirl[j].leftDeImage;
                spriteGirl.style.left = decompositionDuSpriteGirl.persoGirl[j].leftDeImage;
                j--;
            }
            deplacementMasque.style.left = leftZombieGirl + "px";
            spriteGirl.style.left = decompositionDuSpriteGirl.persoGirl[j--].leftDeImage;

        }, 100);

        //Zombie poele déplacement
        var deplacementMasqueZombiePoele = document.getElementById('containerZombiePoele');
        var arreterZombiePoele = window.setInterval(function () {
            if (leftZombiePoele < limite) {
                // alert("Game Over");
                deplacementMasqueZombiePoele.style.display = "none";
                document.getElementById('gameOver').style.display = "block";
                document.getElementById('zomb').style.display = "block";
                document.getElementById('boutonAccueil').style.display = "block";
                clearInterval(arreterZombiePoele);
                boutonAccueil.onclick = function () {
                    document.location.reload();
                }
            }
            leftZombiePoele -= 8;
            if (l == 0) {
                l = 6;
                spriteZombiePoele.style.left = decompositionDuSpriteZombiePoele.persoZombiePoele[l].leftDeImage;
                spriteZombiePoele.style.left = decompositionDuSpriteZombiePoele.persoZombiePoele[l].leftDeImage;
                l--;
            }
            deplacementMasqueZombiePoele.style.left = leftZombiePoele + "px";
            spriteZombiePoele.style.left = decompositionDuSpriteZombiePoele.persoZombiePoele[l--].leftDeImage;

        }, 100);

        // // Zombie momie déplacement
        var deplacementMasqueZombieMomie = document.getElementById('containerZombieMomie');
        var arreterZombieMomie = window.setInterval(function () {
            if (leftZombieMomie < limite) {
                // alert("Game Over");
                deplacementMasqueZombieMomie.style.display = "none";
                document.getElementById('gameOver').style.display = "block";
                document.getElementById('zomb').style.display = "block";
                document.getElementById('boutonAccueil').style.display = "block";
                clearInterval(arreterZombieMomie);
                boutonAccueil.onclick = function () {
                    document.location.reload();
                }
            }
            leftZombieMomie -= 8;
            if (m == 0) {
                m = 6;
                spriteZombieMomie.style.left = decompositionDuSpriteZombieMomie.persoZombieMomie[m].leftDeImage;
                spriteZombieMomie.style.left = decompositionDuSpriteZombieMomie.persoZombieMomie[m].leftDeImage;
                m--;
            }
            deplacementMasqueZombieMomie.style.left = leftZombieMomie + "px";
            spriteZombieMomie.style.left = decompositionDuSpriteZombieMomie.persoZombieMomie[m--].leftDeImage;

        }, 100);

        // // Zombie Frankenstein déplacement
        var deplacementMasqueZombieFrank = document.getElementById('containerZombieFrank');
        var arreterZombieFrank = window.setInterval(function () {
            if (leftZombieFrank < limite) {
                // alert("Game Over");
                deplacementMasqueZombieFrank.style.display = "none";
                document.getElementById('gameOver').style.display = "block";
                document.getElementById('zomb').style.display = "block";
                document.getElementById('boutonAccueil').style.display = "block";
                clearInterval(arreterZombieMomie);
                boutonAccueil.onclick = function () {
                    document.location.reload();
                }
            }
            leftZombieFrank -= 8;
            if (g == 0) {
                g = 6;
                spriteZombieFrank.style.left = decompositionDuSpriteZombieFrank.persoZombieFrank[g].leftDeImage;
                spriteZombieFrank.style.left = decompositionDuSpriteZombieFrank.persoZombieFrank[g].leftDeImage;
                g--;
            }
            deplacementMasqueZombieFrank.style.left = leftZombieFrank + "px";
            spriteZombieFrank.style.left = decompositionDuSpriteZombieFrank.persoZombieFrank[g--].leftDeImage;

        }, 200);

        // // Zombie Boy déplacement
        var deplacementMasqueZombieBoy = document.getElementById('containerZombieBoy');
        var arreterZombieBoy = window.setInterval(function () {
            if (leftZombieBoy < limite) {
                // alert("Game Over");
                deplacementMasqueZombieBoy.style.display = "none";
                document.getElementById('gameOver').style.display = "block";
                document.getElementById('zomb').style.display = "block";
                document.getElementById('boutonAccueil').style.display = "block";
                clearInterval(arreterZombieBoy);
                boutonAccueil.onclick = function () {
                    document.location.reload();
                }
            }
            leftZombieBoy -= 8;
            if (d == 0) {
                d = 6;
                spriteZombieBoy.style.left = decompositionDuSpriteZombieBoy.persoZombieBoy[d].leftDeImage;
                spriteZombieBoy.style.left = decompositionDuSpriteZombieBoy.persoZombieBoy[d].leftDeImage;
                d--;
            }
            deplacementMasqueZombieBoy.style.left = leftZombieBoy + "px";
            spriteZombieBoy.style.left = decompositionDuSpriteZombieBoy.persoZombieBoy[d--].leftDeImage;

        }, 100);
    };

    // var score = 0;
    // score = score + 100;
    // var scoreKill = function() {
    //     if(score == 2000) {
    //         alert("YOU WIN, CONGRATULATIONS!");
    //         document.location.reload();
    //         clearInterval(interval); // 
    //     }
    // };


















    //COLLISIONS

};