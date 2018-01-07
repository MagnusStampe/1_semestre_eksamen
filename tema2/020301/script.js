$(window).on("load", startHistorie);


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

$("#foot_btn").on("click", footBtnHandler);

function footBtnHandler() {
    alert("This option is not available, please pick the stone");
}


//Man tænder bålet
function light() {
    $("#protagonist_container").off("animationend", light);

    $("#protagonist_sprite").removeClass();
    $("#protagonist_container").removeClass();

    $("#protagonist_container").addClass("light_pos");
    $("#protagonist_sprite").addClass("light");
    $("#stone_btn").addClass("hide");
    $("#foot_btn").addClass("hide");

    setTimeout(stone, 800)

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

//Krediteringsbilledet kommer på
function credit() {
    $("#redder_container").off("animationend", credit);

    $("#kreditering").removeClass("hide");
}


//Start forfra knap
$(".reset_btn").on("click", resetBtnHandler);

function resetBtnHandler() {
    $("#titel").removeClass();
    $("#protagonist_container").removeClass();
    $("#protagonist_sprite").removeClass();
    $("#redder_container").removeClass();
    $("#redder_sprite").removeClass();
    $("#stone_btn").removeClass();
    $("#foot_btn").removeClass();
    $("#fire").removeClass();
    $("#walk_in_btn").removeClass();

    $("#kreditering").addClass("hide");
    $("#stone_btn").addClass("hide");
    $("#foot_btn").addClass("hide");
    $("#fire").addClass("wood");
    $("#protagonist_container").addClass("start_pos");
    $("#redder_container").addClass("start_pos");

}
