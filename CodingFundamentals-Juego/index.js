colorContainer = document.querySelector(".color-container");
mainContainer = document.querySelector(".main-container")
redButton = document.querySelector(".red-button");
blueButton = document.querySelector(".blue-button");
greenButton = document.querySelector(".green-button");
finishButton = document.querySelector(".finish-button")

correctButton1 = document.querySelector(".button-3")
correctButton2 = document.querySelector(".button-4")
correctButton3 = document.querySelector(".button-8")
correctButton4 = document.querySelector(".button-12")
correctButton5 = document.querySelector(".button-14")

counter = 0;
counter2 = 0;

redButton.addEventListener('click', ()=> {
    colorContainer.style.border = "4px solid red";
    mainContainer.style.border = "4px solid red";
    finishButton.style.background = "red"
})

blueButton.addEventListener('click', ()=> {
    colorContainer.style.border = "4px solid blue";
    mainContainer.style.border = "4px solid blue";
    finishButton.style.background = "blue"
})

greenButton.addEventListener('click', ()=> {
    colorContainer.style.border = "4px solid green";
    mainContainer.style.border = "4px solid green";
    finishButton.style.background = "green"
})

correctButton1.addEventListener("click", ()=> {
    counter += 20;
    counter2 +=1;
})

correctButton2.addEventListener("click", ()=> {
    counter += 20;
    counter2 +=1;
})

correctButton3.addEventListener("click", ()=> {
    counter += 20;
    counter2 +=1;
})

correctButton4.addEventListener("click", ()=> {
    counter += 20;
    counter2 +=1;
})

correctButton5.addEventListener("click", ()=> {
    counter += 20;
    counter2 +=1;
})

finishButton.addEventListener('click', ()=> {
    alert(`Resolvió correctamente ${counter2} acertijo/s`)
    alert(`Su puntaje total es de: ${counter} puntos`);
})

