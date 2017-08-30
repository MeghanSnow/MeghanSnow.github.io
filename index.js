/*
window.onscroll = function() {
    var el = document.getElementsByTagName('header')[0];
    var className = 'small';
    if (el.classList) {
        if (window.scrollY > 10)
            el.classList.add(className);
        else
            el.classList.remove(className);
    }
};*/
$(document).ready(function(){

//fix this shit code

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {

            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.prev').click(function (e) {
        e.preventDefault();
        moveLeft();
    });


    $('a.next').click(function (e) {
        e.preventDefault();
        moveRight();
    });


    $(function(){
        $(window).scroll(function(){
            var el = document.getElementsByTagName('header')[0];
            var className = 'small';
            if (el.classList) {
                if (window.scrollY > 10)
                    el.classList.add(className);
                else
                    el.classList.remove(className);
            }
        });
    });



    $(document).on('click', 'a', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
    });






});






