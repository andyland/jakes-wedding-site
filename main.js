$(document).ready(function() {
  $('#menu').attr('data-offset-top', window.innerHeight - 40);
  function setHeight() {
    $('section').css('height', Math.max(window.innerHeight, 759));
    $('section#main').css('height', window.innerHeight - 40);
  };
  setHeight();

  $(window).resize(function() {
    // setHeight();
    // $('#menu').attr('data-offset-top', window.innerHeight - 40);
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > window.innerHeight - 40) {
      $('body').css('background-color', '#CC5543');
    } else {
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
