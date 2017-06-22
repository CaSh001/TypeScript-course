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

class Die implements DieSet{
    div;
    text;
    constructor(div, text){
        this.div = div;
        this.text = text;
    (this.div as HTMLElement).style.width = "50px";
    (this.div as HTMLElement).style.height = "50px";
    (this.div as HTMLElement).style.margin = "10px";
    (this.div as HTMLElement).style.border = "2px solid black";}
}


class DieRoller extends Die {
constructor(div, text){
    super(div, text);
    text.innerHTML = possible_throws[GetRandom(0,5)];}
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
    ArrayDice[i] = new Die(ArrayDice[i].div, ArrayDice[i].text);
    document.body.appendChild(ArrayDice[i].div);
    document.body.lastChild.appendChild(ArrayDice[i].text);
}

(button as HTMLElement).onclick = (event) => { 
    ArrayDice.map((elem, index) => { 
        elem.text.innerHTML = possible_throws[GetRandom(0,5)];
    }) 

}

    
