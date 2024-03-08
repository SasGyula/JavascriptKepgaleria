import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit} from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
htmlOsszeAllit(KEPEK)
const GALERIA = document.querySelectorAll(".galeria")[0]






/* írd bele az összeálíltott html képsorozatot */
GALERIA.innerHTML = htmlOsszeAllit(KEPEK)
/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagykepELEM = document.querySelectorAll(".nagykep img")
/* A .nagykep div megfogása */
const nagykepELEMDIV = nagykepELEM[0]
/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */

let aktualisIndex = 0;
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const kepELEM = document.querySelectorAll(".galeria .kep img")
/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for(let i = 0; i<kepELEM.length;i++){
    kepELEM[i].addEventListener("click", kepcsere)

}



/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */
function kepcsere(event){
    nagykepELEMDIV.src = event.target.src
    aktualisIndex = i
}

/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
const JOBBGOMB = document.querySelectorAll(".jobb")
const BALGOMB = document.querySelectorAll(".bal")




JOBBGOMB[0].addEventListener("click", function(){
    aktualisIndex++
    if(aktualisIndex>KEPEK.length-1){
        aktualisIndex = 0
    }
    nagykepELEMDIV.src = KEPEK[aktualisIndex].kep
    
})
BALGOMB[0].addEventListener("click", function(){
    aktualisIndex--
    if(aktualisIndex<0){
        aktualisIndex = KEPEK.length-1
    }
    nagykepELEMDIV.src = KEPEK[aktualisIndex].kep
    
})




