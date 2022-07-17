$(function () {
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    var slideIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("slider__item");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) { slideIndex = 1 }
        x[slideIndex - 1].style.display = "block";
        setTimeout(carousel, 4000);
    }

    $('select').styler();

    $('.header__btn-menu').on('click', function () {
        $('.menu ul').slideToggle();
    });

});

var acc = document.getElementsByClassName('question')
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    })
}

var acc = document.getElementsByClassName('topic')
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    })
}

function myFunction() {
    alert("Thank you! Your request has been received.");
}

function booking() {
    var txt;
    if (confirm("Are you sure to book?")) {
        txt = "Your booking request has been received!";
    } else {
        txt = "Your booking request has been cancelled!";
    }
    document.getElementById("demo").innerHTML = txt;
}