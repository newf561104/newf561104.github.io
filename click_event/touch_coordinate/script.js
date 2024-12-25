
let hover_element = document.getElementById('hov_elm');
let el_eventname = document.getElementById('event_name');

// 表示をアップデートする関数群
let updateEventname = function(eventname) {
  el_eventname.innerHTML = `${el_eventname.innerHTML}<p>${eventname}</p>`;
};

let updateTouchEvent = function(eventname, event) {
  innerHTML = `${el_eventname.innerHTML}<p>${eventname}: ${event.changedTouches[0].pageX}, ${event.changedTouches[0].pageY} </p>`;
}

// イベント設定
hover_element.addEventListener('touchstart', function(event) {
  updateTouchEvent('touchstart', event);
}, false);

hover_element.addEventListener('touchend', function(event) {
  updateTouchEvent('touchend', event);
}, false);

hover_element.addEventListener('mousedown', function(event) {
  updateEventname('mousedown');
}, false);

hover_element.addEventListener('mouseup', function(event) {
  updateEventname('mouseup');
}, false);

hover_element.addEventListener('click', function(event) {
  updateEventname('click');
}, false);

