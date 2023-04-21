// JavaScript
//function changeColor(newColor) {
    //var elem = document.getElementById('the-title');
    //elem.style.color = newColor;
//}

//$(document).ready(function() {
    //$('#click').click(function() {
        //$("#the-title").css("color", "green");
    //});
//});

//function changeFont(newFont) {
    //var elem = document.getElementById('click');
    //elem.style.fontSize = newFont;
//}

//$(document).ready(function() {
    //$('#click2').click(function() {
        //$("#click2").css("fontSize", "32px");
    //});
//});

//$(document).ready(function() {
    //$('#trigger').click(function() {
    //$('#demo').html("Hello, World!");
    //});
//});




$(document).ready(function() {
    $("#demo").html("Hello and Welcome...");
});

$(document).ready(function() {
    $("#demo2").html("Today we present:");
});

$(document).ready(function() {
    $("#demo").fadeIn();
    $("#demo2").fadeIn("3000");
    $("#h1").fadeIn("7000");
    $("#h2").fadeIn("9000");

    $("#b1").fadeIn("12000");
    $("#b2").fadeIn("13000");
    $("#b3").fadeIn("14000");

});


$(document).ready(function() {
    $('#b1').click(function() {
        $('.card1').fadeIn();
        
    });
});

$(document).ready(function() {
    $('#b2').click(function() {
        $('.card2').fadeIn();
               
    });
});

$(document).ready(function() {
    $('#b3').click(function() {
        $('.card3').fadeIn();
         
    });
});


function loadImg1() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      var imgurl = window.webkitURL.createObjectURL(this.response);
      document.getElementById("foir1").innerHTML = `<img src="${imgurl}">`;
    }
  
    xhttp.open("GET", "http://localhost/minireto/foir1.png");
    xhttp.responseType = 'blob';
    xhttp.send();
}

function loadImg2() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      var imgurl = window.webkitURL.createObjectURL(this.response);
      document.getElementById("foir2").innerHTML = `<img src="${imgurl}">`;
    }
  
    xhttp.open("GET", "http://localhost/minireto/foir2.png");
    xhttp.responseType = 'blob';
    xhttp.send();
}

function loadImg3() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      var imgurl = window.webkitURL.createObjectURL(this.response);
      document.getElementById("foir3").innerHTML = `<img src="${imgurl}">`;
    }
  
    xhttp.open("GET", "http://localhost/minireto/foir3.png");
    xhttp.responseType = 'blob';
    xhttp.send();
}











