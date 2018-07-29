// date picker

$('#datepicker input').datepicker({
  format: 'yyyy-mm-dd'
}).on('hide', function(event) {
  event.preventDefault();
  event.stopPropagation();
});