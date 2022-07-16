var elForm = document.querySelector(".js-form")
var elInput = document.querySelector(".js-input")

var elText = document.querySelector(".js-text")
var elText1 = document.querySelector(".js-text1")
var elText2 = document.querySelector(".js-text2")
//bike
var elText11 = document.querySelector(".js-text11")
var elText12 = document.querySelector(".js-text12")
var elText13 = document.querySelector(".js-text13")
// car 
var elText21 = document.querySelector(".js-text21")
var elText22 = document.querySelector(".js-text22")
var elText23 = document.querySelector(".js-text23")
// plane
var elText31 = document.querySelector(".js-text31")
var elText32 = document.querySelector(".js-text32")
var elText33 = document.querySelector(".js-text33")

var piyoda = 3.6
var veleda = 20.1
var moshin = 70
var samlyot = 800

// SOAT?
function walk(elInputValu, piyoda) {
    return elInputValu / piyoda
} 
// munut
function min(elInputValu,piyoda) {
    return (elInputValu / piyoda - Math.floor(elInputValu / piyoda )) * 60
}
 // sekund
function sekunt(elInputValu,piyoda) {
    return ((elInputValu / piyoda - Math.floor(elInputValu / piyoda )) * 60 - Math.floor((elInputValu / piyoda - Math.floor(elInputValu / piyoda )) * 60)) * 60
}

//velosoped 

// SOAT?
function bike(elInputValu, veleda) {
    return elInputValu / veleda
} 
// munut
function minut(elInputValu, veleda) {
    return (elInputValu / veleda - Math.floor(elInputValu / veleda )) * 60
}
 // sekund
function sekunt(elInputValu, veleda) {
    return ((elInputValu / veleda - Math.floor(elInputValu / veleda )) * 60 - Math.floor((elInputValu / veleda - Math.floor(elInputValu / veleda )) * 60)) * 60
}

// moshin
// SOAT?
function bike(elInputValu, moshin) {
    return elInputValu / moshin
} 
// munut
function minut(elInputValu,moshin ) {
    return (elInputValu / moshin - Math.floor(elInputValu / moshin )) * 60
}
 // sekund
function sekunt(elInputValu, moshin) {
    return ((elInputValu / moshin - Math.floor(elInputValu / moshin )) * 60 - Math.floor((elInputValu / moshin - Math.floor(elInputValu / moshin )) * 60)) * 60
}

// samaliyot
// SOAT?
function bike(elInputValu, samlyot) {
    return elInputValu / samlyot
} 
// munut
function minut(elInputValu, samlyot) {
    return (elInputValu / samlyot - Math.floor(elInputValu / samlyot )) * 60
}
 // sekund
function sekunt(elInputValu, samlyot) {
    return ((elInputValu / samlyot - Math.floor(elInputValu / samlyot )) * 60 - Math.floor((elInputValu / samlyot - Math.floor(elInputValu / samlyot )) * 60)) * 60
}



elForm.addEventListener("submit", function(evt) {
    evt.preventDefault()
   
    var elInputValu = elInput.value - 0;

    elInput.value = ""
    elText.textContent = `${Math.floor(walk(elInputValu,piyoda))} soat`
    elText1.textContent = `${Math.floor(min(elInputValu,piyoda))} minut`
    elText2.textContent = `${Math.round(sekunt(elInputValu,piyoda))} sekind`

    elText11.textContent = `${Math.floor(bike(elInputValu,veleda))} soat`
    elText12.textContent = `${Math.floor(min(elInputValu,veleda))} minut`
    elText13.textContent = `${Math.round(sekunt(elInputValu,veleda))} sekind`

    elText21.textContent = `${Math.floor(bike(elInputValu,moshin))} soat`
    elText22.textContent = `${Math.floor(min(elInputValu,moshin))} minut`
    elText23.textContent = `${Math.round(sekunt(elInputValu,moshin))} sekind`

    elText31.textContent = `${Math.floor(bike(elInputValu,samlyot))} soat`
    elText32.textContent = `${Math.floor(min(elInputValu,samlyot))} minut`
    elText33.textContent = `${Math.round(sekunt(elInputValu,samlyot))} sekind`
})







