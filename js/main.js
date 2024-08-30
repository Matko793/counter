
    //variables

    let abraka = document.querySelector("h2");
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
        element.classList.toggle("darkmode");
    }

    // assining functions
    document.getElementById("inc").onclick = plus
    document.getElementById("min").onclick = minus
    document.getElementById("rst").onclick = reset

  