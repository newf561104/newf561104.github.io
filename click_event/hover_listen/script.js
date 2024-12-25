$(function() {
  let el_eventname = $('#event_name');

  let updateEventname = function(eventname) {
    el_eventname.append(eventname);
  };

  $(document).on('touchstart', 'div', function () {
    updateEventname('<p>touchstart</p>')
  });
  $(document).on('touchend', 'div', function () {
    updateEventname('<p>touchend</p>')
  });
  $(document).on('mousedown', 'div', function () {
    updateEventname('<p>mousedown</p>')
  });
  $(document).on('mouseup', 'div', function () {
    updateEventname('<p>mouseup</p>')
  });
  $(document).on('pointerdown', 'div', function () {
    updateEventname('<p>pointerdown</p>')
  });
  $(document).on('pointerup', 'div', function () {
    updateEventname('<p>pointerup</p>')
  });
  $(document).on('click', 'div', function () {
    updateEventname('<p>click</p>')
  });
});