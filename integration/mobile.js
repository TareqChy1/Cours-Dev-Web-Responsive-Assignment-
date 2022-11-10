
let navImg = document.getElementById('navimg');
let rotate = true; /*Taking rotate variable to toggle*/

/* After clicking the menu button the event listener will
 toggle the menu button images along with the panel*/
navImg.addEventListener('click', function () {

    rotate = !rotate;
    if (rotate) {

        //For getting "burger_menu_icon.png" img used the method document.getElementById(id)
        document.getElementById('navimg').src = "./assets/img/burger_menu_icon.png";
        document.getElementById("navimg").classList.toggle("expand");
    }

    else {

        //For getting "close_menu_icon.png" img used the method document.getElementById(id)
        document.getElementById('navimg').src = "./assets/img/close_menu_icon.png";
    }

})

/* This function is to toggle the panel */
function rotateMenu() {
    document.getElementById("navbar").classList.toggle("expand");
}