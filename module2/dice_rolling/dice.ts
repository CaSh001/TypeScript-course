enum possible_throws {
"One",
"Two",
"Three",
"Four",
"Five",
"Six"
}

let GetRandom:Function =(min,max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min+1)) +min;}

interface DieSet{
    div:Element;
    text:Element;
}

class Die {
    diesize:string="100px";
    dieborder:string="3px solid black";
    throw:string;
    dietext:string;
constructor(diethrow){
    this.throw = diethrow;
}
}


class DieRoller extends Die {
constructor(diethrow){
    super(diethrow);
}
}

let button: Element;
button = document.createElement("button");
button.textContent = "Roll it!";
document.body.appendChild(button);


let ArrayDice: Array<DieSet> = [];
for (let i:number = 0; i < 4; i++){
    ArrayDice.push({
        'div': document.createElement("div"),
        'text': document.createElement("p")
    })
    ArrayDice[i].text.innerHTML = possible_throws[GetRandom(0,5)];
    document.body.appendChild(ArrayDice[i].div);
    document.body.lastChild.appendChild(ArrayDice[i].text);
}