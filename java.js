var pdf1 = false;
var pdf2 = false;

$(window).on("load", startUp);

function startUp() {
    $(".pdf1").hide();
    $(".pdf2").hide();

    $(".luk1").hide();
    $(".luk2").hide();
}

$(".pdf_but_1").on("click", open1);

function open1() {

    console.log("open1");

    if (pdf1 == true) {
        console.log("true");

        $(".pdf1").hide();

        $(".luk1").hide();
        $(".vis1").show();

        pdf1 = false;
    } else {
        console.log("false");

        $(".pdf1").show();

        $(".luk1").show();
        $(".vis1").hide();

        pdf1 = true;
    }
}

$(".pdf_but_2").on("click", open2);

function open2() {

    console.log("open2");

    if (pdf1 == true) {
        console.log("true");

        $(".luk2").hide();
        $(".vis2").show();

        $(".pdf2").hide();
        pdf1 = false;
    } else {
        console.log("false");

        $(".luk2").show();
        $(".vis2").hide();

        $(".pdf2").show();
        pdf1 = true;
    }
}
