(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://ssl.google-analytics.com/analytics.js','ga');

ga('create', 'UA-52476275-4', 'auto');

[].forEach.call(document.getElementsByClassName('ghx-issue'), (el, idx) => {
  // Only track for first page load
  if (idx === 0) {
    ga('send', 'pageview');
  }

  // Only change color when color is set.
  let bg = el.children[2].style['background-color'];
  if (bg.replace(/ /g,'') !== '') {
    let rgb = tinycolor(bg).lighten(30).toRgbString();
    el.style.backgroundColor = rgb;
  }
});
