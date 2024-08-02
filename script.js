let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let symbols = document.getElementById("symbols");
let numbers = document.getElementById("numbers");
let gen_BTN = document.getElementById("gen_BTN");


//Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});

gen_BTN.addEventListener('click', ()=>{
    passBox.value = generatePassword();
});
//Generating characters.
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//function to generate password
function generatePassword(){
    let genPassword = "";
    genPassword = upperChars.charAt(Math.floor(Math.random()*upperChars.length));
    return genPassword;
}

