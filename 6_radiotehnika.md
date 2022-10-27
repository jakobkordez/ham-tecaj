## 6. Radiotehnika

----

**Signali so nosilci informacij**

**Nosilni val** / Nosilni signal / Nosilec: Radijski val določene frekvence, ki “nosi” informacijo

**Modulacija**: postopek, s katerim nosilni val **opremimo z informacijo**

**Sinusni signal**:
- primeren za uporabo, ker se **pri prehodu skozi linearno električno vezje njegova oblika ne spremeni**
- Spremeni se mu lahko **le amplituda in faza**

VSAK signal lahko obravnavamo kot **vsoto sinusnih signalov različnih amplitud in frekvenc**



**Frekvenčni spekter**: podaja informacijo o zastopanih frekvencah signala, amplitudi

Frekvence sinusnih signalov, ko so večkratniki osnovne frekvence imenujemo **višje harmonske komponente**

<img src="https://www.nti-audio.com/portals/0/pic/news/FFT-Time-Frequency-View-540.png">



Fazni zasuk: **vsak filter povzroči fazni zasuk**!

**Filtriranje signala**: izločitev določenih frekvenčnih komponent

<img src="images/filter.jpg" width=600>



Če želimo signalom spremeniti amplitudo jih ojačimo ali oslabimo.
- **Ojačevalnik**: naprava, ki signale ojačuje (poveča amplitudo)
- **Slabilnik** (**atenuator**): naprava, ki signale slabi (zniža amplitudo)

<img src="images/amp1.jpg" height=240>
<img src="images/amp2.jpg" height=240>

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

Na izhodu mešalnika dobimo:  
1\. vse signale, ki vstopajo v mešalnik  
2\. $f_{VCO}$  
3\. Vsoto in razliko: $f_{VCO}\pm{vh}$  
4\. harmonike signalov iz točke 1, 2 in 3 ter enosmerno komponento
</div>

<img src="images/mesanje.jpg" width=600>
</div>



### Modulacija

Nosilec **moduliramo z informacijskim signalom**, postopek imenujemo **MODULACIJA**. 

Obratni postopek, ki **izlušči informacijo na sprejemni strani iz nosilca** imenujemo **DEMODULACIJA**.

<br/>

Za prenos informacije spreminjamo enega od parametrov:
- amplitudo &rarr; **AMPLITUDNA** MODULACIJA (**AM**, A3E)
- frekvenco &rarr; **FREKVENČNA** MODULACIJA (**FM**, F3E)
- fazo &rarr; **FAZNA** MODULACIJA (**PM**, G3E)

----

### Pasovna širina

Če se signal s časom **hitro spreminja**, potem ima **širok frekvenčni spekter** oz. zahteva veliko **pasovno širino**!

Pasovna širina in frekvenca nosilca sta tesno povezani:
Večja kot je pasovna širina, višja mora biti frekvenca nosilca

Pasovna širina realnega vzporednega nihajnega kroga, ki ima Q faktor od 10 do 100, se giblje od 1 do 10% okrog resonančne frekvence.

Spodnja enačba predstavlja zgornjo mejo zmogljivosti komunikacijskega sistema z dano pasovno širino in danim razmerjem signal-šum

----

### Amplitudna modulacija – AM

Spreminjamo **amplitudo nosilca**

Pasovna širina AM signala:  
$B=2\sdot W$  
W – pasovna širina modulacijskega signala

<img src="https://electronicspost.com/wp-content/uploads/2015/11/amplitude-modulation1.png" width=450>

<img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Am-sidebands.png" width=450>

----

### Double-SideBand – DSB

Izkaže se, da pri AM modulaciji najmanj 50% moči porabimo za nosilec, ki sploh ne nosi nobene informacije.

Nosilec potlačimo DSB-SC (Double-SideBand Supressed-Carrier) ali krajše **DSB**.

<img src="images/dsb.jpg" height=300>

----

### Single-SideBand – SSB

Da privarčujemo še na pasovni širini signala odstranimo še enega od bočnih pasov, saj na obeh prenašamo enako informacijo in dobimo enobočno modulacijo, ki jo označimo s **SSB** (Single-SideBand).
- **LSB** – spodnji bočni pas
- **USB** – zgornji bočni pas

<img src="images/ssb.jpg" height=300>

----

### Frekvenčna modulacija – FM

Spreminjamo **frekvenco nosilca**

<img src="http://www.physics-and-radio-electronics.com/blog/wp-content/uploads/2018/04/frequencymodulation.png" width=450>

<img src="https://www.elprocus.com/wp-content/uploads/Bandwidth-of-FM-Signal.jpg" width=450>



Pasovna širina FM signala:  
$B=2\sdot W + 2\sdot D$  
W – max frekvenca modulacijskega signala  
D – frekvenčna deviacija

**Frekvenčna deviacija** je definirana kot **največji odmik frekvence FM signala od nosilne frekvence** in je sorazmerna amplitudi modulacijskega signala.

----

### Fazna modulacija – PH

<div class="hg">
<div>

Spreminjamo **fazo nosilca**

Ker spreminjamo fazo, spreminjamo tudi frekvenco, zato se tudi pri fazni modulaciji **pojavi frekvenčna deviacija**

<br/>

Ogled animacije je možen na: <a>https://en.wikipedia.org/wiki/Phase_modulation</a>
</div>

<img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Phase-modulation.gif" width=500>
</div>

----

### Telegrafija (CW)

**Continuous wave**

Najpreprostejši način moduliranja nosilnega vala.  
**Nosilec** preprosto **vklapljamo in izklapljamo** v ritmu vnaprej dogovorjenih znakov (Morse-kod).

<img src="http://www.armyradio.wiki/lib/exe/fetch.php?w=400&tok=3c2add&media=images:grundlagen-cw.jpg" height=150>

// TODO: straight, iambic

Ima **najmanjšo pasovno širino**, oddajamo/sprejemamo samo eno frekvenco.

----

### Radijski oddajnik – Oscilatorji

**Radijski oddajnik**: naprava, ki ustvari radiofrekvenčni signal, ga opremi z informacijo, ojača in nato pošlje v anteno, kjer se izseva v prostor

Elektronski sklopi, ki proizvajajo radiofrekvenčne (RF) signale:
- električni oscilatorji
- RF sintezatorji

Oscilatorji:  
Električni oscilator: izvor izmeničnih tokov ali
napetosti določene frekvence.

<img src="images/oscil.jpg" width=300>

Osnovni elementi oscilatorja



<div class="hg">
<div>

Sinusni signal idealnega oscilatorja (a), amplitudni šum&nbsp;(b) in fazni šum (c)

**Amplitudni šum**:  
nezaželeno spreminjanje amplitude nihanja  
**Fazni šum**:  
nezaželeno spreminjanje faze generiranega signala
</div>

<img src="images/am_ph_šum.jpg" width=500>
</div>

----

### PLL sintetizator

----

### Direktni digitalni sintetizator – DDS

----

### CW oddajniki

----

### SSB oddajniki

----

### FM oddajniki

----

### Radijski sprejemniki – Šum
