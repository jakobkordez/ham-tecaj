## Motnje

<div style="font-size:50px">🚧 Under construction 🚧</div>

----

### Vzroki za nastanek in ukrepi za preprečevanje

**Antene**  
Napajanje z oklopljenim antenskim vodom &rarr; manj sevanja v okolico

**Priključek na električno omrežje**  
Motnje iz električnega omrežja lahko odpravimo z vgradnjo filtrov in dušilk

**Parazitne oscilacije** (višji harmoniki)  
Da zmanjšamo pojav, pazimo na pravilno gradnjo oddajnikov, ojačevalnikov in anten

**Motnje zaradi intermodulacijskih popačenj**  
Premočni signali &rarr; sprejemnik pride v nelinearno območje

**Preprečevanje motenj**  
Oklapljanje in blokiranje vseh delov naprav, ki generirajo neželeno VF energijo

----

### Vrste motenj

**Radijske motnje** (RFI – Radio Frequency Interference):  
radioamaterska postaja lahko vzrok ali žrtev  
Radijski šum je posledica iskrenja, razelektritev, delovanja elektičnih strojev, &hellip;

&nbsp;

**Televizijske motnje** (TVI – Television Interference):  
preobremenitev sprejemnika, ko je oddajna antena preblizu televizijski anteni

&nbsp;

**Druge vrste motenj**  
Motnje zaradi predolgih (audio/video) kablov (delujejo kot antene)

----

## Meritve

----

### Napake pri meritvah

Merilni napaki pravimo tudi pogrešek

**Netočnost inštrumenta**:  
Zaradi težavnosti odčitavanja, občutljivosti inštrumenta, merilnij pogojev, vgrajenih elementov in ostalega &hellip;

**Vpliv frekvence**:  
Pri izmeničnih veličinah lahko frekvenca vpliva na meritev toka ali napetosti. Vsi inštrumenti so frekvenčno omejeni in lahko merijo signale do neke maksimalne frekvence.

**Vpliv notranje upornosti inštrumentov**:  
Notranja upornost voltmetra/ampermetra vpliva na meritev napetosti/toka.

**Vpliv oblike merjene napetosti**:  
Tudi oblika napetosti vpliva na meritev veličin, ponavadi imamo inštrumente, ki merijo sinusno napetost oz. tok

----

### Merjenje napetosti

<div class="hg">
<div>

**Voltmeter** priključimo **vzporedno** z bremenom

Upornost voltmetra podajamo v omih na volt (**&Omega;/V**),  
**želimo večjo notranjo upornost** (digitalni voltmetri),  
s tem manj vpliva na rezultat meritve

&nbsp;

$$ U_v = U \cdot \frac{R_N}{R_1 + R_N} \qquad R_N = \frac{R_B \cdot R_V}{R_B + R_V} $$

$U_v$ – izmerjena napetost  
$R_N$ – nadomestna upornost ($R_B$, $R_V$)
</div>

<div class="img-stack">
<img src="images/meritve_volt.jpg" width=250>
<img src="images/meritve_volt_real.jpg" width=250>
</div>
</div>

----

### Merjenje toka

<div class="hg">
<div>

**Ampermeter** priključimo **zaporedno** bremenu

**Želimo čim nižjo notranjo upornost**

$$ I = \frac{U}{R_A + R_B} $$

$R_A$ – upornost ampermetra
</div>

<div class="img-stack">
<img src="images/meritve_amp.jpg" width=250>
<img src="images/meritve_amp_real.jpg" width=250>
</div>
</div>

----

### Merjenje upornosti

$$ R = \frac{U}{I} $$

<div class="row-even">
<div class="center-t">

Posredno merjenje upornosti  
<img src="images/meritve_ohm_1.jpg" height=250>
</div>
<div class="center-t">

Merjenje upornosti z **ohmmetrom**  
<img src="images/meritve_ohm_2.jpg" height=250>
</div>
</div>

----

### Merjenje moči

<div class="hg">
<div>

$$ P = U \cdot I \qquad P = U \cdot I \cdot \cos(\varphi) $$

Če želimo prave podatke o moči,  
moramo pravilno obremeniti izhod (50 &Omega;)

Želimo &phi; čim bližje 0°
</div>

<div class="center-t">

Posredno merjenje moči  
<img src="images/meritve_ohm_1.jpg" height=250>
</div>
</div>

----

### Merjenje stojnega valovanja

Uporabimo **reflektometer** oz. SWR meter

$$ \text{SWR} = \frac{U_\text{max}}{U_\text{min}} $$

<div class="row-even">
<div class="center-t">

SWR: 1,0  
<img src="images/vod_prilagojeno.jpg" height=250>
</div>
<div class="center-t">

SWR: > 1,0  
<img src="images/vod_r_gt_z.jpg" height=250>
</div>
</div>

----

### Merjenje oblike VF signala

Uporabimo **osciloskop**

<div class="center-t">

Amplitudna modulacija  
<img src="images/am_osciloskop.jpg" height=300>
</div>

----

### Merjenje frekvence

Več možnosti:
- Štejemo število impulzov v določenem času $ f = \frac{N}{T} $
- Uporabimo VF indikator
    - Nihajni krog, ki ga nastavimo na določeno frekvenco
- Uporabimo Grid-Dip meter
    - Meri frekvenco pasivnih nihajnih krogov, kondenatorjev, tuljav

----

### Merilni inštrumenti

#### Inštrument z vrtljivo tuljavico  

<div class="hg">
<div>

Tok skozi navitje povzroči zaskuk zaradi magnetnega polja

Proti magnetni sili deluje sila vzmeti

Lahko teče le majhen tok (50 &mu;A)
</div>

<img src="images/instr_vrtljivo_tuljavico.jpg" height=250>
</div>



Da zmanjšamo tok / napetost skozi tuljavico, vežemo dodatni soupor / predupor odvisno od maksimalne vrednosti, ki jo želimo meriti

<div class="row-even">
<div class="center-t">

Soupor  
<img src="images/meritve_soupor.jpg" height=250>
</div>
<div class="center-t">

Predupor  
<img src="images/meritve_predupor.jpg" height=250>
</div>
<div class="center-t">

Merjenje upornosti  
<img src="images/meritve_ohm_3.jpg" height=250>
</div>
</div>

----

### Multimeter

<div class="hg">
<div>

Multimeter – merilnik, ki meri več različnih veličin

AVO meter – Amper Volt Ohm meter
</div>

<img src="images/multimeter.jpg" height=250>
</div>



<div class="row-even">
<div class="center-t">

Analogni multimeter  
<img src="images/multimeter_analog.jpg" height=350>
</div>
<div class="center-t">

Digitalni multimeter  
<img src="images/multimeter_digi.jpg" height=350>
</div>
</div>

----

### Reflektometer

<div class="hg">
<div>

Merilec odbitih (reflektiranih) valov

Odbojnost lažje izmerimo kot impedanco bremena

Vrednosti od 0 (popolnoma prilagojeno) do 1 (popolnoma neprilagojeno)

$$ \Gamma = \frac{Z - Z_0}{Z + Z_0} $$

$Z$ – impedanca bremena  
$Z_0$ – referenčna impedanca (50 &Omega;)  
$\Gamma$ (Gama) – velikost odbojnosti
</div>

<img src="images/reflektometer.jpg" height=300>
</div>



#### SWR meter

<div class="hg">
<div>

Valovitost (SWR) – razmerje stojnega vala

Vrednosti od 1 (popolnoma prilagojeno) do &infin; (popolnoma neprilagojeno)

$$ \text{SWR} = \frac{1 + \Gamma}{1 - \Gamma} $$
</div>

<img src="images/swr_meter.jpg" height=400>
</div>

----

### Frekvenčni merilnik

<div class="row-even">
<div class="center-t">

Števec frekvence  
<img src="images/stevec_frekvence.jpg" height=300>
</div>
<div class="center-t">

Frekvenčni indikator  
<img src="images/frekvencni_indikator.jpg" height=200>
</div>
</div>



#### GRID-DIP meter

<div class="hg">
<div>

Merimo:
- **Resonančno frekvenco** nihajnega kroga
- **Kapacitivnost** kondenzatorja
- **Induktivnost** tuljave
</div>

<img src="images/grid_dip.jpg" height=300>
</div>

----

### Osciloskop

<div class="row-even">
<img src="images/osciloskop_1.jpg" height=300>
<img src="images/osciloskop_2.jpg" height=300>
</div>



<div class="row-even">
<img src="images/osciloskop_3.jpg" height=400>
<div class="center-t">
<img src="images/osciloskop_4.jpg" height=300>

$$ f = \frac{1}{T} = \frac{1}{1000\ \mathrm{s}} = 1000\ \mathrm{Hz} $$
</div>
</div>

----

## Varstvo pri delu

Nevarnost pri delu z električnim tokom: izogibajmo se napetostim, višjim od 50 V, ki so že lahko nevarne!

Nevarnost VF energije: Nikoli se ne dotikajmo naprav v obratovanju! Pri
visokih oddajnih močeh lahko pride do opeklin kože. Opekline lahko zaznamo že pri 10 W. Pri 1500 W oddajniku se na priključnih sponkah antene pojavi napetost:

$$ U = \sqrt{P \cdot R} = \sqrt{1500\ \mathrm{W} \cdot 50\ \Omega} = 273\ \mathrm{V} $$

Nikoli ne glejmo v usmerjene antene, saj so oči slabo prekrvavljene in lahko pride do trajnih posledic



#### Nevarnost udara strele

Dobra ozemljitev zmanjša verjetnost nastanka motenj

<div class="row-even">
<img src="images/ozemljitev_postaje.jpg" height=300>
<img src="images/ozemljitev_zunaj.jpg" height=300>
</div>



#### Primeri vprašanj

Kaj naredimo z varovalko, ki je pregorela?

a) Varovalko zamenjamo z novo, ki je predvidena za večji tok  
b) Varovalko premostimo s kosom žičke  
c) Varovalko zamenjamo z novo, ki je predvidena za isti tok

&nbsp;

Pred odpiranjem usmernika, ki deluje pri napetosti 220 V, moramo:

a) izključiti stikalo usmernika  
b) iz usmernika odstraniti varovalko  
c) dovodni 220 V omrežni kabel izključiti iz omrežja

----

<img src="images/web_56.png" width=600>