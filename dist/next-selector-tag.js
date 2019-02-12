(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NxAbstractDomSelector = nx.AbstractDomSelector || require('next-abstract-dom-selector');

  var NxSelectorTag = nx.declare('nx.SelectorTag', {
    extends: NxAbstractDomSelector,
    methods: {
      exec: function() {
        return this.context.getElementsByTagName(this.selector);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxSelectorTag;
  }
})();
