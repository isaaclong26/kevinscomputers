

 var opacVal= 1;
 var breakPoint= 0;
 function timing(){
    setTimeout(blueScreen, 3000)
    
 }
 function blueScreen(){
 var opacTimer = setInterval(function(){
     
    document.getElementById("blueScreen").style.opacity=opacVal;
    document.getElementById("title").style.opacity=opacVal;
    opacVal= opacVal-.01;
    
    if (opacVal<0){
        clearInterval(opacTimer);
        document.getElementById("face").src="./assets/smile.jpg";
        document.getElementById("tagline").innerHTML="We Can Help";
        document.getElementById('titleText').style.visibility = 'visible';
        
        var opacTimer2 =setInterval(function(){
     
            document.getElementById("blueScreen").style.opacity=opacVal;
            document.getElementById("title").style.opacity=opacVal;
            opacVal= opacVal+.01;
            


            if (opacVal>1){
                clearInterval(opacTimer2);
                
                
    }
 }
 ,5)

 }

},5)
 }




function openningPage(){
    document.getElementById("face").src="./assets/smile.jpg";

}
    
