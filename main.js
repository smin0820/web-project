$(function () {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        onLeave: (origin, destination, direction) => {
            if (destination == 1) {
                $(".section01 h1").addClass("active");
            }
            else if (destination == 2) {
                $(".section02 h1").addClass("active");
            }
            else if (destination == 3) {
                $(".section03 h1").addClass("active");
            }
            else if (destination == 4) {
                $(".section04 h1").addClass("active");
            }
            if (destination != 1) {
                $(".section01 h1").removeClass("active");
            }
            if (destination != 2) {
                $(".section02 h1").removeClass("active");
            }
            if (destination != 3) {
                $(".section03 h1").removeClass("active");
            }
            if (destination != 4) {
                $(".section04 h1").removeClass("active");
            }
        }
    });
});
