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
    function Die(div, text) {
        this.div = div;
        this.text = text;
        this.div.style.width = "50px";
        this.div.style.height = "50px";
        this.div.style.margin = "10px";
        this.div.style.border = "2px solid black";
    }
    return Die;
}());
var DieRoller = (function (_super) {
    __extends(DieRoller, _super);
    function DieRoller(div, text) {
        var _this = _super.call(this, div, text) || this;
        text.innerHTML = possible_throws[GetRandom(0, 5)];
        return _this;
    }
    return DieRoller;
}(Die));
var button;
button = document.createElement("button");
button.textContent = "Roll it!";
document.body.appendChild(button);
var ArrayDice = [];
var _loop_1 = function (i) {
    ArrayDice.push({
        'div': document.createElement("div"),
        'text': document.createElement("p")
    });
    ArrayDice.map(function (elem, index) {
        elem.text.innerHTML = possible_throws[GetRandom(0, 5)];
        elem.text.innerHTML = possible_throws[GetRandom(0, 5)];
        elem = new Die(ArrayDice[i].div, ArrayDice[i].text);
        document.body.appendChild(elem.div);
        document.body.lastChild.appendChild(elem.text);
    });
};
for (var i = 0; i < 4; i++) {
    _loop_1(i);
}
button.onclick = function (event) {
    ArrayDice.map(function (elem, index) {
        elem.text.innerHTML = possible_throws[GetRandom(0, 5)];
    });
};
