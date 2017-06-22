# GIT installáció és használat.

## Előkészületek

-[**GitHub**](https://github.com/) account szükséges.

-Készíthetünk saját repository-t (rep-et). README-vel ajánlott.

-GitHub használata lehetséges _parancssorral_ vagy a _Desktop_ applikációval.


## Parancssoros megoldáshoz:
-Töltsük le a [Git](https://git-scm.com/download/win)-et.

### Parancsok

-Parancsok teljes listája [itt](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html).

-Alapparancsok röviden:

```
git clone <URL> //Rep letöltése GitHub-ról.
git status //státusz megnézése - változtatott fájlok, új fájlok stb.
git add <filename> //fájl hozzáadása a rep-hez.
git commit -m "üzenet" //változtatások elfogadása
git push <URL> <branch> //feltöltés hub-ra.
git pull //frissítések letöltése a hub-ról.
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR EMAIL ADDRESS"

```






### Parancsok példa 1

Letöltjük a rep-et, változtatunk/új fájlokat adunk hozzá, és feltöltjük a változtatásainkat.
```
C:\Users\jgulyas>git clone https://github.com/CaSh001/test1.git //letöltés után változtatunk/hozzáadunk
C:\Users\jgulyas\test1>git status //ezzel láthatjuk a változásokat
C:\Users\jgulyas\test1>git add -A //hozzáadjuk a rep-hez az összes mappában található fájlt.
C:\Users\jgulyas\test1>git commit -m "weboldal title átírva"
C:\Users\jgulyas\test1>git push
```


## Desktop applikációs megoldáshoz:

-Töltsük le a [GitHub Desktop](https://desktop.github.com/) programot.


## Visual Studio Code-ban használat:
