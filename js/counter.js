var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}


function decrementCounter() {
    if (counterVal > 1) {
        updateDisplay(--counterVal);  
    }   
}


function updateDisplay(val) {
    document.getElementById("counter-label").innerText = val;
    if (val > 1){
        document.getElementById("habs").innerText = val + " habs";
    }
    else{
        document.getElementById("habs").innerText = val + " habitación";
    }
    

}
