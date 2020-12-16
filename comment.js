var komentar1;
$(document).ready(function(){
    var $komentari1 = $('#komentari1'); 
    if(localStorage.getItem("#komentari1")) { 
        $komentari1.html(localStorage.getItem("#komentari1"));                }

    var data = new Date();
    var datum = data.getDate() + "/"
            + (data.getMonth()+1)  + "/" 
            + data.getFullYear() + " "  
            + data.getHours() + ":"  
            + data.getMinutes();

    $('#postbtn1').click(function(){
        komentar1 = document.getElementById("com1").value;
        $("#komentari1").append("<li>" + komentar1 + "<p>" + datum + "</p></li>");
        localStorage.setItem("#komentari1", $komentari1.html());
    });

    var $komentari2 = $('#komentari2'); 
    if(localStorage.getItem("#komentari2")) { 
        $komentari2.html(localStorage.getItem("#komentari2"));
    }

    $('#postbtn2').click(function(){
        komentar2 = document.getElementById("com2").value;
        $("#komentari2").append("<li>" + komentar2 + "<p>" + datum + "</p></li>");
        localStorage.setItem("#komentari2", $komentari2.html());
    });

    var $komentari3 = $('#komentari3'); 
    if(localStorage.getItem("#komentari3")) { 
        $komentari3.html(localStorage.getItem("#komentari3"));
    }

    $('#postbtn3').click(function(){
        komentar3 = document.getElementById("com3").value;
        $("#komentari3").append("<li>" + komentar3 + "<p>" + datum + "</p></li>");
        localStorage.setItem("#komentari3", $komentari3.html());
    });
    var $komentari4 = $('#komentari4'); 
    if(localStorage.getItem("#komentari4")) { 
        $komentari4.html(localStorage.getItem("#komentari4"));
    }

    $('#postbtn4').click(function(){
        komentar4 = document.getElementById("com4").value;
        $("#komentari4").append("<li>" + komentar4 + "<p>" + datum + "</p></li>");
        localStorage.setItem("#komentari4", $komentari4.html());
    });
    var $komentari5 = $('#komentari5'); 
    if(localStorage.getItem("#komentari5")) { 
        $komentari5.html(localStorage.getItem("#komentari5"));
    }

    $('#postbtn5').click(function(){
        komentar5 = document.getElementById("com5").value;
        $("#komentari5").append("<li>" + komentar5 + "<p>" + datum + "</p></li>");
        localStorage.setItem("#komentari5", $komentari5.html());
    });

    $("#clear").click(function(){
        window.localStorage.clear();
    });

    $("#delete").click(function(){
        window.localStorage.removeItem(this);
    });
    
});

