$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }

    });

    // smooth scrolling 

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );

    });
});
function validateData() {
    var userName = document.getElementById('userName').value;
    var userEmail = document.getElementById('userEmail').value;
    var userMessage = document.getElementById('userMessage').value;
    console.log(userName, userEmail, userMessage);
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var regMail = /^a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$/;
    var regMessage = /^[A-Za-z]+$/;
    if (userName.length == 0 || userEmail.length == 0 || userMessage.length == 0) {
        event.preventDefault();
        $(".error_message").show();
        $(".error_message").html("Please fill all the details.");
    } else if (!regName.test(userName) || userEmail.match(regMail) || userMessage.match(regMessage)) {
        event.preventDefault();
        $(".error_message").show();
        $(".error_message").html("Please fill valid details.");
    } else {
        $(".error_message").hide();
        // Email.send({
        //     Host: "smtp.elasticemail.com",
        //     Username: 'sumitsharma8741@gmail.com',
        //     Password: "password",
        //     To: 'sharmasumit8741@gmail.com',
        //     From: 'sumitsharma8741@gmail.com',
        //     Subject: "This is the subject",
        //     Body: "And this is the body"
        // }).then(
        //     message => alert("mail send ")
        // );
    }
}