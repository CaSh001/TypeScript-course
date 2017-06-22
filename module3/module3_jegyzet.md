## Module 3

### Namespace
* namespacen belül eltérő nevek kellenek
* lehet több fájlon át 
    * pl egyik fájlba
    ```
    namespace Zoo { interface Animal {} }
    ```
    * többibe:
    ```
    ///<referencepath="ZooAnimals.ts" 
    namespace Zoo { export class Reptile implements Animal{}}/>
    ```

* __export__ fontos, de elsőbe nem kell
* hivatkozás pl.: 
    ```
    let lizard = new Zoo.Reptile();
    ```
 * importálás: *import q = x.y.z*, gyakran használt objektumokhoz.
    ```
    import rep = Zoo.Reptile;
    let lizard: rep;
    console.log(lizard.skinType);
    ```
* 