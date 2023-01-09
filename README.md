# Radioamaterski tečaj

<center>
<h2><a href="https://jakobkordez.github.io/ham-tecaj">Povezava do prosojnic</a></h2>
<h2><a href="https://github.com/jakobkordez/ham-tecaj/releases/latest">Prenos prosojnic (PDF)</a></h2>
</center>

## Zaganjanje okolja za razvoj

```sh
npm install
npm start
```

## Struktura

`Note:` Struktura ni dokončna

- Intro tečaj
  - Izbiranje klicnega znaka
  - Koristne povezave
- Radioamaterstvo
  - Pomen / definicija
  - Zgodovina
  - IARU
  - ZRS
- Radijske komunikacije
  - Osnovni pojmi
  - ITU
  - Razdelitev sveta (Regioni, ITU cone, CQ cone, UL lokatorji)
  - Frekvenčni pasovi (bandi) `frekvenca`, `valovna dolzina`
- Predpisi
  - Mednarodni `izpit`, `klicni znaki`
  - Slovenski `frek. pas`, `modes`, `moči`
  - CEPT licenca, priporočila
- Pravila in praksa
  - Vspostavljanje zvez
    - Načini (CQ, PHONE, DIGI)
  - Klicni znaki
  - Q-kod
  - RST
  - Kratice
  - Zveze v telegrafiji
    - Morzejeva
    - Vsebina zveze
  - Zveze v telefoniji
    - Vsebina zveze
    - Tabelica črkovanja
  - Digitalne komunikacije `MS`, `EME`
  - Časovne cone in UTC
  - Dnevnik postaje
  - QSL kartica
  - Radioamaterska tekmovanja
    - ARG
  - Radioamaterske diplome
  - Radioamaterska morala in kodeksi
    - HAM spirit
  - Aktivnosti radioamaterjev ob nesrečah in nevarnostih
  - ARON in kodeks ARON
  - Repetitorske komunikacije
    - Simpleks
    - Dupleks
    - Digitalne
  - Satelitske komunikacije
  - MS
  - EME
  - Zveze s pomočjo račinalnika
  - Radijski svetilniki
  - SWL
  - DX postaje
  - DX cluster
  - Pileup
- Električna, elektromagnetna in radijska teorija
- Komponente
- Električna vezja
  - Filtri
- Sprejemniki
- Oddajniki
- Antene in antenski vodi
- Propagacije
- Meritve
- Motnje in njihovo odpravljanje
- Varnost pri delu z električnim tokom

## TODO

- [ ] Poudarek elektrotehniških količin
- [ ] Preveri tabele
- [ ] Morzejevi znaki
- [ ] Boljše enote (siunitx)
- [ ] Elektotehniška vezja v latexu?

## Q-kod

| Q-Koda | Vprašanje                                             | Odgovor                                                        |
| :----: | ----------------------------------------------------- | -------------------------------------------------------------- |
|  QRK   | Kakšna je razumljivost mojega signala?                | Razumljivost tvojega signala je &hellip; (1-5).                |
|  QRM   | Ali te motijo druge postaje ?                         | Motijo me druge postaje.                                       |
|  QRN   | Te moti statika?                                      | Moti me statika.                                               |
|  QRO   | Naj povečam oddajno moč?                              | Povečaj oddajno moč.                                           |
|  QRP   | Naj zmanjšam oddajno moč?                             | Zmanjšaj oddajno moč.                                          |
|  QRS   | Naj oddajam počasneje?                                | Oddajaj počasneje.                                             |
|  QRT   | Naj preneham z oddajanjem?                            | Prenehaj z oddajanjem.                                         |
|  QRZ   | Kdo me kliče?                                         | Kliče te &hellip;                                              |
|  QRV   | Si pripravljen?                                       | Pripravljen sem.                                               |
|  QSB   | Ali moj signal niha?                                  | Tvoj signal niha.                                              |
|  QSL   | Lahko potrdiš sprejem?                                | Potrjujem sprejem.                                             |
|  QSO   | Ali lahko komuniciraš z &hellip; direktno?            | Z &hellip; lahko komuniciram direktno.                         |
|  QSY   | Ali naj se premaknem z oddajanjem na drugo frekvenco? | Pomakni se z oddajanjem na drugo frekvenco.                    |
|  QRX   | Kdaj me boš ponovno poklical?                         | Ponovno te bom poklical ob &hellip; uri na &hellip; kHz (MHz). |
|  QTH   | Kje je tvoja lokacija?                                | Moja lokacija je &hellip;                                      |

## Kratice v telegrafiji

\* &rarr; oddaj kot en znak

| Kratica | Pomen                                                   |
| :-----: | ------------------------------------------------------- |
|  AR\*   | Konec oddaje.                                           |
|   BK    | Signal za prekinitev tekoče oddaje.                     |
|   CQ    | Splošni poziv vsem postajam.                            |
|   CW    | Kontinuiran val.                                        |
|   DE    | Od, uporablja se pred klicnim znakom postaje, ki kliče. |
|    K    | Povabilo k oddaji.                                      |
|   MSG   | Sporočilo.                                              |
|   PSE   | Prosim.                                                 |
|   RST   | Razumljivost, jakost signala, kvaliteta tona.           |
|    R    | Sprejeto.                                               |
|   RX    | Sprejemnik.                                             |
|   TX    | Oddajnik.                                               |
|   UR    | Tvoj, vaš.                                              |
|  VA\*   | Konec dela.                                             |

## Kazalo priročnika

- I. [Radioamaterji in radijske komunikacije](https://tecaj.jkob.cc/#1-radioamaterji-in-radijske-komunikacije)
  - 1\. Radioamaterstvo
    - 1.1. Zgodovina, razvoj in pomen radioamaterstva
    - 1.2. Mednarodna radioamaterska organizacija - IARU
    - 1.3. Zveza radioamaterjev Slovenije - ZRS
  - 2\. [Radijske komunikacije](https://tecaj.jkob.cc/#2-radijske-komunikacije)
    - 2.1. Osnovni pojmi o radijskih komunikacijah
    - 2.2. Mednarodna razdelitev radijskih frekvenc
  - 3\. [Predpisi za amaterske radijske komunikacije](https://tecaj.jkob.cc/#3-predpisi-za-amaterske-radijske-komunikacije)
    - 3.1. Mednarodni predpisi
    - 3.2. Slovenski predpisi
    - 3.3. Priporočili CEPT T/R 61-01 in T/R 61-02
  - 4\. [Pravila in praksa v amaterskih radijskih komunikacijah](https://tecaj.jkob.cc/#4-pravila-in-praksa-v-amaterskih-radijskih-komunikacijah)
    - 4.1. Vspostavljanje amaterskih radijskih zvez
    - 4.2. Amaterske zveze v telegrafiji
    - 4.3. Amaterske zveze v telefoniji
    - 4.4. Amaterske digitalne komunikacije
    - 4.5. Amaterske SSTV in FSTV (ATV) zveze
    - 4.6. Dnevnik dela radijske postaje
    - 4.7. QSL kartica
    - 4.8. Časovne cone in UTC
    - 4.9. Univerzalni lokator
    - 4.10. Radioamaterska tekmovanja
    - 4.11. Radioamaterske diplome
    - 4.12. Radioamaterska morala in kodeksi
    - 4.13. Aktivnosti radioamaterjev ob nesrečah in nevarnostih
    - 4.14. ARON in kodeks ARON
    - 4.15. Radioamaterske specialnosti - dejavnosti
- II. Elektrotehnika in radiotehnika
  - 5\. [Elektrotehnika](https://tecaj.jkob.cc/#5-elektrotehnika)
    - 5.1. Električni tok, napetost in upornost
    - 5.2. Ohmov zakon in moč
    - 5.3. Tuljave in kondenzatorji
    - 5.4. Filtri
    - 5.5. Polprevodniki
    - 5.6. Elektronske cevi
    - 5.7. Mikrofoni in zvočnik
    - 5.8. Ojačevalniki
    - 5.9. Napajalniki
  - 6\. [Radiotehnika](https://tecaj.jkob.cc/#6-radiotehnika)
    - 6.1. Radijski valovi in prenos
    - 6.2. Radijski oddajniki
    - 6.3. Radijski sprejemniki
    - 6.4. Valovanje
    - 6.5. Razširjanje radijskih valov
    - 6.6. Antene
    - 6.7. Napajanje anten
    - 6.8. Motnje
    - 6.9. Meritve in merilni inštrumenti
    - 6.10. Nevarnosti pri delu z električnim tokom

### Napake v priročniku

- Detektorji??? poglavje manjka
- Prenos moči, enačbe manjkajo in ena podvojena
- Feding &rarr; Fading / presih
  - [Wikipedia](https://en.wikipedia.org/wiki/Fading)
  - [FRAN](https://fran.si/133/sskj2-slovar-slovenskega-knjiznega-jezika-2/4473318/fading?View=1&Query=fading)
- Poglavje Elektronske cevi narobe številčeno
- Solarni ciklus
  - [What is the Solar Cycle?](https://spaceplace.nasa.gov/solar-cycles/en/)
