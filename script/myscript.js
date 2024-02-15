let isAudioPlayed = false;
let current_slide = 0;



function playAudio() {
    
    isAudioPlayed = true;
    const myAudio = document.getElementById("my-audio");
    myAudio.play();
}


document.getElementById('start-story').onclick = ()=>{
    if(isAudioPlayed) return ;
    playAudio();
}

/*         
window.onload = () => {
    const myAudio = document.getElementById("my-audio");
    console.log(myAudio);
    myAudio.addEventListener('canplay', (event) => {  
        console.log("CnPlay",event)
            event.target.play()
    })
}
*/

function make_story_array() {
        // Using Array.from
    const inputsArray = Array.from(document.querySelectorAll('section'));
    return inputsArray;
}


document.getElementById('start-story').onclick = function() {
    playAudio();
    current_slide+=1;
    document.getElementsByClassName("zoom")[0].style.cssText = "transform: scale(10000); transition: all 3s ease;";
    document.getElementById(current_slide.toString()).style.cssText = ' position:absolute; top:0px ; transition: top 2s ease;';
    story_slides = make_story_array();
let elements = document.getElementsByClassName("button");
// Loop through the collection of elements
for (var i = 0; i < elements.length; i++) {
    // Do something with each element, for example, change its background color
    elements[i].style.cssText = "opacity:1; transition: opacity 2s ease";
}
};

document.getElementById("down").onclick = function(){
    if (current_slide === 26){
        return;
    }
    current_slide+=1;
    document.getElementById(current_slide.toString()).style.cssText = ' position:absolute; top:0px ; transition: top 2s ease;';
    
    console.log(typeof current_slide)
    console.log(current_slide);
}


document.getElementById("up").onclick = function(){
    if (current_slide === 0){
        return;
    }
    console.log(current_slide);
    document.getElementById(current_slide.toString()).style.cssText = ' position:absolute; top:10000px ; transition: top 4s ease;';
    current_slide-=1;
    
}


document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;
    console.log("hi");
    current_slide+=1;
    document.getElementById(current_slide.toString()).style.cssText = ' position:absolute; top:0px ; transition: top 2s ease;';
});

window.addEventListener('scroll', function() {
  // Your scroll event handling code here
  console.log('Scrolled');
});
