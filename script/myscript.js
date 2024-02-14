let isAudioPlayed = false;



function playAudio() {
    
    isAudioPlayed = true;
    const myAudio = document.getElementById("my-audio");
    myAudio.play();
}


document.onclick = ()=>{
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



