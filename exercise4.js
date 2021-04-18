let updateBtn = document.getElementById("update");

function update()
{
    console.log("Updating...");
    let borderRed = document.getElementById("border-red").value;
    let borderBlue = document.getElementById("border-blue").value;
    let borderGreen = document.getElementById("border-green").value;
    let borderWidth = document.getElementById("border-width").value;

    let bgRed = document.getElementById("background-red").value;
    let bgBlue = document.getElementById("background-blue").value;
    let bgGreen = document.getElementById("background-green").value;

    let manipBox = document.getElementById("manip-box");

    let borderString = "rgb(" + borderRed + ", " + borderGreen + ", " + borderBlue + ")";
    manipBox.style.borderColor = borderString;
    manipBox.style.borderWidth = borderWidth + "px";

    let backgroundString = "rgb(" + bgRed + ", " + bgGreen + ", " + bgBlue + ")";
    manipBox.style.backgroundColor = backgroundString;
}

updateBtn.onclick = function() {
    update();
}