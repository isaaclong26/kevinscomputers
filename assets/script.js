//jquery code goes in here. everything will be called when the page fully loads. 

$(function () {
    bcod();



});


function bcod() {
    $("#title").hide();
    $(".flexContainer").hide();
    $("header").css({
        "background-color": "#0078D7",
        "height": $(window).height()
    })
    var wh = $(window).height();
    var fh = $("#face").height();
    $("#face").css({
        "padding-top": (wh / 2) - (fh / 2)
    });

    //fade out 
    setTimeout(trans, 2000)

    function trans() {
        $("header").fadeOut(function () {
            $("#faceCap").text("We Can Help");
            $("#face").attr("src", "./assets/smile.jpg")

            $("header").fadeIn();

            setTimeout(convertToHeader, 2000);

            function convertToHeader() {
                $("header").animate({
                    height: "80px",
                });
                $(".flexContainer").show();
                $("#face, #faceCap").hide();
                $("#title").fadeIn();
                $('header').css({
                    position: 'fixed',
                    width: "100%",
                    top: "0px"

                });
            }



        })
    };
}