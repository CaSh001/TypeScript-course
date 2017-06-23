# GIT installáció és használat.

## Előkészületek

-[**GitHub**](https://github.com/) account szükséges.

-Készíthetünk saját repository-t (repo-t). README-vel ajánlott.

-GitHub használata lehetséges _parancssorral_ vagy a _Desktop_ applikációval.


## Parancssoros megoldáshoz:
-Töltsük le a [Git](https://git-scm.com/download/win)-et.

### Parancsok

-Parancsok bővebb listája [itt](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html).

-Alapparancsok röviden:

Parancs | Leírás
--------|--------
git clone <URL>  | Repo letöltése GitHub-ról.
git status | státusz megnézése - változtatott fájlok, új fájlok stb.
git add <filename> | fájl hozzáadása a repo-hoz.
git commit -m "üzenet" | változtatások elfogadása
git push <URL> <branch> | feltöltés hub-ra.
git pull | frissítések letöltése a hub-ról.
git config --global user.name "YOUR NAME" | név beállítása
git config --global user.email "YOUR EMAIL ADDRESS" | e-mail beállítása


#### Parancsok példa 1

Letöltjük a repo-t, változtatunk/új fájlokat adunk hozzá, és feltöltjük a változtatásainkat.
```
C:\Users\jgulyas>git clone https://github.com/CaSh001/test1.git //letöltés után változtatunk/hozzáadunk
C:\Users\jgulyas\test1>git add -A //hozzáadjuk a repo-hoz az összes mappában/almappában található fájlt.
C:\Users\jgulyas\test1>git status //ezzel láthatjuk a változásokat
C:\Users\jgulyas\test1>git commit -m "változtattam és új fájlt adtam hozzá" //lehetőleg beszédes üzenetet adjunk
C:\Users\jgulyas\test1>git push
```


## Desktop applikációs megoldáshoz:
-Töltsük le a [GitHub Desktop](https://desktop.github.com/) programot.


## Visual Studio Code-ban használat:
* "_Clone Git Repository_"-re kattintva másoljuk le a projectünket.
* Végezzük el változtatásainkat, majd mentsük el őket.
* Bal oldalt a _source control_ menüben tudjuk elfogadni vagy elutasítani a változtatásokat. A 'pipa' jelre kattintva minden változtatást elfogadunk.
* A __...__-ra kattintva kiválaszthatjuk a push-olást a változtatásaink feltöltéséhez, a pull-olást a változtatások letöltöséhéez, vagy szinkronizálhatunk stb.