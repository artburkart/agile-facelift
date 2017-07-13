[].forEach.call(document.getElementsByClassName('ghx-issue'), (el) => {
  let bg = el.children[2].style['background-color'];
  let rgb = tinycolor(bg).lighten(30).toRgbString();
  el.style.backgroundColor = rgb;
});
