
let hover_element = document.getElementById('hov_elm');
let el_eventname = document.getElementById('event_name');

// 表示をアップデートする関数群
let updateEventname = function(eventname) {
  el_eventname.innerHTML = `${el_eventname.innerHTML}<p>${eventname}</p>`;
};

// イベント設定
hover_element.addEventListener('touchstart', function(event) {
  updateEventname('touchstart');
}, false);

hover_element.addEventListener('touchend', function(event) {
  updateEventname('touchend')
}, false);

hover_element.addEventListener('mousedown', function(event) {
  updateEventname('mousedown')
}, false);

hover_element.addEventListener('mouseup', function(event) {
  updateEventname('mouseup')
}, false);

hover_element.addEventListener('click', function(event) {
  updateEventname('click')
}, false);

