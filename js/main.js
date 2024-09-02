
    //variables
    var slideSource = document.getElementById('slideSource');



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
    function    reset(){
        num = 0;
        abraka.textContent = num;
    }
    function mode(){
        let element = document.getElementById("myBody");
        element.classList.add("fade");
        element.classList.toggle("darkmode");
        // Počkajte chvíľu, aby prechod začal a potom zmeníme režim
        setTimeout(() => {
            element.classList.add("fade-in");      // Pridaj triedu pre viditeľnosť po zmene módu
            }, 100);  // Nastavenie veľmi krátkeho oneskorenia

    // Po dokončení prechodu odstráň .fade triedu
        setTimeout(() => {
            element.classList.remove("fade");
            element.classList.remove("fade-in");
            }, 120);  // Odstráň triedy po 2 sekundách (dĺžka prechodu)

    }

    // assining functions
    document.getElementById("inc").onclick = plus
    document.getElementById("min").onclick = minus
    document.getElementById("rst").onclick = reset

  