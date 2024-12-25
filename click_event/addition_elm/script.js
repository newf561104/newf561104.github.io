$(function() {
  let container = $('#conteiner');

  $('#add_btn').on('click', function () {
    container.append('<div class="hov_elm">:hover sample</div>')
  });
});