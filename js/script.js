function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
}


document.getElementsByClassName('category')[4].addEventListener("mouseover", pic4);
function pic4() {
  document.getElementsByClassName('imagebox')[0].style.backgroundImage = "url('../img/ocean.png')";
  document.getElementsByClassName('imagebox')[0].style.backgroundImage = "url('../img/ocean.jpg')";
}

document.getElementsByClassName('category')[5].addEventListener("mouseover", pic5);
function pic5() {
  document.getElementsByClassName('imagebox')[0].style.backgroundImage = "url('../img/hi.png')";
}

function bike() {
  $('#container_svg').css({ right: '-0px', 'z-index': '999' });
  $('#container_svg').animate({ right: '+=100%' }, 4000, function () {
    bike();
  });
}


bike()

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
}



