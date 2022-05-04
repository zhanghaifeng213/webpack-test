(function(graph){
  function require(module) {
    function localRequire(relativePath) {
      return require(graph[module].dependencies[relativePath]);
    };
    var exports = {};
    (function(require, exports, code){
      eval(code);
    })(localRequire, exports, graph[module].code);
    return exports;
  }
  require('./src/index.js')
})({"./src/index.js":{"dependencies":{"./message.js":"./src\\message.js","./message1.js":"./src\\message1.js"},"code":"\"use strict\";\n\nvar _message = _interopRequireDefault(require(\"./message.js\"));\n\nvar _message2 = _interopRequireDefault(require(\"./message1.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log(_message[\"default\"]);"},"./src\\message.js":{"dependencies":{"./word.js":"./src\\word.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _word = require(\"./word.js\");\n\nvar message = \"say \".concat(_word.word);\nvar _default = message;\nexports[\"default\"] = _default;"},"./src\\message1.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar message = 'say m1';\nvar _default = message;\nexports[\"default\"] = _default;"},"./src\\word.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.word = void 0;\nvar word = \"hello\";\nexports.word = word;"}});