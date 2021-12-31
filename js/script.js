function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
}


window.onload = function () {

  document.getElementsByClassName('category')[0].addEventListener("mouseover", pic);

  function pic() {
    document.getElementsByClassName('imagebox')[0].style.backgroundImage = "url('img/personal.jpg')";
  }

  document.getElementsByClassName('category')[1].addEventListener("mouseover", pic1);
  function pic1() {
    document.getElementsByClassName('imagebox')[0].style.backgroundImage = "url('img/asia.png')";
  }

  document.getElementsByClassName('category')[2].addEventListener("mouseover", pic2);
  function pic2() {
    document.getElementsByClassName('imagebox')[0].style.backgroundImage = "url('img/europe.png')";
  }

  document.getElementsByClassName('category')[3].addEventListener("mouseover", pic3);
  function pic3() {
    document.getElementsByClassName('imagebox')[0].style.backgroundImage = "url('img/sa.png')";
  }

  document.getElementsByClassName('category')[4].addEventListener("mouseover", pic4);
  function pic4() {
    document.getElementsByClassName('imagebox')[0].style.backgroundImage = "url('img/ocean.jpg')";
  }

  document.getElementsByClassName('category')[5].addEventListener("mouseover", pic5);
  function pic5() {
    document.getElementsByClassName('imagebox')[0].style.backgroundImage = "url('img/hi.png')";
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
}