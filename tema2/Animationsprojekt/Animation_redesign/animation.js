var antalKlik = 0;
var mobilNr = 1;

//Siden loades

$(window).on("load", titelScreen);

function titelScreen() {

    console.log("titelScreen");

    //Scene 1
    $(".bobble").hide();
    $("#sky1").hide();
    $("#pige_container").hide();
    $("#baggrund1").hide();

    //Scene 2
    $("#baggrund2").hide();

    //Scene 3
    $("#ansigt_container").hide();
    $("#sporgsmal").hide();
    $("#klik_og_del").hide();
    $(".ansigt").hide();

    //Scene JA
    $(".mobil").hide();

    //Payoff JA
    $("#payoff1_ja").hide();
    $("#antal_delinger").hide();

    //Payoff NEJ
    $("#payoff1_nej").hide();

    //Kreditering
    $("#logo").hide();
    $("#payoff2").hide();

    /*
        $("#scene1").hide();
        $("#scene2").hide();
        $("#scene3").hide();
        $("#krediteringsbaggrund").fadeOut(1);
        $("#logo").hide();
        $("#payoff2").fadeOut(1);
        $("#payoff_1").hide();
        $("#scene_JA").hide();
        $("#scene_NEJ").hide();
        $("#klik_og_del").hide();
        $(".ansigt").hide(); */


    $("#klik_mobil").on("click", prolog);
}

//Scene 1

function prolog() {
    $("#klik_mobil").off("click", prolog);

    console.log("prolog");

    $("#klik_mobil").hide();
    $("#titel").hide();

    $("#baggrund1").show();
    $(".bobble").show();
    $("#sky1").show();
    $("#pige_container").show();

    $("#scene").addClass("prolog");

    $("#baggrundslyd")[0].play();
    $("#baggrundslyd")[0].volume = 0.05;

    $("#pige_sprite").addClass("pige_ryg_til");
    setTimeout(blitz, 700);
}

function blitz() {
    $("#blitz")[0].play();
    $("#blitz")[0].volume = 1;

    setTimeout(billedeTages, 1500);
}

function billedeTages() {
    $("#blitz")[0].pause();
    console.log("billedeTages");

    setTimeout(cirkel, 1000);

}

function cirkel() {
    $("#scene").removeClass();
    $("#cirkel_container").removeClass();
    $("#pige_container").removeClass("pige_ryg_til_container")

    $("#scene").addClass("scene2");
    //$("#cirkel_container").addClass("cirkel_screen");
    $("#cirkel_container").addClass("cirkel_container")
    $("#baggrund1").addClass("cirkel_anim");
    $("#pige_container").addClass("move_left");

    $("#baggrund2").show();

    $("#pige_container").on("animationend", billedeSendes);
}

//Scene 2

function billedeSendes() {
    console.log("billedeSendes");

    $("#baggrund1").removeClass();
    $("#pige_container").removeClass();

    $("#baggrund1").addClass("splitscreen");
    $("#pige_container").addClass("moved_left");

    $("#mobil_lyd")[0].play();
    $("#hand_sprite").addClass("hand_move");

    $("#hand_sprite").removeClass("new_snap");

    setTimeout(billedetErAabnet, 6000);
}

//Scene 3

function billedetErAabnet() {
    console.log("billedetErAabnet");

    $("#baggrund1").hide();
    $("#baggrund2").hide();

    $("#ansigt_container").show();
    $("#sporgsmal").show();

    $("#scene").removeClass();

    $("#scene").addClass("scene3");
    $("#ansigt_sprite").addClass("ansigt_move");

    $("#ja").on("click", billedetDeles);
    $("#nej").on("click", billedetDelesIkke);
}

//Højre ben (JA)

//Scene 3

function billedetDeles() {
    $("#ja").off("click", billedetDeles);

    console.log("billedetDeles");

    $("#sporgsmal").hide();

    $("#timerlyd")[0].play();
    $("#timerlyd")[0].volume = 1;
    $("#timerlyd").on("ended", billedetErDelt);

    hvorMangeSendesBilledetTil();
}

function hvorMangeSendesBilledetTil() {
    console.log("hvorMangeSendesBilledetTil");

    $(".ansigt").show();
    $(".ansigt").addClass("puls");
    $("#klik_og_del").show();

    $(".ansigt").on("click", ansigtKlik);
}

function ansigtKlik() {
    $(this).hide();
    antalKlik++;
    console.log(antalKlik);
}

function billedetErDelt() {
    $(".ansigt").off("click", ansigtKlik);

    console.log("billedetErDelt");

    $(".ansigt").removeClass("puls");

    if (antalKlik == 0) {
        billedetDelesIkke();
    } else {

        //Scene JA

        $("#ansigt_container").hide();
        $("#klik_og_del").hide();
        $(".ansigt").hide();

        $("#scene_JA").show();
        $(".mobil").show();

        $("#scene").removeClass();

        $("#scene").addClass("scene_ja");

        setTimeout(delinger1, 1000);

        $("#antal_delinger").show();
        document.getElementById("delinger").innerHTML = antalKlik;

    }
}

function delinger1() {
    mobilDelay();

    antalKlik = antalKlik * 3;
    document.getElementById("delinger").innerHTML = antalKlik;

    setTimeout(delinger2, 1000);
}

function delinger2() {
    antalKlik = antalKlik * 4;
    document.getElementById("delinger").innerHTML = antalKlik;

    setTimeout(delinger3, 1000);
}

function delinger3() {
    antalKlik = antalKlik * 7;
    document.getElementById("delinger").innerHTML = antalKlik;

    setTimeout(delinger4, 1000);
}

function delinger4() {
    antalKlik = antalKlik * 7;
    document.getElementById("delinger").innerHTML = antalKlik;

    setTimeout(delinger5, 1000);
}

function delinger5() {
    antalKlik = antalKlik * 4;
    document.getElementById("delinger").innerHTML = antalKlik;
}

function mobilDelay() {
    $("#mobil" + mobilNr).addClass("mobil_billede");
    mobilNr++;
    $("#mobil_lyd")[0].play();

    if (mobilNr >= 6) {
        setTimeout(payoffJA, 6000);
    } else {
        setTimeout(mobilDelay, 1000);
    }
}

function payoffJA() {
    $("#scene").removeClass();

    $("#scene").addClass("payoff1");

    $(".mobil").hide();
    $("#antal_delinger").hide();

    $("#payoff1_ja").show();

    setTimeout(logo, 8000);
}

//Venstre ben (NEJ)

function billedetDelesIkke() {

    $("#nej").off("click", billedetDelesIkke);

    $("#baggrund2").show();

    $("#sporgsmal").hide();
    $("#ansigt_container").hide();

    $("#scene").removeClass();
    $("#hand_sprite").removeClass();
    $("#hand_container").removeClass();
    $("#baggrund2").removeClass();

    $("#scene").addClass("scene_NEJ");
    $("#hand_sprite").addClass("hand_nej_move");
    $("#hand_sprite").addClass("close");
    $("#hand_container").addClass("close");
    $("#hand_container").addClass("fullscreen");
    $("#baggrund2").addClass("fullscreen", "payoff_nej");

    setTimeout(payoffNEJ, 4000);
}

function payoffNEJ() {

    $("#scene").removeClass();

    $("#scene").addClass("payoff1");

    $("#hand_container").hide();
    $("#baggrund2").hide();

    $("#payoff1_nej").show();

    setTimeout(logo, 8000);
}

//Scene Kreditering

function logo() {
    $("#logo").show();

    setTimeout(krediteringsbillede, 1000);
}

function krediteringsbillede() {
    $("#payoff1_ja").fadeOut(1000);
    $("#payoff1_nej").fadeOut(1000);

    setTimeout(payoff2, 2500);

}

function payoff2() {
    $("#payoff2").fadeIn(1000);
}
