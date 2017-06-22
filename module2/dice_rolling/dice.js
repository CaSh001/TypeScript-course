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
var possible_throws;
(function (possible_throws) {
    possible_throws[possible_throws["One"] = 0] = "One";
    possible_throws[possible_throws["Two"] = 1] = "Two";
    possible_throws[possible_throws["Three"] = 2] = "Three";
    possible_throws[possible_throws["Four"] = 3] = "Four";
    possible_throws[possible_throws["Five"] = 4] = "Five";
    possible_throws[possible_throws["Six"] = 5] = "Six";
})(possible_throws || (possible_throws = {}));
var GetRandom = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var Die = (function () {
    function Die(diethrow) {
        this.diesize = "100px";
        this.dieborder = "3px solid black";
        this["throw"] = diethrow;
    }
    return Die;
}());
var DieRoller = (function (_super) {
    __extends(DieRoller, _super);
    function DieRoller(diethrow) {
        return _super.call(this, diethrow) || this;
    }
    return DieRoller;
}(Die));
var button;
button = document.createElement("button");
button.textContent = "Roll it!";
document.body.appendChild(button);
var ArrayDice = [];
for (var i = 0; i < 4; i++) {
    ArrayDice.push({
        'div': document.createElement("div"),
        'text': document.createElement("p")
    });
    ArrayDice[i].text.innerHTML = possible_throws[GetRandom(0, 5)];
    document.body.appendChild(ArrayDice[i].div);
    document.body.lastChild.appendChild(ArrayDice[i].text);
}
