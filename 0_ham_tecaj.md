<img src="images/RKV_logo.svg" width=150>

##### Radioklub Vegova

# Radioamaterski tečaj za razred A

Pripravili:  
Jakob Kordež \[S52KJ]  
Žiga Kralj \[S50ZK]  
Primož Vovk \[S54UNC]

----

### Uporabne povezave

- [Priročnik za radioamaterje](http://www.homemade.net/ra/prirocnik_novi.pdf)

- [Etika in operaterski postopki za radioamaterje](http://www.hamradio.si/images/dokumenti/publikacije/etika_junij%202021.pdf)

- [Kriteriji za izpit](http://www.zrs.si/files/kriteriji.pdf)

---

- [Vaja za izpit](https://s5-vaja.jkob.cc/)

- [Klicni znaki](https://cq.jkob.cc/#/callsign)

---

- [Arhiv CQ ZRS](https://drive.google.com/drive/folders/1LBtrFHFe7GRN7ZAWZK_g54ngoLZ_sH18)

- [Splošni akt o pogojih za uporabo radijskih frekvenc](http://www.pisrs.si/Pis.web/pregledPredpisa?id=AKT_857)

----

### Izbiranje klicnega znaka (po opravljenem izpitu)

6\. člen [splošnega akta o pogojih za uporabo radijskih frekvenc](http://www.pisrs.si/Pis.web/pregledPredpisa?id=AKT_857) (klicni znaki)

S5 [številka] [1-3 črk (A-Z)]
- črke iz angl. abecede
- pri 3 črkovnih znakih (S57ABC) lako izbereš le številke 4, 6 in 7

Regex:
```re
S5[0-9][A-Z]{1,2}  
S5[467][A-Z]{3}
```