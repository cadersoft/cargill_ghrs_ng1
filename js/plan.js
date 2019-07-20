var page_no = 0;
$().ready(function () {
    var arrowArr = ['#first', '#second', '#plan'];
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        for (var i = 0; i < arrowArr.length; i++) {
            if (scrollTop >= $(arrowArr[i]).offset().top - 10) {
                page_no = i;
            }
        }
    });
    $("#side_down").click(function (event) {
        event.preventDefault();
        page_no++;
        if (page_no == arrowArr.length) {
            page_no = arrowArr.length - 1;
        } else {
            animateTo(arrowArr[page_no])
        }
    })

    function animateTo(id) {
        console.log(id);
        $('html, body').animate({
            scrollTop: $(id).offset().top - 80
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = id;
        });
    }
});