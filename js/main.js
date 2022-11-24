//Init
let projects = [];
$(document).ready(function () {
    //Load projects
    projects.push(new ProjectCard("Test project","Test","Interesting decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription decription in her e e e e e e e e e e e e e e e e e e e e e","Youtube/drive","https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png","github url"));

    projects.forEach(element => {
        $(".projectDiv").append(element.returnDom());
    });
    //Set main page
    setMainPage();

    //Menu
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
    $(".projectDiv").show();
    $(".curriculumDiv").hide();
    $(".contactDiv").hide();
    
    console.log("Main page loaded");
    
}