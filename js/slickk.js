    $(document).ready(function(){
      $('.gallerySlider').slick();
      console.log('Loaded JS')
    });

    $(document).ready(function() {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });

        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            arrows: false,
            focusOnSelect: true
        });
    });