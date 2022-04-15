const btn = document.querySelector('button')
var ir = document.querySelector('.ireland')
var fr = document.querySelector('.france')

btn.addEventListener('click', newFlag);

function newFlag(){
    var fr = document.querySelector('.france')    
    if(fr.style.visibility === "visible") {
        fr.style.visibility = 'hidden';
        fr.style.transform = 'rotateY(360deg)';
    }

    else {
        fr.style.visibility = 'visible';
        fr.style.transform = 'rotateY(180deg)';
                
    }

   
}


btn.addEventListener("click", newText)

function newText(){
    const btn = document.querySelector(".btn");

    if(btn.innerText === "Viva La France"){
        btn.innerText = "Luck of the Irish";
    }
    else{
        btn.innerText= "Viva La France";
    }
}

