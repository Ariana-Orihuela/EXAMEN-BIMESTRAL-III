let cancion=document.getElementById("cancion");
let CLAP=document.getElementById("CLAP");
let BOOM=document.getElementById("BOOM");
let OPENHAT=document.getElementById("OPENHAT");
let RIDE=document.getElementById("RIDE");
let SNARE=document.getElementById("SNARE");
let TOM=document.getElementById("TOM");
let TINK=document.getElementById("TINK");
let KICK=document.getElementById("KICK");

let play_pause_btn=document.getElementById("play_pause_btn");
let CLAP_btn=document.getElementById("CLAP_btn");
let BOOM_btn=document.getElementById("BOOM_btn");
let OPENHAT_btn=document.getElementById(" OPENHAT_btn");
let RIDE_btn=document.getElementById("RIDE_btn");
let SNARE_btn=document.getElementById("SNARE_btn");
let TOM_btn=document.getElementById("TOM_btn");
let TINK_btn=document.getElementById("TINK_btn");
let KICK_btn=document.getElementById("KICK_btn");
let controls=document.querySelector(".controls");




let count=0;
function play_pause(){
    if(count==0){
        count=1;
        cancion.play();
      
        controls.style.animationPlayState ="running";
    }
}
let x=0;
function play_CLAP(){
    if(x==0){
        x=1;
        CLAP.play();
      
        controls.style.animationPlayState ="running";
    }
}
let y=0;
function play_KICK(){
    if(y==0){
        y=1;
        KICK.play();
      
        controls.style.animationPlayState ="running";
    }
}
let j=0;
function play_OPENHAT(){
    if(j==0){
        j=1;
        OPENHAT.play();
      
        controls.style.animationPlayState ="running";
    }
}
let c=0;
function play_BOOM(){
    if(c==0){
        c=1;
        BOOM.play();
      
        controls.style.animationPlayState ="running";
    }
}
let b=0;
function play_RIDE(){
    if(b==0){
        b=1;
        RIDE.play();
        
        controls.style.animationPlayState ="running";
    }
}
let z=0;
function play_SNARE(){
    if(z==0){
        z=1;
        SNARE.play();
      
        controls.style.animationPlayState ="running";
    }
}
let f=0;
function play_TOM(){
    if(f==0){
        f=1;
        TOM.play();
      
        controls.style.animationPlayState ="running";
    }
}
let a=0;
function play_TINK(){
    if(a==0){
        a=1;
       TINK.play();
       controls.animationPlayState ="running";
        controls.style.animationPlayState ="running";
    }
}


