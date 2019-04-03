images = document.getElementsByClassName('zooming-image');

for (var i = 0; i < images.length; i++) {
  d = new Drift(images.item(i), {
    inlinePane : true,
    containInline : true,
    zoomFactor : 3,
    sourceAttribute : 'src'
  });
}
