/*
fetchData();

async function fetchData() {
    try{
        const itemName = document.getElementById("itemName")
        const response = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`);
        if(!response.ok){
            throw new Error("could not fetch")
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
    
}



function generateUI(dataToRender) {
  
    for (let i = 0; i < dataToRender.length; i++) {
        // 1. create the element(s) (the ptag) we want
        const containerElem = document.createElement('div')
        const titleElem = document.createElement('h2')
        const pElem = document.createElement('p')

        // 2. Put the info we need in them.
        titleElem.innerText = dataToRender[i].title
        pElem.innerText = dataToRender[i].body

        containerElem.setAttribute('class', 'post')

        // 3. append the title and ptag to the container we made
        containerElem.appendChild(titleElem)
        containerElem.appendChild(pElem)

        const contentDiv = document.getElementById('content')
        contentDiv.appendChild(containerElem)
    }

    dataToRender.forEach((post) => {
           // 1. create the element(s) (the ptag) we want
           const containerElem = document.createElement('div')
           const titleElem = document.createElement('h2')
           const pElem = document.createElement('p')
   
           // 2. Put the info we need in them.
           titleElem.innerText = post.title
           pElem.innerText = post.body
   
           containerElem.setAttribute('class', 'coolerPost')
   
           // 3. append the title and ptag to the container we made
           containerElem.appendChild(titleElem)
           containerElem.appendChild(pElem)
   
           const contentDiv = document.getElementById('content')
           contentDiv.appendChild(containerElem)
    })
}*/

const audio =new Audio("music1.mp3");
const pressElem = document.querySelector(".press");
const press2Elem = document.querySelector(".topRight");
let counterDisplayElem = document.querySelector('.counterDisplay');
let bonusDisplayElem = document.querySelector('.bonus');
let bonus = localStorage.getItem(`bonus`) || 1;
let count = localStorage.getItem(`count`) || 0;
/*let incValue = document.getElementById("bonus")*/
const reset = document.querySelector(`.clear`)


reset.addEventListener("click",()=>{
    localStorage.clear()
    clearInterval(count)
    count=0
})


setInterval(()=>{
    count += bonus; 
    console.log()
    updateDisplay();
    
}, 1000); 

pressElem.addEventListener("click",()=>{ 
    count++;
    updateDisplay();
    audio.play();
    
}) ; 
function updateDisplay(){
    counterDisplayElem.innerHTML = count;
    localStorage.setItem('count', count)
};

pressElem.addEventListener("click",()=>{ 
    count++;
    updateBonus();
    
}) ; 
function updateBonus(){
    bonusDisplayElem.innerHTML = count;
   
};

function toggleMute() {
    audio.muted = !audio.muted;
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