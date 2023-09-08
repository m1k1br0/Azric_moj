function provera(){
    let inputElement = document.getElementById("miki");
    var inputValue = inputElement.value.toLowerCase();
    let rezultat = document.getElementById("mudja")

    if ((inputValue === "miki")) {
        rezultat.innerText = '∞';
      } else {
        rezultat.innerText = '0%';
    }

    
}
