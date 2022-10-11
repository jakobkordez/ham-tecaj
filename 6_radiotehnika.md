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
