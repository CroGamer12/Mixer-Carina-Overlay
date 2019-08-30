import selectChannel from './mixer_channel_updates';

const alertDiv = document.getElementsByClassName('alert');
const alertTxt = document.getElementsByClassName('alertTxt');
const channelInput = document.querySelector('input');
const submitBtn = document.querySelectorAll('input')[1];
const flashyLight1 = document.getElementsByClassName('flashyLightTop');
const flashyLight2 = document.getElementsByClassName('flashyLightTop2');
const flashyLight3 = document.getElementsByClassName('flashyLightBottom');
const flashyLight4 = document.getElementsByClassName('flashyLightBottom2');

submitBtn.onclick = () => {
    if (channelInput.value == '') {
        alert('you have entered an invalid channel name');
    } else {
        selectChannel(channelInput.value);
        document.querySelector('div').style.visibility = 'hidden';
        alert('If you want to change the channel please refresh the website');
    }
};

const alerts = (follow, followUser, host, hostUser, sub, subUser, resub, resubUser, sparks) => {
    if (follow == '_true') {
        alertDiv[0].style.visibility = 'visible';
        alertDiv[0].style.animation = 'alert 2s ease-in-out';
        alertTxt[0].innerHTML = `${followUser} has followed the channel!`;
        flashyLight1[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight2[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight3[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight4[0].style.animation = 'flashylights 2s ease-in-out';
        setTimeout(() => {
            flashyLight1[0].style.animation = '';
            flashyLight2[0].style.animation = '';
            flashyLight3[0].style.animation = '';
            flashyLight4[0].style.animation = '';
            alertDiv[0].style.animation = '';
        }, 2000);
    } else if (host == '_true') {
        alertDiv[0].style.visibility = 'visible';
        alertDiv[0].style.animation = 'alert 2s ease-in-out';
        alertTxt[0].innerHTML = `${hostUser} has hosted the channel!`;
        flashyLight1[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight2[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight3[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight4[0].style.animation = 'flashylights 2s ease-in-out';
        setTimeout(() => {
            flashyLight1[0].style.animation = '';
            flashyLight2[0].style.animation = '';
            flashyLight3[0].style.animation = '';
            flashyLight4[0].style.animation = '';
            alertDiv[0].style.animation = '';
        }, 2000);
    } else if (sub == '_true') {
        alertDiv[0].style.visibility = 'visible';
        alertDiv[0].style.animation = 'alert 2s ease-in-out';
        alertTxt[0].innerHTML = `${subUser}has subbed to the channel!`;
        flashyLight1[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight2[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight3[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight4[0].style.animation = 'flashylights 2s ease-in-out';
        setTimeout(() => {
            flashyLight1[0].style.animation = '';
            flashyLight2[0].style.animation = '';
            flashyLight3[0].style.animation = '';
            flashyLight4[0].style.animation = '';
            alertDiv[0].style.animation = '';
        }, 2000);
    } else if (resub == '_true') {
        alertDiv[0].style.visibility = 'visible';
        alertDiv[0].style.animation = 'alert 2s ease-in-out';
        alertTxt[0].innerHTML = `${resubUser}has resubbed to the channel!`;
        flashyLight1[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight2[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight3[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight4[0].style.animation = 'flashylights 2s ease-in-out';
        setTimeout(() => {
            flashyLight1[0].style.animation = '';
            flashyLight2[0].style.animation = '';
            flashyLight3[0].style.animation = '';
            flashyLight4[0].style.animation = '';
            alertDiv[0].style.animation = '';
        }, 2000);
    } else if (sparks == '_true') {
        alertDiv[0].style.visibility = 'visible';
        alertDiv[0].style.animation = 'alert 2s ease-in-out';
        alertTxt[0].innerHTML = 'sparks';
        flashyLight1[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight2[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight3[0].style.animation = 'flashylights 2s ease-in-out';
        flashyLight4[0].style.animation = 'flashylights 2s ease-in-out';
        setTimeout(() => {
            flashyLight1[0].style.animation = '';
            flashyLight2[0].style.animation = '';
            flashyLight3[0].style.animation = '';
            flashyLight4[0].style.animation = '';
            alertDiv[0].style.animation = '';
        }, 2000);
    }
};

export default alerts;
