

$(document).ready(function($) {

    centerSearchBox();

});



$(window).load(function(){

//  Show Search Box on Map

    $('.search-box.map').addClass('show-search-box');



});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Initialize Owl carousel


// Mobile Slider

function centerSlider(){
    if ($(window).width() < 979) {
        var $navigation = $('.navigation');
        $('#slider .slide').height($(window).height() - $navigation.height());
        $('#slider').height($(window).height() - $navigation.height());
    }
    else {
        $('#slider .slide').css('height', '');
        $('#slider').css('height', '');
    }
    var imageWidth = $('#slider .slide img').width();
    var viewPortWidth = $(window).width();
    if( imageWidth > viewPortWidth ){
        var centerImage = ( imageWidth/2 ) - ( viewPortWidth/2 );
        $('#slider .slide img').css('left', -centerImage);
    }
    else if( $('#slider .slide img').height() < $('#slider').height() ){

        $('#slider .slide img').css('height', '100%');
        $('#slider .slide img').css('width', 'auto');
        centerImage = ( $('#slider .slide img').width()/2 ) - ( viewPortWidth/2 );
        $('#slider .slide img').css('left', -centerImage);
    }

}

// Set height of the map






// Agent state - Fired when user change the state if he is agent or doesn't


//  Center Search box Vertically

function centerSearchBox() {
    var $searchBox = $('.search-box-wrapper');
    var $navigation = $('.navigation');
    var positionFromBottom = 20;
    if ($('body').hasClass('navigation-fixed-top')){
        $('#map, #slider').css('margin-top',$navigation.height());
        $searchBox.css('z-index',98);
    } else {
        $('.leaflet-map-pane').css('top',-50);
        $(".homepage-slider").css('margin-top', -$('.navigation header').height());
    }
    if ($(window).width() > 768) {
        $('#slider .slide .overlay').css('margin-bottom',$navigation.height());
        $('#map, #slider').each(function () {
            if (!$('body').hasClass('horizontal-search-float')){
                var mapHeight = $(this).height();
                var contentHeight = $('.search-box').height();
                var top;
                if($('body').hasClass('has-fullscreen-map')) {
                    top = (mapHeight / 2) - (contentHeight / 2);
                }
                else {
                    top = (mapHeight / 2) - (contentHeight / 2) + $('.navigation').height();
                }
                $('.search-box-wrapper').css('top', top);
            } else {
                $searchBox.css('top', $(this).height() + $navigation.height() - $searchBox.height() - positionFromBottom);
                $('#slider .slide .overlay').css('margin-bottom',$navigation.height() + $searchBox.height() + positionFromBottom);
                if ( $('body').hasClass('has-fullscreen-map') ) {
                    $('.search-box-wrapper').css('top', $(this).height() - $('.navigation').height());
                }
            }
        });
    }
}


