function playerDied() {
    window.alert("You died.")
}
function two(){
    document.getElementById("button-one-text").innerText="Clean your room.";
    document.getElementById("button-two-text").innerText="Ignore it.";
    document.getElementById("prompt").innerHTML = "<p>Your room is a mess.</p>"

    document.getElementById("button-one").setAttribute("onclick", "three()");
    document.getElementById("button-two").setAttribute("onclick", "four()");
}

function three() {
    document.getElementById("button-one-text").innerText="Go to school.";
    document.getElementById("button-two-text").innerText="Stay home.";
    document.getElementById("prompt").innerHTML = "<p>You spend 20 minutes cleaning your room; your parents are pleased. It's almost time for school.</p>"

    document.getElementById("button-one").setAttribute("onclick", "five()");
    document.getElementById("button-two").setAttribute("onclick", "winLottery()");
}

function four() {
    document.getElementById("button-one-text").innerText="Go to school.";
    document.getElementById("button-two-text").innerText="Stay home.";
    document.getElementById("prompt").innerHTML = "<p>Your parents walk in and freak out. You're grounded for a week. It's almost time for school.</p>"

    document.getElementById("button-one").setAttribute("onclick", "seven()");
    document.getElementById("button-two").setAttribute("onclick", "playerDied()");
}

function winLottery() {
    window.alert("You win the lottery! Collect $5,000,000");
}