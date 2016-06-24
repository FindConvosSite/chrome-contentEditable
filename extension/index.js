(function(window) {
  var ensureEl = function() {
    var el = document.querySelector('content-editable-toggle-icon');
    if (!el) {
      el = document.createElement('content-editable-toggle-icon');
      el.setAttribute('contenteditable', false);
      document.body.appendChild(el);
    }
  };

  var setupContentEditableToggle = function() {
    window.addEventListener('keydown', function(e) {
      if (!e.ctrlKey || e.keyCode !== 69 /* e */) {
        return;
      }

      ensureEl();

      var html = document.documentElement;
      if (html.hasAttribute('contenteditable')) {
        html.removeAttribute('contenteditable');
      } else {
        html.setAttribute('contenteditable', '');
      }
    });
  };

  var init = function() {
    setupContentEditableToggle();
  };

  window.addEventListener('DOMContentLoaded', init);
})(this);
