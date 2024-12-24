$(function() {
  let el_eventname = $('#event_name');

  let updateEventname = function(eventname) {
    el_eventname.append(eventname);
  };

  $('body').on('touchstart', '#hov_elm', function () {
    updateEventname('<p>touchstart</p>')
  });
  $('body').on('touchend', '#hov_elm', function () {
    updateEventname('<p>touchend</p>')
  });
  $('body').on('mousedown', '#hov_elm', function () {
    updateEventname('<p>mousedown</p>')
  });
  $('body').on('mouseup', '#hov_elm', function () {
    updateEventname('<p>mouseup</p>')
  });
  $('body').on('click', '#hov_elm', function () {
    updateEventname('<p>click</p>')
  });
});