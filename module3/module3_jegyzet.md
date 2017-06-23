## Module 3

### Namespace
* namespacen belül eltérő nevek kellenek.
* lehet egy namespace másikon belül.
    * lehet egyszerűsíteni pl.:
```ts
import InternalSpace = SomeNameSpace.internalNameSpace;
```

* lehet több fájlon át 
    * pl egyik fájlba
    ```ts
    namespace Zoo { interface Animal {} }
    ```
    * többibe:
    ```ts
    ///<referencepath="ZooAnimals.ts" 
    namespace Zoo { export class Reptile implements Animal{}}/>
    ```

* __export__ fontos, de elsőbe nem kell
* hivatkozás pl.: 
    ```ts
    let lizard = new Zoo.Reptile();
    ```
 * importálás: Alias/rövid névhez: *import q = x.y.z*, gyakran használt objektumokhoz.
    ```ts
    import rep = Zoo.Reptile;
    let lizard: rep;
    console.log(lizard.skinType);
    ```

### Modulok

* TypeScript-ben akármely fájl ami tartalmaz top-level importot vagy exportot modulnak számít.

* __nem__ globálisak
    * lehet exportálni

* __Module Loader__ lokál és futtat mindent ami szükséges, ez a __Module Resolution__.
    * pl _CommonJS, Node.js, require.js_ web applikációkhoz.

* modulok előnyei [itt](https://www.quora.com/Why-do-people-use-requireJS-What-are-the-benefits).

#### Exportálás
* Exportálás az _export_ kulcsszóval történik:

```ts
//Validation.ts

export interface StringValidator {
    isAcceptable(s: string): boolean;
}

//ZipCodeValidator.ts

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
```

* exportok átnevezéséhez lehet pl.:
```ts
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
```

* Re-export:
    * ha modul extendel más modult
```ts
//ParseIntBasedZipCodeValidator.ts

export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}

// Export original validator but rename it
export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";
Optionally, a module can wrap one or more modules and combine all their exports using export * from "module" syntax.

AllValidators.ts

export * from "./StringValidator"; // exports interface 'StringValidator'
export * from "./LettersOnlyValidator"; // exports class 'LettersOnlyValidator'
export * from "./ZipCodeValidator";  // exports class 'ZipCodeValidator'
```

#### __Importálás:__

* Egyetlen export importálása:
```ts
import { ZipCodeValidator } from "./ZipCodeValidator";

let myValidator = new ZipCodeValidator();
```

* importok átnevezhetőek:
```ts
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidator = new ZCV();
```

* Egy egész modul importálása egyetlen változóba, az exportok elérése:

```ts
import * as validator from "./ZipCodeValidator";
let myValidator = new validator.ZipCodeValidator();
```

* __Default Export__
    * csak egy _default_ export lehet egy modulban. Külön importálási módszer kell hozzájuk.
        * pl JQuery könyvtárának default exportja lehet mondjuk JQuery vagy $.

```ts
//JQuery.d.ts

declare let $: JQuery;
export default $;
App.ts

import $ from "JQuery";

$("button.continue").html( "Next Step..." );
```

* Lehet közvetlen default exportként deklarálni class-t és function-t is. Ez opcionális.
```ts
//ZipCodeValidator.ts

export default class ZipCodeValidator {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}
//Test.ts

import validator from "./ZipCodeValidator";

let myValidator = new validator();

//vagy

StaticZipCodeValidator.ts

const numberRegexp = /^[0-9]+$/;

export default function (s: string) {
    return s.length === 5 && numberRegexp.test(s);
}
Test.ts

import validate from "./StaticZipCodeValidator";

let strings = ["Hello", "98052", "101"];

// Use function validate
strings.forEach(s => {
  console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
});
```

### Declaration Files

* _declare_ kulcsszó. Leír máshol létező codeot (mondjuk JavaScript-ben, CoffeScript-ben vagy nodejs-ben írt). Pl.:
```ts
 class="language-TypeScript">mynumber = 200; // Error: mynumber is not defined

//while

declare var mynumber: any;
mynumber = 200; // ok
```

* _.d.t.s_ kiterjesztésű fájlok a __deklaráció fájlok__.

* .d.ts fájlba csak TypeScript lehet. Nem lehet semmi ami javascriptet generálna.
    * interfacek engedélyezettek.
    * const enum is engedélyezett.
    * osztályok, változok, modulok és funkciók elé kell a _declare_.

    ```ts
declare module Something {
    var x;
}
    ```

### Ambient modul
    * declaration implementation nélkül, általában .d.ts fájlban
        * olyan mint C/C++-ban a .h fájl


* importálás pl _import url = require("url"); or import * as URL from "url"._

```ts
/// <reference path="node.d.ts"/>
import * as URL from "url";
let myUrl = URL.parse("http://www.typescriptlang.org");
```