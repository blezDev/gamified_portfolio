export function displayDialogue(text, onDisplayEnd,name) {
    const dialogueUi = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");

    dialogueUi.style.display = "block";

    let index = 0;
    let currentText = "";
    const intervalRef = setInterval(() => {
        if (index < text.length) {
            currentText += text[index];
            dialogue.innerHTML = currentText;
            index++;
            return;
        }
        clearInterval(intervalRef);
    }, 5);


    if (name ==="sofa-table") {
        document.getElementById('game-embedded').style.display = 'block';
        document.getElementById('iframe-wrapper').style.display = 'block';

    }else{
        document.getElementById('game-embedded').style.display = 'none';
        document.getElementById('iframe-wrapper').style.display = 'none';
    }

    const closeBtn = document.getElementById("close");

    function onCloseBtnClick() {
        onDisplayEnd();
        dialogueUi.style.display = "none";
        dialogue.innerHTML = "";
        clearInterval(intervalRef);
        closeBtn.removeEventListener("click", onCloseBtnClick);
    }

    closeBtn.addEventListener("click", onCloseBtnClick);
    addEventListener("keypress", (key) => {
        if (key.code === "Enter") {
            closeBtn.click();
        }
    });


}


















export function setCamScale(k) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1) {
        k.camScale(k.vec2(1));
    } else {
        k.camScale(k.vec2(1.5));
    }
}