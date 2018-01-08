$(document).ready(function() {
  function setHeight() {
    $('section').css('height', Math.max(window.innerHeight, 759));
    $('section#main').css('height', window.innerHeight);
  };
  setHeight();

  $(window).resize(function() {
    setHeight();
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > window.innerHeight - 40) {
      $('#menu').css('top', '0');
      $('#menu').css('position', 'fixed');
      $('body').css('background-color', '#CC5543');
    } else {
      $('#menu').css('position', 'absolute');
      $('#menu').css('top', 'inherit');
      $('body').css('background-color', '#424d3a');
    }
    if (scroll < window.innerHeight - 40) {
      $('#details-link').css('font-weight', 'normal');
      $('#accomodation-link').css('font-weight', 'normal');
      $('#rsvp-link').css('font-weight', 'normal');
    } else if (scroll < window.innerHeight * 2 - 40) {
      $('#details-link').css('font-weight', 'bold');
      $('#accomodation-link').css('font-weight', 'normal');
      $('#rsvp-link').css('font-weight', 'normal');
    } else if (scroll < window.innerHeight * 3 - 40) {
      $('#details-link').css('font-weight', 'normal');
      $('#accomodation-link').css('font-weight', 'bold');
      $('#rsvp-link').css('font-weight', 'normal');
    } else if (scroll < window.innerHeight * 4 - 40) {
      $('#details-link').css('font-weight', 'normal');
      $('#accomodation-link').css('font-weight', 'normal');
      $('#rsvp-link').css('font-weight', 'bold');
    }
  })

  $('form#rsvp-form').submit(function(e) {
    e.preventDefault();
    $('button').hide();
    $('.thanks').show();
  })
});
