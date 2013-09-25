/* global sharing */
var tagCounts = _.chain(tags).countBy(function(el) { return el; }).pairs().sortBy(function(el) { return -el[1]; }).value();

Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
};

function generate() {
  var filter = $('#filter').val() || 1;
  var filtered = _.filter(tagCounts, function(el) { return el[1] >= filter; });
  var generatedText = '#' + filtered.pick()[0] + ' - ' + filtered.pick()[1];
  $('#content').html(generatedText);
}


$('#generate').click(function() { generate(); });
generate();
