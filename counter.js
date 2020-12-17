function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have " + localStorage.clickcount + " likes.";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
function clickCounter2() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount2) {
      localStorage.clickcount2 = Number(localStorage.clickcount2)+1;
    } else {
      localStorage.clickcount2 = 1;
    }
    document.getElementById("result2").innerHTML = "You have " + localStorage.clickcount2 + " likes.";
  } else {
    document.getElementById("result2").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
function clickCounter3() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount3) {
      localStorage.clickcount3 = Number(localStorage.clickcount3)+1;
    } else {
      localStorage.clickcount3 = 1;
    }
    document.getElementById("result3").innerHTML = "You have " + localStorage.clickcount3 + " likes.";
  } else {
    document.getElementById("result3").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

function clickCounter4() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount4) {
      localStorage.clickcount4= Number(localStorage.clickcount4)+1;
    } else {
      localStorage.clickcount4 = 1;
    }
    document.getElementById("result4").innerHTML = "You have " + localStorage.clickcount4 + " likes.";
  } else {
    document.getElementById("result4").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
function clickCounter5() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount5) {
      localStorage.clickcount5 = Number(localStorage.clickcount5)+1;
    } else {
      localStorage.clickcount5 = 1;
    }
    document.getElementById("result5").innerHTML = "You have " + localStorage.clickcount5 + " likes.";
  } else {
    document.getElementById("result5").innerHTML = "Sorry, your browser does not support web storage...";
  }
}



