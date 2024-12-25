$(function() {
  let container = $('#conteiner');

  $(document).on('click', '#add_btn', function () {
    container.append('<div class="hov_elm">:hover sample</div>')
  });
});