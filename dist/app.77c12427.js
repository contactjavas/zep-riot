// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/riot/riot.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.component = component;
exports.install = install;
exports.mount = mount;
exports.pure = pure;
exports.register = register;
exports.uninstall = uninstall;
exports.unmount = unmount;
exports.unregister = unregister;
exports.version = exports.__ = void 0;

var _expressions, _bindings, _Object$freeze, _Object$freeze2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* Riot v4.12.4, @license MIT */

/**
 * Convert a string from camel case to dash-case
 * @param   {string} string - probably a component tag name
 * @returns {string} component name normalized
 */
function camelToDashCase(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
/**
 * Convert a string containing dashes to camel case
 * @param   {string} string - input string
 * @returns {string} my-string -> myString
 */


function dashToCamelCase(string) {
  return string.replace(/-(\w)/g, function (_, c) {
    return c.toUpperCase();
  });
}
/**
 * Get all the element attributes as object
 * @param   {HTMLElement} element - DOM node we want to parse
 * @returns {Object} all the attributes found as a key value pairs
 */


function DOMattributesToObject(element) {
  return Array.from(element.attributes).reduce(function (acc, attribute) {
    acc[dashToCamelCase(attribute.name)] = attribute.value;
    return acc;
  }, {});
}
/**
 * Move all the child nodes from a source tag to another
 * @param   {HTMLElement} source - source node
 * @param   {HTMLElement} target - target node
 * @returns {undefined} it's a void method ¯\_(ツ)_/¯
 */
// Ignore this helper because it's needed only for svg tags


function moveChildren(source, target) {
  if (source.firstChild) {
    target.appendChild(source.firstChild);
    moveChildren(source, target);
  }
}
/**
 * Remove the child nodes from any DOM node
 * @param   {HTMLElement} node - target node
 * @returns {undefined}
 */


function cleanNode(node) {
  clearChildren(node.childNodes);
}
/**
 * Clear multiple children in a node
 * @param   {HTMLElement[]} children - direct children nodes
 * @returns {undefined}
 */


function clearChildren(children) {
  Array.from(children).forEach(removeNode);
}
/**
 * Remove a node from the DOM
 * @param   {HTMLElement} node - target node
 * @returns {undefined}
 */


function removeNode(node) {
  var parentNode = node.parentNode;
  if (node.remove) node.remove();
  /* istanbul ignore else */
  else if (parentNode) parentNode.removeChild(node);
}

var EACH = 0;
var IF = 1;
var SIMPLE = 2;
var TAG = 3;
var SLOT = 4;
var bindingTypes = {
  EACH: EACH,
  IF: IF,
  SIMPLE: SIMPLE,
  TAG: TAG,
  SLOT: SLOT
};
var ATTRIBUTE = 0;
var EVENT = 1;
var TEXT = 2;
var VALUE = 3;
var expressionTypes = {
  ATTRIBUTE: ATTRIBUTE,
  EVENT: EVENT,
  TEXT: TEXT,
  VALUE: VALUE
};
/**
 * Create the template meta object in case of <template> fragments
 * @param   {TemplateChunk} componentTemplate - template chunk object
 * @returns {Object} the meta property that will be passed to the mount function of the TemplateChunk
 */

function createTemplateMeta(componentTemplate) {
  var fragment = componentTemplate.dom.cloneNode(true);
  return {
    avoidDOMInjection: true,
    fragment: fragment,
    children: Array.from(fragment.childNodes)
  };
}

var _ref7 = [],
    indexOf = _ref7.indexOf,
    slice = _ref7.slice;

var append = function append(get, parent, children, start, end, before) {
  var isSelect = ('selectedIndex' in parent);
  var noSelection = isSelect;

  while (start < end) {
    var child = get(children[start], 1);
    parent.insertBefore(child, before);

    if (isSelect && noSelection && child.selected) {
      noSelection = !noSelection;
      var selectedIndex = parent.selectedIndex;
      parent.selectedIndex = selectedIndex < 0 ? start : indexOf.call(parent.querySelectorAll('option'), child);
    }

    start++;
  }
};

var eqeq = function eqeq(a, b) {
  return a == b;
};

var identity = function identity(O) {
  return O;
};

var indexOf$1 = function indexOf$1(moreNodes, moreStart, moreEnd, lessNodes, lessStart, lessEnd, compare) {
  var length = lessEnd - lessStart;
  /* istanbul ignore if */

  if (length < 1) return -1;

  while (moreEnd - moreStart >= length) {
    var m = moreStart;
    var l = lessStart;

    while (m < moreEnd && l < lessEnd && compare(moreNodes[m], lessNodes[l])) {
      m++;
      l++;
    }

    if (l === lessEnd) return moreStart;
    moreStart = m + 1;
  }

  return -1;
};

var isReversed = function isReversed(futureNodes, futureEnd, currentNodes, currentStart, currentEnd, compare) {
  while (currentStart < currentEnd && compare(currentNodes[currentStart], futureNodes[futureEnd - 1])) {
    currentStart++;
    futureEnd--;
  }

  return futureEnd === 0;
};

var next = function next(get, list, i, length, before) {
  return i < length ? get(list[i], 0) : 0 < i ? get(list[i - 1], -0).nextSibling : before;
};

var remove = function remove(get, children, start, end) {
  while (start < end) {
    drop(get(children[start++], -1));
  }
}; // - - - - - - - - - - - - - - - - - - -
// diff related constants and utilities
// - - - - - - - - - - - - - - - - - - -


var DELETION = -1;
var INSERTION = 1;
var SKIP = 0;
var SKIP_OND = 50;

var HS = function HS(futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges) {
  var k = 0;
  /* istanbul ignore next */

  var minLen = futureChanges < currentChanges ? futureChanges : currentChanges;
  var link = Array(minLen++);
  var tresh = Array(minLen);
  tresh[0] = -1;

  for (var i = 1; i < minLen; i++) {
    tresh[i] = currentEnd;
  }

  var nodes = currentNodes.slice(currentStart, currentEnd);

  for (var _i = futureStart; _i < futureEnd; _i++) {
    var index = nodes.indexOf(futureNodes[_i]);

    if (-1 < index) {
      var idxInOld = index + currentStart;
      k = findK(tresh, minLen, idxInOld);
      /* istanbul ignore else */

      if (-1 < k) {
        tresh[k] = idxInOld;
        link[k] = {
          newi: _i,
          oldi: idxInOld,
          prev: link[k - 1]
        };
      }
    }
  }

  k = --minLen;
  --currentEnd;

  while (tresh[k] > currentEnd) {
    --k;
  }

  minLen = currentChanges + futureChanges - k;
  var diff = Array(minLen);
  var ptr = link[k];
  --futureEnd;

  while (ptr) {
    var _ptr = ptr,
        newi = _ptr.newi,
        oldi = _ptr.oldi;

    while (futureEnd > newi) {
      diff[--minLen] = INSERTION;
      --futureEnd;
    }

    while (currentEnd > oldi) {
      diff[--minLen] = DELETION;
      --currentEnd;
    }

    diff[--minLen] = SKIP;
    --futureEnd;
    --currentEnd;
    ptr = ptr.prev;
  }

  while (futureEnd >= futureStart) {
    diff[--minLen] = INSERTION;
    --futureEnd;
  }

  while (currentEnd >= currentStart) {
    diff[--minLen] = DELETION;
    --currentEnd;
  }

  return diff;
}; // this is pretty much the same petit-dom code without the delete map part
// https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L556-L561


var OND = function OND(futureNodes, futureStart, rows, currentNodes, currentStart, cols, compare) {
  var length = rows + cols;
  var v = [];
  var d, k, r, c, pv, cv, pd;

  outer: for (d = 0; d <= length; d++) {
    /* istanbul ignore if */
    if (d > SKIP_OND) return null;
    pd = d - 1;
    /* istanbul ignore next */

    pv = d ? v[d - 1] : [0, 0];
    cv = v[d] = [];

    for (k = -d; k <= d; k += 2) {
      if (k === -d || k !== d && pv[pd + k - 1] < pv[pd + k + 1]) {
        c = pv[pd + k + 1];
      } else {
        c = pv[pd + k - 1] + 1;
      }

      r = c - k;

      while (c < cols && r < rows && compare(currentNodes[currentStart + c], futureNodes[futureStart + r])) {
        c++;
        r++;
      }

      if (c === cols && r === rows) {
        break outer;
      }

      cv[d + k] = c;
    }
  }

  var diff = Array(d / 2 + length / 2);
  var diffIdx = diff.length - 1;

  for (d = v.length - 1; d >= 0; d--) {
    while (c > 0 && r > 0 && compare(currentNodes[currentStart + c - 1], futureNodes[futureStart + r - 1])) {
      // diagonal edge = equality
      diff[diffIdx--] = SKIP;
      c--;
      r--;
    }

    if (!d) break;
    pd = d - 1;
    /* istanbul ignore next */

    pv = d ? v[d - 1] : [0, 0];
    k = c - r;

    if (k === -d || k !== d && pv[pd + k - 1] < pv[pd + k + 1]) {
      // vertical edge = insertion
      r--;
      diff[diffIdx--] = INSERTION;
    } else {
      // horizontal edge = deletion
      c--;
      diff[diffIdx--] = DELETION;
    }
  }

  return diff;
};

var applyDiff = function applyDiff(diff, get, parentNode, futureNodes, futureStart, currentNodes, currentStart, currentLength, before) {
  var live = [];
  var length = diff.length;
  var currentIndex = currentStart;
  var i = 0;

  while (i < length) {
    switch (diff[i++]) {
      case SKIP:
        futureStart++;
        currentIndex++;
        break;

      case INSERTION:
        // TODO: bulk appends for sequential nodes
        live.push(futureNodes[futureStart]);
        append(get, parentNode, futureNodes, futureStart++, futureStart, currentIndex < currentLength ? get(currentNodes[currentIndex], 0) : before);
        break;

      case DELETION:
        currentIndex++;
        break;
    }
  }

  i = 0;

  while (i < length) {
    switch (diff[i++]) {
      case SKIP:
        currentStart++;
        break;

      case DELETION:
        // TODO: bulk removes for sequential nodes
        if (-1 < live.indexOf(currentNodes[currentStart])) currentStart++;else remove(get, currentNodes, currentStart++, currentStart);
        break;
    }
  }
};

var findK = function findK(ktr, length, j) {
  var lo = 1;
  var hi = length;

  while (lo < hi) {
    var mid = (lo + hi) / 2 >>> 0;
    if (j < ktr[mid]) hi = mid;else lo = mid + 1;
  }

  return lo;
};

var smartDiff = function smartDiff(get, parentNode, futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges, currentLength, compare, before) {
  applyDiff(OND(futureNodes, futureStart, futureChanges, currentNodes, currentStart, currentChanges, compare) || HS(futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges), get, parentNode, futureNodes, futureStart, currentNodes, currentStart, currentLength, before);
};

var drop = function drop(node) {
  return (node.remove || dropChild).call(node);
};

function dropChild() {
  var parentNode = this.parentNode;
  /* istanbul ignore else */

  if (parentNode) parentNode.removeChild(this);
}
/*! (c) 2018 Andrea Giammarchi (ISC) */


var domdiff = function domdiff(parentNode, // where changes happen
currentNodes, // Array of current items/nodes
futureNodes, // Array of future items/nodes
options // optional object with one of the following properties
//  before: domNode
//  compare(generic, generic) => true if same generic
//  node(generic) => Node
) {
  if (!options) options = {};
  var compare = options.compare || eqeq;
  var get = options.node || identity;
  var before = options.before == null ? null : get(options.before, 0);
  var currentLength = currentNodes.length;
  var currentEnd = currentLength;
  var currentStart = 0;
  var futureEnd = futureNodes.length;
  var futureStart = 0; // common prefix

  while (currentStart < currentEnd && futureStart < futureEnd && compare(currentNodes[currentStart], futureNodes[futureStart])) {
    currentStart++;
    futureStart++;
  } // common suffix


  while (currentStart < currentEnd && futureStart < futureEnd && compare(currentNodes[currentEnd - 1], futureNodes[futureEnd - 1])) {
    currentEnd--;
    futureEnd--;
  }

  var currentSame = currentStart === currentEnd;
  var futureSame = futureStart === futureEnd; // same list

  if (currentSame && futureSame) return futureNodes; // only stuff to add

  if (currentSame && futureStart < futureEnd) {
    append(get, parentNode, futureNodes, futureStart, futureEnd, next(get, currentNodes, currentStart, currentLength, before));
    return futureNodes;
  } // only stuff to remove


  if (futureSame && currentStart < currentEnd) {
    remove(get, currentNodes, currentStart, currentEnd);
    return futureNodes;
  }

  var currentChanges = currentEnd - currentStart;
  var futureChanges = futureEnd - futureStart;
  var i = -1; // 2 simple indels: the shortest sequence is a subsequence of the longest

  if (currentChanges < futureChanges) {
    i = indexOf$1(futureNodes, futureStart, futureEnd, currentNodes, currentStart, currentEnd, compare); // inner diff

    if (-1 < i) {
      append(get, parentNode, futureNodes, futureStart, i, get(currentNodes[currentStart], 0));
      append(get, parentNode, futureNodes, i + currentChanges, futureEnd, next(get, currentNodes, currentEnd, currentLength, before));
      return futureNodes;
    }
  }
  /* istanbul ignore else */
  else if (futureChanges < currentChanges) {
      i = indexOf$1(currentNodes, currentStart, currentEnd, futureNodes, futureStart, futureEnd, compare); // outer diff

      if (-1 < i) {
        remove(get, currentNodes, currentStart, i);
        remove(get, currentNodes, i + futureChanges, currentEnd);
        return futureNodes;
      }
    } // common case with one replacement for many nodes
  // or many nodes replaced for a single one

  /* istanbul ignore else */


  if (currentChanges < 2 || futureChanges < 2) {
    append(get, parentNode, futureNodes, futureStart, futureEnd, get(currentNodes[currentStart], 0));
    remove(get, currentNodes, currentStart, currentEnd);
    return futureNodes;
  } // the half match diff part has been skipped in petit-dom
  // https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L391-L397
  // accordingly, I think it's safe to skip in here too
  // if one day it'll come out like the speediest thing ever to do
  // then I might add it in here too
  // Extra: before going too fancy, what about reversed lists ?
  //        This should bail out pretty quickly if that's not the case.


  if (currentChanges === futureChanges && isReversed(futureNodes, futureEnd, currentNodes, currentStart, currentEnd, compare)) {
    append(get, parentNode, futureNodes, futureStart, futureEnd, next(get, currentNodes, currentEnd, currentLength, before));
    return futureNodes;
  } // last resort through a smart diff


  smartDiff(get, parentNode, futureNodes, futureStart, futureEnd, futureChanges, currentNodes, currentStart, currentEnd, currentChanges, currentLength, compare, before);
  return futureNodes;
};
/**
 * Quick type checking
 * @param   {*} element - anything
 * @param   {string} type - type definition
 * @returns {boolean} true if the type corresponds
 */


function checkType(element, type) {
  return _typeof(element) === type;
}
/**
 * Check if an element is part of an svg
 * @param   {HTMLElement}  el - element to check
 * @returns {boolean} true if we are in an svg context
 */


function isSvg(el) {
  var owner = el.ownerSVGElement;
  return !!owner || owner === null;
}
/**
 * Check if an element is a template tag
 * @param   {HTMLElement}  el - element to check
 * @returns {boolean} true if it's a <template>
 */


function isTemplate(el) {
  return !isNil(el.content);
}
/**
 * Check that will be passed if its argument is a function
 * @param   {*} value - value to check
 * @returns {boolean} - true if the value is a function
 */


function isFunction(value) {
  return checkType(value, 'function');
}
/**
 * Check if a value is a Boolean
 * @param   {*}  value - anything
 * @returns {boolean} true only for the value is a boolean
 */


function isBoolean(value) {
  return checkType(value, 'boolean');
}
/**
 * Check if a value is an Object
 * @param   {*}  value - anything
 * @returns {boolean} true only for the value is an object
 */


function isObject(value) {
  return !isNil(value) && checkType(value, 'object');
}
/**
 * Check if a value is null or undefined
 * @param   {*}  value - anything
 * @returns {boolean} true only for the 'undefined' and 'null' types
 */


function isNil(value) {
  return value === null || value === undefined;
}

var UNMOUNT_SCOPE = Symbol('unmount');
var EachBinding = Object.seal({
  // dynamic binding properties
  // childrenMap: null,
  // node: null,
  // root: null,
  // condition: null,
  // evaluate: null,
  // template: null,
  // isTemplateTag: false,
  nodes: [],
  // getKey: null,
  // indexName: null,
  // itemName: null,
  // afterPlaceholder: null,
  // placeholder: null,
  // API methods
  mount: function mount(scope, parentScope) {
    return this.update(scope, parentScope);
  },
  update: function update(scope, parentScope) {
    var placeholder = this.placeholder,
        nodes = this.nodes,
        childrenMap = this.childrenMap;
    var collection = scope === UNMOUNT_SCOPE ? null : this.evaluate(scope);
    var items = collection ? Array.from(collection) : [];
    var parent = placeholder.parentNode; // prepare the diffing

    var _createPatch = createPatch(items, scope, parentScope, this),
        newChildrenMap = _createPatch.newChildrenMap,
        batches = _createPatch.batches,
        futureNodes = _createPatch.futureNodes; // patch the DOM only if there are new nodes


    domdiff(parent, nodes, futureNodes, {
      before: placeholder,
      node: patch(Array.from(childrenMap.values()), parentScope)
    }); // trigger the mounts and the updates

    batches.forEach(function (fn) {
      return fn();
    }); // update the children map

    this.childrenMap = newChildrenMap;
    this.nodes = futureNodes;
    return this;
  },
  unmount: function unmount(scope, parentScope) {
    this.update(UNMOUNT_SCOPE, parentScope);
    return this;
  }
});
/**
 * Patch the DOM while diffing
 * @param   {TemplateChunk[]} redundant - redundant tepmplate chunks
 * @param   {*} parentScope - scope of the parent template
 * @returns {Function} patch function used by domdiff
 */

function patch(redundant, parentScope) {
  return function (item, info) {
    if (info < 0) {
      var element = redundant.pop();

      if (element) {
        var template = element.template,
            context = element.context; // notice that we pass null as last argument because
        // the root node and its children will be removed by domdiff

        template.unmount(context, parentScope, null);
      }
    }

    return item;
  };
}
/**
 * Check whether a template must be filtered from a loop
 * @param   {Function} condition - filter function
 * @param   {Object} context - argument passed to the filter function
 * @returns {boolean} true if this item should be skipped
 */


function mustFilterItem(condition, context) {
  return condition ? Boolean(condition(context)) === false : false;
}
/**
 * Extend the scope of the looped template
 * @param   {Object} scope - current template scope
 * @param   {string} options.itemName - key to identify the looped item in the new context
 * @param   {string} options.indexName - key to identify the index of the looped item
 * @param   {number} options.index - current index
 * @param   {*} options.item - collection item looped
 * @returns {Object} enhanced scope object
 */


function extendScope(scope, _ref) {
  var itemName = _ref.itemName,
      indexName = _ref.indexName,
      index = _ref.index,
      item = _ref.item;
  scope[itemName] = item;
  if (indexName) scope[indexName] = index;
  return scope;
}
/**
 * Loop the current template items
 * @param   {Array} items - expression collection value
 * @param   {*} scope - template scope
 * @param   {*} parentScope - scope of the parent template
 * @param   {EeachBinding} binding - each binding object instance
 * @returns {Object} data
 * @returns {Map} data.newChildrenMap - a Map containing the new children template structure
 * @returns {Array} data.batches - array containing the template lifecycle functions to trigger
 * @returns {Array} data.futureNodes - array containing the nodes we need to diff
 */


function createPatch(items, scope, parentScope, binding) {
  var condition = binding.condition,
      template = binding.template,
      childrenMap = binding.childrenMap,
      itemName = binding.itemName,
      getKey = binding.getKey,
      indexName = binding.indexName,
      root = binding.root,
      isTemplateTag = binding.isTemplateTag;
  var newChildrenMap = new Map();
  var batches = [];
  var futureNodes = [];
  items.forEach(function (item, index) {
    var context = extendScope(Object.create(scope), {
      itemName: itemName,
      indexName: indexName,
      index: index,
      item: item
    });
    var key = getKey ? getKey(context) : index;
    var oldItem = childrenMap.get(key);

    if (mustFilterItem(condition, context)) {
      return;
    }

    var componentTemplate = oldItem ? oldItem.template : template.clone();
    var el = oldItem ? componentTemplate.el : root.cloneNode();
    var mustMount = !oldItem;
    var meta = isTemplateTag && mustMount ? createTemplateMeta(componentTemplate) : {};

    if (mustMount) {
      batches.push(function () {
        return componentTemplate.mount(el, context, parentScope, meta);
      });
    } else {
      batches.push(function () {
        return componentTemplate.update(context, parentScope);
      });
    } // create the collection of nodes to update or to add
    // in case of template tags we need to add all its children nodes


    if (isTemplateTag) {
      var children = meta.children || componentTemplate.children;
      futureNodes.push.apply(futureNodes, _toConsumableArray(children));
    } else {
      futureNodes.push(el);
    } // delete the old item from the children map


    childrenMap.delete(key); // update the children map

    newChildrenMap.set(key, {
      template: componentTemplate,
      context: context,
      index: index
    });
  });
  return {
    newChildrenMap: newChildrenMap,
    batches: batches,
    futureNodes: futureNodes
  };
}

function create(node, _ref2) {
  var evaluate = _ref2.evaluate,
      condition = _ref2.condition,
      itemName = _ref2.itemName,
      indexName = _ref2.indexName,
      getKey = _ref2.getKey,
      template = _ref2.template;
  var placeholder = document.createTextNode('');
  var parent = node.parentNode;
  var root = node.cloneNode();
  parent.insertBefore(placeholder, node);
  removeNode(node);
  return Object.assign(Object.assign({}, EachBinding), {}, {
    childrenMap: new Map(),
    node: node,
    root: root,
    condition: condition,
    evaluate: evaluate,
    isTemplateTag: isTemplate(root),
    template: template.createDOM(node),
    getKey: getKey,
    indexName: indexName,
    itemName: itemName,
    placeholder: placeholder
  });
}
/**
 * Binding responsible for the `if` directive
 */


var IfBinding = Object.seal({
  // dynamic binding properties
  // node: null,
  // evaluate: null,
  // isTemplateTag: false,
  // placeholder: null,
  // template: null,
  // API methods
  mount: function mount(scope, parentScope) {
    return this.update(scope, parentScope);
  },
  update: function update(scope, parentScope) {
    var _this = this;

    var value = !!this.evaluate(scope);
    var mustMount = !this.value && value;
    var mustUnmount = this.value && !value;

    var mount = function mount() {
      var pristine = _this.node.cloneNode();

      _this.placeholder.parentNode.insertBefore(pristine, _this.placeholder);

      _this.template = _this.template.clone();

      _this.template.mount(pristine, scope, parentScope);
    };

    switch (true) {
      case mustMount:
        mount();
        break;

      case mustUnmount:
        this.unmount(scope);
        break;

      default:
        if (value) this.template.update(scope, parentScope);
    }

    this.value = value;
    return this;
  },
  unmount: function unmount(scope, parentScope) {
    this.template.unmount(scope, parentScope, true);
    return this;
  }
});

function create$1(node, _ref) {
  var evaluate = _ref.evaluate,
      template = _ref.template;
  var parent = node.parentNode;
  var placeholder = document.createTextNode('');
  parent.insertBefore(placeholder, node);
  removeNode(node);
  return Object.assign(Object.assign({}, IfBinding), {}, {
    node: node,
    evaluate: evaluate,
    placeholder: placeholder,
    template: template.createDOM(node)
  });
}
/**
 * Throw an error with a descriptive message
 * @param   { string } message - error message
 * @returns { undefined } hoppla.. at this point the program should stop working
 */


function panic(message) {
  throw new Error(message);
}
/**
 * Returns the memoized (cached) function.
 * // borrowed from https://www.30secondsofcode.org/js/s/memoize
 * @param {Function} fn - function to memoize
 * @returns {Function} memoize function
 */


function memoize(fn) {
  var _this2 = this;

  var cache = new Map();

  var cached = function cached(val) {
    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(_this2, val)) && cache.get(val);
  };

  cached.cache = cache;
  return cached;
}
/**
 * Evaluate a list of attribute expressions
 * @param   {Array} attributes - attribute expressions generated by the riot compiler
 * @returns {Object} key value pairs with the result of the computation
 */


function evaluateAttributeExpressions(attributes) {
  return attributes.reduce(function (acc, attribute) {
    var value = attribute.value,
        type = attribute.type;

    switch (true) {
      // spread attribute
      case !attribute.name && type === ATTRIBUTE:
        return Object.assign(Object.assign({}, acc), value);
      // value attribute

      case type === VALUE:
        acc.value = attribute.value;
        break;
      // normal attributes

      default:
        acc[dashToCamelCase(attribute.name)] = attribute.value;
    }

    return acc;
  }, {});
}

var REMOVE_ATTRIBUTE = 'removeAttribute';
var SET_ATTIBUTE = 'setAttribute';
var ElementProto = typeof Element === 'undefined' ? {} : Element.prototype;
var isNativeHtmlProperty = memoize(function (name) {
  return ElementProto.hasOwnProperty(name);
}); // eslint-disable-line

/**
 * Add all the attributes provided
 * @param   {HTMLElement} node - target node
 * @param   {Object} attributes - object containing the attributes names and values
 * @returns {undefined} sorry it's a void function :(
 */

function setAllAttributes(node, attributes) {
  Object.entries(attributes).forEach(function (_ref) {
    var _ref8 = _slicedToArray(_ref, 2),
        name = _ref8[0],
        value = _ref8[1];

    return attributeExpression(node, {
      name: name
    }, value);
  });
}
/**
 * Remove all the attributes provided
 * @param   {HTMLElement} node - target node
 * @param   {Object} newAttributes - object containing all the new attribute names
 * @param   {Object} oldAttributes - object containing all the old attribute names
 * @returns {undefined} sorry it's a void function :(
 */


function removeAllAttributes(node, newAttributes, oldAttributes) {
  var newKeys = newAttributes ? Object.keys(newAttributes) : [];
  Object.keys(oldAttributes).filter(function (name) {
    return !newKeys.includes(name);
  }).forEach(function (attribute) {
    return node.removeAttribute(attribute);
  });
}
/**
 * This methods handles the DOM attributes updates
 * @param   {HTMLElement} node - target node
 * @param   {Object} expression - expression object
 * @param   {string} expression.name - attribute name
 * @param   {*} value - new expression value
 * @param   {*} oldValue - the old expression cached value
 * @returns {undefined}
 */


function attributeExpression(node, _ref2, value, oldValue) {
  var name = _ref2.name; // is it a spread operator? {...attributes}

  if (!name) {
    if (oldValue) {
      // remove all the old attributes
      removeAllAttributes(node, value, oldValue);
    } // is the value still truthy?


    if (value) {
      setAllAttributes(node, value);
    }

    return;
  } // handle boolean attributes


  if (!isNativeHtmlProperty(name) && (isBoolean(value) || isObject(value) || isFunction(value))) {
    node[name] = value;
  }

  node[getMethod(value)](name, normalizeValue(name, value));
}
/**
 * Get the attribute modifier method
 * @param   {*} value - if truthy we return `setAttribute` othewise `removeAttribute`
 * @returns {string} the node attribute modifier method name
 */


function getMethod(value) {
  return isNil(value) || value === false || value === '' || isObject(value) || isFunction(value) ? REMOVE_ATTRIBUTE : SET_ATTIBUTE;
}
/**
 * Get the value as string
 * @param   {string} name - attribute name
 * @param   {*} value - user input value
 * @returns {string} input value as string
 */


function normalizeValue(name, value) {
  // be sure that expressions like selected={ true } will be always rendered as selected='selected'
  if (value === true) return name;
  return value;
}

var RE_EVENTS_PREFIX = /^on/;

var getCallbackAndOptions = function getCallbackAndOptions(value) {
  return Array.isArray(value) ? value : [value, false];
}; // see also https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38


var EventListener = {
  handleEvent: function handleEvent(event) {
    this[event.type](event);
  }
};
var ListenersWeakMap = new WeakMap();

var createListener = function createListener(node) {
  var listener = Object.create(EventListener);
  ListenersWeakMap.set(node, listener);
  return listener;
};
/**
 * Set a new event listener
 * @param   {HTMLElement} node - target node
 * @param   {Object} expression - expression object
 * @param   {string} expression.name - event name
 * @param   {*} value - new expression value
 * @returns {value} the callback just received
 */


function eventExpression(node, _ref, value) {
  var name = _ref.name;
  var normalizedEventName = name.replace(RE_EVENTS_PREFIX, '');
  var eventListener = ListenersWeakMap.get(node) || createListener(node);

  var _getCallbackAndOption = getCallbackAndOptions(value),
      _getCallbackAndOption2 = _slicedToArray(_getCallbackAndOption, 2),
      callback = _getCallbackAndOption2[0],
      options = _getCallbackAndOption2[1];

  var handler = eventListener[normalizedEventName];
  var mustRemoveEvent = handler && !callback;
  var mustAddEvent = callback && !handler;

  if (mustRemoveEvent) {
    node.removeEventListener(normalizedEventName, eventListener);
  }

  if (mustAddEvent) {
    node.addEventListener(normalizedEventName, eventListener, options);
  }

  eventListener[normalizedEventName] = callback;
}
/**
 * Normalize the user value in order to render a empty string in case of falsy values
 * @param   {*} value - user input value
 * @returns {string} hopefully a string
 */


function normalizeStringValue(value) {
  return isNil(value) ? '' : value;
}
/**
 * Get the the target text node to update or create one from of a comment node
 * @param   {HTMLElement} node - any html element containing childNodes
 * @param   {number} childNodeIndex - index of the text node in the childNodes list
 * @returns {HTMLTextNode} the text node to update
 */


var getTextNode = function getTextNode(node, childNodeIndex) {
  var target = node.childNodes[childNodeIndex];

  if (target.nodeType === Node.COMMENT_NODE) {
    var textNode = document.createTextNode('');
    node.replaceChild(textNode, target);
    return textNode;
  }

  return target;
};
/**
 * This methods handles a simple text expression update
 * @param   {HTMLElement} node - target node
 * @param   {Object} data - expression object
 * @param   {*} value - new expression value
 * @returns {undefined}
 */


function textExpression(node, data, value) {
  node.data = normalizeStringValue(value);
}
/**
 * This methods handles the input fileds value updates
 * @param   {HTMLElement} node - target node
 * @param   {Object} expression - expression object
 * @param   {*} value - new expression value
 * @returns {undefined}
 */


function valueExpression(node, expression, value) {
  node.value = normalizeStringValue(value);
}

var expressions = (_expressions = {}, _defineProperty(_expressions, ATTRIBUTE, attributeExpression), _defineProperty(_expressions, EVENT, eventExpression), _defineProperty(_expressions, TEXT, textExpression), _defineProperty(_expressions, VALUE, valueExpression), _expressions);
var Expression = Object.seal({
  // Static props
  // node: null,
  // value: null,
  // API methods

  /**
   * Mount the expression evaluating its initial value
   * @param   {*} scope - argument passed to the expression to evaluate its current values
   * @returns {Expression} self
   */
  mount: function mount(scope) {
    // hopefully a pure function
    this.value = this.evaluate(scope); // IO() DOM updates

    apply(this, this.value);
    return this;
  },

  /**
   * Update the expression if its value changed
   * @param   {*} scope - argument passed to the expression to evaluate its current values
   * @returns {Expression} self
   */
  update: function update(scope) {
    // pure function
    var value = this.evaluate(scope);

    if (this.value !== value) {
      // IO() DOM updates
      apply(this, value);
      this.value = value;
    }

    return this;
  },

  /**
   * Expression teardown method
   * @returns {Expression} self
   */
  unmount: function unmount() {
    // unmount only the event handling expressions
    if (this.type === EVENT) apply(this, null);
    return this;
  }
});
/**
 * IO() function to handle the DOM updates
 * @param {Expression} expression - expression object
 * @param {*} value - current expression value
 * @returns {undefined}
 */

function apply(expression, value) {
  return expressions[expression.type](expression.node, expression, value, expression.value);
}

function create$2(node, data) {
  return Object.assign(Object.assign(Object.assign({}, Expression), data), {}, {
    node: data.type === TEXT ? getTextNode(node, data.childNodeIndex) : node
  });
}
/**
 * Create a flat object having as keys a list of methods that if dispatched will propagate
 * on the whole collection
 * @param   {Array} collection - collection to iterate
 * @param   {Array<string>} methods - methods to execute on each item of the collection
 * @param   {*} context - context returned by the new methods created
 * @returns {Object} a new object to simplify the the nested methods dispatching
 */


function flattenCollectionMethods(collection, methods, context) {
  return methods.reduce(function (acc, method) {
    return Object.assign(Object.assign({}, acc), {}, _defineProperty({}, method, function (scope) {
      return collection.map(function (item) {
        return item[method](scope);
      }) && context;
    }));
  }, {});
}

function create$3(node, _ref) {
  var expressions = _ref.expressions;
  return Object.assign({}, flattenCollectionMethods(expressions.map(function (expression) {
    return create$2(node, expression);
  }), ['mount', 'update', 'unmount']));
} // Riot.js constants that can be used accross more modules


var COMPONENTS_IMPLEMENTATION_MAP = new Map(),
    DOM_COMPONENT_INSTANCE_PROPERTY = Symbol('riot-component'),
    PLUGINS_SET = new Set(),
    IS_DIRECTIVE = 'is',
    VALUE_ATTRIBUTE = 'value',
    MOUNT_METHOD_KEY = 'mount',
    UPDATE_METHOD_KEY = 'update',
    UNMOUNT_METHOD_KEY = 'unmount',
    SHOULD_UPDATE_KEY = 'shouldUpdate',
    ON_BEFORE_MOUNT_KEY = 'onBeforeMount',
    ON_MOUNTED_KEY = 'onMounted',
    ON_BEFORE_UPDATE_KEY = 'onBeforeUpdate',
    ON_UPDATED_KEY = 'onUpdated',
    ON_BEFORE_UNMOUNT_KEY = 'onBeforeUnmount',
    ON_UNMOUNTED_KEY = 'onUnmounted',
    PROPS_KEY = 'props',
    STATE_KEY = 'state',
    SLOTS_KEY = 'slots',
    ROOT_KEY = 'root',
    IS_PURE_SYMBOL = Symbol.for('pure'),
    PARENT_KEY_SYMBOL = Symbol('parent'),
    ATTRIBUTES_KEY_SYMBOL = Symbol('attributes'),
    TEMPLATE_KEY_SYMBOL = Symbol('template');
var globals = /*#__PURE__*/Object.freeze({
  __proto__: null,
  COMPONENTS_IMPLEMENTATION_MAP: COMPONENTS_IMPLEMENTATION_MAP,
  DOM_COMPONENT_INSTANCE_PROPERTY: DOM_COMPONENT_INSTANCE_PROPERTY,
  PLUGINS_SET: PLUGINS_SET,
  IS_DIRECTIVE: IS_DIRECTIVE,
  VALUE_ATTRIBUTE: VALUE_ATTRIBUTE,
  MOUNT_METHOD_KEY: MOUNT_METHOD_KEY,
  UPDATE_METHOD_KEY: UPDATE_METHOD_KEY,
  UNMOUNT_METHOD_KEY: UNMOUNT_METHOD_KEY,
  SHOULD_UPDATE_KEY: SHOULD_UPDATE_KEY,
  ON_BEFORE_MOUNT_KEY: ON_BEFORE_MOUNT_KEY,
  ON_MOUNTED_KEY: ON_MOUNTED_KEY,
  ON_BEFORE_UPDATE_KEY: ON_BEFORE_UPDATE_KEY,
  ON_UPDATED_KEY: ON_UPDATED_KEY,
  ON_BEFORE_UNMOUNT_KEY: ON_BEFORE_UNMOUNT_KEY,
  ON_UNMOUNTED_KEY: ON_UNMOUNTED_KEY,
  PROPS_KEY: PROPS_KEY,
  STATE_KEY: STATE_KEY,
  SLOTS_KEY: SLOTS_KEY,
  ROOT_KEY: ROOT_KEY,
  IS_PURE_SYMBOL: IS_PURE_SYMBOL,
  PARENT_KEY_SYMBOL: PARENT_KEY_SYMBOL,
  ATTRIBUTES_KEY_SYMBOL: ATTRIBUTES_KEY_SYMBOL,
  TEMPLATE_KEY_SYMBOL: TEMPLATE_KEY_SYMBOL
});

function extendParentScope(attributes, scope, parentScope) {
  if (!attributes || !attributes.length) return parentScope;
  var expressions = attributes.map(function (attr) {
    return Object.assign(Object.assign({}, attr), {}, {
      value: attr.evaluate(scope)
    });
  });
  return Object.assign(Object.create(parentScope || null), evaluateAttributeExpressions(expressions));
} // this function is only meant to fix an edge case
// https://github.com/riot/riot/issues/2842


var getRealParent = function getRealParent(scope, parentScope) {
  return parentScope ? parentScope === scope ? scope[PARENT_KEY_SYMBOL] : parentScope : undefined;
};

var SlotBinding = Object.seal({
  // dynamic binding properties
  // node: null,
  // name: null,
  attributes: [],
  // template: null,
  getTemplateScope: function getTemplateScope(scope, parentScope) {
    return extendParentScope(this.attributes, scope, parentScope);
  },
  // API methods
  mount: function mount(scope, parentScope) {
    var _this3 = this;

    var templateData = scope.slots ? scope.slots.find(function (_ref) {
      var id = _ref.id;
      return id === _this3.name;
    }) : false;
    var parentNode = this.node.parentNode;
    var realParent = getRealParent(scope, parentScope);
    this.template = templateData && create$6(templateData.html, templateData.bindings).createDOM(parentNode);

    if (this.template) {
      this.template.mount(this.node, this.getTemplateScope(scope, realParent), realParent);
      this.template.children = moveSlotInnerContent(this.node);
    }

    removeNode(this.node);
    return this;
  },
  update: function update(scope, parentScope) {
    if (this.template) {
      var realParent = getRealParent(scope, parentScope);
      this.template.update(this.getTemplateScope(scope, realParent), realParent);
    }

    return this;
  },
  unmount: function unmount(scope, parentScope, mustRemoveRoot) {
    if (this.template) {
      this.template.unmount(this.getTemplateScope(scope, parentScope), null, mustRemoveRoot);
    }

    return this;
  }
});
/**
 * Move the inner content of the slots outside of them
 * @param   {HTMLNode} slot - slot node
 * @param   {HTMLElement} children - array to fill with the child nodes detected
 * @returns {HTMLElement[]} list of the node moved
 */

function moveSlotInnerContent(slot, children) {
  if (children === void 0) {
    children = [];
  }

  var child = slot.firstChild;

  if (child) {
    slot.parentNode.insertBefore(child, slot);
    return [child].concat(_toConsumableArray(moveSlotInnerContent(slot)));
  }

  return children;
}
/**
 * Create a single slot binding
 * @param   {HTMLElement} node - slot node
 * @param   {string} options.name - slot id
 * @returns {Object} Slot binding object
 */


function createSlot(node, _ref2) {
  var name = _ref2.name,
      attributes = _ref2.attributes;
  return Object.assign(Object.assign({}, SlotBinding), {}, {
    attributes: attributes,
    node: node,
    name: name
  });
}
/**
 * Create a new tag object if it was registered before, otherwise fallback to the simple
 * template chunk
 * @param   {Function} component - component factory function
 * @param   {Array<Object>} slots - array containing the slots markup
 * @param   {Array} attributes - dynamic attributes that will be received by the tag element
 * @returns {TagImplementation|TemplateChunk} a tag implementation or a template chunk as fallback
 */


function getTag(component, slots, attributes) {
  if (slots === void 0) {
    slots = [];
  }

  if (attributes === void 0) {
    attributes = [];
  } // if this tag was registered before we will return its implementation


  if (component) {
    return component({
      slots: slots,
      attributes: attributes
    });
  } // otherwise we return a template chunk


  return create$6(slotsToMarkup(slots), [].concat(_toConsumableArray(slotBindings(slots)), [{
    // the attributes should be registered as binding
    // if we fallback to a normal template chunk
    expressions: attributes.map(function (attr) {
      return Object.assign({
        type: ATTRIBUTE
      }, attr);
    })
  }]));
}
/**
 * Merge all the slots bindings into a single array
 * @param   {Array<Object>} slots - slots collection
 * @returns {Array<Bindings>} flatten bindings array
 */


function slotBindings(slots) {
  return slots.reduce(function (acc, _ref) {
    var bindings = _ref.bindings;
    return acc.concat(bindings);
  }, []);
}
/**
 * Merge all the slots together in a single markup string
 * @param   {Array<Object>} slots - slots collection
 * @returns {string} markup of all the slots in a single string
 */


function slotsToMarkup(slots) {
  return slots.reduce(function (acc, slot) {
    return acc + slot.html;
  }, '');
}

var TagBinding = Object.seal({
  // dynamic binding properties
  // node: null,
  // evaluate: null,
  // name: null,
  // slots: null,
  // tag: null,
  // attributes: null,
  // getComponent: null,
  mount: function mount(scope) {
    return this.update(scope);
  },
  update: function update(scope, parentScope) {
    var name = this.evaluate(scope); // simple update

    if (name === this.name) {
      this.tag.update(scope);
    } else {
      // unmount the old tag if it exists
      this.unmount(scope, parentScope, true); // mount the new tag

      this.name = name;
      this.tag = getTag(this.getComponent(name), this.slots, this.attributes);
      this.tag.mount(this.node, scope);
    }

    return this;
  },
  unmount: function unmount(scope, parentScope, keepRootTag) {
    if (this.tag) {
      // keep the root tag
      this.tag.unmount(keepRootTag);
    }

    return this;
  }
});

function create$4(node, _ref2) {
  var evaluate = _ref2.evaluate,
      getComponent = _ref2.getComponent,
      slots = _ref2.slots,
      attributes = _ref2.attributes;
  return Object.assign(Object.assign({}, TagBinding), {}, {
    node: node,
    evaluate: evaluate,
    slots: slots,
    attributes: attributes,
    getComponent: getComponent
  });
}

var bindings = (_bindings = {}, _defineProperty(_bindings, IF, create$1), _defineProperty(_bindings, SIMPLE, create$3), _defineProperty(_bindings, EACH, create), _defineProperty(_bindings, TAG, create$4), _defineProperty(_bindings, SLOT, createSlot), _bindings);
/**
 * Text expressions in a template tag will get childNodeIndex value normalized
 * depending on the position of the <template> tag offset
 * @param   {Expression[]} expressions - riot expressions array
 * @param   {number} textExpressionsOffset - offset of the <template> tag
 * @returns {Expression[]} expressions containing the text expressions normalized
 */

function fixTextExpressionsOffset(expressions, textExpressionsOffset) {
  return expressions.map(function (e) {
    return e.type === TEXT ? Object.assign(Object.assign({}, e), {}, {
      childNodeIndex: e.childNodeIndex + textExpressionsOffset
    }) : e;
  });
}
/**
 * Bind a new expression object to a DOM node
 * @param   {HTMLElement} root - DOM node where to bind the expression
 * @param   {Object} binding - binding data
 * @param   {number|null} templateTagOffset - if it's defined we need to fix the text expressions childNodeIndex offset
 * @returns {Binding} Binding object
 */


function create$5(root, binding, templateTagOffset) {
  var selector = binding.selector,
      type = binding.type,
      redundantAttribute = binding.redundantAttribute,
      expressions = binding.expressions; // find the node to apply the bindings

  var node = selector ? root.querySelector(selector) : root; // remove eventually additional attributes created only to select this node

  if (redundantAttribute) node.removeAttribute(redundantAttribute);
  var bindingExpressions = expressions || []; // init the binding

  return (bindings[type] || bindings[SIMPLE])(node, Object.assign(Object.assign({}, binding), {}, {
    expressions: templateTagOffset && !selector ? fixTextExpressionsOffset(bindingExpressions, templateTagOffset) : bindingExpressions
  }));
}

function createHTMLTree(html, root) {
  var template = isTemplate(root) ? root : document.createElement('template');
  template.innerHTML = html;
  return template.content;
} // for svg nodes we need a bit more work


function createSVGTree(html, container) {
  // create the SVGNode
  var svgNode = container.ownerDocument.importNode(new window.DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\">".concat(html, "</svg>"), 'application/xml').documentElement, true);
  return svgNode;
}
/**
 * Create the DOM that will be injected
 * @param {Object} root - DOM node to find out the context where the fragment will be created
 * @param   {string} html - DOM to create as string
 * @returns {HTMLDocumentFragment|HTMLElement} a new html fragment
 */


function createDOMTree(root, html) {
  if (isSvg(root)) return createSVGTree(html, root);
  return createHTMLTree(html, root);
}
/**
 * Inject the DOM tree into a target node
 * @param   {HTMLElement} el - target element
 * @param   {HTMLFragment|SVGElement} dom - dom tree to inject
 * @returns {undefined}
 */


function injectDOM(el, dom) {
  switch (true) {
    case isSvg(el):
      moveChildren(dom, el);
      break;

    case isTemplate(el):
      el.parentNode.replaceChild(dom, el);
      break;

    default:
      el.appendChild(dom);
  }
}
/**
 * Create the Template DOM skeleton
 * @param   {HTMLElement} el - root node where the DOM will be injected
 * @param   {string} html - markup that will be injected into the root node
 * @returns {HTMLFragment} fragment that will be injected into the root node
 */


function createTemplateDOM(el, html) {
  return html && (typeof html === 'string' ? createDOMTree(el, html) : html);
}
/**
 * Template Chunk model
 * @type {Object}
 */


var TemplateChunk = Object.freeze({
  // Static props
  // bindings: null,
  // bindingsData: null,
  // html: null,
  // isTemplateTag: false,
  // fragment: null,
  // children: null,
  // dom: null,
  // el: null,

  /**
   * Create the template DOM structure that will be cloned on each mount
   * @param   {HTMLElement} el - the root node
   * @returns {TemplateChunk} self
   */
  createDOM: function createDOM(el) {
    // make sure that the DOM gets created before cloning the template
    this.dom = this.dom || createTemplateDOM(el, this.html);
    return this;
  },
  // API methods

  /**
   * Attach the template to a DOM node
   * @param   {HTMLElement} el - target DOM node
   * @param   {*} scope - template data
   * @param   {*} parentScope - scope of the parent template tag
   * @param   {Object} meta - meta properties needed to handle the <template> tags in loops
   * @returns {TemplateChunk} self
   */
  mount: function mount(el, scope, parentScope, meta) {
    var _this4 = this;

    if (meta === void 0) {
      meta = {};
    }

    if (!el) throw new Error('Please provide DOM node to mount properly your template');
    if (this.el) this.unmount(scope); // <template> tags require a bit more work
    // the template fragment might be already created via meta outside of this call

    var _meta = meta,
        fragment = _meta.fragment,
        children = _meta.children,
        avoidDOMInjection = _meta.avoidDOMInjection; // <template> bindings of course can not have a root element
    // so we check the parent node to set the query selector bindings

    var _ref9 = children ? children[0] : el,
        parentNode = _ref9.parentNode;

    var isTemplateTag = isTemplate(el);
    var templateTagOffset = isTemplateTag ? Math.max(Array.from(parentNode.childNodes).indexOf(el), 0) : null;
    this.isTemplateTag = isTemplateTag; // create the DOM if it wasn't created before

    this.createDOM(el);

    if (this.dom) {
      // create the new template dom fragment if it want already passed in via meta
      this.fragment = fragment || this.dom.cloneNode(true);
    } // store root node
    // notice that for template tags the root note will be the parent tag


    this.el = this.isTemplateTag ? parentNode : el; // create the children array only for the <template> fragments

    this.children = this.isTemplateTag ? children || Array.from(this.fragment.childNodes) : null; // inject the DOM into the el only if a fragment is available

    if (!avoidDOMInjection && this.fragment) injectDOM(el, this.fragment); // create the bindings

    this.bindings = this.bindingsData.map(function (binding) {
      return create$5(_this4.el, binding, templateTagOffset);
    });
    this.bindings.forEach(function (b) {
      return b.mount(scope, parentScope);
    });
    return this;
  },

  /**
   * Update the template with fresh data
   * @param   {*} scope - template data
   * @param   {*} parentScope - scope of the parent template tag
   * @returns {TemplateChunk} self
   */
  update: function update(scope, parentScope) {
    this.bindings.forEach(function (b) {
      return b.update(scope, parentScope);
    });
    return this;
  },

  /**
   * Remove the template from the node where it was initially mounted
   * @param   {*} scope - template data
   * @param   {*} parentScope - scope of the parent template tag
   * @param   {boolean|null} mustRemoveRoot - if true remove the root element,
   * if false or undefined clean the root tag content, if null don't touch the DOM
   * @returns {TemplateChunk} self
   */
  unmount: function unmount(scope, parentScope, mustRemoveRoot) {
    if (this.el) {
      this.bindings.forEach(function (b) {
        return b.unmount(scope, parentScope, mustRemoveRoot);
      });

      switch (true) {
        // <template> tags should be treated a bit differently
        // we need to clear their children only if it's explicitly required by the caller
        // via mustRemoveRoot !== null
        case this.children && mustRemoveRoot !== null:
          clearChildren(this.children);
          break;
        // remove the root node only if the mustRemoveRoot === true

        case mustRemoveRoot === true:
          removeNode(this.el);
          break;
        // otherwise we clean the node children

        case mustRemoveRoot !== null:
          cleanNode(this.el);
          break;
      }

      this.el = null;
    }

    return this;
  },

  /**
   * Clone the template chunk
   * @returns {TemplateChunk} a clone of this object resetting the this.el property
   */
  clone: function clone() {
    return Object.assign(Object.assign({}, this), {}, {
      el: null
    });
  }
});
/**
 * Create a template chunk wiring also the bindings
 * @param   {string|HTMLElement} html - template string
 * @param   {Array} bindings - bindings collection
 * @returns {TemplateChunk} a new TemplateChunk copy
 */

function create$6(html, bindings) {
  if (bindings === void 0) {
    bindings = [];
  }

  return Object.assign(Object.assign({}, TemplateChunk), {}, {
    html: html,
    bindingsData: bindings
  });
}
/**
 * Method used to bind expressions to a DOM node
 * @param   {string|HTMLElement} html - your static template html structure
 * @param   {Array} bindings - list of the expressions to bind to update the markup
 * @returns {TemplateChunk} a new TemplateChunk object having the `update`,`mount`, `unmount` and `clone` methods
 *
 * @example
 *
 * riotDOMBindings
 *  .template(
 *   `<div expr0><!----></div><div><p expr1><!----><section expr2></section></p>`,
 *   [
 *     {
 *       selector: '[expr0]',
 *       redundantAttribute: 'expr0',
 *       expressions: [
 *         {
 *           type: expressionTypes.TEXT,
 *           childNodeIndex: 0,
 *           evaluate(scope) {
 *             return scope.time;
 *           },
 *         },
 *       ],
 *     },
 *     {
 *       selector: '[expr1]',
 *       redundantAttribute: 'expr1',
 *       expressions: [
 *         {
 *           type: expressionTypes.TEXT,
 *           childNodeIndex: 0,
 *           evaluate(scope) {
 *             return scope.name;
 *           },
 *         },
 *         {
 *           type: 'attribute',
 *           name: 'style',
 *           evaluate(scope) {
 *             return scope.style;
 *           },
 *         },
 *       ],
 *     },
 *     {
 *       selector: '[expr2]',
 *       redundantAttribute: 'expr2',
 *       type: bindingTypes.IF,
 *       evaluate(scope) {
 *         return scope.isVisible;
 *       },
 *       template: riotDOMBindings.template('hello there'),
 *     },
 *   ]
 * )
 */


var DOMBindings = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: create$6,
  createBinding: create$5,
  createExpression: create$2,
  bindingTypes: bindingTypes,
  expressionTypes: expressionTypes
});

function noop() {
  return this;
}
/**
 * Autobind the methods of a source object to itself
 * @param   {Object} source - probably a riot tag instance
 * @param   {Array<string>} methods - list of the methods to autobind
 * @returns {Object} the original object received
 */


function autobindMethods(source, methods) {
  methods.forEach(function (method) {
    source[method] = source[method].bind(source);
  });
  return source;
}
/**
 * Call the first argument received only if it's a function otherwise return it as it is
 * @param   {*} source - anything
 * @returns {*} anything
 */


function callOrAssign(source) {
  return isFunction(source) ? source.prototype && source.prototype.constructor ? new source() : source() : source;
}
/**
 * Helper function to set an immutable property
 * @param   {Object} source - object where the new property will be set
 * @param   {string} key - object key where the new property will be stored
 * @param   {*} value - value of the new property
 * @param   {Object} options - set the propery overriding the default options
 * @returns {Object} - the original object modified
 */


function defineProperty(source, key, value, options) {
  if (options === void 0) {
    options = {};
  }
  /* eslint-disable fp/no-mutating-methods */


  Object.defineProperty(source, key, Object.assign({
    value: value,
    enumerable: false,
    writable: false,
    configurable: true
  }, options));
  /* eslint-enable fp/no-mutating-methods */

  return source;
}
/**
 * Define multiple properties on a target object
 * @param   {Object} source - object where the new properties will be set
 * @param   {Object} properties - object containing as key pair the key + value properties
 * @param   {Object} options - set the propery overriding the default options
 * @returns {Object} the original object modified
 */


function defineProperties(source, properties, options) {
  Object.entries(properties).forEach(function (_ref) {
    var _ref10 = _slicedToArray(_ref, 2),
        key = _ref10[0],
        value = _ref10[1];

    defineProperty(source, key, value, options);
  });
  return source;
}
/**
 * Define default properties if they don't exist on the source object
 * @param   {Object} source - object that will receive the default properties
 * @param   {Object} defaults - object containing additional optional keys
 * @returns {Object} the original object received enhanced
 */


function defineDefaults(source, defaults) {
  Object.entries(defaults).forEach(function (_ref2) {
    var _ref11 = _slicedToArray(_ref2, 2),
        key = _ref11[0],
        value = _ref11[1];

    if (!source[key]) source[key] = value;
  });
  return source;
}
/**
 * Converts any DOM node/s to a loopable array
 * @param   { HTMLElement|NodeList } els - single html element or a node list
 * @returns { Array } always a loopable object
 */


function domToArray(els) {
  // can this object be already looped?
  if (!Array.isArray(els)) {
    // is it a node list?
    if (/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(els)) && typeof els.length === 'number') return Array.from(els);else // if it's a single node
      // it will be returned as "array" with one single entry
      return [els];
  } // this object could be looped out of the box


  return els;
}
/**
 * Simple helper to find DOM nodes returning them as array like loopable object
 * @param   { string|DOMNodeList } selector - either the query or the DOM nodes to arraify
 * @param   { HTMLElement }        ctx      - context defining where the query will search for the DOM nodes
 * @returns { Array } DOM nodes found as array
 */


function _$(selector, ctx) {
  return domToArray(typeof selector === 'string' ? (ctx || document).querySelectorAll(selector) : selector);
}
/**
 * Normalize the return values, in case of a single value we avoid to return an array
 * @param   { Array } values - list of values we want to return
 * @returns { Array|string|boolean } either the whole list of values or the single one found
 * @private
 */


var normalize = function normalize(values) {
  return values.length === 1 ? values[0] : values;
};
/**
 * Parse all the nodes received to get/remove/check their attributes
 * @param   { HTMLElement|NodeList|Array } els    - DOM node/s to parse
 * @param   { string|Array }               name   - name or list of attributes
 * @param   { string }                     method - method that will be used to parse the attributes
 * @returns { Array|string } result of the parsing in a list or a single value
 * @private
 */


function parseNodes(els, name, method) {
  var names = typeof name === 'string' ? [name] : name;
  return normalize(domToArray(els).map(function (el) {
    return normalize(names.map(function (n) {
      return el[method](n);
    }));
  }));
}
/**
 * Set any attribute on a single or a list of DOM nodes
 * @param   { HTMLElement|NodeList|Array } els   - DOM node/s to parse
 * @param   { string|Object }              name  - either the name of the attribute to set
 *                                                 or a list of properties as object key - value
 * @param   { string }                     value - the new value of the attribute (optional)
 * @returns { HTMLElement|NodeList|Array } the original array of elements passed to this function
 *
 * @example
 *
 * import { set } from 'bianco.attr'
 *
 * const img = document.createElement('img')
 *
 * set(img, 'width', 100)
 *
 * // or also
 * set(img, {
 *   width: 300,
 *   height: 300
 * })
 *
 */


function set(els, name, value) {
  var attrs = _typeof(name) === 'object' ? name : _defineProperty({}, name, value);
  var props = Object.keys(attrs);
  domToArray(els).forEach(function (el) {
    props.forEach(function (prop) {
      return el.setAttribute(prop, attrs[prop]);
    });
  });
  return els;
}
/**
 * Get any attribute from a single or a list of DOM nodes
 * @param   { HTMLElement|NodeList|Array } els   - DOM node/s to parse
 * @param   { string|Array }               name  - name or list of attributes to get
 * @returns { Array|string } list of the attributes found
 *
 * @example
 *
 * import { get } from 'bianco.attr'
 *
 * const img = document.createElement('img')
 *
 * get(img, 'width') // => '200'
 *
 * // or also
 * get(img, ['width', 'height']) // => ['200', '300']
 *
 * // or also
 * get([img1, img2], ['width', 'height']) // => [['200', '300'], ['500', '200']]
 */


function get(els, name) {
  return parseNodes(els, name, 'getAttribute');
}

var CSS_BY_NAME = new Map();
var STYLE_NODE_SELECTOR = 'style[riot]'; // memoized curried function

var getStyleNode = function (style) {
  return function () {
    // lazy evaluation:
    // if this function was already called before
    // we return its cached result
    if (style) return style; // create a new style element or use an existing one
    // and cache it internally

    style = _$(STYLE_NODE_SELECTOR)[0] || document.createElement('style');
    set(style, 'type', 'text/css');
    /* istanbul ignore next */

    if (!style.parentNode) document.head.appendChild(style);
    return style;
  };
}();
/**
 * Object that will be used to inject and manage the css of every tag instance
 */


var cssManager = {
  CSS_BY_NAME: CSS_BY_NAME,

  /**
   * Save a tag style to be later injected into DOM
   * @param { string } name - if it's passed we will map the css to a tagname
   * @param { string } css - css string
   * @returns {Object} self
   */
  add: function add(name, css) {
    if (!CSS_BY_NAME.has(name)) {
      CSS_BY_NAME.set(name, css);
      this.inject();
    }

    return this;
  },

  /**
   * Inject all previously saved tag styles into DOM
   * innerHTML seems slow: http://jsperf.com/riot-insert-style
   * @returns {Object} self
   */
  inject: function inject() {
    getStyleNode().innerHTML = _toConsumableArray(CSS_BY_NAME.values()).join('\n');
    return this;
  },

  /**
   * Remove a tag style from the DOM
   * @param {string} name a registered tagname
   * @returns {Object} self
   */
  remove: function remove(name) {
    if (CSS_BY_NAME.has(name)) {
      CSS_BY_NAME.delete(name);
      this.inject();
    }

    return this;
  }
};
/**
 * Function to curry any javascript method
 * @param   {Function}  fn - the target function we want to curry
 * @param   {...[args]} acc - initial arguments
 * @returns {Function|*} it will return a function until the target function
 *                       will receive all of its arguments
 */

function curry(fn) {
  for (var _len = arguments.length, acc = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    acc[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args = [].concat(acc, _toConsumableArray(args));
    return args.length < fn.length ? curry.apply(void 0, [fn].concat(_toConsumableArray(args))) : fn.apply(void 0, _toConsumableArray(args));
  };
}
/**
 * Get the tag name of any DOM node
 * @param   {HTMLElement} element - DOM node we want to inspect
 * @returns {string} name to identify this dom node in riot
 */


function getName(element) {
  return get(element, IS_DIRECTIVE) || element.tagName.toLowerCase();
}

var COMPONENT_CORE_HELPERS = Object.freeze({
  // component helpers
  $: function $(selector) {
    return _$(selector, this.root)[0];
  },
  $$: function $$(selector) {
    return _$(selector, this.root);
  }
});
var PURE_COMPONENT_API = Object.freeze((_Object$freeze = {}, _defineProperty(_Object$freeze, MOUNT_METHOD_KEY, noop), _defineProperty(_Object$freeze, UPDATE_METHOD_KEY, noop), _defineProperty(_Object$freeze, UNMOUNT_METHOD_KEY, noop), _Object$freeze));
var COMPONENT_LIFECYCLE_METHODS = Object.freeze((_Object$freeze2 = {}, _defineProperty(_Object$freeze2, SHOULD_UPDATE_KEY, noop), _defineProperty(_Object$freeze2, ON_BEFORE_MOUNT_KEY, noop), _defineProperty(_Object$freeze2, ON_MOUNTED_KEY, noop), _defineProperty(_Object$freeze2, ON_BEFORE_UPDATE_KEY, noop), _defineProperty(_Object$freeze2, ON_UPDATED_KEY, noop), _defineProperty(_Object$freeze2, ON_BEFORE_UNMOUNT_KEY, noop), _defineProperty(_Object$freeze2, ON_UNMOUNTED_KEY, noop), _Object$freeze2));
var MOCKED_TEMPLATE_INTERFACE = Object.assign(Object.assign({}, PURE_COMPONENT_API), {}, {
  clone: noop,
  createDOM: noop
});
/**
 * Evaluate the component properties either from its real attributes or from its initial user properties
 * @param   {HTMLElement} element - component root
 * @param   {Object}  initialProps - initial props
 * @returns {Object} component props key value pairs
 */

function evaluateInitialProps(element, initialProps) {
  if (initialProps === void 0) {
    initialProps = {};
  }

  return Object.assign(Object.assign({}, DOMattributesToObject(element)), callOrAssign(initialProps));
}
/**
 * Bind a DOM node to its component object
 * @param   {HTMLElement} node - html node mounted
 * @param   {Object} component - Riot.js component object
 * @returns {Object} the component object received as second argument
 */


var bindDOMNodeToComponentObject = function bindDOMNodeToComponentObject(node, component) {
  return node[DOM_COMPONENT_INSTANCE_PROPERTY] = component;
};
/**
 * Wrap the Riot.js core API methods using a mapping function
 * @param   {Function} mapFunction - lifting function
 * @returns {Object} an object having the { mount, update, unmount } functions
 */


function createCoreAPIMethods(mapFunction) {
  return [MOUNT_METHOD_KEY, UPDATE_METHOD_KEY, UNMOUNT_METHOD_KEY].reduce(function (acc, method) {
    acc[method] = mapFunction(method);
    return acc;
  }, {});
}
/**
 * Factory function to create the component templates only once
 * @param   {Function} template - component template creation function
 * @param   {Object} components - object containing the nested components
 * @returns {TemplateChunk} template chunk object
 */


function componentTemplateFactory(template, components) {
  return template(create$6, expressionTypes, bindingTypes, function (name) {
    return components[name] || COMPONENTS_IMPLEMENTATION_MAP.get(name);
  });
}
/**
 * Create a pure component
 * @param   {Function} pureFactoryFunction - pure component factory function
 * @param   {Array} options.slots - component slots
 * @param   {Array} options.attributes - component attributes
 * @param   {Array} options.template - template factory function
 * @param   {Array} options.template - template factory function
 * @param   {any} options.props - initial component properties
 * @returns {Object} pure component object
 */


function createPureComponent(pureFactoryFunction, _ref) {
  var slots = _ref.slots,
      attributes = _ref.attributes,
      props = _ref.props,
      css = _ref.css,
      template = _ref.template;
  if (template) panic('Pure components can not have html');
  if (css) panic('Pure components do not have css');
  var component = defineDefaults(pureFactoryFunction({
    slots: slots,
    attributes: attributes,
    props: props
  }), PURE_COMPONENT_API);
  return createCoreAPIMethods(function (method) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      } // intercept the mount calls to bind the DOM node to the pure object created
      // see also https://github.com/riot/riot/issues/2806


      if (method === MOUNT_METHOD_KEY) {
        var el = args[0];
        bindDOMNodeToComponentObject(el, component);
      }

      component[method].apply(component, args);
      return component;
    };
  });
}
/**
 * Create the component interface needed for the @riotjs/dom-bindings tag bindings
 * @param   {string} options.css - component css
 * @param   {Function} options.template - functon that will return the dom-bindings template function
 * @param   {Object} options.exports - component interface
 * @param   {string} options.name - component name
 * @returns {Object} component like interface
 */


function createComponent(_ref2) {
  var css = _ref2.css,
      template = _ref2.template,
      exports = _ref2.exports,
      name = _ref2.name;
  var templateFn = template ? componentTemplateFactory(template, exports ? createSubcomponents(exports.components) : {}) : MOCKED_TEMPLATE_INTERFACE;
  return function (_ref3) {
    var slots = _ref3.slots,
        attributes = _ref3.attributes,
        props = _ref3.props; // pure components rendering will be managed by the end user

    if (exports && exports[IS_PURE_SYMBOL]) return createPureComponent(exports, {
      slots: slots,
      attributes: attributes,
      props: props,
      css: css,
      template: template
    });
    var componentAPI = callOrAssign(exports) || {};
    var component = defineComponent({
      css: css,
      template: templateFn,
      componentAPI: componentAPI,
      name: name
    })({
      slots: slots,
      attributes: attributes,
      props: props
    }); // notice that for the components create via tag binding
    // we need to invert the mount (state/parentScope) arguments
    // the template bindings will only forward the parentScope updates
    // and never deal with the component state

    return {
      mount: function mount(element, parentScope, state) {
        return component.mount(element, state, parentScope);
      },
      update: function update(parentScope, state) {
        return component.update(state, parentScope);
      },
      unmount: function unmount(preserveRoot) {
        return component.unmount(preserveRoot);
      }
    };
  };
}
/**
 * Component definition function
 * @param   {Object} implementation - the componen implementation will be generated via compiler
 * @param   {Object} component - the component initial properties
 * @returns {Object} a new component implementation object
 */


function defineComponent(_ref4) {
  var _Object$assign3;

  var css = _ref4.css,
      template = _ref4.template,
      componentAPI = _ref4.componentAPI,
      name = _ref4.name; // add the component css into the DOM

  if (css && name) cssManager.add(name, css);
  return curry(enhanceComponentAPI)(defineProperties( // set the component defaults without overriding the original component API
  defineDefaults(componentAPI, Object.assign(Object.assign({}, COMPONENT_LIFECYCLE_METHODS), {}, _defineProperty({}, STATE_KEY, {}))), Object.assign(Object.assign((_Object$assign3 = {}, _defineProperty(_Object$assign3, SLOTS_KEY, null), _defineProperty(_Object$assign3, ROOT_KEY, null), _Object$assign3), COMPONENT_CORE_HELPERS), {}, {
    name: name,
    css: css,
    template: template
  })));
}
/**
 * Create the bindings to update the component attributes
 * @param   {HTMLElement} node - node where we will bind the expressions
 * @param   {Array} attributes - list of attribute bindings
 * @returns {TemplateChunk} - template bindings object
 */


function createAttributeBindings(node, attributes) {
  if (attributes === void 0) {
    attributes = [];
  }

  var expressions = attributes.map(function (a) {
    return create$2(node, a);
  });
  var binding = {};
  return Object.assign(binding, Object.assign({
    expressions: expressions
  }, createCoreAPIMethods(function (method) {
    return function (scope) {
      expressions.forEach(function (e) {
        return e[method](scope);
      });
      return binding;
    };
  })));
}
/**
 * Create the subcomponents that can be included inside a tag in runtime
 * @param   {Object} components - components imported in runtime
 * @returns {Object} all the components transformed into Riot.Component factory functions
 */


function createSubcomponents(components) {
  if (components === void 0) {
    components = {};
  }

  return Object.entries(callOrAssign(components)).reduce(function (acc, _ref5) {
    var _ref13 = _slicedToArray(_ref5, 2),
        key = _ref13[0],
        value = _ref13[1];

    acc[camelToDashCase(key)] = createComponent(value);
    return acc;
  }, {});
}
/**
 * Run the component instance through all the plugins set by the user
 * @param   {Object} component - component instance
 * @returns {Object} the component enhanced by the plugins
 */


function runPlugins(component) {
  return _toConsumableArray(PLUGINS_SET).reduce(function (c, fn) {
    return fn(c) || c;
  }, component);
}
/**
 * Compute the component current state merging it with its previous state
 * @param   {Object} oldState - previous state object
 * @param   {Object} newState - new state givent to the `update` call
 * @returns {Object} new object state
 */


function computeState(oldState, newState) {
  return Object.assign(Object.assign({}, oldState), callOrAssign(newState));
}
/**
 * Add eventually the "is" attribute to link this DOM node to its css
 * @param {HTMLElement} element - target root node
 * @param {string} name - name of the component mounted
 * @returns {undefined} it's a void function
 */


function addCssHook(element, name) {
  if (getName(element) !== name) {
    set(element, IS_DIRECTIVE, name);
  }
}
/**
 * Component creation factory function that will enhance the user provided API
 * @param   {Object} component - a component implementation previously defined
 * @param   {Array} options.slots - component slots generated via riot compiler
 * @param   {Array} options.attributes - attribute expressions generated via riot compiler
 * @returns {Riot.Component} a riot component instance
 */


function enhanceComponentAPI(component, _ref6) {
  var slots = _ref6.slots,
      attributes = _ref6.attributes,
      props = _ref6.props;
  return autobindMethods(runPlugins(defineProperties(Object.create(component), {
    mount: function mount(element, state, parentScope) {
      if (state === void 0) {
        state = {};
      }

      this[ATTRIBUTES_KEY_SYMBOL] = createAttributeBindings(element, attributes).mount(parentScope);
      defineProperty(this, PROPS_KEY, Object.freeze(Object.assign(Object.assign({}, evaluateInitialProps(element, props)), evaluateAttributeExpressions(this[ATTRIBUTES_KEY_SYMBOL].expressions))));
      this[STATE_KEY] = computeState(this[STATE_KEY], state);
      this[TEMPLATE_KEY_SYMBOL] = this.template.createDOM(element).clone(); // link this object to the DOM node

      bindDOMNodeToComponentObject(element, this); // add eventually the 'is' attribute

      component.name && addCssHook(element, component.name); // define the root element

      defineProperty(this, ROOT_KEY, element); // define the slots array

      defineProperty(this, SLOTS_KEY, slots); // before mount lifecycle event

      this[ON_BEFORE_MOUNT_KEY](this[PROPS_KEY], this[STATE_KEY]);
      this[PARENT_KEY_SYMBOL] = parentScope; // mount the template

      this[TEMPLATE_KEY_SYMBOL].mount(element, this, parentScope);
      this[ON_MOUNTED_KEY](this[PROPS_KEY], this[STATE_KEY]);
      return this;
    },
    update: function update(state, parentScope) {
      if (state === void 0) {
        state = {};
      }

      if (parentScope) {
        this[ATTRIBUTES_KEY_SYMBOL].update(parentScope);
      }

      var newProps = evaluateAttributeExpressions(this[ATTRIBUTES_KEY_SYMBOL].expressions);
      if (this[SHOULD_UPDATE_KEY](newProps, this[PROPS_KEY]) === false) return;
      defineProperty(this, PROPS_KEY, Object.freeze(Object.assign(Object.assign({}, this[PROPS_KEY]), newProps)));
      this[STATE_KEY] = computeState(this[STATE_KEY], state);
      this[ON_BEFORE_UPDATE_KEY](this[PROPS_KEY], this[STATE_KEY]);
      this[TEMPLATE_KEY_SYMBOL].update(this, this[PARENT_KEY_SYMBOL]);
      this[ON_UPDATED_KEY](this[PROPS_KEY], this[STATE_KEY]);
      return this;
    },
    unmount: function unmount(preserveRoot) {
      this[ON_BEFORE_UNMOUNT_KEY](this[PROPS_KEY], this[STATE_KEY]);
      this[ATTRIBUTES_KEY_SYMBOL].unmount(); // if the preserveRoot is null the template html will be left untouched
      // in that case the DOM cleanup will happen differently from a parent node

      this[TEMPLATE_KEY_SYMBOL].unmount(this, this[PARENT_KEY_SYMBOL], preserveRoot === null ? null : !preserveRoot);
      this[ON_UNMOUNTED_KEY](this[PROPS_KEY], this[STATE_KEY]);
      return this;
    }
  })), Object.keys(component).filter(function (prop) {
    return isFunction(component[prop]);
  }));
}
/**
 * Component initialization function starting from a DOM node
 * @param   {HTMLElement} element - element to upgrade
 * @param   {Object} initialProps - initial component properties
 * @param   {string} componentName - component id
 * @returns {Object} a new component instance bound to a DOM node
 */


function mountComponent(element, initialProps, componentName) {
  var name = componentName || getName(element);
  if (!COMPONENTS_IMPLEMENTATION_MAP.has(name)) panic("The component named \"".concat(name, "\" was never registered"));
  var component = COMPONENTS_IMPLEMENTATION_MAP.get(name)({
    props: initialProps
  });
  return component.mount(element);
}
/**
 * Similar to compose but performs from left-to-right function composition.<br/>
 * {@link https://30secondsofcode.org/function#composeright see also}
 * @param   {...[function]} fns) - list of unary function
 * @returns {*} result of the computation
 */

/**
 * Performs right-to-left function composition.<br/>
 * Use Array.prototype.reduce() to perform right-to-left function composition.<br/>
 * The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.<br/>
 * {@link https://30secondsofcode.org/function#compose original source code}
 * @param   {...[function]} fns) - list of unary function
 * @returns {*} result of the computation
 */


function compose() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return fns.reduce(function (f, g) {
    return function () {
      return f(g.apply(void 0, arguments));
    };
  });
}

var DOM_COMPONENT_INSTANCE_PROPERTY$1 = globals.DOM_COMPONENT_INSTANCE_PROPERTY,
    COMPONENTS_IMPLEMENTATION_MAP$1 = globals.COMPONENTS_IMPLEMENTATION_MAP,
    PLUGINS_SET$1 = globals.PLUGINS_SET;
/**
 * Riot public api
 */

/**
 * Register a custom tag by name
 * @param   {string} name - component name
 * @param   {Object} implementation - tag implementation
 * @returns {Map} map containing all the components implementations
 */

function register(name, _ref) {
  var css = _ref.css,
      template = _ref.template,
      exports = _ref.exports;
  if (COMPONENTS_IMPLEMENTATION_MAP$1.has(name)) panic("The component \"".concat(name, "\" was already registered"));
  COMPONENTS_IMPLEMENTATION_MAP$1.set(name, createComponent({
    name: name,
    css: css,
    template: template,
    exports: exports
  }));
  return COMPONENTS_IMPLEMENTATION_MAP$1;
}
/**
 * Unregister a riot web component
 * @param   {string} name - component name
 * @returns {Map} map containing all the components implementations
 */


function unregister(name) {
  if (!COMPONENTS_IMPLEMENTATION_MAP$1.has(name)) panic("The component \"".concat(name, "\" was never registered"));
  COMPONENTS_IMPLEMENTATION_MAP$1.delete(name);
  cssManager.remove(name);
  return COMPONENTS_IMPLEMENTATION_MAP$1;
}
/**
 * Mounting function that will work only for the components that were globally registered
 * @param   {string|HTMLElement} selector - query for the selection or a DOM element
 * @param   {Object} initialProps - the initial component properties
 * @param   {string} name - optional component name
 * @returns {Array} list of nodes upgraded
 */


function mount(selector, initialProps, name) {
  return _$(selector).map(function (element) {
    return mountComponent(element, initialProps, name);
  });
}
/**
 * Sweet unmounting helper function for the DOM node mounted manually by the user
 * @param   {string|HTMLElement} selector - query for the selection or a DOM element
 * @param   {boolean|null} keepRootElement - if true keep the root element
 * @returns {Array} list of nodes unmounted
 */


function unmount(selector, keepRootElement) {
  return _$(selector).map(function (element) {
    if (element[DOM_COMPONENT_INSTANCE_PROPERTY$1]) {
      element[DOM_COMPONENT_INSTANCE_PROPERTY$1].unmount(keepRootElement);
    }

    return element;
  });
}
/**
 * Define a riot plugin
 * @param   {Function} plugin - function that will receive all the components created
 * @returns {Set} the set containing all the plugins installed
 */


function install(plugin) {
  if (!isFunction(plugin)) panic('Plugins must be of type function');
  if (PLUGINS_SET$1.has(plugin)) panic('This plugin was already installed');
  PLUGINS_SET$1.add(plugin);
  return PLUGINS_SET$1;
}
/**
 * Uninstall a riot plugin
 * @param   {Function} plugin - plugin previously installed
 * @returns {Set} the set containing all the plugins installed
 */


function uninstall(plugin) {
  if (!PLUGINS_SET$1.has(plugin)) panic('This plugin was never installed');
  PLUGINS_SET$1.delete(plugin);
  return PLUGINS_SET$1;
}
/**
 * Helper method to create component without relying on the registered ones
 * @param   {Object} implementation - component implementation
 * @returns {Function} function that will allow you to mount a riot component on a DOM node
 */


function component(implementation) {
  return function (el, props, _temp) {
    var _ref14 = _temp === void 0 ? {} : _temp,
        slots = _ref14.slots,
        attributes = _ref14.attributes,
        parentScope = _ref14.parentScope;

    return compose(function (c) {
      return c.mount(el, parentScope);
    }, function (c) {
      return c({
        props: props,
        slots: slots,
        attributes: attributes
      });
    }, createComponent)(implementation);
  };
}
/**
 * Lift a riot component Interface into a pure riot object
 * @param   {Function} func - RiotPureComponent factory function
 * @returns {Function} the lifted original function received as argument
 */


function pure(func) {
  if (!isFunction(func)) panic('riot.pure accepts only arguments of type "function"');
  func[IS_PURE_SYMBOL] = true;
  return func;
}
/** @type {string} current riot version */


var version = 'v4.12.4'; // expose some internal stuff that might be used from external tools

exports.version = version;
var __ = {
  cssManager: cssManager,
  DOMBindings: DOMBindings,
  createComponent: createComponent,
  defineComponent: defineComponent,
  globals: globals
};
exports.__ = __;
},{}],"node_modules/node-libs-browser/node_modules/punycode/punycode.js":[function(require,module,exports) {
var global = arguments[3];
var define;
/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

},{}],"node_modules/url/util.js":[function(require,module,exports) {
'use strict';

module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};

},{}],"node_modules/querystring-es3/decode.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict'; // If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function (qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1000;

  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length; // maxKeys <= 0 means that we should not limit keys count

  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};
},{}],"node_modules/querystring-es3/encode.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';

var stringifyPrimitive = function (v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';

  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;

      if (isArray(obj[k])) {
        return map(obj[k], function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map(xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }

  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }

  return res;
};
},{}],"node_modules/querystring-es3/index.js":[function(require,module,exports) {
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');
},{"./decode":"node_modules/querystring-es3/decode.js","./encode":"node_modules/querystring-es3/encode.js"}],"node_modules/url/url.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var punycode = require('punycode');
var util = require('./util');

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = require('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

},{"punycode":"node_modules/node-libs-browser/node_modules/punycode/punycode.js","./util":"node_modules/url/util.js","querystring":"node_modules/querystring-es3/index.js"}],"node_modules/@riotjs/route/route.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDomListeners = initDomListeners;
exports.route = createRoute;
exports.setBase = setBase;
exports.toURL = exports.toRegexp = exports.toPath = exports.router = exports.match = exports.getCurrentRoute = exports.filterStrings = exports.createURLStreamPipe = exports.Router = exports.Route = void 0;

var _riot = require("riot");

/**
 * Tokenize input string.
 */
function lexer(str) {
  var tokens = [];
  var i = 0;

  while (i < str.length) {
    var char = str[i];

    if (char === "*" || char === "+" || char === "?") {
      tokens.push({
        type: "MODIFIER",
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (char === "\\") {
      tokens.push({
        type: "ESCAPED_CHAR",
        index: i++,
        value: str[i++]
      });
      continue;
    }

    if (char === "{") {
      tokens.push({
        type: "OPEN",
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (char === "}") {
      tokens.push({
        type: "CLOSE",
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (char === ":") {
      var name = "";
      var j = i + 1;

      while (j < str.length) {
        var code = str.charCodeAt(j);

        if ( // `0-9`
        code >= 48 && code <= 57 || // `A-Z`
        code >= 65 && code <= 90 || // `a-z`
        code >= 97 && code <= 122 || // `_`
        code === 95) {
          name += str[j++];
          continue;
        }

        break;
      }

      if (!name) throw new TypeError("Missing parameter name at " + i);
      tokens.push({
        type: "NAME",
        index: i,
        value: name
      });
      i = j;
      continue;
    }

    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;

      if (str[j] === "?") {
        throw new TypeError("Pattern cannot start with \"?\" at " + j);
      }

      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }

        if (str[j] === ")") {
          count--;

          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;

          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at " + j);
          }
        }

        pattern += str[j++];
      }

      if (count) throw new TypeError("Unbalanced pattern at " + i);
      if (!pattern) throw new TypeError("Missing pattern at " + i);
      tokens.push({
        type: "PATTERN",
        index: i,
        value: pattern
      });
      i = j;
      continue;
    }

    tokens.push({
      type: "CHAR",
      index: i,
      value: str[i++]
    });
  }

  tokens.push({
    type: "END",
    index: i,
    value: ""
  });
  return tokens;
}
/**
 * Parse a string for the raw tokens.
 */


function parse(str, options) {
  if (options === void 0) {
    options = {};
  }

  var tokens = lexer(str);
  var _a = options.prefixes,
      prefixes = _a === void 0 ? "./" : _a;
  var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";

  var tryConsume = function tryConsume(type) {
    if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
  };

  var mustConsume = function mustConsume(type) {
    var value = tryConsume(type);
    if (value !== undefined) return value;
    var _a = tokens[i],
        nextType = _a.type,
        index = _a.index;
    throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
  };

  var consumeText = function consumeText() {
    var result = "";
    var value; // tslint:disable-next-line

    while (value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result += value;
    }

    return result;
  };

  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");

    if (name || pattern) {
      var prefix = char || "";

      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }

      if (path) {
        result.push(path);
        path = "";
      }

      result.push({
        name: name || key++,
        prefix: prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }

    var value = char || tryConsume("ESCAPED_CHAR");

    if (value) {
      path += value;
      continue;
    }

    if (path) {
      result.push(path);
      path = "";
    }

    var open = tryConsume("OPEN");

    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix: prefix,
        suffix: suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }

    mustConsume("END");
  }

  return result;
}
/**
 * Compile a string to a template function for the path.
 */


function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }

  var reFlags = flags(options);
  var _a = options.encode,
      encode = _a === void 0 ? function (x) {
    return x;
  } : _a,
      _b = options.validate,
      validate = _b === void 0 ? true : _b; // Compile all the tokens into regexps.

  var matches = tokens.map(function (token) {
    if (typeof token === "object") {
      return new RegExp("^(?:" + token.pattern + ")$", reFlags);
    }
  });
  return function (data) {
    var path = "";

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === "string") {
        path += token;
        continue;
      }

      var value = data ? data[token.name] : undefined;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";

      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
        }

        if (value.length === 0) {
          if (optional) continue;
          throw new TypeError("Expected \"" + token.name + "\" to not be empty");
        }

        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);

          if (validate && !matches[i].test(segment)) {
            throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
          }

          path += token.prefix + segment + token.suffix;
        }

        continue;
      }

      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);

        if (validate && !matches[i].test(segment)) {
          throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
        }

        path += token.prefix + segment + token.suffix;
        continue;
      }

      if (optional) continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
    }

    return path;
  };
}
/**
 * Escape a regular expression string.
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */


function flags(options) {
  return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */


function regexpToRegexp(path, keys) {
  if (!keys) return path; // Use a negative lookahead to match only capturing groups.

  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: "",
        suffix: "",
        modifier: "",
        pattern: ""
      });
    }
  }

  return path;
}
/**
 * Transform an array into a regexp.
 */


function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function (path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */


function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */


function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }

  var _a = options.strict,
      strict = _a === void 0 ? false : _a,
      _b = options.start,
      start = _b === void 0 ? true : _b,
      _c = options.end,
      end = _c === void 0 ? true : _c,
      _d = options.encode,
      encode = _d === void 0 ? function (x) {
    return x;
  } : _d;
  var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
  var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
  var route = start ? "^" : ""; // Iterate over the tokens and create our regexp string.

  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];

    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));

      if (token.pattern) {
        if (keys) keys.push(token);

        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
          } else {
            route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
          }
        } else {
          route += "(" + token.pattern + ")" + token.modifier;
        }
      } else {
        route += "(?:" + prefix + suffix + ")" + token.modifier;
      }
    }
  }

  if (end) {
    if (!strict) route += delimiter + "?";
    route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : // tslint:disable-next-line
    endToken === undefined;

    if (!strict) {
      route += "(?:" + delimiter + "(?=" + endsWith + "))?";
    }

    if (!isEndDelimited) {
      route += "(?=" + delimiter + "|" + endsWith + ")";
    }
  }

  return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */


function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp) return regexpToRegexp(path, keys);
  if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
/**
 * Cancel token
 * @private
 * @type { Symbol }
 */


const CANCEL = Symbol();
/**
 * Helper that can be returned by ruit function to cancel the tasks chain
 * @returns { Symbol } internal private constant
 * @example
 *
 * ruit(
 *   100,
 *   num => Math.random() * num
 *   num => num > 50 ? ruit.cancel() : num
 *   num => num - 2
 * ).then(result => {
 *   console.log(result) // here we will get only number lower than 50
 * })
 *
 */

ruit.cancel = () => CANCEL;
/**
 * The same as ruit() but with the arguments inverted from right to left
 * @param   { * } tasks - list of tasks to process sequentially
 * @returns { Promise } a promise containing the result of the whole chain
 * @example
 *
 * const curry = f => a => b => f(a, b)
 * const add = (a, b) => a + b
 *
 * const addOne = curry(add)(1)
 *
 * const squareAsync = (num) => {
 *   return new Promise(r => {
 *     setTimeout(r, 500, num * 2)
 *   })
 * }
 *
 * // a -> a + a -> a * 2
 * // basically from right to left: 1 => 1 + 1 => 2 * 2
 * ruit.compose(squareAsync, addOne, 1).then(result => console.log(result)) // 4
 */


ruit.compose = function () {
  for (var _len = arguments.length, tasks = new Array(_len), _key = 0; _key < _len; _key++) {
    tasks[_key] = arguments[_key];
  }

  return ruit(...tasks.reverse());
};
/**
 * Serialize a list of sync and async tasks from left to right
 * @param   { * } tasks - list of tasks to process sequentially
 * @returns { Promise } a promise containing the result of the whole chain
 * @example
 *
 * const curry = f => a => b => f(a, b)
 * const add = (a, b) => a + b
 *
 * const addOne = curry(add)(1)
 *
 * const squareAsync = (num) => {
 *   return new Promise(r => {
 *     setTimeout(r, 500, num * 2)
 *   })
 * }
 *
 * // a -> a + a -> a * 2
 * // basically from left to right: 1 => 1 + 1 => 2 * 2
 * ruit(1, addOne, squareAsync).then(result => console.log(result)) // 4
 */


function ruit() {
  for (var _len2 = arguments.length, tasks = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    tasks[_key2] = arguments[_key2];
  }

  return new Promise((resolve, reject) => {
    return function run(queue, result) {
      if (!queue.length) return resolve(result);
      const [task, ...rest] = queue;
      const value = typeof task === 'function' ? task(result) : task;

      const done = v => run(rest, v); // check against nil values


      if (value != null) {
        if (value === CANCEL) return;
        if (value.then) return value.then(done, reject);
      }

      return Promise.resolve(done(value));
    }(tasks);
  });
}

const API_METHODS = new Set();
const UNSUBSCRIBE_SYMBOL = Symbol();
const UNSUBSCRIBE_METHOD = 'off';
const CANCEL_METHOD = 'cancel';
/**
 * Factory function to create the stream generator
 * @private
 * @param {Set} modifiers - stream input modifiers
 * @returns {Generator} the stream generator
 */

function createStream(modifiers) {
  const stream = function* stream() {
    while (true) {
      // get the initial stream value
      const input = yield; // run the input sequence

      yield ruit(input, ...modifiers);
    }
  }(); // start the stream


  stream.next();
  return stream;
}
/**
 * Dispatch a value to several listeners
 * @private
 * @param   {Set} callbacks - callbacks collection
 * @param   {*} value - anything
 * @returns {Set} the callbacks received
 */


function dispatch(callbacks, value) {
  callbacks.forEach(f => {
    // unsubscribe the callback if erre.unsubscribe() will be returned
    if (f(value) === UNSUBSCRIBE_SYMBOL) callbacks.delete(f);
  });
  return callbacks;
}
/**
 * Throw a panic error
 * @param {string} message - error message
 * @returns {Error} an error object
 */


function panic(message) {
  throw new Error(message);
}
/**
 * Install an erre plugin adding it to the API
 * @param   {string} name - plugin name
 * @param   {Function} fn - new erre API method
 * @returns {Function} return the erre function
 */


erre.install = function (name, fn) {
  if (!name || typeof name !== 'string') panic('Please provide a name (as string) for your erre plugin');
  if (!fn || typeof fn !== 'function') panic('Please provide a function for your erre plugin');

  if (API_METHODS.has(name)) {
    panic(`The ${name} is already part of the erre API, please provide a different name`);
  } else {
    erre[name] = fn;
    API_METHODS.add(name);
  }

  return erre;
}; // alias for ruit canel to stop a stream chain


erre.install(CANCEL_METHOD, ruit.cancel); // unsubscribe helper

erre.install(UNSUBSCRIBE_METHOD, () => UNSUBSCRIBE_SYMBOL);
/**
 * Stream constuction function
 * @param   {...Function} fns - stream modifiers
 * @returns {Object} erre instance
 */

function erre() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  const [success, error, end, modifiers] = [new Set(), new Set(), new Set(), new Set(fns)],
        generator = createStream(modifiers),
        stream = Object.create(generator),
        addToCollection = collection => fn => collection.add(fn) && stream,
        deleteFromCollection = collection => fn => collection.delete(fn) ? stream : panic('Couldn\'t remove handler passed by reference');

  return Object.assign(stream, {
    on: Object.freeze({
      value: addToCollection(success),
      error: addToCollection(error),
      end: addToCollection(end)
    }),
    off: Object.freeze({
      value: deleteFromCollection(success),
      error: deleteFromCollection(error),
      end: deleteFromCollection(end)
    }),
    connect: addToCollection(modifiers),

    push(input) {
      const {
        value,
        done
      } = stream.next(input); // dispatch the stream events

      if (!done) {
        value.then(res => dispatch(success, res), err => dispatch(error, err));
      }

      return stream;
    },

    end() {
      // kill the stream
      generator.return(); // dispatch the end event

      dispatch(end) // clean up all the collections
      ;
      [success, error, end, modifiers].forEach(el => el.clear());
      return stream;
    },

    fork() {
      return erre(...modifiers);
    },

    next(input) {
      // get the input and run eventually the promise
      const result = generator.next(input); // pause to the next iteration

      generator.next();
      return result;
    }

  });
}

const hasWindow = typeof window !== 'undefined';

const isString = str => typeof str === 'string'; // the url parsing function depends on the platform, on node we rely on the 'url' module

/* istanbul ignore next */


const parseURL = function parseURL() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return hasWindow ? new URL(...args) : require('url').parse(...args);
};
/**
 * Replace the base path from a path
 * @param   {string} path - router path string
 * @returns {string} path cleaned up without the base
 */


const replaceBase = path => path.replace(defaults.base, '');
/**
 * Try to match the current path or skip it
 * @param   {RegEx} pathRegExp - target path transformed by pathToRegexp
 * @returns {string|Symbol} if the path match we return it otherwise we cancel the stream
 */


const matchOrSkip = pathRegExp => path => match(path, pathRegExp) ? path : erre.cancel();
/**
 * Combine 2 streams connecting the events of dispatcherStream to the receiverStream
 * @param   {Stream} dispatcherStream - main stream dispatching events
 * @param   {Stream} receiverStream - sub stream receiving events from the dispatcher
 * @returns {Stream} receiverStream
 */


const joinStreams = (dispatcherStream, receiverStream) => {
  dispatcherStream.on.value(receiverStream.push);
  receiverStream.on.end(() => {
    dispatcherStream.off.value(receiverStream.push);
  });
  return receiverStream;
};
/**
 * Error handling function
 * @param   {Error} error - error to catch
 * @returns {void}
 */


const panic$1 = error => {
  if (defaults.silentErrors) return;
  throw new Error(error);
}; // make sure that the router will always receive strings params


const filterStrings = str => isString(str) ? str : erre.cancel(); // create the streaming router


exports.filterStrings = filterStrings;
const router = erre(filterStrings).on.error(panic$1); // cast the values of this stream always to string

/* @type {object} general configuration object */

exports.router = router;
const defaults = {
  // custom option
  base: '',
  silentErrors: false,
  // pathToRegexp options
  sensitive: false,
  strict: false,
  end: true,
  start: true,
  delimiter: '/#?',
  encode: undefined,
  endsWith: undefined,
  prefixes: './'
};
/**
 * Merge the user options with the defaults
 * @param   {Object} options - custom user options
 * @returns {Object} options object merged with defaults
 */

const mergeOptions = options => Object.assign({}, defaults, {}, options);
/* {@link https://github.com/pillarjs/path-to-regexp#usage} */


const toRegexp = (path, keys, options) => pathToRegexp(path, keys, mergeOptions(options));
/**
 * Convert a router entry to a real path computing the url parameters
 * @param   {string} path - router path string
 * @param   {Object} params - named matched parameters
 * @param   {Object} options - pathToRegexp options object
 * @returns {string} computed url string
 */


exports.toRegexp = toRegexp;

const toPath = (path, params, options) => compile(path, mergeOptions(options))(params);
/**
 * Parse a string path generating an object containing
 * @param   {string} path - target path
 * @param   {RegExp} pathRegExp - path transformed to regexp via pathToRegexp
 * @param   {Object} options - object containing the base path
 * @returns {URL} url object enhanced with the `match` attribute
 */


exports.toPath = toPath;

const toURL = (path, pathRegExp, options) => {
  const {
    base
  } = mergeOptions(options);
  const [, ...params] = pathRegExp.exec(path);
  const url = parseURL(path, base); // extend the url object adding the matched params

  url.params = params;
  return url;
};
/**
 * Return true if a path will be matched
 * @param   {string} path - target path
 * @param   {RegExp} pathRegExp - path transformed to regexp via pathToRegexp
 * @returns {boolean} true if the path matches the regexp
 */


exports.toURL = toURL;

const match = (path, pathRegExp) => pathRegExp.test(path);
/**
 * Factory function to create an sequence of functions to pass to erre.js
 * This function will be used in the erre stream
 * @param   {RegExp} pathRegExp - path transformed to regexp via pathToRegexp
 * @param   {Object} options - pathToRegexp options object
 * @returns {Array} a functions array that will be used as stream pipe for erre.js
 */


exports.match = match;

const createURLStreamPipe = (pathRegExp, options) => [replaceBase, matchOrSkip(pathRegExp), path => toURL(path, pathRegExp, options)];
/**
 * Create a fork of the main router stream
 * @param   {string} path - route to match
 * @param   {Object} options - pathToRegexp options object
 * @returns {Stream} new route stream
 */


exports.createURLStreamPipe = createURLStreamPipe;

function createRoute(path, options) {
  const pathRegExp = pathToRegexp(path, [], options);
  const URLStream = erre(...createURLStreamPipe(pathRegExp, options));
  return joinStreams(router, URLStream).on.error(panic$1);
}

const getCurrentRoute = (currentRoute => {
  // listen the route changes events to store the current route
  router.on.value(r => currentRoute = r);
  return () => {
    return currentRoute;
  };
})(null);
/**
 * Similar to compose but performs from left-to-right function composition.<br/>
 * {@link https://30secondsofcode.org/function#composeright see also}
 * @param   {...[function]} fns) - list of unary function
 * @returns {*} result of the computation
 */

/**
 * Performs right-to-left function composition.<br/>
 * Use Array.prototype.reduce() to perform right-to-left function composition.<br/>
 * The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.<br/>
 * {@link https://30secondsofcode.org/function#compose original source code}
 * @param   {...[function]} fns) - list of unary function
 * @returns {*} result of the computation
 */


exports.getCurrentRoute = getCurrentRoute;

function compose() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return fns.reduce((f, g) => function () {
    return f(g(...arguments));
  });
}

const getInitialRouteValue = (pathToRegexp, path, options) => {
  const route = compose(...createURLStreamPipe(pathToRegexp, options).reverse())(path);
  return route.params ? route : null;
};

var routeHoc = {
  'css': null,
  'exports': {
    onBeforeMount(props) {
      const currentRoute = getCurrentRoute();
      const pathToRegexp = toRegexp(props.path, [], props);
      this.state = {
        pathToRegexp,
        route: currentRoute && match(currentRoute, pathToRegexp) ? getInitialRouteValue(pathToRegexp, currentRoute, props) : null
      };
      router.on.value(this.onBeforeRoute);
      this.stream = createRoute(props.path, props).on.value(this.onRoute);
    },

    onBeforeRoute(path, pathToRegexp) {
      if (this.state.route && !match(path, this.state.pathToRegexp)) {
        this.callLifecycleProperty('onBeforeUnmount', createRoute);
        this.update({
          route: null
        });
        this.callLifecycleProperty('onUnmounted', createRoute);
      }
    },

    onRoute(route) {
      this.callLifecycleProperty('onBeforeMount', route);
      this.update({
        route
      });
      this.callLifecycleProperty('onMounted', route);
    },

    callLifecycleProperty(method, ...params) {
      if (this.props[method]) this.props[method](...params);
    },

    onUnmounted() {
      router.off.value(this.onBeforeRoute);
      this.stream.end();
    }

  },
  'template': function (template, expressionTypes, bindingTypes, getComponent) {
    return template('<template expr0="expr0"></template>', [{
      'type': bindingTypes.IF,
      'evaluate': function (scope) {
        return scope.state.route;
      },
      'redundantAttribute': 'expr0',
      'selector': '[expr0]',
      'template': template('<slot expr1="expr1"></slot>', [{
        'type': bindingTypes.SLOT,
        'attributes': [{
          'type': expressionTypes.ATTRIBUTE,
          'name': 'route',
          'evaluate': function (scope) {
            return scope.state.route;
          }
        }],
        'name': 'default',
        'redundantAttribute': 'expr1',
        'selector': '[expr1]'
      }])
    }]);
  },
  'name': 'route-hoc'
};
exports.Route = routeHoc;

function setBase(base) {
  defaults.base = base;
}
/**
 * Throw an error with a descriptive message
 * @param   { string } message - error message
 * @returns { undefined } hoppla.. at this point the program should stop working
 */


function panic$2(message) {
  throw new Error(message);
}
/**
 * Converts any DOM node/s to a loopable array
 * @param   { HTMLElement|NodeList } els - single html element or a node list
 * @returns { Array } always a loopable object
 */


function domToArray(els) {
  // can this object be already looped?
  if (!Array.isArray(els)) {
    // is it a node list?
    if (/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(els)) && typeof els.length === 'number') return Array.from(els);else // if it's a single node
      // it will be returned as "array" with one single entry
      return [els];
  } // this object could be looped out of the box


  return els;
}
/**
 * Split a string into several items separed by spaces
 * @param   { string } l - events list
 * @returns { Array } all the events detected
 * @private
 */


const split = l => l.split(/\s/);
/**
 * Set a listener for all the events received separated by spaces
 * @param   { HTMLElement|NodeList|Array } els     - DOM node/s where the listeners will be bound
 * @param   { string }                     evList  - list of events we want to bind or unbind space separated
 * @param   { Function }                   cb      - listeners callback
 * @param   { string }                     method  - either 'addEventListener' or 'removeEventListener'
 * @param   { Object }                     options - event options (capture, once and passive)
 * @returns { undefined }
 * @private
 */


function manageEvents(els, evList, cb, method, options) {
  els = domToArray(els);
  split(evList).forEach(e => {
    els.forEach(el => el[method](e, cb, options || false));
  });
}
/**
 * Set a listener for all the events received separated by spaces
 * @param   { HTMLElement|Array } els    - DOM node/s where the listeners will be bound
 * @param   { string }            evList - list of events we want to bind space separated
 * @param   { Function }          cb     - listeners callback
 * @param   { Object }            options - event options (capture, once and passive)
 * @returns { HTMLElement|NodeList|Array } DOM node/s and first argument of the function
 */


function add(els, evList, cb, options) {
  manageEvents(els, evList, cb, 'addEventListener', options);
  return els;
}
/**
 * Remove all the listeners for the events received separated by spaces
 * @param   { HTMLElement|Array } els     - DOM node/s where the events will be unbind
 * @param   { string }            evList  - list of events we want unbind space separated
 * @param   { Function }          cb      - listeners callback
 * @param   { Object }             options - event options (capture, once and passive)
 * @returns { HTMLElement|NodeList|Array }  DOM node/s and first argument of the function
 */


function remove(els, evList, cb, options) {
  manageEvents(els, evList, cb, 'removeEventListener', options);
  return els;
}
/**
 * Normalize the return values, in case of a single value we avoid to return an array
 * @param   { Array } values - list of values we want to return
 * @returns { Array|string|boolean } either the whole list of values or the single one found
 * @private
 */


const normalize = values => values.length === 1 ? values[0] : values;
/**
 * Parse all the nodes received to get/remove/check their attributes
 * @param   { HTMLElement|NodeList|Array } els    - DOM node/s to parse
 * @param   { string|Array }               name   - name or list of attributes
 * @param   { string }                     method - method that will be used to parse the attributes
 * @returns { Array|string } result of the parsing in a list or a single value
 * @private
 */


function parseNodes(els, name, method) {
  const names = typeof name === 'string' ? [name] : name;
  return normalize(domToArray(els).map(el => {
    return normalize(names.map(n => el[method](n)));
  }));
}
/**
 * Set any attribute on a single or a list of DOM nodes
 * @param   { HTMLElement|NodeList|Array } els   - DOM node/s to parse
 * @param   { string|Array }               name  - name or list of attributes to detect
 * @returns { boolean|Array } true or false or an array of boolean values
 * @example
 *
 * import { has } from 'bianco.attr'
 *
 * has(img, 'width') // false
 *
 * // or also
 * has(img, ['width', 'height']) // => [false, false]
 *
 * // or also
 * has([img1, img2], ['width', 'height']) // => [[false, false], [false, false]]
 */


function has(els, name) {
  return parseNodes(els, name, 'hasAttribute');
}

const WINDOW_EVENTS = 'popstate';
const CLICK_EVENT = 'click';
const DOWNLOAD_LINK_ATTRIBUTE = 'download';
const HREF_LINK_ATTRIBUTE = 'href';
const TARGET_SELF_LINK_ATTRIBUTE = '_self';
const LINK_TAG_NAME = 'A';
const HASH = '#';
const RE_ORIGIN = /^.+?\/\/+[^/]+/;

const getWindow = () => typeof window === 'undefined' ? null : window;

const getDocument = () => typeof document === 'undefined' ? null : document;

const getHistorty = () => getWindow() && history;

const getLocation = () => {
  const win = getWindow();
  const hist = getHistorty();
  return win && (hist.location || win.location);
};

const onWindowEvent = () => router.push(normalizePath(String(getLocation().href)));

const onRouterPush = path => {
  const url = path.includes(defaults.base) ? path : defaults.base + path;
  const loc = getLocation();
  const hist = getHistorty();
  const doc = getDocument(); // update the browser history only if it's necessary

  if (url !== loc.href) {
    hist.pushState(null, doc.title, url);
  }
};

const getLinkElement = node => node && !isLinkNode(node) ? getLinkElement(node.parentNode) : node;

const isLinkNode = node => node.nodeName === LINK_TAG_NAME;

const isCrossOriginLink = path => path.indexOf(getLocation().href.match(RE_ORIGIN)[0]) === -1;

const isTargetSelfLink = el => el.target && el.target !== TARGET_SELF_LINK_ATTRIBUTE;

const isEventForbidden = event => event.which && event.which !== 1 || // not left click
event.metaKey || event.ctrlKey || event.shiftKey // or meta keys
|| event.defaultPrevented; // or default prevented


const isForbiddenLink = el => !el || !isLinkNode(el) // not A tag
|| has(el, DOWNLOAD_LINK_ATTRIBUTE) // has download attr
|| !has(el, HREF_LINK_ATTRIBUTE) // has no href attr
|| isTargetSelfLink(el.target) || isCrossOriginLink(el.href);

const isHashLink = path => path.split(HASH).length > 1;

const normalizePath = path => path.replace(defaults.base, '');

const isInBase = path => !defaults.base || path.includes(defaults.base);
/**
 * Callback called anytime something will be clicked on the page
 * @param   {HTMLEvent} event - click event
 * @returns {undefined} void method
 */


const onClick = event => {
  if (isEventForbidden(event)) return;
  const el = getLinkElement(event.target);
  if (isForbiddenLink(el) || isHashLink(el.href) || !isInBase(el.href)) return;
  const path = normalizePath(el.href);
  router.push(path);
  event.preventDefault();
};
/**
 * Link the rawth router to the DOM events
 * @param { HTMLElement } container - DOM node where the links are located
 * @returns {Function} teardown function
 */


function initDomListeners(container) {
  const win = getWindow();
  const root = container || getDocument();

  if (win) {
    add(win, WINDOW_EVENTS, onWindowEvent);
    add(root, CLICK_EVENT, onClick);
  }

  router.on.value(onRouterPush);
  return () => {
    if (win) {
      remove(win, WINDOW_EVENTS, onWindowEvent);
      remove(root, CLICK_EVENT, onClick);
    }

    router.off.value(onRouterPush);
  };
}

const {
  template,
  bindingTypes
} = _riot.__.DOMBindings;
const BASE_ATTRIBUTE_NAME = 'base';
const ON_STARTED_ATTRIBUTE_NAME = 'onStarted';
const defer = window.requestAnimationFrame || window.setTimeout;
const cancelDefer = window.cancelAnimationFrame || window.clearTimeout;
let wasInitialized = false;
var routerHoc = {
  'css': null,
  'exports': (0, _riot.pure)(({
    slots,
    attributes,
    props
  }) => {
    if (wasInitialized) panic$2('Multiple <router> components are not supported');

    const getAttribute = name => attributes && attributes.find(a => a.name === name);

    return {
      slot: null,
      el: null,
      teardown: null,

      mount(el, context) {
        const currentRoute = getCurrentRoute();

        const onFirstRoute = () => {
          this.createSlot(context);
          router.off.value(onFirstRoute);
        };

        wasInitialized = true;
        this.el = el;
        this.teardown = initDomListeners(this.root);
        this.setBase(context); // mount the slots only if the current route was defined

        if (currentRoute) {
          this.createSlot(context);
        } else {
          router.on.value(onFirstRoute);
          router.push(window.location.href);
        }
      },

      createSlot(context) {
        if (!slots || !slots.length) return;
        const onStartedAttr = getAttribute(ON_STARTED_ATTRIBUTE_NAME);
        this.slot = template(null, [{
          type: bindingTypes.SLOT,
          name: 'default'
        }]);
        this.slot.mount(this.el, {
          slots
        }, context);

        if (onStartedAttr) {
          onStartedAttr.evaluate(context)(getCurrentRoute());
        }
      },

      update(context) {
        this.setBase(context); // defer the updates to avoid internal recoursive update calls
        // see https://github.com/riot/route/issues/148

        if (this.slot) {
          cancelDefer(this.deferred);
          this.deferred = defer(() => {
            this.slot.update({}, context);
          });
        }
      },

      unmount(...args) {
        this.teardown();
        wasInitialized = false;

        if (this.slot) {
          this.slot.unmount(...args);
        }
      },

      getBase(context) {
        const loc = window.location;
        const baseAttr = getAttribute(BASE_ATTRIBUTE_NAME);
        return baseAttr ? baseAttr.evaluate(context) : `${loc.protocol}//${loc.host}`;
      },

      setBase(context) {
        setBase(props ? props.base : this.getBase(context));
      }

    };
  }),
  'template': null,
  'name': 'router-hoc'
};
exports.Router = routerHoc;
},{"riot":"node_modules/riot/riot.esm.js","url":"node_modules/url/url.js"}],"node_modules/bianco.dom-to-array/index.next.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = domToArray;

/**
 * Converts any DOM node/s to a loopable array
 * @param   { HTMLElement|NodeList } els - single html element or a node list
 * @returns { Array } always a loopable object
 */
function domToArray(els) {
  // can this object be already looped?
  if (!Array.isArray(els)) {
    // is it a node list?
    if (/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(els)) && typeof els.length === 'number') return Array.from(els);else // if it's a single node
      // it will be returned as "array" with one single entry
      return [els];
  } // this object could be looped out of the box


  return els;
}
},{}],"node_modules/bianco.query/index.next.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = $;

var _bianco = _interopRequireDefault(require("bianco.dom-to-array"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Simple helper to find DOM nodes returning them as array like loopable object
 * @param   { string|DOMNodeList } selector - either the query or the DOM nodes to arraify
 * @param   { HTMLElement }        ctx      - context defining where the query will search for the DOM nodes
 * @returns { Array } DOM nodes found as array
 */
function $(selector, ctx) {
  return (0, _bianco.default)(typeof selector === 'string' ? (ctx || document).querySelectorAll(selector) : selector);
}
},{"bianco.dom-to-array":"node_modules/bianco.dom-to-array/index.next.js"}],"node_modules/@riotjs/hot-reload/index.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('riot'), require('bianco.query')) :
  typeof define === 'function' && define.amd ? define(['exports', 'riot', 'bianco.query'], factory) :
  (global = global || self, factory(global.riotHotReload = {}, global.riot, global.$));
}(this, (function (exports, riot, $) { 'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;

  const { cssManager } = riot.__;
  const { DOM_COMPONENT_INSTANCE_PROPERTY } = riot.__.globals;

  function reload(componentAPI) {
    const {name} = componentAPI;

    if (!name) {
      console.warn('Anonymous components can not be reloaded'); // eslint-disable-line
      return []
    }

    return $(`${name}, [is=${name}]`).map(el => {
      const oldTag = el[DOM_COMPONENT_INSTANCE_PROPERTY];

      // early return in case there is no riot instance found
      if (!oldTag) return

      // remove the tag template from the DOM
      oldTag.unmount(true);
      // delete the old css from the css manager
      cssManager.remove(name);

      // create the new tag
      const newTag = riot.component(componentAPI)(el, oldTag.props);
      newTag.update(oldTag.state);

      return newTag
    })
  }

  exports.default = reload;
  exports.reload = reload;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

},{"riot":"node_modules/riot/riot.esm.js","bianco.query":"node_modules/bianco.query/index.next.js"}],"src/riot/z-app.riot":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'css': null,
  'exports': {
    onMounted: function onMounted() {}
  },
  'template': function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<div id="app"><router expr0="expr0"></router></div>', [{
      'type': bindingTypes.TAG,
      'getComponent': getComponent,
      'evaluate': function evaluate(scope) {
        return 'router';
      },
      'slots': [{
        'id': 'default',
        'html': '<z-menubar expr1="expr1"></z-menubar><route expr2="expr2" path="/"></route><route expr4="expr4" path="/payroll"></route><route expr6="expr6" path="/payroll/karyawan/"></route><route expr8="expr8" path="/payroll/karyawan/add/"></route><route expr10="expr10" path="/penjualan/"></route><z-page-footer expr12="expr12"></z-page-footer>',
        'bindings': [{
          'type': bindingTypes.TAG,
          'getComponent': getComponent,
          'evaluate': function evaluate(scope) {
            return 'z-menubar';
          },
          'slots': [],
          'attributes': [],
          'redundantAttribute': 'expr1',
          'selector': '[expr1]'
        }, {
          'type': bindingTypes.TAG,
          'getComponent': getComponent,
          'evaluate': function evaluate(scope) {
            return 'route';
          },
          'slots': [{
            'id': 'default',
            'html': '<z-daftar-karyawan expr3="expr3"></z-daftar-karyawan>',
            'bindings': [{
              'type': bindingTypes.TAG,
              'getComponent': getComponent,
              'evaluate': function evaluate(scope) {
                return 'z-daftar-karyawan';
              },
              'slots': [],
              'attributes': [],
              'redundantAttribute': 'expr3',
              'selector': '[expr3]'
            }]
          }],
          'attributes': [],
          'redundantAttribute': 'expr2',
          'selector': '[expr2]'
        }, {
          'type': bindingTypes.TAG,
          'getComponent': getComponent,
          'evaluate': function evaluate(scope) {
            return 'route';
          },
          'slots': [{
            'id': 'default',
            'html': '<z-daftar-karyawan expr5="expr5"></z-daftar-karyawan>',
            'bindings': [{
              'type': bindingTypes.TAG,
              'getComponent': getComponent,
              'evaluate': function evaluate(scope) {
                return 'z-daftar-karyawan';
              },
              'slots': [],
              'attributes': [],
              'redundantAttribute': 'expr5',
              'selector': '[expr5]'
            }]
          }],
          'attributes': [],
          'redundantAttribute': 'expr4',
          'selector': '[expr4]'
        }, {
          'type': bindingTypes.TAG,
          'getComponent': getComponent,
          'evaluate': function evaluate(scope) {
            return 'route';
          },
          'slots': [{
            'id': 'default',
            'html': '<z-daftar-karyawan expr7="expr7"></z-daftar-karyawan>',
            'bindings': [{
              'type': bindingTypes.TAG,
              'getComponent': getComponent,
              'evaluate': function evaluate(scope) {
                return 'z-daftar-karyawan';
              },
              'slots': [],
              'attributes': [],
              'redundantAttribute': 'expr7',
              'selector': '[expr7]'
            }]
          }],
          'attributes': [],
          'redundantAttribute': 'expr6',
          'selector': '[expr6]'
        }, {
          'type': bindingTypes.TAG,
          'getComponent': getComponent,
          'evaluate': function evaluate(scope) {
            return 'route';
          },
          'slots': [{
            'id': 'default',
            'html': '<z-tambah-karyawan expr9="expr9"></z-tambah-karyawan>',
            'bindings': [{
              'type': bindingTypes.TAG,
              'getComponent': getComponent,
              'evaluate': function evaluate(scope) {
                return 'z-tambah-karyawan';
              },
              'slots': [],
              'attributes': [],
              'redundantAttribute': 'expr9',
              'selector': '[expr9]'
            }]
          }],
          'attributes': [],
          'redundantAttribute': 'expr8',
          'selector': '[expr8]'
        }, {
          'type': bindingTypes.TAG,
          'getComponent': getComponent,
          'evaluate': function evaluate(scope) {
            return 'route';
          },
          'slots': [{
            'id': 'default',
            'html': '<z-daftar-penjualan expr11="expr11"></z-daftar-penjualan>',
            'bindings': [{
              'type': bindingTypes.TAG,
              'getComponent': getComponent,
              'evaluate': function evaluate(scope) {
                return 'z-daftar-penjualan';
              },
              'slots': [],
              'attributes': [],
              'redundantAttribute': 'expr11',
              'selector': '[expr11]'
            }]
          }],
          'attributes': [],
          'redundantAttribute': 'expr10',
          'selector': '[expr10]'
        }, {
          'type': bindingTypes.TAG,
          'getComponent': getComponent,
          'evaluate': function evaluate(scope) {
            return 'z-page-footer';
          },
          'slots': [],
          'attributes': [],
          'redundantAttribute': 'expr12',
          'selector': '[expr12]'
        }]
      }],
      'attributes': [],
      'redundantAttribute': 'expr0',
      'selector': '[expr0]'
    }]);
  },
  'name': 'z-app'
};
exports.default = _default;
;

(function () {
  if (module.hot) {
    var hotReload = require('@riotjs/hot-reload').default;

    module.hot.accept();

    if (module.hot.data) {
      var component = require('./z-app.riot').default;

      hotReload(component);
    }
  }
})();
},{"@riotjs/hot-reload":"node_modules/@riotjs/hot-reload/index.js","./z-app.riot":"src/riot/z-app.riot"}],"src/riot/z-menubar.riot":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'css': null,
  'exports': {
    onBeforeMount: function onBeforeMount() {
      this.baseUrl = Zep.baseUrl;
    }
  },
  'template': function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<div class="menubar"><div class="container"><div class="left-menubar"><div class="menubar-item menubar-logo"><a href="index.html" target="_blank" class="logo-link"><img src="images/sample-logo.png" alt="Logo" class="logo"/></a></div><ul class="menubar-item top-menu main-menu"><li class="has-submenu"><a href>Produksi</a><ul class="submenu"><li><a href>Daftar Produk</a></li><li><a href>Tambah Produk</a></li></ul></li><li class="has-submenu"><a href>HRD</a><ul class="submenu"><li class="has-submenu"><a href>Overview</a><ul class="submenu"><li><a href>Daftar Hari Besar</a></li><li><a href="payroll/karyawan/">Daftar Karyawan</a></li><li><a href>Daftar Jadwal</a></li><li><a href>Daftar Keterangan Absen</a></li></ul></li><li class="has-submenu"><a href>Actions</a><ul class="submenu"><li><a href>Input Jadwal</a></li><li><a href>Input Jadwal (per karyawan)</a></li><li><a href>Input Jadwal (per dep-unit-bagian)</a></li><li class="separator"></li><li><a href>Input Berita Acara Lembur</a></li><li><a href>Input Berita Acara Lembur Terusan</a></li></ul></li><li class="has-submenu"><a href>Reports</a><ul class="submenu"><li><a href>Absen Harian</a></li><li><a href>Absen per Departemen</a></li><li class="separator"></li><li><a href>Laporan Terlambat / Pulang Cepat</a></li><li><a href>Laporan Absen Tidak Lengkap</a></li></ul></li><li class="has-submenu"><a href>Tools</a><ul class="submenu"><li><a href>Data Template</a></li><li><a href>Lakukan Backup Data</a></li><li><a href>Lakukan Restore Data</a></li></ul></li></ul></li><li class="has-submenu"><a href>Penjualan</a><ul class="submenu"><li class="has-submenu"><a href>Overview</a><ul class="submenu"><li><a href="penjualan/">Daftar Penjualan</a></li></ul></li><li class="has-submenu"><a href>Action</a><ul class="submenu"><li><a href="penjualan/pesanan/add/">Input Pesanan</a></li></ul></li></ul></li><li class="has-submenu"><a href>Inventory</a><ul class="submenu"><li><a href>Daftar Barang</a></li><li><a href>Tambah Barang</a></li></ul></li></ul></div><div class="right-menubar"><div class="menubar-item menubar-hamburger mobile-menu-trigger"><span></span><span></span><span></span></div><div class="menubar-item menubar-add"><i class="fas fa-plus add-icon"></i><div class="add-area"><ul class="left-add-area"><li><a href="payroll/karyawan/add/">Tambah Karyawan</a></li><li><a href="payroll/jadwal/add/">Tambah Jadwal Payroll</a></li><li><a href="payroll/lembur/add/">Tambah Lembur Payroll</a></li></ul><ul class="right-add-area"><li><a href="penjualan/pesanan/add/">Tambah Pesanan</a></li><li><a href="penawaran/add/">Tambah Penawaran</a></li></ul></div></div><div class="menubar-item menubar-avatar"><img src="images/sample-avatar.jpg" alt="avatar" class="avatar"/><span>\r\n            Hey Javas\r\n          </span></div></div></div></div>', []);
  },
  'name': 'z-menubar'
};
exports.default = _default;
;

(function () {
  if (module.hot) {
    var hotReload = require('@riotjs/hot-reload').default;

    module.hot.accept();

    if (module.hot.data) {
      var component = require('./z-menubar.riot').default;

      hotReload(component);
    }
  }
})();
},{"@riotjs/hot-reload":"node_modules/@riotjs/hot-reload/index.js","./z-menubar.riot":"src/riot/z-menubar.riot"}],"src/riot/z-titlebar.riot":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'css': null,
  'exports': null,
  'template': function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<div class="columns titlebar"><div class="column w50 left-titlebar"><h2 expr13="expr13" class="page-title"> </h2></div><div class="column w50 right-titlebar"><nav class="breadcrumb"><ul><li expr14="expr14"></li></ul></nav></div></div>', [{
      'redundantAttribute': 'expr13',
      'selector': '[expr13]',
      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,
        'evaluate': function evaluate(scope) {
          return scope.props.title;
        }
      }]
    }, {
      'type': bindingTypes.EACH,
      'getKey': null,
      'condition': null,
      'template': _template('<template expr15="expr15"></template><template expr17="expr17"></template>', [{
        'type': bindingTypes.IF,
        'evaluate': function evaluate(scope) {
          return !scope.link.isText;
        },
        'redundantAttribute': 'expr15',
        'selector': '[expr15]',
        'template': _template('<a expr16="expr16"> </a>', [{
          'redundantAttribute': 'expr16',
          'selector': '[expr16]',
          'expressions': [{
            'type': expressionTypes.TEXT,
            'childNodeIndex': 0,
            'evaluate': function evaluate(scope) {
              return scope.link.text;
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'href',
            'evaluate': function evaluate(scope) {
              return scope.link.url;
            }
          }]
        }])
      }, {
        'type': bindingTypes.IF,
        'evaluate': function evaluate(scope) {
          return scope.link.isText;
        },
        'redundantAttribute': 'expr17',
        'selector': '[expr17]',
        'template': _template('<span expr18="expr18"> </span>', [{
          'redundantAttribute': 'expr18',
          'selector': '[expr18]',
          'expressions': [{
            'type': expressionTypes.TEXT,
            'childNodeIndex': 0,
            'evaluate': function evaluate(scope) {
              return scope.link.text;
            }
          }]
        }])
      }]),
      'redundantAttribute': 'expr14',
      'selector': '[expr14]',
      'itemName': 'link',
      'indexName': null,
      'evaluate': function evaluate(scope) {
        return scope.props.links;
      }
    }]);
  },
  'name': 'z-titlebar'
};
exports.default = _default;
;

(function () {
  if (module.hot) {
    var hotReload = require('@riotjs/hot-reload').default;

    module.hot.accept();

    if (module.hot.data) {
      var component = require('./z-titlebar.riot').default;

      hotReload(component);
    }
  }
})();
},{"@riotjs/hot-reload":"node_modules/@riotjs/hot-reload/index.js","./z-titlebar.riot":"src/riot/z-titlebar.riot"}],"src/riot/z-panel-header.riot":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'css': null,
  'exports': null,
  'template': function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<header class="panel-header"><h3 expr19="expr19" class="panel-title"> </h3></header>', [{
      'redundantAttribute': 'expr19',
      'selector': '[expr19]',
      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,
        'evaluate': function evaluate(scope) {
          return [scope.props.title].join('');
        }
      }]
    }]);
  },
  'name': 'z-panel-header'
};
exports.default = _default;
;

(function () {
  if (module.hot) {
    var hotReload = require('@riotjs/hot-reload').default;

    module.hot.accept();

    if (module.hot.data) {
      var component = require('./z-panel-header.riot').default;

      hotReload(component);
    }
  }
})();
},{"@riotjs/hot-reload":"node_modules/@riotjs/hot-reload/index.js","./z-panel-header.riot":"src/riot/z-panel-header.riot"}],"src/riot/z-text-field.riot":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'css': null,
  'exports': {
    onMounted: function onMounted() {
      Zep.setupTextFields(this.$$('.field .input'));
    }
  },
  'template': function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<div class="control"><input expr20="expr20" class="input"/><hr/><label expr21="expr21"> </label></div>', [{
      'expressions': [{
        'type': expressionTypes.ATTRIBUTE,
        'name': 'class',
        'evaluate': function evaluate(scope) {
          return 'field';
        }
      }]
    }, {
      'redundantAttribute': 'expr20',
      'selector': '[expr20]',
      'expressions': [{
        'type': expressionTypes.ATTRIBUTE,
        'name': 'type',
        'evaluate': function evaluate(scope) {
          return scope.props.type ? scope.props.type : 'text';
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'name',
        'evaluate': function evaluate(scope) {
          return scope.props.name;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'id',
        'evaluate': function evaluate(scope) {
          return scope.props.id;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'placeholder',
        'evaluate': function evaluate(scope) {
          return scope.props.placeholder;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'required',
        'evaluate': function evaluate(scope) {
          return scope.props.isRequired;
        }
      }]
    }, {
      'redundantAttribute': 'expr21',
      'selector': '[expr21]',
      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,
        'evaluate': function evaluate(scope) {
          return scope.props.label;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'for',
        'evaluate': function evaluate(scope) {
          return scope.props.id;
        }
      }]
    }]);
  },
  'name': 'z-text-field'
};
exports.default = _default;
;

(function () {
  if (module.hot) {
    var hotReload = require('@riotjs/hot-reload').default;

    module.hot.accept();

    if (module.hot.data) {
      var component = require('./z-text-field.riot').default;

      hotReload(component);
    }
  }
})();
},{"@riotjs/hot-reload":"node_modules/@riotjs/hot-reload/index.js","./z-text-field.riot":"src/riot/z-text-field.riot"}],"src/riot/z-select-field.riot":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'css': null,
  'exports': null,
  'template': function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<div class="control"><select expr22="expr22" class="input select"><template expr23="expr23"></template><template expr25="expr25"></template></select><hr/><label expr27="expr27"> </label></div>', [{
      'expressions': [{
        'type': expressionTypes.ATTRIBUTE,
        'name': 'class',
        'evaluate': function evaluate(scope) {
          return 'field';
        }
      }]
    }, {
      'redundantAttribute': 'expr22',
      'selector': '[expr22]',
      'expressions': [{
        'type': expressionTypes.ATTRIBUTE,
        'name': 'name',
        'evaluate': function evaluate(scope) {
          return scope.props.name;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'id',
        'evaluate': function evaluate(scope) {
          return scope.props.id;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'placeholder',
        'evaluate': function evaluate(scope) {
          return scope.props.placeholder;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'required',
        'evaluate': function evaluate(scope) {
          return scope.props.isRequired;
        }
      }]
    }, {
      'type': bindingTypes.IF,
      'evaluate': function evaluate(scope) {
        return scope.props.options;
      },
      'redundantAttribute': 'expr23',
      'selector': '[expr23]',
      'template': _template('<option expr24="expr24"></option>', [{
        'type': bindingTypes.EACH,
        'getKey': null,
        'condition': null,
        'template': _template(' ', [{
          'expressions': [{
            'type': expressionTypes.TEXT,
            'childNodeIndex': 0,
            'evaluate': function evaluate(scope) {
              return scope.opt.text;
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'value',
            'evaluate': function evaluate(scope) {
              return scope.opt.value;
            }
          }]
        }]),
        'redundantAttribute': 'expr24',
        'selector': '[expr24]',
        'itemName': 'opt',
        'indexName': null,
        'evaluate': function evaluate(scope) {
          return scope.props.options;
        }
      }])
    }, {
      'type': bindingTypes.IF,
      'evaluate': function evaluate(scope) {
        return !scope.props.options;
      },
      'redundantAttribute': 'expr25',
      'selector': '[expr25]',
      'template': _template('<slot expr26="expr26"></slot>', [{
        'type': bindingTypes.SLOT,
        'attributes': [],
        'name': 'default',
        'redundantAttribute': 'expr26',
        'selector': '[expr26]'
      }])
    }, {
      'redundantAttribute': 'expr27',
      'selector': '[expr27]',
      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,
        'evaluate': function evaluate(scope) {
          return scope.props.label;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'for',
        'evaluate': function evaluate(scope) {
          return scope.props.id;
        }
      }]
    }]);
  },
  'name': 'z-select-field'
};
exports.default = _default;
;

(function () {
  if (module.hot) {
    var hotReload = require('@riotjs/hot-reload').default;

    module.hot.accept();

    if (module.hot.data) {
      var component = require('./z-select-field.riot').default;

      hotReload(component);
    }
  }
})();
},{"@riotjs/hot-reload":"node_modules/@riotjs/hot-reload/index.js","./z-select-field.riot":"src/riot/z-select-field.riot"}],"node_modules/multi.js/dist/multi-es6.min.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*! multi.js 12-06-2019 */
var multi = function () {
  var e = function (e, t, a) {
    var n = e.options[t.target.getAttribute("multi-index")];

    if (!n.disabled) {
      n.selected = !n.selected;
      var i,
          d,
          l,
          r = a.limit;

      if (r > -1) {
        for (var s = 0, o = 0; o < e.options.length; o++) e.options[o].selected && s++;

        if (s === r) {
          this.disabled_limit = !0, "function" == typeof a.limit_reached && a.limit_reached();

          for (o = 0; o < e.options.length; o++) {
            (c = e.options[o]).selected || c.setAttribute("disabled", !0);
          }
        } else if (this.disabled_limit) {
          for (o = 0; o < e.options.length; o++) {
            var c;
            "false" === (c = e.options[o]).getAttribute("data-origin-disabled") && c.removeAttribute("disabled");
          }

          this.disabled_limit = !1;
        }
      }

      i = "change", d = e, (l = document.createEvent("HTMLEvents")).initEvent(i, !1, !0), d.dispatchEvent(l);
    }
  },
      t = function (e, t) {
    if (e.wrapper.selected.innerHTML = "", e.wrapper.non_selected.innerHTML = "", t.non_selected_header && t.selected_header) {
      var a = document.createElement("div"),
          n = document.createElement("div");
      a.className = "header", n.className = "header", a.innerText = t.non_selected_header, n.innerText = t.selected_header, e.wrapper.non_selected.appendChild(a), e.wrapper.selected.appendChild(n);
    }

    if (e.wrapper.search) var i = e.wrapper.search.value;

    for (var d = null, l = null, r = 0; r < e.options.length; r++) {
      var s = e.options[r],
          o = s.value,
          c = s.textContent || s.innerText,
          p = document.createElement("a");

      if (p.tabIndex = 0, p.className = "item", p.innerText = c, p.setAttribute("role", "button"), p.setAttribute("data-value", o), p.setAttribute("multi-index", r), s.disabled && (p.className += " disabled"), s.selected) {
        p.className += " selected";
        var u = p.cloneNode(!0);
        e.wrapper.selected.appendChild(u);
      }

      if ("OPTGROUP" == s.parentNode.nodeName && s.parentNode != l) {
        if (l = s.parentNode, (d = document.createElement("div")).className = "item-group", s.parentNode.label) {
          var m = document.createElement("span");
          m.innerHTML = s.parentNode.label, m.className = "group-label", d.appendChild(m);
        }

        e.wrapper.non_selected.appendChild(d);
      }

      s.parentNode == e && (d = null, l = null), (!i || i && c.toLowerCase().indexOf(i.toLowerCase()) > -1) && (null != d ? d.appendChild(p) : e.wrapper.non_selected.appendChild(p));
    }
  };

  return function (a, n) {
    if ((n = void 0 !== n ? n : {}).enable_search = void 0 === n.enable_search || n.enable_search, n.search_placeholder = void 0 !== n.search_placeholder ? n.search_placeholder : "Search...", n.non_selected_header = void 0 !== n.non_selected_header ? n.non_selected_header : null, n.selected_header = void 0 !== n.selected_header ? n.selected_header : null, n.limit = void 0 !== n.limit ? parseInt(n.limit) : -1, isNaN(n.limit) && (n.limit = -1), null == a.dataset.multijs && "SELECT" == a.nodeName && a.multiple) {
      a.style.display = "none", a.setAttribute("data-multijs", !0);
      var i = document.createElement("div");

      if (i.className = "multi-wrapper", n.enable_search) {
        var d = document.createElement("input");
        d.className = "search-input", d.type = "text", d.setAttribute("placeholder", n.search_placeholder), d.addEventListener("input", function () {
          t(a, n);
        }), i.appendChild(d), i.search = d;
      }

      var l = document.createElement("div");
      l.className = "non-selected-wrapper";
      var r = document.createElement("div");
      r.className = "selected-wrapper", i.addEventListener("click", function (t) {
        t.target.getAttribute("multi-index") && e(a, t, n);
      }), i.addEventListener("keypress", function (t) {
        var i = 32 === t.keyCode || 13 === t.keyCode;
        t.target.getAttribute("multi-index") && i && (t.preventDefault(), e(a, t, n));
      }), i.appendChild(l), i.appendChild(r), i.non_selected = l, i.selected = r, a.wrapper = i, a.parentNode.insertBefore(i, a.nextSibling);

      for (var s = 0; s < a.options.length; s++) {
        var o = a.options[s];
        o.setAttribute("data-origin-disabled", o.disabled);
      }

      t(a, n), a.addEventListener("change", function () {
        t(a, n);
      });
    }
  };
}();

"undefined" != typeof jQuery && function (e) {
  e.fn.multi = function (t) {
    return t = void 0 !== t ? t : {}, this.each(function () {
      var a = e(this);
      multi(a.get(0), t);
    });
  };
}(jQuery);
var _default = multi;
exports.default = _default;
},{}],"src/riot/z-multiselect-field.riot":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _multiEs6Min = _interopRequireDefault(require("multi.js/dist/multi-es6.min.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  'css': null,
  'exports': {
    onMounted: function onMounted() {
      var field = this.$('.use-multijs');

      function setupMultiJS() {
        if (!field) return;
        var placeholder = field.getAttribute("placeholder");
        var opts = {};
        if (placeholder) opts.search_placeholder = placeholder;
        (0, _multiEs6Min.default)(field, opts);
      }

      setupMultiJS();
    }
  },
  'template': function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<div class="control"><select expr28="expr28" class="input select use-multijs" multiple><template expr29="expr29"></template><template expr31="expr31"></template></select><hr/><label expr33="expr33"> </label></div>', [{
      'expressions': [{
        'type': expressionTypes.ATTRIBUTE,
        'name': 'class',
        'evaluate': function evaluate(scope) {
          return 'field';
        }
      }]
    }, {
      'redundantAttribute': 'expr28',
      'selector': '[expr28]',
      'expressions': [{
        'type': expressionTypes.ATTRIBUTE,
        'name': 'name',
        'evaluate': function evaluate(scope) {
          return scope.props.name;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'id',
        'evaluate': function evaluate(scope) {
          return scope.props.id;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'placeholder',
        'evaluate': function evaluate(scope) {
          return scope.props.placeholder;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'required',
        'evaluate': function evaluate(scope) {
          return scope.props.isRequired;
        }
      }]
    }, {
      'type': bindingTypes.IF,
      'evaluate': function evaluate(scope) {
        return scope.props.options;
      },
      'redundantAttribute': 'expr29',
      'selector': '[expr29]',
      'template': _template('<option expr30="expr30"></option>', [{
        'type': bindingTypes.EACH,
        'getKey': null,
        'condition': null,
        'template': _template(' ', [{
          'expressions': [{
            'type': expressionTypes.TEXT,
            'childNodeIndex': 0,
            'evaluate': function evaluate(scope) {
              return scope.opt.text;
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'value',
            'evaluate': function evaluate(scope) {
              return scope.opt.value;
            }
          }]
        }]),
        'redundantAttribute': 'expr30',
        'selector': '[expr30]',
        'itemName': 'opt',
        'indexName': null,
        'evaluate': function evaluate(scope) {
          return scope.props.options;
        }
      }])
    }, {
      'type': bindingTypes.IF,
      'evaluate': function evaluate(scope) {
        return !scope.props.options;
      },
      'redundantAttribute': 'expr31',
      'selector': '[expr31]',
      'template': _template('<slot expr32="expr32"></slot>', [{
        'type': bindingTypes.SLOT,
        'attributes': [],
        'name': 'default',
        'redundantAttribute': 'expr32',
        'selector': '[expr32]'
      }])
    }, {
      'redundantAttribute': 'expr33',
      'selector': '[expr33]',
      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,
        'evaluate': function evaluate(scope) {
          return scope.props.label;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'for',
        'evaluate': function evaluate(scope) {
          return scope.props.id;
        }
      }]
    }]);
  },
  'name': 'z-multiselect-field'
};
exports.default = _default;
;

(function () {
  if (module.hot) {
    var hotReload = require('@riotjs/hot-reload').default;

    module.hot.accept();

    if (module.hot.data) {
      var component = require('./z-multiselect-field.riot').default;

      hotReload(component);
    }
  }
})();
},{"multi.js/dist/multi-es6.min.js":"node_modules/multi.js/dist/multi-es6.min.js","@riotjs/hot-reload":"node_modules/@riotjs/hot-reload/index.js","./z-multiselect-field.riot":"src/riot/z-multiselect-field.riot"}],"src/riot/z-date-field.riot":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'css': null,
  'exports': {
    onBeforeMount: function onBeforeMount(props) {
      this.className = 'input use-datepicker';
      this.className = props.isFilled ? this.className + ' is-filled' : this.className;
    },
    onMounted: function onMounted() {
      var picker = this.$('.use-datepicker');
      setupDatepicker();

      function setupDatepicker() {
        if (!picker) return;
        var opts = {};
        opts.altInput = true;
        opts.altFormat = "j F Y";
        opts.dateFormat = "Y-m-d";

        if (!picker.dataset.defaultDate) {
          opts.defaultDate = Date.now();
        }

        picker.addEventListener("change", function () {
          return Zep.switchIsFilled(picker);
        });
        flatpickr(picker, opts);
      }
    }
  },
  'template': function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<div class="control"><input expr34="expr34" type="text"/><hr/><label expr35="expr35"> </label></div>', [{
      'expressions': [{
        'type': expressionTypes.ATTRIBUTE,
        'name': 'class',
        'evaluate': function evaluate(scope) {
          return 'field';
        }
      }]
    }, {
      'redundantAttribute': 'expr34',
      'selector': '[expr34]',
      'expressions': [{
        'type': expressionTypes.ATTRIBUTE,
        'name': 'name',
        'evaluate': function evaluate(scope) {
          return scope.props.name;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'id',
        'evaluate': function evaluate(scope) {
          return scope.props.id;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'class',
        'evaluate': function evaluate(scope) {
          return scope.className;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'placeholder',
        'evaluate': function evaluate(scope) {
          return scope.props.placeholder;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'required',
        'evaluate': function evaluate(scope) {
          return scope.props.isRequired;
        }
      }]
    }, {
      'redundantAttribute': 'expr35',
      'selector': '[expr35]',
      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,
        'evaluate': function evaluate(scope) {
          return scope.props.label;
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'for',
        'evaluate': function evaluate(scope) {
          return scope.props.id;
        }
      }]
    }]);
  },
  'name': 'z-date-field'
};
exports.default = _default;
;

(function () {
  if (module.hot) {
    var hotReload = require('@riotjs/hot-reload').default;

    module.hot.accept();

    if (module.hot.data) {
      var component = require('./z-date-field.riot').default;

      hotReload(component);
    }
  }
})();
},{"@riotjs/hot-reload":"node_modules/@riotjs/hot-reload/index.js","./z-date-field.riot":"src/riot/z-date-field.riot"}],"src/riot/z-page-footer.riot":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'css': null,
  'exports': null,
  'template': function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<footer class="page-footer"><div class="container"><ul class="footer-menu"><li><a href>Settings</a></li><li><a href>Master Data</a></li></ul></div></footer>', []);
  },
  'name': 'z-page-footer'
};
exports.default = _default;
;

(function () {
  if (module.hot) {
    var hotReload = require('@riotjs/hot-reload').default;

    module.hot.accept();

    if (module.hot.data) {
      var component = require('./z-page-footer.riot').default;

      hotReload(component);
    }
  }
})();
},{"@riotjs/hot-reload":"node_modules/@riotjs/hot-reload/index.js","./z-page-footer.riot":"src/riot/z-page-footer.riot"}],"src/riot/z-daftar-karyawan.riot":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'css': null,
  'exports': {
    onBeforeMount: function onBeforeMount(props, state) {
      this.breadcrumb = [{
        text: 'Payroll',
        url: '/payroll/'
      }, {
        text: 'Karyawan',
        isText: true
      }];
    },
    onMounted: function onMounted(props, state) {
      var form = this.$('form');
      var ajax = new XMLHttpRequest();
      if (!form) return;
      var fields = {
        departemen: document.querySelector('#departemen'),
        unit: document.querySelector('#unit'),
        nama: document.querySelector('#nama')
      };
      var table = document.querySelector('#tabel-daftar-karyawan'); // specify the columns

      var columnDefs = [{
        headerName: "Kode Karyawan",
        field: "kode"
      }, {
        headerName: "Nama Karyawan",
        field: "nama"
      }, {
        headerName: "Level",
        field: "level"
      }, {
        headerName: "Grade",
        field: "grade"
      }, {
        headerName: "Jenis Kelamin",
        field: "jenis_kelamin"
      }, {
        headerName: "Status",
        field: "status"
      }, {
        headerName: "Jabatan",
        field: "jabatan"
      }, {
        headerName: "Departemen",
        field: "departemen"
      }, {
        headerName: "Unit",
        field: "unit"
      }, {
        headerName: "Tempat Lahir",
        field: "tempat_lahir"
      }, {
        headerName: "Tanggal Lahir",
        field: "tanggal_lahir"
      }, {
        headerName: "Umur",
        field: "umur"
      }, {
        headerName: "Tanggal Mulai Bekerja",
        field: "tanggal_mulai_bekerja"
      }, {
        headerName: "Lama Bekerja",
        field: "lama_bekerja"
      }, {
        headerName: "Hitungan Cuti",
        field: "hitungan_cuti"
      }, {
        headerName: "Nomor KTP",
        field: "no_ktp"
      }, {
        headerName: "Alamat",
        field: "alamat"
      }, {
        headerName: "Nomor HP",
        field: "no_hp"
      }, {
        headerName: "No. Rekening Bank",
        field: "no_rekening_bank"
      }, {
        headerName: "No. BPJS Ketenagakerjaan",
        field: "no_bpjs_kt"
      }, {
        headerName: "Grade BPJS Ketenagakerjaan",
        field: "grade_bpjs_kt"
      }, {
        headerName: "No. BPJS Kesehatan",
        field: "no_bpjs_kes"
      }, {
        headerName: "Grade BPJS Kesehatan",
        field: "grade_bpjs_kes"
      }]; // specify the data

      var rowData = []; // let the grid know which columns and what data to use

      var gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
      }; // create the grid passing in the div to use together with the columns & data we want to use

      var gridTable = new Grid(table, gridOptions);
      var gridApi = gridTable.gridOptions.api;

      function updateTable(rows) {
        gridApi.setRowData(rows);
      }

      function sendRequest(query) {
        var ajaxUrl = Zep.apiUrl + '/tampilKaryawan?nama=' + query;
        ajax.abort();
        ajax.open("GET", ajaxUrl, true);
        ajax.send();

        ajax.onload = function () {
          var list = JSON.parse(ajax.responseText);
          updateTable(list);
        };
      }

      ;
      fields.nama.addEventListener('keypress', function (e) {
        if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27 || e.key === 'Enter' || e.keyCode === 13 || e.key === 'ArrowLeft' || e.keyCode === 37 || e.key === 'ArrowUp' || e.keyCode === 38 || e.key === 'ArrowRight' || e.keyCode === 39 || e.key === 'ArrowDown' || e.keyCode === 40) {
          return;
        }

        sendRequest(fields.nama.value);
      });
    }
  },
  'template': function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<div class="main-screen"><div class="container"><z-titlebar expr36="expr36" title="Daftar Karyawan"></z-titlebar><div class="main-content"><form name="cari_karyawan" action method="POST"><div class="panel"><z-panel-header expr37="expr37" title="Daftar Karyawan"></z-panel-header><div class="panel-content"><div class="fields material has-3"><z-select-field expr38="expr38" name="departemen" id="departemen" label="Departemen" is-required="1"></z-select-field><z-select-field expr39="expr39" name="unit" id="unit" label="Unit" is-required="1"></z-select-field><z-text-field expr40="expr40" name="nama" id="nama" label="Nama / NIK" placeholder="Cari Nama / NIK" is-required="1"></z-text-field></div><div id="tabel-daftar-karyawan" class="grid-table ag-theme-alpine" style="width: 100%; height: 400px;"></div></div></div></form></div></div></div>', [{
      'type': bindingTypes.TAG,
      'getComponent': getComponent,
      'evaluate': function evaluate(scope) {
        return 'z-titlebar';
      },
      'slots': [],
      'attributes': [{
        'type': expressionTypes.ATTRIBUTE,
        'name': 'links',
        'evaluate': function evaluate(scope) {
          return scope.breadcrumb;
        }
      }],
      'redundantAttribute': 'expr36',
      'selector': '[expr36]'
    }, {
      'type': bindingTypes.TAG,
      'getComponent': getComponent,
      'evaluate': function evaluate(scope) {
        return 'z-panel-header';
      },
      'slots': [],
      'attributes': [],
      'redundantAttribute': 'expr37',
      'selector': '[expr37]'
    }, {
      'type': bindingTypes.TAG,
      'getComponent': getComponent,
      'evaluate': function evaluate(scope) {
        return 'z-select-field';
      },
      'slots': [{
        'id': 'default',
        'html': '<option value="finishing">Finishing</option><option value="warehouse">Warehouse</option>',
        'bindings': []
      }],
      'attributes': [],
      'redundantAttribute': 'expr38',
      'selector': '[expr38]'
    }, {
      'type': bindingTypes.TAG,
      'getComponent': getComponent,
      'evaluate': function evaluate(scope) {
        return 'z-select-field';
      },
      'slots': [{
        'id': 'default',
        'html': '<option value="revisi_produk">Revisi Produk</option><option value="packing">Packing</option>',
        'bindings': []
      }],
      'attributes': [],
      'redundantAttribute': 'expr39',
      'selector': '[expr39]'
    }, {
      'type': bindingTypes.TAG,
      'getComponent': getComponent,
      'evaluate': function evaluate(scope) {
        return 'z-text-field';
      },
      'slots': [],
      'attributes': [],
      'redundantAttribute': 'expr40',
      'selector': '[expr40]'
    }]);
  },
  'name': 'z-daftar-karyawan'
};
exports.default = _default;
;

(function () {
  if (module.hot) {
    var hotReload = require('@riotjs/hot-reload').default;

    module.hot.accept();

    if (module.hot.data) {
      var component = require('./z-daftar-karyawan.riot').default;

      hotReload(component);
    }
  }
})();
},{"@riotjs/hot-reload":"node_modules/@riotjs/hot-reload/index.js","./z-daftar-karyawan.riot":"src/riot/z-daftar-karyawan.riot"}],"src/riot/z-tambah-karyawan.riot":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'css': null,
  'exports': {
    onBeforeMount: function onBeforeMount(props, state) {
      this.breadcrumb = [{
        text: 'Payroll',
        url: '/payroll/'
      }, {
        text: 'Karyawan',
        url: '/payroll/karyawan/'
      }, {
        text: 'Tambah',
        isText: true
      }];
    },
    onMounted: function onMounted(props, state) {//
    }
  },
  'template': function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<div class="main-screen"><div class="container"><z-titlebar expr41="expr41" title="Tambah Baru"></z-titlebar><div class="main-content"><form name="/api/simpanKry" action method="POST"><div class="panel"><z-panel-header expr42="expr42" title="Tambah Karyawan Baru"></z-panel-header><div class="panel-content"><div class="columns"><div class="panel-left-content"><div class="panel-info"><h4 class="info-title">Data Diri</h4><p class="info-description">Silakan isi data diri pasien secara lengkap dan teliti.</p></div><div class="fields material"><z-date-field expr43="expr43" id="tanggal_pendaftaran" id="tanggal_pendaftaran" label="Tanggal Daftar" placeholder="Tanggal Pendaftaran" is-filled="true" is-required="true"></z-date-field><div class="field"><div class="control"><input type="number" name="nik" id="nik" class="input" placeholder="No. NIK" autocomplete="off" required/><hr/><label for="nik">No. NIK</label></div></div><div class="field"><div class="control"><textarea name="alamat" id="alamat" class="input textarea" placeholder="Masukkan alamat" autocomplete="off" required></textarea><hr/><label for="alamat">Alamat</label></div></div><div class="field"><div class="control"><input type="text" name="kota" id="kota" class="input" placeholder="Nama Kota / Kabupaten" autocomplete="off" required/><hr/><label for="kota">Kota / Kabupaten</label></div></div><div class="field"><div class="control"><input type="text" name="telepon" id="telepon" class="input" placeholder="No. Telepon" autocomplete="off" required/><hr/><label for="telepon">No. Telepon</label></div></div><div class="field"><div class="control"><input type="text" name="tanggal_lahir" id="tanggal_lahir" class="input use-datepicker" placeholder="Pilih tanggal Lahir" autocomplete="off" required/><hr/><label for="tanggal_lahir">Tanggal Lahir</label></div></div><div class="field"><div class="control"><input type="text" name="tempat_lahir" id="tempat_lahir" class="input" placeholder="Tempat Lahir" autocomplete="off" required/><hr/><label for="tempat_lahir">Tempat Lahir</label></div></div><div class="field"><div class="control"><select name="jenis_kelamin" id="jenis_kelamin" class="input select" required><option value="male">Laki-laki</option><option value="female">Perempuan</option></select><hr/><label for="jenis_kelamin">Jenis Kelamin</label></div></div><div class="field"><div class="control"><select name="agama" id="agama" class="input select" required><option value="islam">Islam</option><option value="kristen">Kristen</option><option value="khatolik">Khatolik</option><option value="hindu">Hindu</option><option value="budha">Budha</option><option value="lainnya">Lainnya</option></select><hr/><label for="agama">Agama</label></div></div><div class="field"><div class="control"><input type="text" name="pendidikan" id="pendidikan" class="input" placeholder="Pendidikan Terakhir" autocomplete="off" required/><hr/><label for="pendidikan">Pendidikan</label></div></div><div class="field"><div class="control"><input type="text" name="no_ktp" id="no_ktp" class="input" placeholder="Masukkan Nomor KTP" autocomplete="off" required/><hr/><label for="no_ktp">No. KTP</label></div></div><div class="field"><div class="control"><input type="text" name="no_bpjs_kesehatan" id="no_bpjs_kesehatan" class="input" placeholder="Nomor BPJS Kesehatan" autocomplete="off" required/><hr/><label for="no_bpjs_kesehatan">No. BPJS Kesehatan</label></div></div><div class="field"><div class="control"><input type="text" name="grade_bpjs_kesehatan" id="grade_bpjs_kesehatan" class="input" placeholder="Grade BPJS Kesehatan" autocomplete="off" required/><hr/><label for="grade_bpjs_kesehatan">Grade BPJS Kesehatan</label></div></div><div class="field"><div class="control"><input type="text" name="nama_ibu" id="nama_ibu" class="input" placeholder="Masukkan Nama Ibu" autocomplete="off" required/><hr/><label for="nama_ibu">Nama Ibu</label></div></div><div class="field"><div class="control"><input type="text" name="no_rekening" id="no_rekening" class="input" placeholder="Masukkan Nomor Rekening" autocomplete="off" required/><hr/><label for="no_rekening">No. Rekening</label></div></div></div></div><div class="panel-right-content"><div class="panel-info"><h4 class="info-title">Data Pekerjaan</h4><p class="info-description">Silakan isi data pekerjaan pasien secara lengkap dan teliti.</p></div><div class="fields material"><div class="field"><div class="control"><input type="text" name="tanggal_masuk_kerja" id="tanggal_masuk_kerja" class="input use-datepicker placeholder=" Tanggal Masuk Kerja" autocomplete="off" required/><hr/><label for="tanggal_masuk_kerja">Tanggal Masuk</label></div></div><div class="field"><div class="control"><input type="text" name="tanggal_keluar_kerja" id="tanggal_keluar_kerja" class="input use-datepicker placeholder=" Tanggal Keluar Kerja" autocomplete="off" required/><hr/><label for="tanggal_keluar_kerja">Tanggal Keluar</label></div></div><div class="field"><div class="control"><input type="text" name="departemen" id="departemen" class="input" placeholder="Nama Departemen" autocomplete="off" required/><hr/><label for="departemen">Departemen</label></div></div><div class="field"><div class="control"><input type="text" name="unit" id="unit" class="input" placeholder="Nama Unit" autocomplete="off" required/><hr/><label for="unit">Unit</label></div></div><div class="field"><div class="control"><input type="text" name="bagian" id="bagian" class="input" placeholder="Nama Bagian" autocomplete="off" required/><hr/><label for="bagian">Bagian</label></div></div><div class="field"><div class="control"><input type="text" name="kode_gaji" id="kode_gaji" class="input" placeholder="Masukkan Kode Gaji" autocomplete="off" required/><hr/><label for="kode_gaji">Kode Gaji</label></div></div><div class="field"><div class="control"><select name="pangkat" id="pangkat" class="input select" required><option value="ahli">Ahli</option><option value="menengah">Menengah</option><option value="pemula">Pemula</option></select><hr/><label for="pangkat">Pangkat</label></div></div><div class="field"><div class="control"><select name="jabatan" id="jabatan" class="input select" required><option value="operasional">Anggota</option><option value="admin">Admin</option><option value="operasional">Operasional</option><option value="management">Management</option></select><hr/><label for="jabatan">Jabatan</label></div></div><div class="field"><div class="control"><select name="status_pegawai" id="status_pegawai" class="input select" required><option value="kontrak">Rekomendasi</option><option value="tetap">Rekomendasi</option><option value="seleksi">Seleksi</option></select><hr/><label for="status_pegawai">Status Pegawai</label></div></div><div class="field"><div class="control"><select name="jam_kerja" id="jam_kerja" class="input select" required><option value="shift_pagi">Shift Pagi</option><option value="shift_siang">Shift Siang</option><option value="shift_malam">Shift Malam</option><option value="full">Full</option></select><hr/><label for="jam_kerja">Jam Kerja</label></div></div><div class="field"><div class="control"><select name="hari_kerja" id="hari_kerja" class="input select" required><option value="1">1 Hari</option><option value="2">2 Hari</option><option value="3">3 Hari</option><option value="4">4 Hari</option><option value="5">5 Hari</option><option value="6">6 Hari</option><option value="7">7 Hari</option></select><hr/><label for="hari_kerja">Hari Kerja</label></div></div><z-multiselect-field expr44="expr44" name="jadwal" id="jadwal" label="Jadwal" placeholder="Pilih Hari" is-required="1"></z-multiselect-field></div></div></div></div><footer class="panel-footer"><button type="submit" class="button is-secondary">Simpan</button></footer></div></form></div></div></div>', [{
      'type': bindingTypes.TAG,
      'getComponent': getComponent,
      'evaluate': function evaluate(scope) {
        return 'z-titlebar';
      },
      'slots': [],
      'attributes': [{
        'type': expressionTypes.ATTRIBUTE,
        'name': 'links',
        'evaluate': function evaluate(scope) {
          return scope.breadcrumb;
        }
      }],
      'redundantAttribute': 'expr41',
      'selector': '[expr41]'
    }, {
      'type': bindingTypes.TAG,
      'getComponent': getComponent,
      'evaluate': function evaluate(scope) {
        return 'z-panel-header';
      },
      'slots': [],
      'attributes': [],
      'redundantAttribute': 'expr42',
      'selector': '[expr42]'
    }, {
      'type': bindingTypes.TAG,
      'getComponent': getComponent,
      'evaluate': function evaluate(scope) {
        return 'z-date-field';
      },
      'slots': [],
      'attributes': [],
      'redundantAttribute': 'expr43',
      'selector': '[expr43]'
    }, {
      'type': bindingTypes.TAG,
      'getComponent': getComponent,
      'evaluate': function evaluate(scope) {
        return 'z-multiselect-field';
      },
      'slots': [{
        'id': 'default',
        'html': '<option value="senin">Senin</option><option value="selasa">Selasa</option><option value="rabu">Rabu</option><option value="kamis">Kamis</option><option value="jumat">Jumat</option><option value="sabtu">Sabtu</option><option value="minggu">Minggu</option>',
        'bindings': []
      }],
      'attributes': [],
      'redundantAttribute': 'expr44',
      'selector': '[expr44]'
    }]);
  },
  'name': 'z-tambah-karyawan'
};
exports.default = _default;
;

(function () {
  if (module.hot) {
    var hotReload = require('@riotjs/hot-reload').default;

    module.hot.accept();

    if (module.hot.data) {
      var component = require('./z-tambah-karyawan.riot').default;

      hotReload(component);
    }
  }
})();
},{"@riotjs/hot-reload":"node_modules/@riotjs/hot-reload/index.js","./z-tambah-karyawan.riot":"src/riot/z-tambah-karyawan.riot"}],"src/riot/z-daftar-penjualan.riot":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'css': null,
  'exports': {
    onBeforeMount: function onBeforeMount(props, state) {
      this.breadcrumb = [{
        text: 'Penjualan',
        isText: true
      }];
    },
    onMounted: function onMounted(props, state) {
      var form = this.$('form');
      var ajax = new XMLHttpRequest();
      if (!form) return;
      var fields = {
        kode_pesanan: document.querySelector("#kode_pesanan"),
        tanggal_dari: document.querySelector("#tanggal_dari"),
        tanggal_sampai: document.querySelector("#tanggal_sampai"),
        kasir: document.querySelector("#nama_kasir")
      };
      var table = document.querySelector("#tabel-daftar-penjualan"); // specify the columns

      var columnDefs = [{
        headerName: "Kode Pesanan",
        field: "kode_pesanan",
        resizable: true,
        filter: "agTextColumnFilter"
      }, {
        headerName: "Tanggal Pemesanan",
        field: "tanggal_pemesanan",
        resizable: true
      }, {
        headerName: "Cabang",
        field: "cabang",
        resizable: true,
        filter: "agTextColumnFilter"
      }, {
        headerName: "Kasir",
        field: "kasir",
        resizable: true,
        filter: "agTextColumnFilter"
      }, {
        headerName: "Customer",
        field: "customer",
        resizable: true,
        filter: "agTextColumnFilter"
      }, {
        headerName: "Sales",
        field: "sales",
        resizable: true,
        filter: "agTextColumnFilter"
      }, {
        headerName: "Total Harga",
        field: "total_harga",
        resizable: true,
        filter: "agNumberColumnFilter"
      }, {
        headerName: "Action",
        field: "action",
        resizable: true,
        width: 150,
        cellRenderer: renderActionCell
      }];

      function renderActionCell(params) {
        var buttons = document.createElement("div");
        buttons.className = "buttons action-buttons";
        var editButton = document.createElement("button");
        editButton.type = "button";
        editButton.className = "button is-small is-rounded edit-button";
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        var deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "button is-small is-rounded delete-button";
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        buttons.appendChild(editButton);
        buttons.appendChild(deleteButton);
        return buttons;
      } // specify the data


      var rowData = []; // let the grid know which columns and what data to use

      var gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        onGridReady: function onGridReady(params) {
          params.api.sizeColumnsToFit();
        }
      }; // create the grid passing in the div to use together with the columns & data we want to use

      var gridTable = new Grid(table, gridOptions);
      var gridApi = gridTable.gridOptions.api;

      function updateTable(rows) {
        gridApi.setRowData(rows);
      }

      function sendRequest(query) {
        var ajaxUrl = Zep.apiUrl + "/getDaftarPenjualan?kasir=" + query;
        ajax.abort();
        ajax.open("GET", ajaxUrl, true);
        ajax.send();

        ajax.onload = function () {
          var list = JSON.parse(ajax.responseText);
          console.log(list);
          updateTable(list);
        };
      }

      fields.kasir.addEventListener("keypress", function (e) {
        if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27 || e.key === "Enter" || e.keyCode === 13 || e.key === "ArrowLeft" || e.keyCode === 37 || e.key === "ArrowUp" || e.keyCode === 38 || e.key === "ArrowRight" || e.keyCode === 39 || e.key === "ArrowDown" || e.keyCode === 40) {
          return;
        }

        sendRequest(fields.kasir.value);
      });

      function getInitialData() {
        var ajax = new XMLHttpRequest();
        var ajaxUrl = Zep.apiUrl + "/getDaftarPenjualan?kasir=";
        ajax.open("GET", ajaxUrl, true);
        ajax.send();

        ajax.onload = function () {
          var rows = JSON.parse(ajax.responseText);
          updateTable(rows);
        };
      }

      getInitialData();
    }
  },
  'template': function template(_template, expressionTypes, bindingTypes, getComponent) {
    return _template('<div class="main-screen"><div class="container"><z-titlebar expr45="expr45" title="Daftar Penjualan"></z-titlebar><div class="main-content"><form name="filter_daftar_penjualan" action="filterDaftarPenjualan" method="POST"><div class="panel"><z-panel-header expr46="expr46" title="Daftar Penjualan"></z-panel-header><div class="panel-content"><div class="fields material has-3"><z-date-field expr47="expr47" id="tanggal_dari" id="tanggal_dari" label="Dari Tanggal" placeholder="Dari Tanggal" is-filled="true" is-required="true"></z-date-field><div class="field"><div class="control"><input type="text" name="tanggal_sampai" id="tanggal_sampai" class="input use-datepicker" data-default-date="2020-07-01" placeholder="Hingga Tanggal" required/><hr/><label for="tanggal_sampai">Hingga Tanggal</label></div></div><div class="field"><div class="control"><input type="text" name="nama_kasir" id="nama_kasir" class="input" placeholder="Masukkan Nama Kasir" required/><hr/><label for="nama_kasir">Nama Kasir</label></div></div></div><div id="tabel-daftar-penjualan" class="grid-table ag-theme-alpine" style="width: 100%; height: 400px;"></div></div></div></form></div></div></div>', [{
      'type': bindingTypes.TAG,
      'getComponent': getComponent,
      'evaluate': function evaluate(scope) {
        return 'z-titlebar';
      },
      'slots': [],
      'attributes': [{
        'type': expressionTypes.ATTRIBUTE,
        'name': 'links',
        'evaluate': function evaluate(scope) {
          return scope.breadcrumb;
        }
      }],
      'redundantAttribute': 'expr45',
      'selector': '[expr45]'
    }, {
      'type': bindingTypes.TAG,
      'getComponent': getComponent,
      'evaluate': function evaluate(scope) {
        return 'z-panel-header';
      },
      'slots': [],
      'attributes': [],
      'redundantAttribute': 'expr46',
      'selector': '[expr46]'
    }, {
      'type': bindingTypes.TAG,
      'getComponent': getComponent,
      'evaluate': function evaluate(scope) {
        return 'z-date-field';
      },
      'slots': [],
      'attributes': [],
      'redundantAttribute': 'expr47',
      'selector': '[expr47]'
    }]);
  },
  'name': 'z-daftar-penjualan'
};
exports.default = _default;
;

(function () {
  if (module.hot) {
    var hotReload = require('@riotjs/hot-reload').default;

    module.hot.accept();

    if (module.hot.data) {
      var component = require('./z-daftar-penjualan.riot').default;

      hotReload(component);
    }
  }
})();
},{"@riotjs/hot-reload":"node_modules/@riotjs/hot-reload/index.js","./z-daftar-penjualan.riot":"src/riot/z-daftar-penjualan.riot"}],"src/js/app.js":[function(require,module,exports) {
"use strict";

var _riot = require("riot");

var _route = require("@riotjs/route");

var _zApp = _interopRequireDefault(require("../riot/z-app.riot"));

var _zMenubar = _interopRequireDefault(require("../riot/z-menubar.riot"));

var _zTitlebar = _interopRequireDefault(require("../riot/z-titlebar.riot"));

var _zPanelHeader = _interopRequireDefault(require("../riot/z-panel-header.riot"));

var _zTextField = _interopRequireDefault(require("../riot/z-text-field.riot"));

var _zSelectField = _interopRequireDefault(require("../riot/z-select-field.riot"));

var _zMultiselectField = _interopRequireDefault(require("../riot/z-multiselect-field.riot"));

var _zDateField = _interopRequireDefault(require("../riot/z-date-field.riot"));

var _zPageFooter = _interopRequireDefault(require("../riot/z-page-footer.riot"));

var _zDaftarKaryawan = _interopRequireDefault(require("../riot/z-daftar-karyawan.riot"));

var _zTambahKaryawan = _interopRequireDefault(require("../riot/z-tambah-karyawan.riot"));

var _zDaftarPenjualan = _interopRequireDefault(require("../riot/z-daftar-penjualan.riot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _riot.register)("router", _route.Router);
(0, _riot.register)("route", _route.Route);
(0, _riot.register)("z-menubar", _zMenubar.default);
(0, _riot.register)("z-titlebar", _zTitlebar.default);
(0, _riot.register)("z-panel-header", _zPanelHeader.default);
(0, _riot.register)("z-text-field", _zTextField.default);
(0, _riot.register)("z-select-field", _zSelectField.default);
(0, _riot.register)("z-multiselect-field", _zMultiselectField.default);
(0, _riot.register)("z-date-field", _zDateField.default);
(0, _riot.register)("z-page-footer", _zPageFooter.default);
(0, _riot.register)("z-daftar-karyawan", _zDaftarKaryawan.default);
(0, _riot.register)("z-tambah-karyawan", _zTambahKaryawan.default);
(0, _riot.register)("z-daftar-penjualan", _zDaftarPenjualan.default);
(0, _riot.component)(_zApp.default)(window.app);
},{"riot":"node_modules/riot/riot.esm.js","@riotjs/route":"node_modules/@riotjs/route/route.esm.js","../riot/z-app.riot":"src/riot/z-app.riot","../riot/z-menubar.riot":"src/riot/z-menubar.riot","../riot/z-titlebar.riot":"src/riot/z-titlebar.riot","../riot/z-panel-header.riot":"src/riot/z-panel-header.riot","../riot/z-text-field.riot":"src/riot/z-text-field.riot","../riot/z-select-field.riot":"src/riot/z-select-field.riot","../riot/z-multiselect-field.riot":"src/riot/z-multiselect-field.riot","../riot/z-date-field.riot":"src/riot/z-date-field.riot","../riot/z-page-footer.riot":"src/riot/z-page-footer.riot","../riot/z-daftar-karyawan.riot":"src/riot/z-daftar-karyawan.riot","../riot/z-tambah-karyawan.riot":"src/riot/z-tambah-karyawan.riot","../riot/z-daftar-penjualan.riot":"src/riot/z-daftar-penjualan.riot"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52051" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/app.js"], null)