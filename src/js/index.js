import selectChannel from "./mixer_channel_updates"

let alertDiv = document.getElementsByClassName("alert");
let alertTxt = document.getElementsByClassName("alertTxt");
let channelInput = document.querySelector("input");
let submitBtn = document.querySelectorAll("input")[1];
let flashyLight1 = document.getElementsByClassName("flashyLightTop");
let flashyLight2 = document.getElementsByClassName("flashyLightTop2");
let flashyLight3 = document.getElementsByClassName("flashyLightBottom");
let flashyLight4 = document.getElementsByClassName("flashyLightBottom2");

submitBtn.addEventListener("click", () => {
    if (channelInput.value == "") {
        alert("you have entered an invalid channel name");
    } else {
        selectChannel(channelInput.value);
        document.querySelector("div").style.visibility = "hidden";
        alert("If you want to change the channel please refresh the website")
    }
})

const alerts = (follow, followUser, host, hostUser, sub, subUser, resub, resubUser, sparks) => {
    if (follow == "_true") {
        alertDiv[0].style.visibility = "visible";
        alertDiv[0].style.animation = "alert 2s ease-in-out";
        alertTxt[0].innerHTML = `${followUser} has followed the channel!`;
        flashyLight1[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight2[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight3[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight4[0].style.animation = "flashylights 2s ease-in-out";
        console.log("followed", followUser);
        setTimeout(() => {
            flashyLight1[0].style.animation = "";
            flashyLight2[0].style.animation = "";
            flashyLight3[0].style.animation = "";
            flashyLight4[0].style.animation = "";
            alertDiv[0].style.animation = "";
        }, 2000)
    } else if (host == "_true") {
        alertDiv[0].style.visibility = "visible";
        alertDiv[0].style.animation = "alert 2s ease-in-out";
        alertTxt[0].innerHTML = `${hostUser} has hosted the channel!`;
        flashyLight1[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight2[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight3[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight4[0].style.animation = "flashylights 2s ease-in-out";
        console.log("hosted", hostUser);
        setTimeout(() => {
            flashyLight1[0].style.animation = "";
            flashyLight2[0].style.animation = "";
            flashyLight3[0].style.animation = "";
            flashyLight4[0].style.animation = "";
            alertDiv[0].style.animation = "";
        }, 2000)
    } else if (sub == "_true") {
        alertDiv[0].style.visibility = "visible";
        alertDiv[0].style.animation = "alert 2s ease-in-out";
        alertTxt[0].innerHTML = `${subUser}has subbed to the channel!`;
        flashyLight1[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight2[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight3[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight4[0].style.animation = "flashylights 2s ease-in-out";
        console.log("subbed", subUser);
        setTimeout(() => {
            flashyLight1[0].style.animation = "";
            flashyLight2[0].style.animation = "";
            flashyLight3[0].style.animation = "";
            flashyLight4[0].style.animation = "";
            alertDiv[0].style.animation = "";
        }, 2000)
    } else if (resub == "_true") {
        alertDiv[0].style.visibility = "visible";
        alertDiv[0].style.animation = "alert 2s ease-in-out";
        alertTxt[0].innerHTML = `${resubUser}has resubbed to the channel!`;
        flashyLight1[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight2[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight3[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight4[0].style.animation = "flashylights 2s ease-in-out";
        console.log("resubbed", resubUser);
        setTimeout(() => {
            flashyLight1[0].style.animation = "";
            flashyLight2[0].style.animation = "";
            flashyLight3[0].style.animation = "";
            flashyLight4[0].style.animation = "";
            alertDiv[0].style.animation = "";
        }, 2000)
    } else if (sparks == "_true") {
        alertDiv[0].style.visibility = "visible";
        alertDiv[0].style.animation = "alert 2s ease-in-out";
        alertTxt[0].innerHTML = "sparks";
        flashyLight1[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight2[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight3[0].style.animation = "flashylights 2s ease-in-out";
        flashyLight4[0].style.animation = "flashylights 2s ease-in-out";
        console.log("sparks");
        setTimeout(() => {
            flashyLight1[0].style.animation = "";
            flashyLight2[0].style.animation = "";
            flashyLight3[0].style.animation = "";
            flashyLight4[0].style.animation = "";
            alertDiv[0].style.animation = "";
        }, 2000)
    }
}

export default alerts;