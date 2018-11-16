const body = document.querySelector('body');


body.onkeydown = function (e) {
    document.querySelector('.container').innerHTML =
        `<span>${e.keyCode}</span><p>${e.key.toUpperCase()}</p>`
}