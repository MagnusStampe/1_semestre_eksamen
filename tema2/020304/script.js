$(window).on("load", startHistorie);

var smashCount = 0;
var smashSucces = false;
var timeOut = false;

//Start
function startHistorie() {
    $("#titel").removeClass();
    $("#walk_in_btn").removeClass();
}


//Titel billede, der klikkes på start knappen
$("#walk_in_btn").on("click", walkInBtnHandler);

function walkInBtnHandler() {
    $("#protagonist_sprite").removeClass();
    $("#protagonist_container").removeClass();

    $("#protagonist_container").addClass("walk_right");
    $("#protagonist_sprite").addClass("walk");
    $("#titel").addClass("hide");
    $("#walk_in_btn").addClass("hide");

    $("#storm")[0].play();

    $("#protagonist_container").on("animationend", choice);
}

//Man får valget mellem en sten eller en fod
function choice() {
    $("#protagonist_container").off("animationend", choice);

    $("#stone_btn").removeClass();
    $("#foot_btn").removeClass();
    $("#protagonist_sprite").removeClass();

    $("#protagonist_sprite").addClass("sad");
}

$("#stone_btn").on("click", light);

$("#foot_btn").on("click", no_light);


//Man tænder bålet
function light() {
    $("#protagonist_container").off("animationend", light);

    $("#protagonist_sprite").removeClass();
    $("#protagonist_container").removeClass();

    $("#protagonist_container").addClass("light_pos");
    $("#protagonist_sprite").addClass("light");
    $("#stone_btn").addClass("hide");
    $("#foot_btn").addClass("hide");

    setTimeout(stone, 800);

    $("#protagonist_sprite").on("animationend", fire);
}

function stone() {
    $("#stone")[0].play();
}

//Der er bål
function fire() {
    $("#protagonist_sprite").off("animationend", fire);

    $("#protagonist_sprite").removeClass();
    $("#protagonist_container").removeClass();
    $("#fire").removeClass();

    $("#smash_txt").addClass("hide");
    $("#protagonist_sprite").addClass("happy");
    $("#protagonist_container").addClass("light_pos");
    $("#fire").addClass("fire");

    setTimeout(rescue, 3000);
}

//Man bliver reddet
function rescue() {
    $("#redder_container").removeClass();
    $("#redder_sprite").removeClass();

    $("#redder_container").addClass("walk_right");
    $("#redder_sprite").addClass("walk");

    $("#redder_container").on("animationend", wave);
}

//Redderen vinker til én
function wave() {
    $("#redder_container").off("animationend", wave);

    $("#redder_sprite").removeClass("walk");

    $("#redder_sprite").addClass("wave");

    $("#over_here")[0].play();

    setTimeout(credit, 3000);
}


function no_light() {

    $("#protagonist_sprite").removeClass();

    $("#stone_btn").addClass("hide");
    $("#foot_btn").addClass("hide");
    $("#protagonist_sprite").addClass("no_light");
    setTimeout(foot, 800);

    $("#protagonist_sprite").on("animationend", randomOutcome);
}

function foot() {
    $("#break")[0].play();
}

function randomOutcome() {
    $("#protagonist_sprite").off("animationend", randomOutcome);

    $("#protagonist_sprite").removeClass();
    $("#protagonist_sprite").addClass("sad");
    if (Math.random() >= 0.5) {
        tryTxt();
    } else {
        waitTxt();
    }
}

function tryTxt() {
    $("#try_txt").removeClass();
    setTimeout(trySurvive, 6000);
    setTimeout(tryFail, 11000);
}

function waitTxt() {
    $("#wait_txt").removeClass();
    setTimeout(wait, 6000);
}

function wait() {
    $("#protagonist_sprite").removeClass();

    $("#wait_txt").addClass("hide");
    $("#protagonist_sprite").addClass("wait");

    $("#protagonist_sprite").on("animationend", stayWait);
}

function stayWait() {
    $("#protagonist_sprite").off("animationend", stayWait);

    $("#protagonist_sprite").removeClass();

    $("#protagonist_sprite").addClass("stay_wait");
    setTimeout(die, 3000);

}

function die() {
    $("#protagonist_sprite").removeClass();
    $("#redder_container").removeClass();
    $("#redder_sprite").removeClass();

    $("#protagonist_sprite").addClass("die");
    $("#redder_container").addClass("walk_right");
    $("#redder_sprite").addClass("walk");

    $("#protagonist_sprite").on("animationend", stayDie);
}

function stayDie() {
    $("#protagonist_sprite").off("animationend", stayDie);

    $("#protagonist_sprite").removeClass();

    $("#protagonist_sprite").addClass("stay_die");

    setTimeout(kneel, 3000);
}

function kneel() {

    $("#redder_sprite").removeClass();

    $("#redder_sprite").addClass("kneel");

    $("#oh_no")[0].play();

    $("#redder_sprite").on("animationend", stayKneel);
}

function stayKneel() {
    $("#redder_sprite").off("animationend", stayKneel);

    $("#redder_sprite").removeClass();
    $("#redder_sprite").addClass("stay_kneel");

    setTimeout(credit, 3000);
}

function tryFail() {
    console.log("Times up");
    if (smashSucces == false) {
        console.log("smashSucces is false");

        timeOut = true;

        wait();
        $("#protagonist_sprite").off("click", smash);

        $("#too_cold_txt").removeClass();

        $("#smash_txt").addClass("hide");

    }
}

function trySurvive() {
    $("#protagonist_sprite").removeClass();
    $("#smash_txt").removeClass();

    $("#try_txt").addClass("hide");
    $("#protagonist_sprite").addClass("stay_try");

    $("#protagonist_sprite").on("click", smash);
}

function smash() {
    $("#protagonist_sprite").off("click", smash);

    $("#protagonist_sprite").removeClass();

    $("#protagonist_sprite").addClass("smash");

    checkSmash();
}

function checkSmash() {
    if (smashCount >= 3) {
        console.log("smashSucces is true");
        smashSucces = true;

        $("#protagonist_sprite").on("animationend", fire);
    } else {
        smashCount++;
        $("#protagonist_sprite").on("animationend", isTimeOut);
    }
}

function isTimeOut() {
    if (timeOut == false) {
        trySurvive();
    }
}
//Krediteringsbilledet kommer på
function credit() {
    $("#redder_container").off("animationend", credit);

    $("#kreditering").removeClass("hide");
}


//Start forfra knap
$(".reset_btn").on("click", resetBtnHandler);

function resetBtnHandler() {
    location.reload();

}
