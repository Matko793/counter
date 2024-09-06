
    //variables
    var slideSource = document.getElementById('slideSource');
    let abraka = document.querySelector(".display");
    let num = 0;

    //functions
    function plus(){
        num++
        abraka.textContent = num;  
    }
    function minus(){
        if (num == 0){
            num = 0;
        }
        else{
            num--
            abraka.textContent = num;
        }  
    }
    function reset(){
        num = 0;
        abraka.textContent = num;
    }
    function mode(){
        let element = document.getElementById("myBody");
        element.classList.add("fade");
        element.classList.toggle("darkmode");
        setTimeout(() => {
            element.classList.add("fade-in");      
            }, 100);  

        setTimeout(() => {
            element.classList.remove("fade");
            element.classList.remove("fade-in");
            }, 120);  

    }

    // assining functions
    document.getElementById("inc").onclick = plus
    document.getElementById("min").onclick = minus
    document.getElementById("rst").onclick = reset

    document.body.addEventListener("keyup", function keyboardedit(event){
        if(event.key == "ArrowUp"){
            num++
            abraka.textContent = num; 
        }
        else if(event.key == "ArrowDown"){
            if (num == 0){
                num = 0;
            }
            else{
                num--
                abraka.textContent = num;
            }  
        }
        else if(event.key == " "){
            num = 0;
            abraka.textContent = num;
        }
    })