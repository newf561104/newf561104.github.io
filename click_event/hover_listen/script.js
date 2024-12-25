$(function() {
  let el_eventname = $('#event_name');

  let updateEventname = function(eventname) {
    el_eventname.append(eventname);
  };

  $(document).on('touchstart', '#hov_elm', function () {
    updateEventname('<p>touchstart</p>')
  });
  $(document).on('touchend', '#hov_elm', function () {
    updateEventname('<p>touchend</p>')
  });
  $(document).on('mousedown', '#hov_elm', function () {
    updateEventname('<p>mousedown</p>')
  });
  $(document).on('mouseup', '#hov_elm', function () {
    updateEventname('<p>mouseup</p>')
  });
  $(document).on('pointerdown', '#hov_elm', function () {
    updateEventname('<p>pointerdown</p>')
  });
  $(document).on('pointerup', '#hov_elm', function () {
    updateEventname('<p>pointerup</p>')
  });
  $(document).on('click', '#hov_elm', function () {
    updateEventname('<p>click</p>')
  });
});