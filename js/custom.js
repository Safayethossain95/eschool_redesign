$('.teacher-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    prevArrow:"<i class='fa fa-chevron-left left'></i>",
    nextArrow:"<i class='fa fa-chevron-right right'></i>",

  });



  $('.comments-slider-main').slick({
    
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay:false,
    prevArrow:"<i class='fa fa-chevron-left left'></i>",
    nextArrow:"<i class='fa fa-chevron-right right'></i>",

  });
 

  $('.sld').slick({
    
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay:false,
    dots:false,
   

  });

  
  $('.whom-slider').slick({
    
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:false,
    dots:false,
   

  });


  // venubox js start
  $('.venobox').venobox();  
  // venubox js end
  