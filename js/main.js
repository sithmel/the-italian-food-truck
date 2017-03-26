require('classlist-polyfill');
var delegate = require('delegate');

delegate(document.body, '[data-toggle-class]', 'click', function(evt) {
  var el = evt.delegateTarget;
  var className = el.getAttribute('data-toggle-class');
  var addClassSelector = el.getAttribute('data-toggle-class-selector') || 'body';
  var addClassNode = document.querySelector(addClassSelector);
  if (addClassNode) {
    addClassNode.classList.toggle(className);
  }
  evt.preventDefault();
});
