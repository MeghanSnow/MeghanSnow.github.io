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



    var now = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var checkTime = function() {
        var today = weekday[now.getDay()];
        var timeDiv = document.getElementById('timeDiv');
        var dayOfWeek = now.getDay();
        var hour = now.getHours();
        var minutes = now.getMinutes();

        //add AM or PM
        var suffix = hour >= 12 ? "PM" : "AM";

        // add 0 to one digit minutes
        if (minutes < 10) {
            minutes = "0" + minutes
        };
        if (hour >= 11 && hour <= 22) {
            hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
            timeDiv.innerHTML = 'it\'s ' + today + ' ' + hour + ':' + minutes + suffix + ' - we\'re open!';
            timeDiv.className = 'open';
        }
        else {
            if (hour <11 || hour > 22) {
                hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
            }
            timeDiv.innerHTML = 'It\'s ' + today + ' ' + hour + ':' + minutes + suffix + ' - we\'re closed!';
            timeDiv.className = 'closed';
        }
    };

    var currentDay = weekday[now.getDay()];
    var currentDayID = "#" + currentDay; //gets todays weekday and turns it into id
    $(currentDayID).toggleClass("today"); //hightlights today in the view hours modal popup

    setInterval(checkTime, 1000);
    checkTime();



});






