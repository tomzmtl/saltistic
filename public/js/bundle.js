/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _preact = __webpack_require__(2);

	var _Form = __webpack_require__(5);

	var _Form2 = _interopRequireDefault(_Form);

	var _sidebar = __webpack_require__(11);

	var _sidebar2 = _interopRequireDefault(_sidebar);

	var _preactCompat = __webpack_require__(6);

	var _preactCompat2 = _interopRequireDefault(_preactCompat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	document.addEventListener('DOMContentLoaded', function () {
	  _sidebar2.default.init();

	  (0, _preact.render)(_preactCompat2.default.createElement(_Form2.default, null), document.getElementById('formRender'));
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {!function(global, factory) {
	     true ? module.exports = factory() : 'function' == typeof define && define.amd ? define(factory) : global.preact = factory();
	}(this, function() {
	    'use strict';
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	    }
	    function extend(obj, props) {
	        for (var i in props) if (hasOwnProperty.call(props, i)) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        var out = {};
	        for (var i in obj) out[i] = obj[i];
	        return out;
	    }
	    function memoize(fn, mem) {
	        mem = mem || {};
	        return function(k) {
	            return hasOwnProperty.call(mem, k) ? mem[k] : mem[k] = fn(k);
	        };
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    function toArray(obj) {
	        var arr = [], i = obj.length;
	        for (;i--; ) arr[i] = obj[i];
	        return arr;
	    }
	    function styleObjToCss(s) {
	        var str = '';
	        for (var prop in s) {
	            var val = s[prop];
	            if (!empty(val)) {
	                if (str) str += ' ';
	                str += jsToCss(prop);
	                str += ': ';
	                str += val;
	                if ('number' == typeof val && !NON_DIMENSION_PROPS[prop]) str += 'px';
	                str += ';';
	            }
	        }
	        return str;
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function normalize(obj, prop, fn) {
	        var v = obj[prop];
	        if (v && !isString(v)) obj[prop] = fn(v);
	    }
	    function optionsHook(name, a, b) {
	        return hook(options, name, a, b);
	    }
	    function hook(obj, name, a, b, c) {
	        if (obj[name]) return obj[name](a, b, c); else ;
	    }
	    function deepHook(obj, type) {
	        do hook(obj, type); while (obj = obj._component);
	    }
	    function h(nodeName, attributes) {
	        var len = arguments.length, attributeChildren = attributes && attributes.children, children = void 0, arr = void 0, lastSimple = void 0;
	        if (attributeChildren) {
	            delete attributes.children;
	            if (3 > len) return h(nodeName, attributes, attributeChildren);
	        }
	        for (var i = 2; len > i; i++) {
	            var _p = arguments[i];
	            if (!falsey(_p)) {
	                if (!children) children = [];
	                if (_p.join) arr = _p; else {
	                    arr = SHARED_TEMP_ARRAY;
	                    arr[0] = _p;
	                }
	                for (var j = 0; j < arr.length; j++) {
	                    var child = arr[j], simple = !(falsey(child) || child instanceof VNode);
	                    if (simple) child = String(child);
	                    if (simple && lastSimple) children[children.length - 1] += child; else if (!falsey(child)) children.push(child);
	                    lastSimple = simple;
	                }
	            } else ;
	        }
	        var p = new VNode(nodeName, attributes || void 0, children || void 0);
	        optionsHook('vnode', p);
	        return p;
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.'), p0 = path[0], len = path.length;
	        return function(e) {
	            var _component$setState;
	            var t = this, s = component.state, obj = s, v = void 0, i = void 0;
	            if (isString(eventPath)) {
	                v = delve(e, eventPath);
	                if (empty(v) && (t = t._component)) v = delve(t, eventPath);
	            } else v = (t.nodeName + t.type).match(/^input(check|rad)/i) ? t.checked : t.value;
	            if (isFunction(v)) v = v.call(t);
	            if (len > 1) {
	                for (i = 0; len - 1 > i; i++) obj = obj[path[i]] || (obj[path[i]] = {});
	                obj[path[i]] = v;
	                v = s[p0];
	            }
	            component.setState((_component$setState = {}, _component$setState[p0] = v, _component$setState));
	        };
	    }
	    function enqueueRender(component) {
	        if (1 === items.push(component)) (options.debounceRendering || setImmediate)(rerender);
	    }
	    function rerender() {
	        if (items.length) {
	            var currentItems = items, p = void 0;
	            items = itemsOffline;
	            itemsOffline = currentItems;
	            for (;p = currentItems.pop(); ) if (p._dirty) renderComponent(p);
	        }
	    }
	    function isFunctionalComponent(_ref) {
	        var nodeName = _ref.nodeName;
	        return isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY) || EMPTY_BASE;
	    }
	    function ensureNodeData(node) {
	        return node[ATTR_KEY] || (node[ATTR_KEY] = {});
	    }
	    function getNodeType(node) {
	        return node.nodeType;
	    }
	    function appendChildren(parent, children) {
	        var len = children.length, many = len > 2, into = many ? document.createDocumentFragment() : parent;
	        for (var i = 0; len > i; i++) into.appendChild(children[i]);
	        if (many) parent.appendChild(into);
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function getAccessor(node, name, value, cache) {
	        if ('type' !== name && 'style' !== name && name in node) return node[name];
	        var attrs = node[ATTR_KEY];
	        if (cache !== !1 && attrs && hasOwnProperty.call(attrs, name)) return attrs[name];
	        if ('class' === name) return node.className;
	        if ('style' === name) return node.style.cssText; else return value;
	    }
	    function setAccessor(node, name, value) {
	        if ('class' === name) node.className = value || ''; else if ('style' === name) node.style.cssText = value || ''; else if ('dangerouslySetInnerHTML' === name) {
	            if (value && value.__html) node.innerHTML = value.__html;
	        } else if ('key' === name || name in node && 'type' !== name) {
	            node[name] = value;
	            if (falsey(value)) node.removeAttribute(name);
	        } else setComplexAccessor(node, name, value);
	        ensureNodeData(node)[name] = value;
	    }
	    function setComplexAccessor(node, name, value) {
	        if ('on' !== name.substring(0, 2)) {
	            var type = typeof value;
	            if (falsey(value)) node.removeAttribute(name); else if ('function' !== type && 'object' !== type) node.setAttribute(name, value);
	        } else {
	            var _type = normalizeEventName(name), l = node._listeners || (node._listeners = {}), fn = !l[_type] ? 'add' : !value ? 'remove' : null;
	            if (fn) node[fn + 'EventListener'](_type, eventProxy);
	            l[_type] = value;
	        }
	    }
	    function eventProxy(e) {
	        var fn = this._listeners[normalizeEventName(e.type)];
	        if (fn) return fn.call(this, optionsHook('event', e) || e); else ;
	    }
	    function getNodeAttributes(node) {
	        return node[ATTR_KEY] || getRawNodeAttributes(node) || EMPTY;
	    }
	    function getRawNodeAttributes(node) {
	        var list = node.attributes;
	        if (!list || !list.getNamedItem) return list; else return getAttributesAsObject(list);
	    }
	    function getAttributesAsObject(list) {
	        var attrs = void 0;
	        for (var i = list.length; i--; ) {
	            var item = list[i];
	            if (!attrs) attrs = {};
	            attrs[item.name] = item.value;
	        }
	        return attrs;
	    }
	    function isSameNodeType(node, vnode) {
	        if (isFunctionalComponent(vnode)) return !0;
	        var nodeName = vnode.nodeName;
	        if (isFunction(nodeName)) return node._componentConstructor === nodeName;
	        if (3 === getNodeType(node)) return isString(vnode); else return toLowerCase(node.nodeName) === nodeName;
	    }
	    function getNodeProps(vnode) {
	        var props = clone(vnode.attributes), c = vnode.children;
	        if (c) props.children = c;
	        var defaultProps = vnode.nodeName.defaultProps;
	        if (defaultProps) for (var i in defaultProps) if (hasOwnProperty.call(defaultProps, i) && !(i in props)) props[i] = defaultProps[i];
	        return props;
	    }
	    function collectNode(node) {
	        cleanNode(node);
	        var name = normalizeName(node.nodeName), list = nodes[name];
	        if (list) list.push(node); else nodes[name] = [ node ];
	    }
	    function createNode(nodeName) {
	        var name = normalizeName(nodeName), list = nodes[name], node = list && list.pop() || document.createElement(nodeName);
	        ensureNodeData(node);
	        return node;
	    }
	    function cleanNode(node) {
	        removeNode(node);
	        if (3 !== getNodeType(node)) {
	            if (!node[ATTR_KEY]) node[ATTR_KEY] = getRawNodeAttributes(node);
	            node._component = node._componentConstructor = null;
	        }
	    }
	    function diff(dom, vnode, context) {
	        var originalAttributes = vnode.attributes;
	        for (;isFunctionalComponent(vnode); ) vnode = buildFunctionalComponent(vnode, context);
	        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context);
	        if (isString(vnode)) {
	            if (dom) {
	                var type = getNodeType(dom);
	                if (3 === type) {
	                    dom[TEXT_CONTENT] = vnode;
	                    return dom;
	                } else if (1 === type) collectNode(dom);
	            }
	            return document.createTextNode(vnode);
	        }
	        var out = dom, nodeName = vnode.nodeName || UNDEFINED_ELEMENT;
	        if (!dom) out = createNode(nodeName); else if (toLowerCase(dom.nodeName) !== nodeName) {
	            out = createNode(nodeName);
	            appendChildren(out, toArray(dom.childNodes));
	            recollectNodeTree(dom);
	        }
	        innerDiffNode(out, vnode, context);
	        diffAttributes(out, vnode);
	        if (originalAttributes && originalAttributes.ref) (out[ATTR_KEY].ref = originalAttributes.ref)(out);
	        return out;
	    }
	    function innerDiffNode(dom, vnode, context) {
	        var children = void 0, keyed = void 0, keyedLen = 0, len = dom.childNodes.length, childrenLen = 0;
	        if (len) {
	            children = [];
	            for (var i = 0; len > i; i++) {
	                var child = dom.childNodes[i], key = child._component ? child._component.__key : getAccessor(child, 'key');
	                if (!empty(key)) {
	                    if (!keyed) keyed = {};
	                    keyed[key] = child;
	                    keyedLen++;
	                } else children[childrenLen++] = child;
	            }
	        }
	        var vchildren = vnode.children, vlen = vchildren && vchildren.length, min = 0;
	        if (vlen) for (var i = 0; vlen > i; i++) {
	            var vchild = vchildren[i], child = void 0;
	            if (keyedLen) {
	                var attrs = vchild.attributes, key = attrs && attrs.key;
	                if (!empty(key) && hasOwnProperty.call(keyed, key)) {
	                    child = keyed[key];
	                    keyed[key] = null;
	                    keyedLen--;
	                }
	            }
	            if (!child && childrenLen > min) for (var j = min; childrenLen > j; j++) {
	                var c = children[j];
	                if (c && isSameNodeType(c, vchild)) {
	                    child = c;
	                    children[j] = null;
	                    if (j === childrenLen - 1) childrenLen--;
	                    if (j === min) min++;
	                    break;
	                }
	            }
	            child = diff(child, vchild, context);
	            if (dom.childNodes[i] !== child) {
	                var c = child.parentNode !== dom && child._component, next = dom.childNodes[i + 1];
	                if (c) deepHook(c, 'componentWillMount');
	                if (next) dom.insertBefore(child, next); else dom.appendChild(child);
	                if (c) deepHook(c, 'componentDidMount');
	            }
	        }
	        if (keyedLen) for (var i in keyed) if (hasOwnProperty.call(keyed, i) && keyed[i]) children[min = childrenLen++] = keyed[i];
	        if (childrenLen > min) removeOrphanedChildren(children);
	    }
	    function removeOrphanedChildren(children, unmountOnly) {
	        for (var i = children.length; i--; ) {
	            var child = children[i];
	            if (child) recollectNodeTree(child, unmountOnly);
	        }
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var attrs = node[ATTR_KEY];
	        if (attrs) hook(attrs, 'ref', null);
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly); else {
	            if (!unmountOnly) {
	                if (1 !== getNodeType(node)) {
	                    removeNode(node);
	                    return;
	                }
	                collectNode(node);
	            }
	            var c = node.childNodes;
	            if (c && c.length) removeOrphanedChildren(c, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, vnode) {
	        var old = getNodeAttributes(dom) || EMPTY, attrs = vnode.attributes || EMPTY, name = void 0, value = void 0;
	        for (name in old) if (empty(attrs[name])) setAccessor(dom, name, null);
	        if (attrs !== EMPTY) for (name in attrs) if (hasOwnProperty.call(attrs, name)) {
	            value = attrs[name];
	            if (!empty(value) && value != getAccessor(dom, name)) setAccessor(dom, name, value);
	        }
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(Ctor, props, context) {
	        var list = components[Ctor.name], len = list && list.length, c = void 0;
	        for (var i = 0; len > i; i++) {
	            c = list[i];
	            if (c.constructor === Ctor) {
	                list.splice(i, 1);
	                var inst = new Ctor(props, context);
	                inst.nextBase = c.base;
	                return inst;
	            }
	        }
	        return new Ctor(props, context);
	    }
	    function triggerComponentRender(component) {
	        if (!component._dirty) {
	            component._dirty = !0;
	            enqueueRender(component);
	        }
	    }
	    function setComponentProps(component, props, opts, context) {
	        var d = component._disableRendering;
	        component.__ref = props.ref;
	        component.__key = props.key;
	        delete props.ref;
	        delete props.key;
	        component._disableRendering = !0;
	        if (context) {
	            if (!component.prevContext) component.prevContext = component.context;
	            component.context = context;
	        }
	        if (component.base) hook(component, 'componentWillReceiveProps', props, component.context);
	        if (!component.prevProps) component.prevProps = component.props;
	        component.props = props;
	        component._disableRendering = d;
	        if (!opts || opts.render !== !1) if (opts && opts.renderSync || options.syncComponentUpdates !== !1) renderComponent(component); else triggerComponentRender(component);
	        hook(component, '__ref', component);
	    }
	    function renderComponent(component, opts) {
	        if (!component._disableRendering) {
	            var skip = void 0, rendered = void 0, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, initialBase = isUpdate || component.nextBase;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (hook(component, 'shouldComponentUpdate', props, state, context) === !1) skip = !0; else hook(component, 'componentWillUpdate', props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                rendered = hook(component, 'render', props, state, context);
	                var childComponent = rendered && rendered.nodeName, childContext = component.getChildContext ? component.getChildContext() : context, toUnmount = void 0, base = void 0;
	                if (isFunction(childComponent) && childComponent.prototype.render) {
	                    var inst = component._component;
	                    if (inst && inst.constructor !== childComponent) {
	                        toUnmount = inst;
	                        inst = null;
	                    }
	                    var childProps = getNodeProps(rendered);
	                    if (inst) setComponentProps(inst, childProps, SYNC_RENDER, childContext); else {
	                        inst = createComponent(childComponent, childProps, childContext);
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        if (isUpdate) deepHook(inst, 'componentWillMount');
	                        setComponentProps(inst, childProps, NO_RENDER, childContext);
	                        renderComponent(inst, DOM_RENDER);
	                        if (isUpdate) deepHook(inst, 'componentDidMount');
	                    }
	                    base = inst.base;
	                } else {
	                    var cbase = initialBase;
	                    toUnmount = component._component;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || opts && opts.build) base = diff(cbase, rendered || EMPTY_BASE, childContext);
	                }
	                if (initialBase && base !== initialBase) {
	                    var p = initialBase.parentNode;
	                    if (p && base !== p) p.replaceChild(base, initialBase);
	                }
	                if (toUnmount) unmountComponent(toUnmount, !0);
	                component.base = base;
	                if (base) {
	                    var componentRef = component, t = component;
	                    for (;t = t._parentComponent; ) componentRef = t;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	                if (isUpdate) hook(component, 'componentDidUpdate', previousProps, previousState, previousContext);
	            }
	            var cb = component._renderCallbacks, fn = void 0;
	            if (cb) for (;fn = cb.pop(); ) fn.call(component);
	            return rendered;
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context) {
	        var c = dom && dom._component, oldDom = dom;
	        var isOwner = c && dom._componentConstructor === vnode.nodeName;
	        for (;c && !isOwner && (c = c._parentComponent); ) isOwner = c.constructor === vnode.nodeName;
	        if (isOwner) {
	            setComponentProps(c, getNodeProps(vnode), SYNC_RENDER, context);
	            dom = c.base;
	        } else {
	            if (c) {
	                unmountComponent(c, !0);
	                dom = oldDom = null;
	            }
	            dom = createComponentFromVNode(vnode, dom, context);
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function createComponentFromVNode(vnode, dom, context) {
	        var props = getNodeProps(vnode);
	        var component = createComponent(vnode.nodeName, props, context);
	        if (dom && !component.base) component.base = dom;
	        setComponentProps(component, props, NO_RENDER, context);
	        renderComponent(component, DOM_RENDER);
	        return component.base;
	    }
	    function unmountComponent(component, remove) {
	        hook(component, '__ref', null);
	        hook(component, 'componentWillUnmount');
	        var inner = component._component;
	        if (inner) {
	            unmountComponent(inner, remove);
	            remove = !1;
	        }
	        var base = component.base;
	        if (base) {
	            if (remove !== !1) removeNode(base);
	            removeOrphanedChildren(base.childNodes, !0);
	        }
	        if (remove) {
	            component._parentComponent = null;
	            collectComponent(component);
	        }
	        hook(component, 'componentDidUnmount');
	    }
	    function Component(props, context) {
	        this._dirty = this._disableRendering = !1;
	        this.prevState = this.prevProps = this.prevContext = this.base = this.nextBase = this._parentComponent = this._component = this.__ref = this.__key = this._linkedStates = this._renderCallbacks = null;
	        this.context = context || {};
	        this.props = props;
	        this.state = hook(this, 'getInitialState') || {};
	    }
	    function render(vnode, parent, merge) {
	        var existing = merge && merge._component && merge._componentConstructor === vnode.nodeName, built = diff(merge, vnode), c = !existing && built._component;
	        if (c) deepHook(c, 'componentWillMount');
	        if (built.parentNode !== parent) parent.appendChild(built);
	        if (c) deepHook(c, 'componentDidMount');
	        return built;
	    }
	    var NO_RENDER = {
	        render: !1
	    };
	    var SYNC_RENDER = {
	        renderSync: !0
	    };
	    var DOM_RENDER = {
	        build: !0
	    };
	    var EMPTY = {};
	    var EMPTY_BASE = '';
	    var HAS_DOM = 'undefined' != typeof document;
	    var TEXT_CONTENT = !HAS_DOM || 'textContent' in document ? 'textContent' : 'nodeValue';
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol['for']('preactattr') : '__preactattr_';
	    var UNDEFINED_ELEMENT = 'undefined';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var isFunction = function(obj) {
	        return 'function' == typeof obj;
	    };
	    var isString = function(obj) {
	        return 'string' == typeof obj;
	    };
	    var hasOwnProperty = {}.hasOwnProperty;
	    var empty = function(x) {
	        return null == x;
	    };
	    var falsey = function(value) {
	        return value === !1 || null == value;
	    };
	    var jsToCss = memoize(function(s) {
	        return s.replace(/([A-Z])/g, '-$1').toLowerCase();
	    });
	    var toLowerCase = memoize(function(s) {
	        return s.toLowerCase();
	    });
	    var ch = void 0;
	    try {
	        ch = new MessageChannel();
	    } catch (e) {}
	    var setImmediate = ch ? function(f) {
	        ch.port1.onmessage = f;
	        ch.port2.postMessage('');
	    } : setTimeout;
	    var options = {
	        vnode: function(n) {
	            var attrs = n.attributes;
	            if (attrs && !isFunction(n.nodeName)) {
	                var p = attrs.className;
	                if (p) {
	                    attrs['class'] = p;
	                    delete attrs.className;
	                }
	                if (attrs['class']) normalize(attrs, 'class', hashToClassName);
	                if (attrs.style) normalize(attrs, 'style', styleObjToCss);
	            }
	        }
	    };
	    var SHARED_TEMP_ARRAY = [];
	    var items = [];
	    var itemsOffline = [];
	    var normalizeEventName = memoize(function(t) {
	        return t.replace(/^on/i, '').toLowerCase();
	    });
	    var nodes = {};
	    var normalizeName = memoize(function(name) {
	        return name.toUpperCase();
	    });
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {}), cacheKey = key + '|' + (eventPath || '');
	            return c[cacheKey] || (c[cacheKey] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            triggerComponentRender(this);
	        },
	        forceUpdate: function() {
	            renderComponent(this);
	        },
	        render: function() {
	            return null;
	        }
	    });
	    var preact = {
	        h: h,
	        Component: Component,
	        render: render,
	        rerender: rerender,
	        options: options,
	        hooks: options
	    };
	    return preact;
	});
	//# sourceMappingURL=preact.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).setImmediate))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(4).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).setImmediate, __webpack_require__(3).clearImmediate))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(2);

	var _preactCompat = __webpack_require__(6);

	var _preactCompat2 = _interopRequireDefault(_preactCompat);

	var _PlayerCard = __webpack_require__(9);

	var _PlayerCard2 = _interopRequireDefault(_PlayerCard);

	var _RadioSet = __webpack_require__(12);

	var _RadioSet2 = _interopRequireDefault(_RadioSet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = function (_Component) {
	  _inherits(Form, _Component);

	  function Form() {
	    _classCallCheck(this, Form);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this));

	    _this.state.stocks = 2;
	    return _this;
	  }

	  _createClass(Form, [{
	    key: 'handleStockChange',
	    value: function handleStockChange(e) {
	      this.setState({ stocks: parseInt(e.target.value, 10) });
	    }
	  }, {
	    key: 'renderStockSelector',
	    value: function renderStockSelector() {
	      var _this2 = this;

	      var props = {
	        name: 'stocks',
	        onChange: function onChange(e) {
	          return _this2.handleStockChange(e);
	        },
	        required: true,
	        values: [2, 3],
	        checked: this.state.stocks
	      };

	      return _preactCompat2.default.createElement(_RadioSet2.default, props);
	    }
	  }, {
	    key: 'renderScoreOptions',
	    value: function renderScoreOptions() {
	      var options = [];
	      for (var i = 0; i <= this.state.stocks; i++) {
	        options.push(_preactCompat2.default.createElement(
	          'option',
	          { value: i },
	          i
	        ));
	      }
	      return options;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var playerProps = {
	        stocks: this.state.stocks,
	        players: window.saltisticData.players,
	        characters: window.saltisticData.characters
	      };

	      return _preactCompat2.default.createElement(
	        'div',
	        null,
	        _preactCompat2.default.createElement(
	          'div',
	          { className: 'ui card stocks' },
	          _preactCompat2.default.createElement(
	            'div',
	            { className: 'required field' },
	            _preactCompat2.default.createElement(
	              'label',
	              null,
	              'Stocks'
	            ),
	            this.renderStockSelector()
	          )
	        ),
	        _preactCompat2.default.createElement(
	          'div',
	          { className: 'ui cards' },
	          _preactCompat2.default.createElement(_PlayerCard2.default, _extends({ player: '1' }, playerProps)),
	          _preactCompat2.default.createElement(_PlayerCard2.default, _extends({ player: '2' }, playerProps))
	        )
	      );
	    }
	  }]);

	  return Form;
	}(_preact.Component);

	exports.default = Form;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {(function (global, factory) {
		 true ? factory(exports, __webpack_require__(7), __webpack_require__(8), __webpack_require__(2)) :
		typeof define === 'function' && define.amd ? define(['exports', 'proptypes', 'preact-svg', 'preact'], factory) :
		(factory((global.preactCompat = global.preactCompat || {}),global.PropTypes,global.preactSvg,global.preact));
	}(this, function (exports,PropTypes,SVG,preact) { 'use strict';

		PropTypes = 'default' in PropTypes ? PropTypes['default'] : PropTypes;
		SVG = 'default' in SVG ? SVG['default'] : SVG;

		var babelHelpers = {};

		babelHelpers.classCallCheck = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

		babelHelpers.createClass = function () {
		  function defineProperties(target, props) {
		    for (var i = 0; i < props.length; i++) {
		      var descriptor = props[i];
		      descriptor.enumerable = descriptor.enumerable || false;
		      descriptor.configurable = true;
		      if ("value" in descriptor) descriptor.writable = true;
		      Object.defineProperty(target, descriptor.key, descriptor);
		    }
		  }

		  return function (Constructor, protoProps, staticProps) {
		    if (protoProps) defineProperties(Constructor.prototype, protoProps);
		    if (staticProps) defineProperties(Constructor, staticProps);
		    return Constructor;
		  };
		}();

		babelHelpers.inherits = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		  }

		  subClass.prototype = Object.create(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		};

		babelHelpers.possibleConstructorReturn = function (self, call) {
		  if (!self) {
		    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		  }

		  return call && (typeof call === "object" || typeof call === "function") ? call : self;
		};

		babelHelpers;

		var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

		var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

		var AUTOBIND_BLACKLIST = {
			constructor: 1,
			render: 1,
			shouldComponentUpdate: 1,
			componentWillRecieveProps: 1,
			componentWillUpdate: 1,
			componentDidUpdate: 1,
			componentWillMount: 1,
			componentDidMount: 1,
			componentWillUnmount: 1,
			componentDidUnmount: 1
		};

		var BYPASS_HOOK = {};

		var DEV = typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production';

		var EmptyComponent = function () {
			return null;
		};

		var VNode = preact.h('').constructor;
		VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;

		Object.defineProperty(VNode.prototype, 'type', {
			get: function () {
				return this.nodeName;
			},
			set: function (v) {
				this.nodeName = v;
			}
		});

		Object.defineProperty(VNode.prototype, 'props', {
			get: function () {
				return this.attributes;
			},
			set: function (v) {
				this.attributes = v;
			}
		});

		function render$1(vnode, parent, callback) {
			var prev = parent._preactCompatRendered;
			if (prev && prev.parentNode !== parent) prev = null;
			var out = preact.render(vnode, parent, prev);
			parent._preactCompatRendered = out;
			if (typeof callback === 'function') callback();
			return out && out._component;
		}

		function unmountComponentAtNode(container) {
			var existing = container._preactCompatRendered;
			if (existing && existing.parentNode === container) {
				preact.render(preact.h(EmptyComponent), container, existing);
				return true;
			}
			return false;
		}

		var ARR = [];

		var Children = {
			map: function (children, fn, ctx) {
				children = Children.toArray(children);
				if (ctx && ctx !== children) fn = fn.bind(ctx);
				return children.map(fn);
			},
			forEach: function (children, fn, ctx) {
				children = Children.toArray(children);
				if (ctx && ctx !== children) fn = fn.bind(ctx);
				children.forEach(fn);
			},
			count: function (children) {
				children = Children.toArray(children);
				return children.length;
			},
			only: function (children) {
				children = Children.toArray(children);
				if (children.length !== 1) throw new Error('Children.only() expects only one child.');
				return children[0];
			},
			toArray: function (children) {
				return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
			}
		};

		var currentComponent = void 0;

		function createFactory(type) {
			return function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				return createElement.apply(undefined, [type].concat(args));
			};
		}

		var DOM = {};
		for (var i = ELEMENTS.length; i--;) {
			DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
		}

		function createElement() {
			var vnode = preact.h.apply(undefined, arguments);

			if (vnode.nodeName === 'svg') {
				vnode.nodeName = SVG;
			}

			applyClassName(vnode);

			var ref = vnode.attributes && vnode.attributes.ref;
			if (currentComponent && ref && typeof ref === 'string') {
				vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
			}

			return vnode;
		}

		function cloneElement(element, props) {
			for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
				children[_key2 - 2] = arguments[_key2];
			}

			return createElement.apply(undefined, [element.nodeName || element.type, extend({}, element.attributes || element.props || {}, props)].concat(children));
		}

		function isValidElement(element) {
			return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
		}

		function createStringRefProxy(name, component) {
			return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
				if (component && component.refs) {
					component.refs[name] = resolved;
					if (resolved === null) {
						delete component._refProxies[name];
						component = null;
					}
				}
			});
		}

		function applyClassName(_ref) {
			var attributes = _ref.attributes;

			if (!attributes) return;
			var cl = attributes.className || attributes.class;
			if (cl) attributes.className = cl;
		}

		function extend(base) {
			for (var _len3 = arguments.length, objs = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
				objs[_key3 - 1] = arguments[_key3];
			}

			for (var i = 0; i < objs.length; i++) {
				for (var key in objs[i]) {
					if (objs[i].hasOwnProperty(key)) {
						var v = objs[i][key];
						if (v !== null && v !== undefined) {
							base[key] = v;
						}
					}
				}
			}
			return base;
		}

		var findDOMNode = function (component) {
			return component.base || component;
		};

		function F() {}

		function createClass(obj) {
			var cl = function (props, context) {
				extend(this, obj);
				Component$1.call(this, props, context, BYPASS_HOOK);
				bindAll(this);
				newComponentHook.call(this, props, context);
			};

			if (obj.propTypes) {
				cl.propTypes = obj.propTypes;
			}
			if (obj.defaultProps) {
				cl.defaultProps = obj.defaultProps;
			}
			if (obj.getDefaultProps) {
				cl.defaultProps = obj.getDefaultProps();
			}

			F.prototype = Component$1.prototype;
			cl.prototype = new F();
			cl.prototype.constructor = cl;

			cl.displayName = obj.displayName || 'Component';

			return cl;
		}

		function bindAll(ctx) {
			for (var i in ctx) {
				var v = ctx[i];
				if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
					(ctx[i] = v.bind(ctx)).__bound = true;
				}
			}
		}

		function callMethod(ctx, m, args) {
			if (typeof m === 'string') {
				m = ctx.constructor.prototype[m];
			}
			if (typeof m === 'function') {
				return m.apply(ctx, args);
			}
		}

		function multihook() {
			for (var _len4 = arguments.length, hooks = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				hooks[_key4] = arguments[_key4];
			}

			return function () {
				var ret = void 0;

				for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
					args[_key5] = arguments[_key5];
				}

				for (var i = 0; i < hooks.length; i++) {
					var r = callMethod(this, hooks[i], args);
					if (r !== undefined) ret = r;
				}
				return ret;
			};
		}

		function newComponentHook(props, context) {
			propsHook.call(this, props, context);
			this.componentWillReceiveProps = multihook(this.componentWillReceiveProps || 'componentWillReceiveProps', propsHook);
			this.render = multihook(beforeRender, this.render || 'render', afterRender);
		}

		function propsHook(props) {
			if (!props) return;

			var c = props.children;
			if (c && c.length === 1) {
				props.children = c[0];

				if (props.children && typeof props.children === 'object') {
					props.children.length = 1;
					props.children[0] = props.children;
				}
			}

			if (DEV) {
				var propTypes = this.propTypes || this.constructor.propTypes;
				if (propTypes) {
					for (var prop in propTypes) {
						if (propTypes.hasOwnProperty(prop) && typeof propTypes[prop] === 'function') {
							var err = propTypes[prop](props, prop, this.constructor.name, 'prop');
							if (err) throw err;
						}
					}
				}
			}
		}

		function beforeRender() {
			currentComponent = this;
		}

		function afterRender() {
			if (currentComponent === this) {
				currentComponent = null;
			}
		}

		var Component$1 = function (_PreactComponent) {
			babelHelpers.inherits(Component, _PreactComponent);

			function Component(props, context, opts) {
				babelHelpers.classCallCheck(this, Component);

				var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this, props, context));

				_this.refs = {};
				_this._refProxies = {};
				if (opts !== BYPASS_HOOK) {
					newComponentHook.call(_this, props, context);
				}
				return _this;
			}

			babelHelpers.createClass(Component, [{
				key: 'getDOMNode',
				value: function getDOMNode() {
					return this.base;
				}
			}, {
				key: 'isMounted',
				value: function isMounted() {
					return !!this.base;
				}
			}]);
			return Component;
		}(preact.Component);

		var index = { DOM: DOM, PropTypes: PropTypes, Children: Children, render: render$1, createClass: createClass, createFactory: createFactory, createElement: createElement, cloneElement: cloneElement, isValidElement: isValidElement, findDOMNode: findDOMNode, unmountComponentAtNode: unmountComponentAtNode, Component: Component$1 };

		exports.DOM = DOM;
		exports.PropTypes = PropTypes;
		exports.Children = Children;
		exports.render = render$1;
		exports.createClass = createClass;
		exports.createFactory = createFactory;
		exports.createElement = createElement;
		exports.cloneElement = cloneElement;
		exports.isValidElement = isValidElement;
		exports.findDOMNode = findDOMNode;
		exports.unmountComponentAtNode = unmountComponentAtNode;
		exports.Component = Component$1;
		exports['default'] = index;

	}));
	//# sourceMappingURL=preact-compat.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.PropTypes = mod.exports;
	  }
	})(this, function (exports, module) {

	  'use strict';

	  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	  var ReactElement = {};

	  ReactElement.isValidElement = function (object) {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  var ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };

	  var emptyFunction = {
	    thatReturns: function thatReturns(what) {
	      return function () {
	        return what;
	      };
	    }
	  };

	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  var ANONYMOUS = '<<anonymous>>';

	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  function createChainableTypeChecker(validate) {
	    function checkType(isRequired, props, propName, componentName, location, propFullName) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	      if (props[propName] == null) {
	        var locationName = ReactPropTypeLocationNames[location];
	        if (isRequired) {
	          return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        var locationName = ReactPropTypeLocationNames[location];

	        var preciseType = getPreciseType(propValue);

	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturns(null));
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var locationName = ReactPropTypeLocationNames[location];
	        var propType = getPropType(propValue);
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!ReactElement.isValidElement(props[propName])) {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var locationName = ReactPropTypeLocationNames[location];
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      return createChainableTypeChecker(function () {
	        return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
	      });
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (propValue === expectedValues[i]) {
	          return null;
	        }
	      }

	      var locationName = ReactPropTypeLocationNames[location];
	      var valuesString = JSON.stringify(expectedValues);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      return createChainableTypeChecker(function () {
	        return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
	      });
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName) == null) {
	          return null;
	        }
	      }

	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        var locationName = ReactPropTypeLocationNames[location];
	        return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || ReactElement.isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      return 'object';
	    }
	    return propType;
	  }

	  function getPreciseType(propValue) {
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  module.exports = ReactPropTypes;
	});

	//# sourceMappingURL=index.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? module.exports = factory(__webpack_require__(2)) :
		typeof define === 'function' && define.amd ? define(['preact'], factory) :
		(global.preactSvg = factory(global.preact));
	}(this, function (preact) { 'use strict';

		var babelHelpers = {};

		babelHelpers.classCallCheck = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

		babelHelpers.extends = Object.assign || function (target) {
		  for (var i = 1; i < arguments.length; i++) {
		    var source = arguments[i];

		    for (var key in source) {
		      if (Object.prototype.hasOwnProperty.call(source, key)) {
		        target[key] = source[key];
		      }
		    }
		  }

		  return target;
		};

		babelHelpers.inherits = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		  }

		  subClass.prototype = Object.create(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		};

		babelHelpers.objectWithoutProperties = function (obj, keys) {
		  var target = {};

		  for (var i in obj) {
		    if (keys.indexOf(i) >= 0) continue;
		    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
		    target[i] = obj[i];
		  }

		  return target;
		};

		babelHelpers.possibleConstructorReturn = function (self, call) {
		  if (!self) {
		    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		  }

		  return call && (typeof call === "object" || typeof call === "function") ? call : self;
		};

		babelHelpers;

		var DOM = typeof document !== 'undefined' && !!document.createElement;

		var SVG_ATTRS = ['viewBox'];

		var NS = {
			xlink: 'http://www.w3.org/1999/xlink'
		};

		var NS_ATTR = /^([a-zA-Z]+)(?:\:|([A-Z]))/;

		var PROP_TO_ATTR_MAP = {
			'className': 'class'
		};

		var EMPTY = {};

		var updateMode = false;

		if (DOM) {
			(function () {
				var div = document.createElement('div');

				var oldCreate = document.createElement;
				document.createElement = function (name) {
					if (updateMode || name === 'svg') {
						var el = document.createElementNS('http://www.w3.org/2000/svg', name);

						el.setAttribute = createAttributeShim('setAttribute');
						el.getAttribute = createAttributeShim('getAttribute');
						el.removeAttribute = createAttributeShim('removeAttribute');
						for (var key in el) {
							if (~SVG_ATTRS.indexOf(key) || !(key in div) || PROP_TO_ATTR_MAP.hasOwnProperty(key)) {
								overwriteProperty(el, key);
							}
						}
						return el;
					}
					return oldCreate.call(document, name);
				};
			})();
		}

		var PROPERTY_ERRORS = {};
		var hasPropertyErrors = false;

		function overwriteProperty(el, key) {
			var err = PROPERTY_ERRORS[key];
			if (err === false) {
				Object.defineProperty(el, key, contentPropertyDef(key));
			} else {
				attemptOverwriteProperty(el, key);
			}
		}

		function attemptOverwriteProperty(el, key) {
			try {
				Object.defineProperty(el, key, contentPropertyDef(key));
				PROPERTY_ERRORS[key] = false;
			} catch (e) {
				if (!PROPERTY_ERRORS[key]) {
					var err = el.nodeName + ': ' + e;
					PROPERTY_ERRORS[key] = err;
					if (!hasPropertyErrors && 'undefined' !== typeof console && console.warn) {
						hasPropertyErrors = true;
						console.warn('Error overwriting some SVG properties.', { errors: PROPERTY_ERRORS });
					}
				}
			}
		}

		var memoize = function (fn) {
			var mem = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
			return function (k) {
				return mem.hasOwnProperty(k) ? mem[k] : mem[k] = fn(k);
			};
		};

		var contentPropertyDef = memoize(function (prop) {
			var attr = arguments.length <= 1 || arguments[1] === undefined ? PROP_TO_ATTR_MAP[prop] || prop : arguments[1];
			return {
				set: function (v) {
					if (v === null || v === undefined) this.removeAttribute(attr);else this.setAttribute(attr, v);
				},
				get: function () {
					return this.getAttribute(attr);
				}
			};
		});

		var createAttributeShim = memoize(function (method) {
			return function (name, value) {
				var proto = this.constructor.prototype,
				    p = name.match(NS_ATTR);
				if (p && NS.hasOwnProperty(p[1])) {
					name = name.replace(NS_ATTR, '$2').toLowerCase();
					var ns = NS[p[1]];
					return proto[method + 'NS'].call(this, ns, name, value);
				} else {
					return proto[method].call(this, name, value);
				}
			};
		});

		var SVG = function (_Component) {
			babelHelpers.inherits(SVG, _Component);

			function SVG() {
				babelHelpers.classCallCheck(this, SVG);
				return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
			}

			SVG.prototype.componentWillUpdate = function componentWillUpdate() {
				updateMode = true;
			};

			SVG.prototype.componentDidUpdate = function componentDidUpdate() {
				updateMode = false;
			};

			SVG.prototype.render = function render(_ref) {
				var children = _ref.children;
				var props = babelHelpers.objectWithoutProperties(_ref, ['children']);

				if (!this.hasRendered) {
					this.hasRendered = updateMode = true;

					this.setState(EMPTY, setStateUpdateProxy(this));
				}

				return preact.h(
					'svg',
					babelHelpers.extends({ version: '1.1', xmlns: 'http://www.w3.org/2000/svg' }, props),
					children
				);
			};

			return SVG;
		}(preact.Component);

		function setStateUpdateProxy(component) {
			return function () {
				component.componentDidUpdate();
				component = null;
			};
		}

		return SVG;

	}));
	//# sourceMappingURL=preact-svg.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(2);

	var _preactCompat = __webpack_require__(6);

	var _preactCompat2 = _interopRequireDefault(_preactCompat);

	var _Dropdown = __webpack_require__(10);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	var _CharacterDropdown = __webpack_require__(14);

	var _CharacterDropdown2 = _interopRequireDefault(_CharacterDropdown);

	var _RadioSet = __webpack_require__(12);

	var _RadioSet2 = _interopRequireDefault(_RadioSet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PlayerCard = function (_Component) {
	  _inherits(PlayerCard, _Component);

	  function PlayerCard() {
	    _classCallCheck(this, PlayerCard);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerCard).apply(this, arguments));
	  }

	  _createClass(PlayerCard, [{
	    key: 'renderNameDropdown',
	    value: function renderNameDropdown() {
	      var optns = this.props.players.map(function (player) {
	        return {
	          label: player.name,
	          value: player.id
	        };
	      });

	      var props = {
	        name: 'player_' + this.props.player,
	        required: true,
	        optns: optns
	      };
	      return _preactCompat2.default.createElement(_Dropdown2.default, props);
	    }
	  }, {
	    key: 'renderCharacterDropdown',
	    value: function renderCharacterDropdown() {
	      var optns = this.props.characters.map(function (character) {
	        return {
	          label: character.name,
	          value: character.id,
	          code: character.code
	        };
	      });

	      var props = {
	        name: 'character_' + this.props.player,
	        required: true,
	        optns: optns
	      };
	      return _preactCompat2.default.createElement(_CharacterDropdown2.default, props);
	    }
	  }, {
	    key: 'renderScoreOptions',
	    value: function renderScoreOptions() {
	      var values = [];
	      for (var i = 1; i <= this.props.stocks; i++) {
	        values.push(i);
	      }

	      var props = {
	        name: 'score_' + this.props.player,
	        required: true,
	        values: values
	      };

	      return _preactCompat2.default.createElement(_RadioSet2.default, props);
	    }
	  }, {
	    key: 'render',
	    value: function render(props) {
	      return _preactCompat2.default.createElement(
	        'div',
	        { className: 'ui card player' },
	        _preactCompat2.default.createElement(
	          'h2',
	          null,
	          'Player ',
	          props.player
	        ),
	        _preactCompat2.default.createElement(
	          'div',
	          { className: 'required field' },
	          _preactCompat2.default.createElement(
	            'label',
	            null,
	            'Name'
	          ),
	          this.renderNameDropdown()
	        ),
	        _preactCompat2.default.createElement(
	          'div',
	          { className: 'required field' },
	          _preactCompat2.default.createElement(
	            'label',
	            null,
	            'Character'
	          ),
	          this.renderCharacterDropdown()
	        ),
	        _preactCompat2.default.createElement(
	          'div',
	          { className: 'required field' },
	          _preactCompat2.default.createElement(
	            'label',
	            null,
	            'Score'
	          ),
	          this.renderScoreOptions()
	        )
	      );
	    }
	  }]);

	  return PlayerCard;
	}(_preact.Component);

	exports.default = PlayerCard;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(2);

	var _preactCompat = __webpack_require__(6);

	var _preactCompat2 = _interopRequireDefault(_preactCompat);

	var _utils = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dropdown = function (_Component) {
	  _inherits(Dropdown, _Component);

	  function Dropdown() {
	    _classCallCheck(this, Dropdown);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).apply(this, arguments));
	  }

	  _createClass(Dropdown, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState({ value: (0, _utils.int)(e.target.value) });
	    }
	  }, {
	    key: 'renderOptions',
	    value: function renderOptions() {
	      var _this2 = this;

	      return this.props.optns.map(function (opt) {
	        var props = {
	          selected: opt.value === _this2.state.value
	        };
	        return _preactCompat2.default.createElement(
	          'option',
	          _extends({ value: opt.value }, props),
	          opt.label
	        );
	      });
	    }
	  }, {
	    key: 'renderFirstOption',
	    value: function renderFirstOption() {
	      if ('initial' in this.props && this.props.initial === false) {
	        return null;
	      }
	      return _preactCompat2.default.createElement(
	        'option',
	        { value: '', disabled: true, selected: true },
	        'Choose...'
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render(props) {
	      var _this3 = this;

	      return _preactCompat2.default.createElement(
	        'select',
	        _extends({ className: 'ui dropdown' }, props, { onChange: function onChange(e) {
	            return _this3.handleChange(e);
	          } }),
	        this.renderFirstOption(),
	        this.renderOptions()
	      );
	    }
	  }]);

	  return Dropdown;
	}(_preact.Component);

	exports.default = Dropdown;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CLASS = 'visible';

	var Sidebar = function Sidebar() {
	  var _this = this;

	  _classCallCheck(this, Sidebar);

	  this.visible = false;
	  this.element = document.getElementById('sidebar-nav');
	  this.trigger = document.getElementById('mobile-menu-trigger');

	  this.render = function () {
	    if (_this.visible) {
	      _this.element.classList.add(CLASS);
	      _this.trigger.classList.add(CLASS);
	      return;
	    }
	    _this.element.classList.remove(CLASS);
	    _this.trigger.classList.remove(CLASS);
	  };

	  this.toggle = function () {
	    _this.visible = !_this.visible;
	    _this.render();
	  };

	  this.trigger.addEventListener('click', this.toggle);
	};

	function init() {
	  return new Sidebar();
	}

	exports.default = { init: init };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preact = __webpack_require__(2);

	var _preactCompat = __webpack_require__(6);

	var _preactCompat2 = _interopRequireDefault(_preactCompat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RadioSet = function (_Component) {
	  _inherits(RadioSet, _Component);

	  function RadioSet(props) {
	    _classCallCheck(this, RadioSet);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RadioSet).call(this, props));

	    _this.state.value = props.values[0];
	    return _this;
	  }

	  _createClass(RadioSet, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.values.indexOf(this.state.value) === -1) {
	        this.setState({ value: nextProps.values[0] });
	      }
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(e) {
	      if ('onChange' in this.props) {
	        this.props.onChange(e);
	      }
	      this.setState({ value: parseInt(e.target.value, 10) });
	    }
	  }, {
	    key: 'renderOptions',
	    value: function renderOptions() {
	      var _this2 = this;

	      return this.props.values.map(function (value) {
	        var labelProps = {};

	        if (_this2.state.value === value) {
	          labelProps.className = 'selected';
	        }

	        var inputProps = {
	          checked: _this2.props.checked === value,
	          onClick: function onClick(e) {
	            return _this2.handleClick(e);
	          },
	          type: 'radio',
	          value: value
	        };

	        return _preactCompat2.default.createElement(
	          'label',
	          labelProps,
	          _preactCompat2.default.createElement('input', inputProps),
	          _preactCompat2.default.createElement(
	            'span',
	            null,
	            value
	          )
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _preactCompat2.default.createElement(
	        'div',
	        { className: 'ui radioset' },
	        this.renderOptions()
	      );
	    }
	  }]);

	  return RadioSet;
	}(_preact.Component);

	exports.default = RadioSet;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var int = exports.int = function int(number) {
	  return parseInt(number, 10);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _preactCompat = __webpack_require__(6);

	var _preactCompat2 = _interopRequireDefault(_preactCompat);

	var _Dropdown = __webpack_require__(10);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	var _utils = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CharacterDropdown = function (_Dropdowm) {
	  _inherits(CharacterDropdown, _Dropdowm);

	  function CharacterDropdown() {
	    _classCallCheck(this, CharacterDropdown);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CharacterDropdown).apply(this, arguments));
	  }

	  _createClass(CharacterDropdown, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState({ value: (0, _utils.int)(e.target.value) });
	    }
	  }, {
	    key: 'render',
	    value: function render(props) {
	      var _this2 = this;

	      return _preactCompat2.default.createElement(
	        'select',
	        _extends({ className: 'ui dropdown' }, props, { onChange: function onChange(e) {
	            return _this2.handleChange(e);
	          } }),
	        this.renderFirstOption(),
	        this.renderOptions()
	      );
	    }
	  }]);

	  return CharacterDropdown;
	}(_Dropdown2.default);

	exports.default = CharacterDropdown;

/***/ }
/******/ ]);