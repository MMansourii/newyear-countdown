const year =document.getElementById('year');
const days =document.getElementById('days');
const hours =document.getElementById('hours');
const minutes =document.getElementById('minutes');
const seconds =document.getElementById('seconds');
const countdown =document.getElementById('countdown');
const loading =document.getElementById('loading');

//get the current year
const currentYear = new Date().getFullYear();

const newYearTime =new Date(`January 01 ${currentYear + 1} 00:00:00 `)

//set background year 
year.innerText = currentYear +1;

function updateCountdown(){
    //get the date of today
    const currentTime = new Date();
    //get how many milisecomds left to new year
    const diff = newYearTime - currentTime ;
    
    //changin miliseconds to daya hours minutes and seconds
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    const m = Math.floor(diff / 1000 / 60 ) % 60;
    const s = Math.floor(diff / 1000  ) %60;

     //puting the data into DOM
    days.innerText =d;
    hours.innerText =h < 10 ? `0 ${h}` : h;
    minutes.innerText =m <10 ? `0${m}` :m ;
    seconds.innerText =s  < 10 ? `0${s}`:s;

}

//show the spinner before the times starts
setTimeout(() =>{
    loading.remove();
    countdown.style.display ='flex';
},1000)

//run every seconds
setInterval(updateCountdown,1000);

