"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PasswordStrengthBarComponent = (function () {
    function PasswordStrengthBarComponent() {
        this.onStrengthChanged = new core_1.EventEmitter();
        this.defaultColors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
        this.defaultBaseColor = '#DDD';
        this.colors = this.defaultColors;
    }
    PasswordStrengthBarComponent_1 = PasswordStrengthBarComponent;
    PasswordStrengthBarComponent.prototype.checkBarColors = function () {
        if (this.barColors && this.barColors.length === 5) {
            this.colors = this.barColors.slice();
        }
        else {
            this.colors = this.defaultColors;
        }
        this.strengths = this.strengthLabels && this.strengthLabels.length === 5 ? this.strengthLabels.slice() : null;
        this.setStrengthLabel(0);
        if (!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.baseColor)) {
            this.baseColor = this.defaultBaseColor;
        }
    };
    PasswordStrengthBarComponent.measureStrength = function (p) {
        var _force = 0;
        var _regex = /[$-/:-?{-~!"^_`\[\]]/g;
        var _lowerLetters = /[a-z]+/.test(p);
        var _upperLetters = /[A-Z]+/.test(p);
        var _numbers = /[0-9]+/.test(p);
        var _symbols = _regex.test(p);
        var _flags = [_lowerLetters, _upperLetters, _numbers, _symbols];
        var _passedMatches = 0;
        for (var _i = 0, _flags_1 = _flags; _i < _flags_1.length; _i++) {
            var _flag = _flags_1[_i];
            _passedMatches += _flag === true ? 1 : 0;
        }
        _force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
        _force += _passedMatches * 10;
        _force = (p.length <= 6) ? Math.min(_force, 10) : _force;
        _force = (_passedMatches === 1) ? Math.min(_force, 10) : _force;
        _force = (_passedMatches === 2) ? Math.min(_force, 20) : _force;
        _force = (_passedMatches === 3) ? Math.min(_force, 40) : _force;
        return _force;
    };
    PasswordStrengthBarComponent.prototype.getColor = function (s) {
        var idx = 0;
        if (s <= 10) {
            idx = 0;
        }
        else if (s <= 20) {
            idx = 1;
        }
        else if (s <= 30) {
            idx = 2;
        }
        else if (s <= 40) {
            idx = 3;
        }
        else {
            idx = 4;
        }
        return {
            idx: idx + 1,
            col: this.colors[idx]
        };
    };
    PasswordStrengthBarComponent.prototype.getStrengthIndexAndColor = function (password) {
        return this.getColor(PasswordStrengthBarComponent_1.measureStrength(password));
    };
    PasswordStrengthBarComponent.prototype.ngOnChanges = function (changes) {
        var password = changes['passwordToCheck'].currentValue;
        this.checkBarColors();
        this.setBarColors(5, this.baseColor);
        if (password) {
            var c = this.getStrengthIndexAndColor(password);
            var strength = c.idx - 1;
            this.setStrengthLabel(strength);
            this.setBarColors(c.idx, c.col);
            this.onStrengthChanged.emit(strength);
        }
    };
    PasswordStrengthBarComponent.prototype.setBarColors = function (count, col) {
        for (var _n = 0; _n < count; _n++) {
            this['bar' + _n] = col;
        }
    };
    PasswordStrengthBarComponent.prototype.setStrengthLabel = function (index) {
        if (this.strengths) {
            this.strengthLabel = this.strengths[index];
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PasswordStrengthBarComponent.prototype, "passwordToCheck", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PasswordStrengthBarComponent.prototype, "barLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], PasswordStrengthBarComponent.prototype, "barColors", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PasswordStrengthBarComponent.prototype, "baseColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], PasswordStrengthBarComponent.prototype, "strengthLabels", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], PasswordStrengthBarComponent.prototype, "onStrengthChanged", void 0);
    PasswordStrengthBarComponent = PasswordStrengthBarComponent_1 = __decorate([
        core_1.Component({
            selector: 'ng2-password-strength-bar',
            styles: ["\n    .strengthBar {\n      display: inline;\n      list-style: none;\n      margin: 0 0 0 15px;\n      padding: 0;\n      vertical-align: 2px;\n    }\n\n    .strengthBar .point {\n      background: #DDD;\n      border-radius: 2px;\n      display: inline-block;\n      height: 5px;\n      margin-right: 1px;\n      width: 20px;\n    }\n\n    .strengthBar .point:last-child {\n      margin: 0;\n    }\n    .pre {\n      white-space: pre;\n    }\n  "],
            template: "\n    <div id=\"strength\" #strength>\n      <small>{{barLabel}}</small>\n      <ul id=\"strengthBar\" class=\"strengthBar\">\n        <li id=\"bar0\" class=\"point\" [style.background-color]=\"bar0\"></li>\n        <li class=\"point\" [style.background-color]=\"bar1\"></li>\n        <li class=\"point\" [style.background-color]=\"bar2\"></li>\n        <li class=\"point\" [style.background-color]=\"bar3\"></li>\n        <li class=\"point\" [style.background-color]=\"bar4\"></li>\n      </ul>\n      <small [hidden]=\"!strengths\" class=\"pre\">  {{strengthLabel}}</small>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], PasswordStrengthBarComponent);
    return PasswordStrengthBarComponent;
    var PasswordStrengthBarComponent_1;
}());
exports.PasswordStrengthBarComponent = PasswordStrengthBarComponent;
//# sourceMappingURL=passwordStrengthBar.component.js.map