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

### Vzorčenje signalov

<div class="hg">
<div>

Pretvorba analognega signala v digitalnega z **A/D** pretvornikom imenujemo **vzorčenje**

**Minimalna vzorčevalna frekvenca** pri digitalni obdelavi signalov je enaka **dvakratniku najvišje frekvence vzorčenega signala**
- **Nyquistova frekvenca**
</div>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Conversion_AD_DA.png/220px-Conversion_AD_DA.png" width=500>
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



<img src="https://www.researchgate.net/publication/351095579/figure/fig1/AS:1016682332033024@1619407365212/Downsampling-and-Anti-aliasing-a-When-downsampling-a-signal-with-an-inadequate.png" height=500>

----

### Digitalno procesiranje signalov

**Konvolucija**: rezultat matematične **kombinacije dveh signalov**, kjer dobimo kot rezultat tretji signal. Izredno pomembna operacija pri DSP.

Konvolucija: $y[n] = x[n] * h[n]$

Konvolucijska vrsta: $y[i] = \sum _{j=0}^{M-1} h[j] \sdot [i-j]$



**Fourierjeva transformacija** - pretvorba signala iz časovnega prostora v frekvenčni prostor

**Diskretna Fourierova transformacija** (**DFT**) - z digitalnimi signali

**Hitra Fourierova transformacija** (**FFT**) - učinkovitejša in hitrejša metoda za izračun DFT

<img src="https://www.nti-audio.com/portals/0/pic/news/FFT-Time-Frequency-View-540.png">



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

$$ u(t) = A \cdot \cos(2 \pi f t + \Phi) $$

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

$ C = B \sdot \log \bigg(1 + \dfrac{S}{N} \bigg) $
</div>

$C$ – kapaciteta kanala  
$B$ – pasovna širina  
$\frac{S}{N}$ – razmerje signal/šum
</div>

----

### Amplitudna modulacija – AM

Spreminjamo **amplitudo nosilca**

Pasovna širina AM signala:  
$ B = 2 \sdot W $  
$W$ – pasovna širina modulacijskega signala

<div class="row-even">
<img src="https://electronicspost.com/wp-content/uploads/2015/11/amplitude-modulation1.png" height=300>
<img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Am-sidebands.png" height=300>
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
<img src="http://www.physics-and-radio-electronics.com/blog/wp-content/uploads/2018/04/frequencymodulation.png" width=450>
<img src="https://www.elprocus.com/wp-content/uploads/Bandwidth-of-FM-Signal.jpg" width=450>
</div>



Pasovna širina FM signala:  
$ B = 2 \sdot W + 2 \sdot D $  
$W$ – max frekvenca modulacijskega signala  
$D$ – frekvenčna deviacija

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

<img src="images/img1803.jpg" height=200>

Ima **najmanjšo pasovno širino** (100 Hz), oddajamo/sprejemamo samo eno frekvenco.

----

<div style="font-size:50px">🚧 Under construction 🚧</div>

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
