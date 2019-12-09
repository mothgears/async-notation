'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.asyncNotation = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var asyncNotation = exports.asyncNotation = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(target) {
		for (var _len = arguments.length, props = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			props[_key - 1] = arguments[_key];
		}

		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
							var cb = function cb() {
								for (var _len2 = arguments.length, result = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
									result[_key2] = arguments[_key2];
								}

								return resolve(result);
							};
							try {
								var _target$;

								props = [].concat((0, _toConsumableArray3.default)(props), [cb]);
								if (Array.isArray(target)) (_target$ = target[0])[target[1]].apply(_target$, (0, _toConsumableArray3.default)(props));else if (typeof target === 'function') target.apply(undefined, (0, _toConsumableArray3.default)(props));else {
									var _Object$entries$ = (0, _slicedToArray3.default)((0, _entries2.default)(target)[0], 2),
									    methodName = _Object$entries$[0],
									    object = _Object$entries$[1];

									object[methodName].apply(object, (0, _toConsumableArray3.default)(props));
								}
							} catch (err) {
								reject(err);
							}
						}));

					case 1:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function asyncNotation(_x) {
		return _ref.apply(this, arguments);
	};
}();
