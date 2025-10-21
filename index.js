const generateEl = document.getElementById("generate-el");
const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");
const specialEl = document.getElementById("special-el");
const charsEl = document.getElementById("chars-el");
const lineEl = document.getElementById("line-el");
const onOffEl = document.getElementById("onOff-el");
const copied1El = document.getElementById("copied1-el");
const copied2El = document.getElementById("copied2-el");


let hasSpecialChars = true;
let charlength = 15;

const zeichen = [
  // Kleinbuchstaben
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",

  // Großbuchstaben
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

  // Zahlen
  "0","1","2","3","4","5","6","7","8","9",

  // Sonderzeichen
  "!","\"","#","$","%","&","'","(",")","*","+",
  ",","-",".","/",":",";","<","=",">","?","@",
  "[","\\","]","^","_","`","{","|","}","~"
];

console.log(zeichen.indexOf("9"));

charsEl-addEventListener("change", function(){
   charlength = charsEl.value;
})


function toggleSpecial(){
 hasSpecialChars = hasSpecialChars ? false : true;
 onOffEl.classList.toggle("green");
 onOffEl.classList.toggle("red");
 onOffEl.textContent = onOffEl.textContent === "on" ?  "off ": "on";
}

generateEl.addEventListener('click', function(){
    let firstPasswort = [];
    let secondPasswort = [];
    password1.classList.remove("disabled");
    password2.classList.remove("disabled");
    lineEl.classList.remove("disabled");

    copied1El.classList.add("disabled")
    copied2El.classList.add("disabled")
    copied1El.classList.remove("slideIn");
    copied2El.classList.remove("slideIn");


    for (let i = 0; i < charlength; i++){
        if (hasSpecialChars){
            firstPasswort.push(zeichen[Math.floor(Math.random() * zeichen.length)])
        } else {
             firstPasswort.push(zeichen[Math.floor(Math.random() * 61)])

        }
    }
    for (let i = 0; i < charlength; i++){
        if (hasSpecialChars){
            secondPasswort.push(zeichen[Math.floor(Math.random() * zeichen.length)])
        } else {
             secondPasswort.push(zeichen[Math.floor(Math.random() * 61)])

        }
    }
    
    
    password1.textContent = firstPasswort.join("");
    password2.textContent = secondPasswort.join("");
    
})

password1.addEventListener("click", () => {
    navigator.clipboard.writeText(password1.textContent)
      copied1El.classList.remove("disabled")
      copied1El.classList.add("slideIn");
      copied1El.textContent = "copied!"
      console.log(copied1El)
      
})

password2.addEventListener("click", () => {
    navigator.clipboard.writeText(password2.textContent)
  
      copied2El.classList.remove("disabled")
      copied2El.classList.add("slideIn")
      copied2El.textContent = "copied!"
})