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
