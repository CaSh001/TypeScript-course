## Modul 2

* indexelni lehet akár stringgel is.

* interface tud extendelni class-t

* két metódus összehasonlításánál ugyanazok a típusok kellenek, nevek nem számítanak:
```
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK
x = y; // Error
```

### Arguments
* Opcionális argumentek mindig később jönnek.
    * *...változo[]*-val végtelent lehet átadni.
* Defualt argumentek jöhetnek akármikor, de ha nem akarjuk felülírni, undefined-ot kell átadni.

#### _1. Feladat_
* Cél: gomb megnyomására a div színt vált
    * function egy változóhoz van osztva
        * pl let myFunctionName: Function = (paraméterek): típus => {  return  }
    * 'as' funkció fontos ha hibát kapunk. 
        * pl (elem as HTMLElement).style.color = mycolor;

#### _2. Feladat_

* Cél: 4 négyzet alkotása, színeik megváltoztatása gombnyomásra.

    * enum: arrayhez hasonló, de lehet hivatkozni indexel és értékkel is
        * enumhoz pl.: enum Colors {
                    Green,
                    Red,
                    Blue,
                    Orange
                                }
        * arrayhez pl.: let elementSets : Array<ElementSet> = [];


#### _5. Feladat_

* Cél: random színek gombnyomásra.

    * array1.map((paraméterek) =>{})
        * callbackeli az összes elemet, és egy új arraybe teszi az eredményeket.

    * dervied classes -> constructorba mindig kell super(paraméter)

    *   let getRandomIntInclusive:Function =(min,max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min+1)) +min;}

    

#### _4. Feladat_

* Cél: 4 dobókockát dobunk egyszerre.
    * 