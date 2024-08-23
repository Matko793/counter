
    const abraka = document.querySelector("h2");
    let num = 0;

    document.getElementById("inc").onclick = function test(){
        num++
        abraka.textContent = num;  
    }
    document.getElementById("rst").onclick = function reset(){
        num = 0;
        abraka.textContent = num;
    }
    

  