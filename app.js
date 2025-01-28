
fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`, Option)
.then(Response => Response.json())
.then(response =>{console.log(response)
    const textDiv = document.getElementById(`shop1`);
    const p = document.createElement(`p`);
    const pText = document.createTextNode(response[0].name);
    textDiv.appendChild(p);
    p.appendChild(pText);
})

const audio2 =new Audio("giggle.mp3");
const audio =new Audio("music1.mp3");
const pressElem = document.querySelector(".press");
const press2Elem = document.querySelector(".topRight");
let counterDisplayElem = document.querySelector('.counterDisplay');
let bonusDisplayElem = document.querySelector('.bonus');
let bonus = localStorage.getItem(`bonus`) || 1;
let count = localStorage.getItem(`count`) || 0;
const reset = document.querySelector(`.clear`)


reset.addEventListener("click",()=>{
    localStorage.clear()
    clearInterval(count)
    count=0
    bonus=1
    updateUI();
})


setInterval(()=>{
    count = ++(bonus); 
    console.log()
    updateDisplay();
    
}, 1000); 

pressElem.addEventListener("click",()=>{ 
    count++;
    updateDisplay();
    audio2.play();
    
}) ; 

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
    localStorage.setItem('count', count)
};

press2Elem.addEventListener("click",()=>{ 
    count++;
    updateBonus();
    audio.play();
    
}) ;

function updateBonus(){
    bonusDisplayElem.innerHTML = bonus;
    localStorage.setItem('bonus', bonus)
   
};

function toggleMute() {
    audio.muted = !audio.muted;
    audio2.muted = !audio2.muted;
 }

/*function random_bg_color() {
    // Generate random values for red, green, and blue components between 0 and 255.
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    // Construct the RGB color string.
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    // Output the generated color to the console.
    console.log(bgColor);
    // Set the background color of the document body to the generated color.
    document.body.style.background = bgColor;
    
}setInterval(random_bg_color, 50, 10) */