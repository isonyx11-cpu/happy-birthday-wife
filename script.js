const heartsContainer = document.querySelector('.hearts');

if(heartsContainer){

setInterval(() => {

const heart = document.createElement('div');

heart.classList.add('heart');
heart.innerHTML = '❤️';

heart.style.left = Math.random()*100 + 'vw';
heart.style.fontSize = (20 + Math.random()*40) + 'px';

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

},300);
}

const music = document.getElementById('bgMusic');

document.addEventListener('click', function(){
if(music){
music.play();
}
},{once:true});

function toggleMusic(){

if(music.paused){
music.play();
}
else{
music.pause();
}

}