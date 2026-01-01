var ChocolateCake = /** @class */ (function () {
    function ChocolateCake() {
    }
    ChocolateCake.prototype.serve = function () {
        return "Serving chocolate cake";
    };
    return ChocolateCake;
}());
var StrawberryCake = /** @class */ (function () {
    function StrawberryCake() {
    }
    StrawberryCake.prototype.serve = function () {
        return "Serving strawberry cake";
    };
    return StrawberryCake;
}());
function serve(cake) {
    if (cake instanceof ChocolateCake) {
        return "Make ".concat(cake);
    }
    if (cake instanceof StrawberryCake) {
        return "Make ".concat(cake);
    }
}
function getCake(cake) {
    if (typeof cake === "string") {
        return "Serving ".concat(cake);
    }
    return "Serving #".concat(cake);
}
getCake(45);
function serveCake(msg) {
    return "Serving cakes with ".concat(msg);
}
function sizeCake(size) {
    if (size === "small") {
        return "Make small cake";
    }
    if (size === "medium" || size === "large") {
        return "Make extra cake";
    }
    return "Make #".concat(size, " cakes");
}
