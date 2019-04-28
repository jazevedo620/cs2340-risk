anchors.options.placement = 'left';
anchors.add('h2');
anchors.add('h3');
anchors.options = {
  placement: 'right',
  class: 'right-fade'
};
anchors.add('h4');

hljs.initHighlightingOnLoad();

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
