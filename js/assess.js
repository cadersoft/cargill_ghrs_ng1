$().ready(function () {
    var menuarr = ['#first', '#second'];
    $('#side_down').bind("click", function () {
        $('html,body').animate({
            scrollTop: $("#second").offset().top - 100
        }, "slow");

    });
});