"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LineNode_1 = require("./LineNode");
var HorizontalNode = /** @class */ (function (_super) {
    __extends(HorizontalNode, _super);
    function HorizontalNode(mode, x) {
        var _this = _super.call(this, mode, x, 0) || this;
        _this.key = 'H';
        return _this;
    }
    HorizontalNode.prototype.toString = function () {
        return "" + this.getKeyInProperCase() + this.x;
    };
    return HorizontalNode;
}(LineNode_1.default));
exports.default = HorizontalNode;