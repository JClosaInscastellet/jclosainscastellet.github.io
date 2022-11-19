//Init
$(document).ready(function () {
    setMainPage();
    $(".nav-link").filter(function () {
        if ($(this).text() == "Projects") {
            $(this).addClass("active");
        }

    });

});

//Menu Items Apaerance
$(".navbar .nav-link").on("click", function () {
    $(".navbar .nav-link").removeClass("active");
    $(this).addClass("active");
    if ($(this).text() == "Projects") {
        setMainPage();
    }

});


function setMainPage() {
    console.log("Main page loaded");
    
}