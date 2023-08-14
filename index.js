
let braceletsList = document.getElementById("braceletsContainer");
let ringsList = document.getElementById("ringsContainer");
let earringsList =document.getElementById("earringsContainer");
let necklacesList = document.getElementById("necklaceContainer");
let nosepinsList = document.getElementById("nosepinsContainer");

let rings = document.getElementById("Rings");
let bracelets = document.getElementById("Bracelets");
let earrings =document.getElementById("Earrings");
let necklaces = document.getElementById("Necklace");
let nosepins = document.getElementById("Nosepins");

function showRings(){
    ringsList.classList.toggle("show-bracelets");
    ringsList.classList.remove("d-none");
   
    
    braceletsList.classList.add("d-none");
    necklacesList.classList.add("d-none");
    nosepinsList.classList.add("d-none");
    earringsList.classList.add("d-none");
    

    rings.classList.add("category-color");
    bracelets.classList.remove("category-color");
    earrings.classList.remove("category-color");
    necklaces.classList.remove("category-color");
    nosepins.classList.remove("category-color");

    
    
}

function showBracelets(){

    braceletsList.classList.remove("d-none");
    ringsList.classList.add("d-none");
    earringsList.classList.add("d-none");
    necklacesList.classList.add("d-none");
    nosepinsList.classList.add("d-none");
       braceletsList.classList.toggle("show-bracelets");

       bracelets.classList.add("category-color");
       earrings.classList.remove("category-color");
    necklaces.classList.remove("category-color");
    rings.classList.remove("category-color");
    nosepins.classList.remove("category-color");
    

       
}

function showEarrings(){
    ringsList.classList.add("d-none");
    braceletsList.classList.add("d-none");
    
    nosepinsList.classList.add("d-none");
    
    earringsList.classList.remove("d-none");
    necklacesList.classList.add("d-none");
    earringsList.classList.add("show-bracelets");
    
    bracelets.classList.remove("category-color");
    earrings.classList.add("category-color");
    necklaces.classList.remove("category-color");
    rings.classList.remove("category-color");
    nosepins.classList.remove("category-color");
    

}

function showNecklaces(){
    necklacesList.classList.remove("d-none");
    
    ringsList.classList.add("d-none");
    braceletsList.classList.add("d-none");
    nosepinsList.classList.add("d-none");
    earringsList.classList.add("d-none");
   
    necklacesList.classList.add("show-bracelets");

    necklaces.classList.add("category-color");
    nosepins.classList.remove("category-color");
    rings.classList.remove("category-color");
    bracelets.classList.remove("category-color");
    earrings.classList.remove("category-color");
    


}

function showNosepins(){
    necklacesList.classList.add("d-none");
    nosepinsList.classList.remove("d-none");
    nosepinsList.classList.add("show-bracelets");
    
    ringsList.classList.add("d-none");
    braceletsList.classList.add("d-none");
    
    earringsList.classList.add("d-none");

    nosepins.classList.add("category-color");
    necklaces.classList.remove("category-color");
    rings.classList.remove("category-color");
    bracelets.classList.remove("category-color");
    earrings.classList.remove("category-color");
    
    
    


}