"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("./passwordStrengthBar.component");
var import1 = require("@angular/core/src/change_detection/change_detection_util");
var import2 = require("@angular/core/src/linker/view");
var import3 = require("@angular/core/src/linker/view_utils");
var import5 = require("@angular/core/src/metadata/view");
var import6 = require("@angular/core/src/linker/view_type");
var import7 = require("@angular/core/src/change_detection/constants");
var import8 = require("@angular/core/src/linker/component_factory");
var import9 = require("@angular/core/src/security");
var Wrapper_PasswordStrengthBarComponent = (function () {
    function Wrapper_PasswordStrengthBarComponent() {
        this._changed = false;
        this._changes = {};
        this.context = new import0.PasswordStrengthBarComponent();
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
    }
    Wrapper_PasswordStrengthBarComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PasswordStrengthBarComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_PasswordStrengthBarComponent.prototype.check_passwordToCheck = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.passwordToCheck = currValue;
            this._changes['passwordToCheck'] = new import1.SimpleChange(this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_PasswordStrengthBarComponent.prototype.check_barLabel = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.barLabel = currValue;
            this._changes['barLabel'] = new import1.SimpleChange(this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_PasswordStrengthBarComponent.prototype.check_barColors = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.barColors = currValue;
            this._changes['barColors'] = new import1.SimpleChange(this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_PasswordStrengthBarComponent.prototype.check_baseColor = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.baseColor = currValue;
            this._changes['baseColor'] = new import1.SimpleChange(this._expr_3, currValue);
            this._expr_3 = currValue;
        }
    };
    Wrapper_PasswordStrengthBarComponent.prototype.check_strengthLabels = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.strengthLabels = currValue;
            this._changes['strengthLabels'] = new import1.SimpleChange(this._expr_4, currValue);
            this._expr_4 = currValue;
        }
    };
    Wrapper_PasswordStrengthBarComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_PasswordStrengthBarComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_PasswordStrengthBarComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PasswordStrengthBarComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PasswordStrengthBarComponent;
}());
exports.Wrapper_PasswordStrengthBarComponent = Wrapper_PasswordStrengthBarComponent;
var renderType_PasswordStrengthBarComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_PasswordStrengthBarComponent_Host0 = (function (_super) {
    __extends(View_PasswordStrengthBarComponent_Host0, _super);
    function View_PasswordStrengthBarComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_PasswordStrengthBarComponent_Host0, renderType_PasswordStrengthBarComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_PasswordStrengthBarComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng2-password-strength-bar', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_PasswordStrengthBarComponent0(this.viewUtils, this, 0, this._el_0);
        this._PasswordStrengthBarComponent_0_3 = new Wrapper_PasswordStrengthBarComponent();
        this.compView_0.create(this._PasswordStrengthBarComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._PasswordStrengthBarComponent_0_3.context);
    };
    View_PasswordStrengthBarComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.PasswordStrengthBarComponent) && (0 === requestNodeIndex))) {
            return this._PasswordStrengthBarComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_PasswordStrengthBarComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._PasswordStrengthBarComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_PasswordStrengthBarComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_PasswordStrengthBarComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_PasswordStrengthBarComponent_Host0;
}(import2.AppView));
exports.PasswordStrengthBarComponentNgFactory = new import8.ComponentFactory('ng2-password-strength-bar', View_PasswordStrengthBarComponent_Host0, import0.PasswordStrengthBarComponent);
var styles_PasswordStrengthBarComponent = ['.strengthBar[_ngcontent-%COMP%] {\n      display: inline;\n      list-style: none;\n      margin: 0 0 0 15px;\n      padding: 0;\n      vertical-align: 2px;\n    }\n\n    .strengthBar[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%] {\n      background: #DDD;\n      border-radius: 2px;\n      display: inline-block;\n      height: 5px;\n      margin-right: 1px;\n      width: 20px;\n    }\n\n    .strengthBar[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]:last-child {\n      margin: 0;\n    }\n    .pre[_ngcontent-%COMP%] {\n      white-space: pre;\n    }'];
var renderType_PasswordStrengthBarComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_PasswordStrengthBarComponent, {});
var View_PasswordStrengthBarComponent0 = (function (_super) {
    __extends(View_PasswordStrengthBarComponent0, _super);
    function View_PasswordStrengthBarComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_PasswordStrengthBarComponent0, renderType_PasswordStrengthBarComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_23 = import1.UNINITIALIZED;
        _this._expr_24 = import1.UNINITIALIZED;
        _this._expr_25 = import1.UNINITIALIZED;
        _this._expr_26 = import1.UNINITIALIZED;
        _this._expr_27 = import1.UNINITIALIZED;
        _this._expr_28 = import1.UNINITIALIZED;
        _this._expr_29 = import1.UNINITIALIZED;
        _this._expr_30 = import1.UNINITIALIZED;
        return _this;
    }
    View_PasswordStrengthBarComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'id', 'strength'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'small', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_1, 'ul', new import3.InlineArray4(4, 'class', 'strengthBar', 'id', 'strengthBar'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'li', new import3.InlineArray4(4, 'class', 'point', 'id', 'bar0'), null);
        this._text_9 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_6, 'li', new import3.InlineArray2(2, 'class', 'point'), null);
        this._text_11 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_6, 'li', new import3.InlineArray2(2, 'class', 'point'), null);
        this._text_13 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_6, 'li', new import3.InlineArray2(2, 'class', 'point'), null);
        this._text_15 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_6, 'li', new import3.InlineArray2(2, 'class', 'point'), null);
        this._text_17 = this.renderer.createText(this._el_6, '\n      ', null);
        this._text_18 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_1, 'small', new import3.InlineArray2(2, 'class', 'pre'), null);
        this._text_20 = this.renderer.createText(this._el_19, '', null);
        this._text_21 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._text_22
        ]), null);
        return null;
    };
    View_PasswordStrengthBarComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_23 = import3.inlineInterpolate(1, '', this.context.barLabel, '');
        if (import3.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setText(this._text_4, currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_24 = this.context.bar0;
        if (import3.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementStyle(this._el_8, 'background-color', ((this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE, currVal_24) == null) ? null : this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE, currVal_24).toString()));
            this._expr_24 = currVal_24;
        }
        var currVal_25 = this.context.bar1;
        if (import3.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementStyle(this._el_10, 'background-color', ((this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE, currVal_25) == null) ? null : this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE, currVal_25).toString()));
            this._expr_25 = currVal_25;
        }
        var currVal_26 = this.context.bar2;
        if (import3.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementStyle(this._el_12, 'background-color', ((this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE, currVal_26) == null) ? null : this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE, currVal_26).toString()));
            this._expr_26 = currVal_26;
        }
        var currVal_27 = this.context.bar3;
        if (import3.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementStyle(this._el_14, 'background-color', ((this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE, currVal_27) == null) ? null : this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE, currVal_27).toString()));
            this._expr_27 = currVal_27;
        }
        var currVal_28 = this.context.bar4;
        if (import3.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setElementStyle(this._el_16, 'background-color', ((this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE, currVal_28) == null) ? null : this.viewUtils.sanitizer.sanitize(import9.SecurityContext.STYLE, currVal_28).toString()));
            this._expr_28 = currVal_28;
        }
        var currVal_29 = !this.context.strengths;
        if (import3.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setElementProperty(this._el_19, 'hidden', currVal_29);
            this._expr_29 = currVal_29;
        }
        var currVal_30 = import3.inlineInterpolate(1, '  ', this.context.strengthLabel, '');
        if (import3.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setText(this._text_20, currVal_30);
            this._expr_30 = currVal_30;
        }
    };
    return View_PasswordStrengthBarComponent0;
}(import2.AppView));
exports.View_PasswordStrengthBarComponent0 = View_PasswordStrengthBarComponent0;
//# sourceMappingURL=passwordStrengthBar.component.ngfactory.js.map