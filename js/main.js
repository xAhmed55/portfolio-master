
$(window).scroll(()=>{
    let wScroll = $(window).scrollTop();
    let aboutTop = $('#about').offset().top;

    number(wScroll)
    line(wScroll)
    navBg(wScroll, aboutTop)
})
let lines = $('.line')
function line(x) {

    let home = $('#home');
    let about = $('#about');
    let services = $('#services');
    let portfoli = $('#portfoli');
    let blog = $('#blog');
    let footer = $('#footer');


    if (x > home.offset().top && x < home.offset().top  + home.outerHeight()) {
        hideLine(0)
    }
    else if (x > about.offset().top  && x < about.offset().top + home.outerHeight()) {
        hideLine(1)
    }
    else if (x > services.offset().top && x < services.offset().top + services.outerHeight()) {
        hideLine(2)
    }
    else if (x > portfoli.offset().top  && x < portfoli.offset().top  + portfoli.outerHeight()) {
        hideLine(3)
    }
    else if (x > blog.offset().top && x < blog.offset().top  + blog.outerHeight()) {
        hideLine(4)
    }
    else if (x > footer.offset().top && x < footer.offset().top + footer.outerHeight()) {
        hideLine(6)
    }
}
$("a[href^='#'").click(function (e) {
    let aHref = e.currentTarget.attributes[1].nodeValue;//get link id from targrt
    let secOffset = $(aHref).offset().top;//get element position from the top to scroll down 
    $("html,body").animate({ scrollTop: secOffset }, 100);//scroll to the div
})
function hideLine(x) {
    for (let i = 0; i < lines.length; i++) {
        if (i == x) {
            $(lines[i]).css({ 'width': '80%' })
        }
        else {
            $(lines[i]).css({ 'width': '0%' })
        }
    }
}
$('#btnUp').click(function () {
    $("html,body").animate({ scrollTop: 0 }, 100);
})
function navBg(x, abouttop) {
    if (x > (abouttop - 500)) {
        $('#navbar').css("backgroundColor", "rgba(0,0,0,0.6");

        $('#btnUp').fadeIn(500)
    }
    else {
        $('#navbar').css("backgroundColor", "transparent");
        $('#btnUp').fadeOut(500)
    }

}


function number(wS) {
    if (wS > $('.numbers').offset().top - ($('.numbers').outerHeight() + 50)) {
        if ($('#first-h1').html() == "") {
            first();
            second();
            third()
            fourth();
        }
    }
}
function first() {
    let i = 0;

    let s = setInterval(() => {
        i++;
        $('#first-h1').html(i);


        if (i == 450) {
            clearInterval(s)
        }
    }, 6);


}
function second() {
    let i = 0;

    let s = setInterval(() => {
        i++;
        $('#second-h1').html(i);


        if (i == 25) {
            clearInterval(s)
        }
    }, 10);


}
function third() {
    let i = 0;

    let s = setInterval(() => {
        i++;
        $('#third-h1').html(i);


        if (i == 550) {
            clearInterval(s)
        }
    }, 6);


}
function fourth() {
    let i = 0;

    let s = setInterval(() => {
        i++;
        $('#th4-h1').html(i);


        if (i == 48) {
            clearInterval(s)
        }
    }, 6);


}




$(window).ready(()=>{
    $('.load').remove();
    $('body').css('overflow-y', 'auto')
})



$('.ful1').slideToggle(250)
$('.ful2').slideToggle(250)

$('.drop').click(function () {
    $('.ful1').slideToggle(250)
})

$('.drop2').click(function () {
    $('.ful2').slideToggle(250)
})
$('.navbar-toggler').click(() => {
    $('.nav-fixed-container').fadeIn(250);

})
$('.fa-times').click(() => {
    $('.nav-fixed-container').fadeOut(250);
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     



































































const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Developer", "Freelancer", "Photographer"];
const typingDelay = 300;
const erasingDelay = 300;
const newTextDelay = 300; 
let textArrayIndex = 0;
let charIndex = 0;
function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}
function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}
document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
let navButtons = $('.hidenav');
for (let i = 0; i < navButtons.length; i++) {
    if (i != 5) {
        $(navButtons[i]).click(() => {
            $('.nav-fixed-container').fadeOut(250);
        })
    }

}



