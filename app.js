const openDate = new Date("May 24, 2021 08:00:00").getTime();

let t=setInterval(function(){

    var today = new Date().getTime();
    
    var distance = openDate - today;
      
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let thisInterval = `<h2 class="heading">Varsity opening Counter</h2><br><br><br><br><span class="box"> ${days}</span>&nbsp; <span class="box"> ${hours} </span>&nbsp;  <span class="box"> ${minutes}</span>
    &nbsp; <span class="box">${seconds}`;

    let divContainer=document.getElementById('container');
    divContainer.innerHTML=thisInterval;
    if (distance < 0) {
        clearInterval(t);
        document.getElementById("container").innerHTML = `<h3 class="end">Go To ClassRoom..Acche Din Khatam Hua<h3>`;
      }
    }, 1000);