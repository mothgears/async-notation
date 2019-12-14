"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.entries");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

require("regenerator-runtime/runtime");

var _callee = function _callee(target) {
  var _len,
      props,
      _key,
      _args = arguments;

  return _regenerator.default.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          for (_len = _args.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            props[_key - 1] = _args[_key];
          }

          return _context.abrupt("return", new Promise(function (resolve, reject) {
            var cb = function cb() {
              for (var _len2 = arguments.length, result = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                result[_key2] = arguments[_key2];
              }

              return resolve(result);
            };

            try {
              var _target$;

              props = [].concat((0, _toConsumableArray2.default)(props), [cb]);
              if (Array.isArray(target)) (_target$ = target[0])[target[1]].apply(_target$, (0, _toConsumableArray2.default)(props));else if (typeof target === 'function') target.apply(void 0, (0, _toConsumableArray2.default)(props));else {
                var _Object$entries$ = (0, _slicedToArray2.default)(Object.entries(target)[0], 2),
                    methodName = _Object$entries$[0],
                    object = _Object$entries$[1];

                object[methodName].apply(object, (0, _toConsumableArray2.default)(props));
              }
            } catch (err) {
              reject(err);
            }
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.default = _callee;
module.exports = exports.default;
