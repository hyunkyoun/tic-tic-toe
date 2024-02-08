var count = 0;

function game(buttonID) {

    if ((content(buttonID) != 'X') && (content(buttonID) != 'O')) {
        fillSpace(buttonID);
    }

}

function fillSpace(buttonID) {
    var decision = "";

    if (count % 2 == 0) {
        decision = "X";
    }
    else {
        decision = "O";
    }
    count++;

    document.getElementById(buttonID).innerHTML = decision;

    setTimeout(function(){
        checkWinner();
    }, 100); 
    
}

function content(buttonID) {
    return document.getElementById(buttonID).innerHTML;
}

function checkWinner() {

    var b1 = document.getElementById(0).innerHTML;
    var b2 = document.getElementById(1).innerHTML;
    var b3 = document.getElementById(2).innerHTML;
    var b4 = document.getElementById(3).innerHTML;
    var b5 = document.getElementById(4).innerHTML;
    var b6 = document.getElementById(5).innerHTML;
    var b7 = document.getElementById(6).innerHTML;
    var b8 = document.getElementById(7).innerHTML;
    var b9 = document.getElementById(8).innerHTML;

    /* 
    1 2 3 
    4 5 6 
    7 8 9
    */

    if ((b1 == b2 && b2 == b3) && (b1 == 'X' || b1 == 'O')) {
        alert(b1 + " won!");
    }
    else if ((b4 == b5 && b5 == b6) && (b4 == 'X' || b4 == 'O')) {
        alert(b4 + " won!");
    }
    else if ((b7 == b8 && b8 == b9) && (b7 == 'X' || b7 == 'O')) {
        alert(b7 + " won!");
    }
    else if ((b1 == b4 && b4 == b7) && (b1 == 'X' || b1 == 'O')) {
        alert(b1 + " won!");
    }
    else if ((b2 == b5 && b5 == b8) && (b2 == 'X' || b2 == 'O')) {
        alert(b2 + " won!");
    }
    else if ((b3 == b6 && b6 == b9) && (b3 == 'X' || b3 == 'O')) {
        alert(b3 + " won!");
    }
    else if ((b1 == b5 && b5 == b9) && (b1 == 'X' || b1 == 'O')) {
        alert(b1 + " won!");
    }
    else if ((b3 == b5 && b5 == b7) && (b3 == 'X' || b3 == 'O')) {
        alert(b3 + " won!");
    }
    else if (count == 9) {
        alert("its a tie!");
    }

}

function restart() {

    var response = confirm("Are you sure you want to restart?");

    if (response) {

        document.getElementById(0).innerHTML = "";
        document.getElementById(1).innerHTML = "";
        document.getElementById(2).innerHTML = "";
        document.getElementById(3).innerHTML = "";
        document.getElementById(4).innerHTML = "";
        document.getElementById(5).innerHTML = "";
        document.getElementById(6).innerHTML = "";
        document.getElementById(7).innerHTML = "";
        document.getElementById(8).innerHTML = "";

        count = 0;

    }

}

function endGame() {

    var response = confirm("Are you sure you want to exit the game?") 

    if (response) {
        close();
    }
}