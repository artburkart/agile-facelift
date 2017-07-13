function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Sets background color on issues when "card color" is available
async function changeColors() {
  while (!document.getElementsByClassName('ghx-issue').length) {
    await sleep(500);
  }
  // Iterate through cards and change background color
  [].forEach.call(document.getElementsByClassName('ghx-issue'), (el, idx) => {
    let id = el.getAttribute('data-issue-id');
    let grabber = document.querySelector(`[data-issue-id="${id}"] .ghx-grabber`) || {style: {}};
    // Only change color when color is set.
    let bg = grabber.style['background-color'] || '';
    if (bg.replace(/ /g,'') !== '') {
      let rgb = tinycolor(bg).lighten(30).toRgbString();
      el.style.backgroundColor = rgb;
    }
  });
}

// Start on page load
changeColors();

// Try to set whenever mouse events happen
document.onclick = changeColors;
document.onmouseup = changeColors;
