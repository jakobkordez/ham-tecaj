## 6. Radiotehnika

----

### Signali

**Signali so nosilci informacij**

**Nosilni val** / Nosilni signal / Nosilec: Radijski val določene frekvence, ki “nosi” informacijo

**Modulacija**: postopek, s katerim nosilni val **opremimo z informacijo**

**Sinusni signal**:
- primeren za uporabo, ker se **pri prehodu skozi linearno električno vezje njegova oblika ne spremeni**
- Spremeni se mu lahko **le amplituda in faza**

VSAK signal lahko obravnavamo kot **vsoto sinusnih signalov različnih amplitud in frekvenc**



**Frekvenčni spekter**: podaja informacijo o zastopanih frekvencah signala, amplitudi

Frekvence sinusnih signalov, ki so večkratniki osnovne frekvence imenujemo **višje harmonske komponente** (harmoniki)

<img src="images/web_39.png">



Fazni zasuk: **vsak filter povzroči fazni zasuk**!

**Filtriranje signala**: izločitev določenih frekvenčnih komponent

<img src="images/filter.jpg" width=600>



Če želimo signalom spremeniti amplitudo jih ojačimo ali oslabimo.
- **Ojačevalnik**: naprava, ki signale ojačuje (poveča amplitudo)
- **Slabilnik** (**atenuator**): naprava, ki signale slabi (zniža amplitudo)

<div class="row-even">
<img src="images/amp1.jpg" height=240>
<img src="images/amp2.jpg" height=240>
</div>

----

### Vzorčenje signalov

<div class="hg">
<div>

Pretvorba analognega signala v digitalnega z **A/D** pretvornikom imenujemo **vzorčenje**

**Minimalna vzorčevalna frekvenca** pri digitalni obdelavi signalov je enaka **dvakratniku najvišje frekvence vzorčenega signala**
- **Nyquistova frekvenca**
</div>

<img src="images/web_40.png" width=500>
</div>



**Kvantiziranje**: vrednosti vzorca priredimo najbližje možne diskretne vrednosti

**Kvantizacijski nivo**
- Število kvantizacijskih nivojev $= 2^n$, $n$ je število bitov

**Kvantizacijski šum ali napaka**: negotovost ko na podlagi diskretne vrednost signala ni mogoče zagotovo sklepati na pravo vrednost prvotnega signala



<div class="hg">
<div>

**Aliasing** (popačeno zaznavanje): spektralno prekrivanje pri vzorčenju analognega signala

**Anti-aliasing filter** (protiprekrivni filter): omeji pasovno širino vhodnega signala pred digitalno obdelavo
</div>

<img src="images/vzorcenje.jpg" width=600>
</div>



<img src="images/downsample.png" height=500>

----

### Digitalno procesiranje signalov

**Konvolucija**: rezultat matematične **kombinacije dveh signalov**, kjer dobimo kot rezultat tretji signal. Izredno pomembna operacija pri DSP.

Konvolucija: $y[n] = x[n] * h[n]$

Konvolucijska vrsta: $y[i] = \sum _{j=0}^{M-1} h[j] \cdot [i-j]$



**Fourierjeva transformacija** - pretvorba signala iz časovnega prostora v frekvenčni prostor

**Diskretna Fourierova transformacija** (**DFT**) - z digitalnimi signali

**Hitra Fourierova transformacija** (**FFT**) - učinkovitejša in hitrejša metoda za izračun DFT

<img src="images/web_39.png">



Digitalni filtri:
- **FIR** - filter s končnim impulznim odzivom
- **IIR** - filter z neskončnim impulznim odzivom

----

### Množenje frekvenc

Lastnost ojačevalnikov, da popačijo signal (signal vsebuje višje harmonske
komponente) nam pride prav pri tako imenovanem **množenju frekvenc**

**Množilna stopnja**: realni ojačevalnik v C razredu

<img src="images/mnozenje_frek.jpg" height=240>

----

### Mešanje signalov

<div class="hg">
<div>

V mešalnik pripeljemo signal $f_1$ in $f_2$,
na izhodu mešalnika dobimo:
- $f_1 + f_2$ (mešanje navzgor)
- $f_1 - f_2$ (mešanje navzdol)

</div>

<img src="images/mesanje.jpg" width=600>
</div>



#### Primer

Če mešamo $f_1 =$ 576 MHz in $f_2 =$ 144 MHz dobimo na izhodu:
- $f_1 + f_2 =$ 720 MHz
- $f_1 - f_2 =$ 432 MHz

Če želimo samo 432 MHz ali 720 MHz, dodamo filter.

----

### Modulacija

Nosilec **moduliramo z informacijskim signalom**, postopek imenujemo **modulacija**.

Obratni postopek, ki **izlušči informacijo na sprejemni strani iz nosilca** imenujemo **demodulacija**.

$$ u(t) = A \cdot \cos(2 \pi f t + \varphi) $$

Za prenos informacije spreminjamo enega od parametrov:
- amplitudo &rarr; **Amplitudna** modulacija (**AM**, A3E)
- frekvenco &rarr; **Frekvenčna** modulacija (**FM**, F3E)
- fazo &rarr; **Fazna** modulacija (**PM**, G3E)

----

### Pasovna širina

Če se signal s časom **hitro spreminja**, potem ima **širok frekvenčni spekter** oz. zahteva veliko **pasovno širino**!

Pasovna širina in frekvenca nosilca sta tesno povezani:
Večja kot je pasovna širina, višja mora biti frekvenca nosilca

Pasovna širina realnega vzporednega nihajnega kroga, ki ima Q faktor od 10 do 100, se giblje od 1 do 10% okrog resonančne frekvence.

<div class="row-even">
<div>

$$ 0.01 < \frac{B}{f_c} < 0.1 $$
</div>

$B$ – pasovna širina  
$f_c$ – frekvenca nosilca
</div>



Zgornja meja zmogljivosti komunikacijskega sistema:

<div class="row-even">
<div>

$ C = B \cdot \log \bigg(1 + \dfrac{S}{N} \bigg) $
</div>

$C$ – kapaciteta kanala  
$B$ – pasovna širina  
$\frac{S}{N}$ – razmerje signal/šum
</div>

----

### Amplitudna modulacija – AM

Spreminjamo **amplitudo nosilca**

Pasovna širina AM signala:  
$ B = 2 \cdot W $  
$W$ – pasovna širina modulacijskega signala

<div class="row-even">
<img src="images/am_signal.png" height=300>
<img src="images/web_42.png" height=300>
</div>

----

### Double-SideBand – DSB

Izkaže se, da pri AM modulaciji najmanj 50% moči porabimo za nosilec, ki sploh ne nosi nobene informacije.

Nosilec potlačimo DSB-SC (Double-SideBand Supressed-Carrier) ali krajše **DSB**.

<img src="images/dsb.jpg" height=300>

----

### Single-SideBand – SSB

Da privarčujemo še na pasovni širini signala odstranimo še enega od bočnih pasov, saj na obeh prenašamo enako informacijo in dobimo enobočno modulacijo, ki jo označimo s **SSB** (single-sideband).
- **LSB** – spodnji bočni pas (lower sideband)
- **USB** – zgornji bočni pas (upper sideband)

<img src="images/ssb.jpg" height=300>

----

### Frekvenčna modulacija – FM

Spreminjamo **frekvenco nosilca**

<div class="row-even">
<img src="images/fm_signal.png" width=450>
<img src="images/web_43.jpg" width=450>
</div>



Pasovna širina FM signala:  
$ B = 2 \cdot W + 2 \cdot D $  
$W$ – max frekvenca modulacijskega signala  
$D$ – frekvenčna deviacija

**Frekvenčna deviacija** je definirana kot **največji odmik frekvence FM signala od nosilne frekvence** in je sorazmerna amplitudi modulacijskega signala.

----

### Fazna modulacija – PH

<div class="hg">
<div>

Spreminjamo **fazo nosilca**

Ker spreminjamo fazo, spreminjamo tudi frekvenco, zato se tudi pri fazni modulaciji **pojavi frekvenčna deviacija**

&nbsp;

Ogled animacije je možen na: <a>https://en.wikipedia.org/wiki/Phase_modulation</a>
</div>

<img src="images/pm_signal.gif" width=500>
</div>

----

### Telegrafija (CW)

**Continuous wave**

Najpreprostejši način moduliranja nosilnega vala.  
**Nosilec** preprosto **vklapljamo in izklapljamo** v ritmu vnaprej dogovorjenih znakov (Morse-kod).

<img src="images/img1803.jpg" height=200>

Ima **najmanjšo pasovno širino** (100 Hz), oddajamo/sprejemamo samo eno frekvenco.

----

### Radijski oddajnik

**Radijski oddajnik**: naprava, ki ustvari radiofrekvenčni signal, ga opremi z informacijo, ojača in nato pošlje v anteno, kjer se izseva v prostor

Elektronski sklopi, ki proizvajajo radiofrekvenčne (RF) signale:
- električni oscilatorji
- RF sintezatorji

----

### Oscilatorji

Električni **oscilator**: **izvor izmeničnih tokov** ali napetosti **določene frekvence**

Oscilator na področju radijskih frekvenc &rarr; RF oscilator

Prva stopnja oddajnika, določa frekvenco na kateri bo oddajnik deloval



Če nihajnemu krogu dovedemo začetno energijo, ta zaniha (dušeno).

Želimo nedušeno nihanje &rarr; oscilator

<div class="row-even">
<img src="images/duseno_nihanje.jpg" height=400>
<img src="images/nihanje.jpg" height=400>
</div>



#### Osnovni elementi oscilatorja

<div class="hg">
<div>

- **Izvor energije**
    - enosmerne napetosti
- **Nihajni krog**
    - določa frekvenco
- **"Ventil"** (tranzistor ali elektronka)
    - dovajanje energije nihajnemu krogu
- **Povratna zveza**
</div>

<img src="images/oscil.jpg" width=500>
</div>



#### Realni oscilatorji

<div class="hg">
<div>

**Amplitudni šum**: nezaželeno spreminjanje amplitude

**Fazni šum**: nezaželeno spreminjanje faze

Dobremu oscilatorju se frekvenca čimmanj spreminja (je **stabilen**),
nanj vplijo:
- mehanska in električna izvedba
- starost
- temperaturne spremembe
</div>

<img src="images/am_ph_šum.jpg" width=500>
</div>



#### Vrste oscilatorjev

- **Kristalni** oscilatorji (**XO**)
- **Kristalni** oscilatorji **spremenljive frekvence** (**VXO**)
    - kristalu zaporedno/vzporedno vežemo spremenljiv kondenzator ali zaporedno tuljavo
- Oscilator **spremenljive frekvence** (**VFO** – Variable Frequency Oscillator)
    - LC nihajni krog, zaporedno vežemo spremenljiv kondenzator
- **Napetostno kontroliran** oscilator (**VCO** – Voltage Controlled Oscillator)
    - LC nihajni krog z varaktorsko (varicap) diodo



#### Heterodinski oscilator

<div class="hg">
<div>

"Heterodyning" – kombiniranje ali mešanje dveh signalov

Zgornja meja VFO-ja z dobro stabilnostjo: 7-10 MHz

&nbsp;

Pri višjih frekvencah se uporablja **heterodinski oscilator** (Heterodyne oscillator)

Signal iz **VFO**-ja **mešamo s** signalom **XO** (kristalnega oscilatorja)
in nato **s filtrom izločimo signal želene frekvence**
</div>

<img src="images/heterodinski_osci.jpg" width=500>
</div>

----

### RF sintetizatorji

Danes vlogo VFO prevzeli frekvenčni sintetizatorji:
- PLL sintetizator
- DDS sintetizator
- Kombinacija obeh



### PLL sintetizator

<div class="hg">
<div>

**PLL** – Phase-Locked Loop

Uporabimo **VCO**, ki ga **s pomočjo povratne zanke stabiliziramo** (fazno sklenjena zanka)

Frekvenco **nastavljamo digitalno s programiranjem programirnega delitelja**

Referenčna frekvenca ($f_\text{REF}$) določa najmanjši frekvenčni korak
</div>

<img src="images/pll.jpg" width=500>
</div>



#### Primer PLL sintetizatorja

Imamo PLL sintetizator. Zanka se je že ujela. Referenčna frekvenca je 100 kHz, programirni delitelj pa je nastavljen tako, da deli s 128. Kolikšna je izhodna frekvenca?

$$ f_\text{IZH} = N \cdot f_\text{REF} $$

$$ f_\text{IZH} = 128 \cdot 100\ \mathrm{kHz} = 12800\ \mathrm{kHz} = 12.8\ \mathrm{MHz} $$



### Direktni digitalni sintetizator – DDS

<div class="hg">
<div>

Vrednosti sinusa vnaprej izračunamo in jih shranimo (v "glej tabeli")

Ko preberemo iz tabele, pretvorimo v analogni signal in ga filtriramo

Frekvenco določa generator urnih impulzov (clock)
</div>

<img src="images/dds.jpg" width=500>
</div>

----

### Zgradba oddajnika

- **Oscilator**
- **Ločilna stopnja** (Buffer)
    - prepreči vpliv naslednje stopnje na oscilator
- **Krmilna stopnja** (Driver)
    - ojača signal na moč pri kateri bo delovala končna stopnja
- **Končna stopnja** (PA – Power Amplifier)
    - ojača signal in filtrira višje harmonike
    - izkoristek: 40-70%

Vse stopnje morajo biti impedančno prilagojene &rarr; za največji prenos moči

----

### CW oddajniki

<div class="hg">
<div>

Oječevalnik razreda C
</div>

<img src="images/cw_trx.jpg" width=600>
</div>



#### "Klik" in "Anti-klik" filter

<div class="row-even">
<img src="images/cw_klik.jpg" width=500>
<img src="images/cw_anti_klik.jpg" width=400>
</div>

----

### SSB oddajniki

<div class="hg">
<div>

**Balansni modulator**, vhodni modulacijski signal in nosilni val &rarr; DSB signal

DSB signal s SSB filtrom (kristalni, 1.8 – 3 kHz) pretvorimo v USB ali LSB signal

Oječevalnik razreda A ali AB
</div>

<img src="images/ssb_trx.jpg" width=600>
</div>



#### Ovojnica SSB signala

<div class="hg">
<div>

Želimo da je razlika med vrhnjo in povprečno vrednostjo amplitude čim manjša

- Audio **clipper**: **poreže vrhove** zvočnega signala
- Audio **compressor**: **drži** zvočni **signal v določenem območju**
    - ojačevalnik s povratno vezavo
- Obstajata tudi RF clipper in RF compressor oz. **ALC** (Automatic Level Control)
</div>

<img src="images/ssb_amp.jpg" width=600>
<div>

----

### FM oddajniki

<div class="hg">
<div>

- Kvaliteten prenos govora
- Ne uporablja na KV (velika pas. širina)
    - Izjema 10 m
- Zaporedno kristalu vezana varaktorska dioda, ki spreminja frekvenco
- Signal nato "prestavimo" v pravilno frekvenčno območje
    - množilne stopnje
- Ojačevalnik razreda C
</div>

<img src="images/fm_trx.jpg" height=300>
</div>



#### FM oddajnik s PLL sintetizatorjem

<img src="images/fm_pll_trx.jpg" height=300>

----

### Radijski sprejemniki

----

### Šum

- **Termični šum**
    - Naključno gibljenje elektronov po prevodnikih in polprevodnikih
    - Odvisen od **pasovne širine** in **temperature**
        - pri 0 K je moč šuma 0 
- **Šum okolice**
    - Naravni šum iz neba ali človeškega izvora
    - Predstavimo s **šumno temperaturo** antene ($T_a$)
        - namesto antene upor segret na temperaturo $T_a$
    - Močno odvisen od **frekvence**



<img src="images/sum_okolice.jpg" width=600>



#### Razmerje signal/šum

Signal/noise ratio (SNR, S/N)

**Razmerje med močjo koristnega signala in močjo šuma**

$$ \frac{S}{N} = 10 \log \bigg( \frac{\text{moč signala}}{\text{moč šuma}} \bigg) \ [\mathrm{dB}] $$



#### Šumni faktor in šumno število

Vsaka stopnja (ki je izvor termičnega šuma), poslabša razmerje signal/šum, ki ga dobi na vhodu

**Šumni faktor** (**F**, noise factor) pove **koliko se poslabša razmerje signal/šum**

$$ F = \frac{\text{SNR}_\text{vh}}{\text{SNR}_\text{iz}} $$

Bolj pogosto uporabljamo **šumno število** (**NF**, noise figure)
- **šumni faktor** v dB

$$ NF = 10 \log F \ [\mathrm{dB}] $$



#### Ekvivalentna šumna temperatura

Na vhod stopnje priključimo na 0 K ohlajen upor, šum na izhodu stopnje je termični šum same stopnje. Upor segrevamo, dokler ne bo šum na izhodu dva-krat povečal. Temperatura upora v tej točki je **ekvivalentna šumna temperatura**.

$$ T_e = T_o \bigg( 10^{\frac{NF}{10}} - 1 \bigg) = T_o (F - 1) \ [\mathrm{K}] $$
$$ T_o = 290K $$



#### Skupna ekvivalentna šumna temperatura (sistema)

<div class="row-even">
<img src="images/sum_skupna.jpg" height=400>
<img src="images/sum_sistema.jpg" height=400>
</div>



- **Na nižjih frekvencah** (KV) je **šumna temperatura antene** tako **velika**, da se termični šum sprejemnika skoraj ne pozna
- Na višjih frekvencah (šumna temperatura antene ja majhna), se uporablja dobre **nizko šumne predojačevalce**, kot **prva stopnja** sprejemniškega sistema



#### Primer

Imamo dve zaporedno vezani stopnji.  
Ekvivalentna šumna temperatura prve stopnje je 100 K, njeno ojačenje pa je 10.  
Ekvivalentna šumna temperatura druge stopnje je 500 K, njeno ojačenje pa je 100.  
Kolikšna je skupna ekvivalentna šumna temperatura?

$$ T_e = T_{e1} + \frac{T_{e2}}{G_1} $$

$$ T_e = 100 \ \mathrm{K} + \frac{500 \ \mathrm{K}}{10} = 150 \ \mathrm{K} $$

----

### Osnovni pojmi

#### Občutljivost

- **Kako močan mora biti RF signal** na vhodu sprejemnika, da bo na izhodu **razmerje signal/šum 10 dB**
- Boljša kot je občutljivost, šibkejše signale lahko sprejemamo
- **Obratnosorazmerna pasovni širini**
    - SSB sprejemnik ima boljšo občutljivost kot FM sprejemnik
- Podajamo relativno glede na 1 mW ali napetost na vhodnih sponkah

$$ P_{dBm} = 10 \log \bigg( \frac{P}{1 \ \mathrm{mW}} \bigg) \ [\mathrm{dBm}] $$
$$ u = \sqrt{2PR} \ [\mathrm{V}] \quad R = 50 \ \Omega$$



#### Selektivnost

- **Prepuščanje signala v določenem pasu**, in **dušenje signalov izven** njega
- To dosežemo z ustreznimi pasovno-prepustnimi filtri
    - CW: 500 Hz
    - SSB: 2.4 kHz
    - FM: 15 kHz



#### Dinamično območje

- **V kakšnih mejah se lahko giblje jakost vhodnega signala**
    - Okoli 80 dB do 120 dB
    - **Spodnja meja**: termični šum in šum okolice
    - **Zgornja meja**: obnašanje sprejemnika pri močnih signalih
        - preobremenitev, intermodulacijsko popačenje, ...

&nbsp;

#### Preobremenitev

- Na sprejemniku se pojavi zelo močan RF signal, **sprejemnik postane neobčutljiv** "ogluši"



#### Intermodulacijsko popačenje

- Intermodulation distortion (**IMD**)

- Sprejemniki so **sestavljeni** tudi **iz nelinearnih vezij** &rarr; **pojavijo se nezaželene komponente spektra**, ki jih težko izločimo, če so blizu želenim frekvencam

- Intermodulacijska produkta tretjega reda: $2f_1 - f_2$ in $f_1 - 2f_2$
    - tudi višji redi, ampak imajo dosti manjšo jakost

- Merilo za linearnost je **presečna točka intermodulacije tretjega reda** (**IP3** – third-order intercept point)
    - podajamo v dBm
    - Čim **višji** je **IP3**, **boljši** je **sprejemnik**

----

### Detektorji

Iz signala **izluščijo informacijo** (demodulacija &rarr; demulator)



#### Detekcija AM signalov

**Detektor ovojnice**: vhodni signal usmerimo z diodo in filtriramo z nizko-prepustnim filtrom

<div class="row-even">
<img src="images/am_detektor_circ.jpg" height=300>
<img src="images/am_detektor.jpg" height=300>
</div>



#### Detekcija CW signalov

Nosilec vklapljamo po ritmu

Detektiramo tako, da **mešamo s signalom**, ki ima **malenkost nižjo ali višjo frekvenco**, ki ga generiramo z **BFO** (beat frequency oscillator)

En izmed produktov je v nizkofrekvenčnem (NF) področju, ostalih se znebimo

&nbsp;

##### Primer
Želimo detektirati CW signal s frekvenco 3550 kHz, na BFO nastavimo frekvenco 3550.5 kHz, dobimo RF signal s frekvenco 7100.5 kHz in NF signal s frekvenco 0.5 kHz oz 500 Hz. Ta signal lahko poslušamo.



#### Detekcija SSB signalov

<div class="hg">
<div>

V **detektor pripeljemo mankajoči nosilec**, ki ga generiramo z **BFO**

Signal detektiramo z **produkt detektorjem** (mešalnik), izhod je produkt SSB signala in primerno izbrane frekvence BFO

Izhod mešalnika filtriramo z nizko-prepustnim filtrom

S produkt detektorjem **lahko detektiramo tudi CW in AM signale**
</div>

<img src="images/ssb_detektor.jpg" height=350>
</div>



#### Detekcija FM signalov

<div class="hg">
<div>

**Frekvenčni diskriminator**

**FM** signal **pretvorimo v AM** signal, ki ga detektiramo z **detektorjem ovojnice**

**Omejevalnik** (limiter) zagotovi **konstantno amplitudo** pred FM-AM pretvorbo
</div>

<img src="images/fm_am_detektor.jpg" height=500>
</div>



##### FM-AM pretvorba

Izkoristimo **linearno odvisnost amplitude od frekvence**

<div class="row-even">
<div class="center-t">
<img src="images/fm_am_lc.jpg" height=350>

LC nihajni krog
</div>
<div class="center-t">
<img src="images/fm_am_balans.jpg" height=350>

**Balansni diskriminator**  
Povečamo frekvenčno območje linearnosti
</div>
</div>



Izkoristimo **linearno fazno karakteristiko**

Diskriminator s faznim zamikom (phase-shift discriminator)  
oz. **Foster-Seeley diskriminator**

<img src="images/fm_am_foster_seeley.jpg" height=350>

----

### Sprejemnik z direktnim mešanjem

Sprejemanje CW in SSB signalov (tudi AM)

<div class="hg">
<div>

CW:  
Če frekvenco VFO nastavimo na frekvenco signala, ga ne bomo slišali (**zero beat**)  
Frekvenco VFO nastavimo malo nad ali pod frekvenco signala

SSB / AM:  
Frekvenco VFO nastavimo na frekvenco nosilca
</div>

<img src="images/sprejem_dir_mesanje.jpg" height=350>
</div>



Uporablja predvsem nizkih frekvencah KV (šum neba >> šum mešalnika)

Signal ojačamo po demodulaciji (80 – 100 dB) &rarr; lahko pojavi **mikrofonija** (mehanski tresljaji), motnje se ojačajo na zvočnik

CW ali SSB selektivnost dosežemo s filtri med ojačevalnikom in zvočnikom

----

### Superheterodinski sprejemnik

<div class="hg">
<div>

Vhodni signal **mešamo** (konvertirajo) na **eno ali več medfrekvenc** (brez izgube informacije)

Sproti filtriramo neželene frekvence iz mešalnika

Sodobni sprejemniki pokrivajo zelo široko frekvenčno območje, dobri ojačevalniki se dajo narediti samo za ožja frekvenčna področja   
Zato je smiselno **vse signale prestaviti** na neko **skupno medfrekvenco** (MF) in jih obdelati tam

**Preselektor**: pasovno-prepustna filtra pred in za RF ojačevalnikom
</div>

<img src="images/en_superhetero.jpg" height=500>
</div>



<div class="hg">
<div>

Želimo, da se ojačanje sprejemnika spreminja glede na jakost signala

**AGC** (automatic gain control): vezje za **avtomatsko regulacijo ojačanja**

Izhod AGC vezja lahko uporabimo za ocenjevanje jakosti signala

**S-meter** (signal meter): S-stopnje (1-9, vsaka &approx; 6 dB), če je signal močnejši od 9, se podajo decibeli (npr.: +20 dB)

**Squelch**: ko je signal manjši od določene meje, NF signal izklopi
</div>

<img src="images/en_superhetero.jpg" height=500>
</div>



<div class="hg">
<div>

**Problem zrcalnih frekvenc**: če 14 MHz signal mešamo s signalom 5 MHz, dobimo medfrekvenčni signal 9 MHz (14 - 5). Problem nastane če pride na vhod 4 MHz signal saj se tudi ta meša na 9 MHz (4 + 5).

Delimo (po številu medfrekvenc):
- enojni superheterodinski sprejemnik
- dvojni superheterodinski sprejemnik
    - prva visoka (proti zrcalnim frekvencam)
    - druga nizka (boljša selektivnost)
</div>

<img src="images/dvo_superhetero.jpg" width=500>
</div>

----

### SDR sprejemnik

<div class="row-even">
<div class="center-t">
<img src="images/sodobni_superhetero.jpg" height=500>
</div>
<div class="center-t">

Idealni SDR sprejemnik

<img src="images/sdr_rx.jpg" height=200>
</div>
</div>



<img src="images/sodobni_super_vs_sdr.jpg" height=600>

----

### Valovanje

Prenos energije v obliki valov
- Valovanje vode – voda kot medij za prenos
- Zvok – valovanje zraka
- **Elektromagnetno valovanje** – valovanje elektromagnetnega (EM) polja



### Elektromagnetno valovanje

<div class="hg">
<div>

V praznem prostoru se širijo s **hitrostjo svetlobe**:  
$c = 3 \cdot 10^8 \frac{\mathrm{m}}{\mathrm{s}}$

$$ c = f \cdot \lambda \qquad f = \frac{c}{\lambda} \qquad \lambda = \frac{c}{f} $$

$f$ – frekvenca valovanja (Hz)  
$\lambda$ – valovna dolžina (m)

$$ f = \frac{300}{\lambda} \qquad \lambda = \frac{300}{f} $$

$f$ – frekvenca valovanja (**MHz**)  
$\lambda$ – valovna dolžina (m)
</div>

<img src="images/em_spekter.jpg" height=500>
</div>



#### Primera

Kakšna je frekvenca valovanja z valovno dolžino 80 m?

$$ f(\mathrm{MHz}) = \frac{300}{80} = 3.750 \mathrm{MHz} $$

&nbsp;

Kakšna je valovna dolžina valovanja s frekvenco 145.0 MHz?

$$ \lambda = \frac{300}{145} = 2.07 \mathrm{m} $$



### Frekvenčna delitev

| Ime | Okrajšava | Frekvenca | Valovna dolžina |
| ---: | :---: | :---: | :---: |
| Zelo nizke frekvence | VLF | 3 kHz – 30 kHz |  > 10 km |
| Nizke frekvence | LF | 30 kHz – 300 kHz |  10 – 1 km |
| Srednje frekvence | MF | 300 kHz – 3 MHz |  1000 – 100 m |
| Visoke frekvence | HF | 3 MHz – 30 MHz |  100 – 10 m |
| Zelo visoke frekvence | VHF | 30 MHz – 300 MHz |  10 – 1 m |
| Ultra visoke frekvence | UHF | 300 MHz – 3 GHz |  100 – 10 cm |
| Super visoke frekvence | SHF | 3 GHz – 30 GHz |  10 – 1 cm |
| Ekstremno visoke frekvence | EHF | 30 GHz – 300 GHz |  1 – 0.1 cm |

----

### Razširjanje radijskih valov

EM valove pri razširjanju lahko ovira atmosfera, zemlja, voda, objekti, &hellip;

Razširajo v se ravnih linijah, **z večanjem razdalje** se **jakost zmanjšuje**

Jakost pada s **kvadratom razdalje** (pri 2 km od izvora je moč 1/4 moči pri 1 km)

<div class="hg">
<div>

Pravokotni polji:
- E – **električno polje**
    - posledica napetosti
- H – **magnetno polje**
    - posledica toka
</div>

<img src="images/em_val.jpg" height=300>
</div>



#### Polarizacija

<div class="hg">
<div>

Smer električne komponente (**E**) določa **polarizacijo** valovanja

Vrste polarizacij:
- Linearna
    - **vertikalna** (FM, več šuma)
    - **horizontalna** (KV, SSB, CW)
- Krožna
    - desna / leva
    - uporaba v UKV, sateliti
- Eliptična

Odboji in nepravilnosti v ionosferi povzročajo spreminjanje polarizacije
</div>

<div>
<img src="images/web_44.png" width=550 class="white">
<br/>
<img src="images/em_polar.jpg" width=800>
</div>



#### Odboj, lom in uklon valovanja

**Odboj** ali **refleksija** – usmerjeno (ravna površina) ali difuzijsko (valovanje se razprši) odbijanje od površin

**Lom** ali **refrakcija** – nastane pri prehodu med dvema prenosnima snovema z različnimi dielektričnimi konstantami (različna hitrost razširanja svetlobe)

**Uklon** ali **difrakcija** – nastane na robovih ovir, zelo frekvenčno odvisen (višje frekvence se uklonijo manj)

<img src="images/odboj_lom_uklon.jpg" height=250>

----

### Zemeljska atmosfera

<div class="hg">
<div>

- Troposfera
    - 0 - 11 km
    - meteorološki procesi
    - temperatura z višino pada (–50 °C)
    - stanje pomembno za razširjanje UKV valov
- Stratosfera
    - 11 - 80 km
    - ne vsebuje vode
    - ozonska plast
- Ionosfera
</div>

<img src="images/atmosfera.jpg" width=500>
</div>



#### Ionosfera

<div class="hg">
<div>

80 - 800 km

Sestavljena iz velikega števila **elektronov in ionov**, nastanejo **zaradi UV in rentgenskih žarkov sonca** (nevtralne molekule se cepijo)  
Rekombinacija: ponovna združitev elektronov in ionov

Radijski valovi se "odbijajo" (počasno zavijajo)

**Sloji**:
- **D** sloj (80 km) – prisoten le čez dan
- **E** sloj (120 km)
- **F** sloj – ponoči in v času nizke aktivnosti sonca en sloj
    - **F1** (220 km) in **F2** (400 km)
</div>

<img src="images/ionosfera.jpg" width=500>
</div>

----

### Delitev radijskih valov glede na razširjanje

<div class="hg">
<div>

- **Površinski** oz. **talni**
    - širijo ob površini zemlje
    - dolgi in srednji valovi (LF, MF)
- **Troposferski** oz. **direktni**
    - širijo v troposferi
    - UKV valovi
    - če zadanejo oviro, se odbijejo
- **Prostorski** oz. **ionosferski**
    - širijo v prostor in odbijejo od ionosfere (lahko tudi večkrat – skoki)
    - kratki valovi (KV)
    - višja kot je frekvenca, večja mora biti gostota elektronov
</div>

<img src="images/sirjenje_valov.jpg" height=400>
</div>



### Aktivnost sonca – solarni ciklus

Solarni maksimum – največja aktivnost sonca (11 let)

Največ UV sevanja, ko je veliko sončnih peg (ciklus sončnih peg)

<div class="row-even">
<img src="images/web_45.jpg" height=300>
<img src="images/solarni_ciklus.jpg" height=300>
</div



#### Vpliv sonca na posamezne sloje ionosfere

- F sloj
    - **F2 najpomembnejši** sloj **za DX na KV**, rekombinacija počasna &rarr; obstaja **tudi ponoči**
    - F1 obstaja le čez dan, poleti bolj pogost, nezaželen, ker slabi signale
- E sloj
    - Formira se samo nad predelom Zemlje, ki ga osvetljuje Sonce
    - Maksimum doseže okoli poldneva
    - **Sporadični E sloj** (Es – E sporadic)
        - **Občasen pojav močne ionizacije**, podoben oblaku
        - Lahko odbija UKV valove
- D sloj
    - Gostota prostih elektronov majhna &rarr; odbijajo le daljši valovi (80 m)
    - Po sončnem zahodu, hitra rekombinacija



#### Motnje v ionosferi

Posledica aktivnosti sonca (povečano sevanje ali sončni veter)

Povečanje ionizacije v D sloju slabi signale

Kot motnje štejemo tudi polarno svetlobo (aurora) in sporadični E sloj (Es)

<div class="row-even">
<img src="images/web_46.jpg" height=350>
<img src="images/web_47.jpg" height=350>
</div>

----

### Kritična frekvenca, najvišja in najnižja uporabna frekvenca

**Kritična frekvenca** ($f_\text{kr}$): **najvišja** frekvenca valovanja, ki se **pod kotom 90° odbije** od ionosfere.

&nbsp;

**Najvišja uporabna frekvenca** (MUF – Maximum usable frequency): **najvišja** frekvenca valovanja, ki se **pod vpadnim kotom $\varphi$ še odbije**.

$$ \text{MUF} = \frac{f_\text{kr}}{\cos(\varphi)} $$

**Najnižja uporabna frekvenca** (LUF – Lowest usable frequency): tudi frekvenca slabljenja, najnižja frekvenca v KV za prostorski val. Nižje frekvence se bodo v ionosferi absorbirale.

----

### Fading (presih)

"feding"

**Nihanje jakosti signala** (QSB)

Vzroki:
- Različnih poteh signala do sprejemnika
- Spreminjanje ionizacije
- Povečanje absorbcije D sloja
- Odboj od dveh različnih slojev
- Odbijanje ob objektov



#### Fading zaradi interference

Zaradi različnih poteh signala do sprejemnika pride do **interference**

Signali **v fazi jakost povečajo**, signali **iz faze jakost zmanjšajo** ali v skrajnem primeru (180°) popolnoma izginejo

<div class="row-even">
<img src="images/fading.jpg" width=500>
<img src="images/interferenca.png" width=500 class="white" style="padding: 20px">
</div>

----

### Pogoji razširjanja valov na KV področju

- **2200 m (135,7 kHz – 133,8 kHz)**
    - površinski val, ne odbija od ionosfere
- **630 m (472 kHz – 479 kHz)**
    - površinski val, ne odbija od ionosfere
- **160 m (1,8 MHz – 2 MHz)**
    - čez dan D sloj absorbira, lahko se odbijajo od E sloja
    - atmosferske in industrijske motnje
    - dobre propagacije predvsem pozimi in ponoči
- **80 m (3,5 MHz – 3,8 MHz)**
    - čez dan D sloj absorbira, lahko se odbijajo od E sloja
    - dobre propagacije ponoči ali pozimi
    - podnevi možne lokalne zveze



- **60 m (5,3515 MHz – 5,3665 MHz)**
    - značilnosti med 80 m in 40 m pasom
    - dobre propagacije ponoči ali pozimi
- **40 m (7 MHz – 7,2 MHz)**
    - podobno kot 80 m pas, možne daljše razdalje tudi čez dan
    - siva linija (gray line) – med dnevom in nočjo
    - atmosferske najbolj izrazite poleti
- **30 m (10,1 MHz – 10,15 MHz)**
    - ponoči možne zveze po celem svetu, čez dan po Evropi (1500 km)
    - manj industrijskega šuma
- **20 m (14 MHz – 14,35 MHz)**
    - pravi DX pas, praktično vedno odprt
    - atmosferski in industrijski šum ni problem
- **17 m (18,068 MHz – 18,168 MHz)**
    - podobno kot 20 m pas



- **15 m (21 MHz – 21,45 MHz)**
    - potrebna velika sončna aktivnost za DX
    - že odvisen od E sporadika
- **12 m (24,89 MHz – 24,99 MHz)**
    - podobno kot 15 m in 10 m pas
- **10 m (28 MHz – 29,7 MHz)**
    - meji na UKV področje &rarr; značilnosti UKV in KV
    - močno odvisen od sončne aktivnosti
    - odprt samo čez dan

----

### Pogoji razširjanja valov na UKV in višjih področjih

**Na UKV valove** (nad 30 MHz) **ionosfera** (aktivnost sonca) **ne vpliva**

Uporabljamo jih za:
- Direktne zveze (optična vidljivost)
- Zveze preko satelitov
- Oboj od Lune (EME)
- &hellip;

Izjema je 6-metrski pas (50 MHz), ki se pri močni ionizaciji (E sporadik) obnaša kot 10-metrski pas.



#### Temperaturna inverzija

<div class="hg">
<div>

UKV valovi pri prehodu skozi pas inverzije zavijejo nazaj proti Zemlji

Višji kot je pas, večji je domet

Možna tudi dvojna inverzija

<img src="images/dvojna_inverzija.jpg" height=200>
</div>

<img src="images/temp_inv.jpg" height=500>
</div>



#### Sporadični E sloj – ES

<div class="hg mb-20">
<div>

V območju E sloja nastane **oblak velike koncentracije elektronov**, ki odbija UKV valove

Domet poveča tudi do 2000 km
</div>

<img src="images/e_sporadic.gif" height=200>
</div>

#### Odboj od meteoritskih sledi – MS

<div class="hg">
<div>

Meteor, ki izgoreva, pušča za sabo zelo **močno ionizirano sled**, ki odbija UKV valove

Večji meteorit &rarr; daljše izgorevanje &rarr; daljše zveze
</div>

<img src="images/web_48.png" height=250>
</div>



#### Odboj od polarne svetlobe – AURORA

<div class="hg mb-20">
<div>

V območju Zemljinega pola zelo **močno ioniziran del E sloja**, ki lahko odbija UKV valove

Odboj je zelo difuzen, signali so zelo šumni (predvsem samo CW)
</div>

<img src="images/web_46.jpg" height=250>
</div>

#### Odboj od Lune – EME

<div class="hg">
<div>

Signal potuje 2 sekundi

Potrebne velike moči in dobre antene zaradi dolgih razdalj in slabljenja

Pri odboju se lahko spremeni polarizacija
</div>

<img src="images/web_50.svg" height=250 style="padding:20px" class="white">
</div>



#### Transalpska propagacija – TAP

FAI (Field Aligned Irregularity) – nepravilnosti v porazdelitvi polja

Oddani signal spremeni smer

Najpogosteje se pojavlja od sredine maja do konca julija

#### Transekvatorialna propagacija – TEP

Nenavadno dolge zveze (okoli 4000 km) v smeri sever - jug

Iz naših krajev je možno vzpostaviti zveze z amaterji na območju južne Afrike



#### Delo preko umetnih satelitov

<div class="hg">
<div>

UKV valovi nemoteno prebijejo ionosfero

Lahko tudi z manjšimi močmi in enostavnimi antenami

Običajno oddajamo in sprejemamo na različnih frekvenčnih pasovih ("Cross band")
</div>

<img src="images/web_51.jpg" height=250>
</div>

----

### Značilnosti nekaterih UKV področij

- **6 m (50 MHz – 52 MHz)**
    - V času maksimalne aktivnosti Sonca pravi DX pas
    - Poleti pogosti pojavi Es
- **2 m (144 MHz – 146 MHz)**
    - Najpopularnejši UKV pas
    - troposfersko razširjanje, inverzija, Es, FAI, aurora, EME, sateliti
    - Lokalne zveze in FM repetitorji
- **70 cm (430 MHz – 440 MHz)**
    - Predvsem troposfersko, posebni pojavi redki
    - sateliti, EME, Packet Radio, DMR

Višji frekvenčni pasovi predvsem na eksperimentalni ravni in redkeje uporabljeni

----

### Vpliv višine antene na doseg valov

<div class="hg">
<div>

**Višje postavljneja antena je** _načeloma_ **boljša antena**

Višje postavljena antena &rarr; nižji kot sevanja &rarr; daljši skok (hop) signala

<div class="row-even">
<div>

$$ d = 4.13 \cdot \sqrt{h} $$
</div>
<div>

$d$ – oddaljenost (km)  
$h$ – nadmorska višina antene (m)
</div>
</div>
</div>

<img src="images/izracun_horizonta.jpg" width=400>
</div>
