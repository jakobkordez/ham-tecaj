## Antene

----

### Zakaj?

>“Čas, sredstva in napor, ki smo ga vložili v izgradnjo kvalitetnega antenskega sistema, nam bodo prinesli dosti več zadovoljstva ob kvalitetnih zvezah, kot pa če bi te iste zveze dosegli z večanjem moči oddajnika.”

----

### Antena

**Kaj dela antena?**  
Električno moč iz oddajnika pretvori v **elektromagnetne valove** in jih **izzseva v prostor**.

&nbsp;

**Tudi obratno:** EM valovi, ki zadanejo anteno povzročijo nihanje elek. delcev v anteni

&nbsp;

Kaj so signali, kaj motnje?

----

### Dolžina antene

Ponovimo:

$$\lambda\ \text{(m)} = \frac{300}{f\ \text{(MHz)}}$$

Tipične resonančne dolžine: **$\bm{\frac12 \lambda}$**, $\frac14 \lambda$, $\frac34 \lambda$, $1 \lambda$

----

### Polvalni dipol

Najbolj **razširjena** in **najpreprostejša** antena

Uporablja se tudi kot sestavni del drugih anten (npr. yagi)

Referenčna antena: z njo določamo ojačanje drugih anten (več kasneje)

<img src="images/dipole.jpg">



#### Dolžina polvalnega dipola

<div class="hg">
<div>

<div class="row-even">
<div>

$$ l\ (\textrm{m}) = \frac{150}{f\ (\textrm{MHz})} \cdot k $$
</div>
<div>

$l$ – dolžina v metrih  
$f$ – frekvenca v MHz  
$k$ – faktor vitkosti
</div>
</div>

$k$ je odvisen od **razmerja valovne dolžine** in **debeline vodnika**

$$ 0.93 \lesssim k \lesssim 0.98 $$
</div>

<img src="images/dipole.jpg">
</div>

----

### Impedanca antene

<div class="hg">
<div>

Impedanca: **Razporeditev toka in napetosti** v točki.

Napetost in tok fazno zamaknjena za 90° oz. $\frac14 \lambda$

$$ Z = \frac{U}{I} $$
</div>

<img src="images/dipol_impedanca.jpg">
</div>

Rezonančna antena: impedanca je **ohmska**

Antena **predolga**: pojavi se **induktivna reaktanca**  
Antena **prekratka**: pojavi se **kapacitivna reaktanca**

**Impedanco antene** razumemo kot impedanco **v točki napajanja**

----

### Sevalna upornost

Z njo določamo več lastnosti antene

Računa se v **točki največje amplitude toka**  
Ekvivalentna upornost, na kateri bi se porabila vsa moč oddajnika

<div class="row-even">
<div>

$$ \eta = \frac{1}{ 1 + \frac{R_i}{R_s} } $$
</div>
<div>

$\eta$ – (eta) izkoristek  
$R_i$ – upornost žice  
$R_s$ – upornost sevanja
</div>
</div>

Na upornost sevanja vplivajo:  
**višina** antene, **predmeti v okolici**, kvaliteta tal, dimenzije oblika antene, &hellip;

----

### Skrajševalni faktor

Ločimo **mehansko** in **električno dolžino antene**  
_Enaki le v primeru neskončno tanke žice, v praznem prostoru_

**Faktor vitkosti**: debelejši vodnik &rArr; večja kapacitivnost  
Nihajni krog: večja kapacitivnost &rArr; nižja frekvenca  
Torej: debelejšo anteno moramo skrajšati  
Za polvalni dipol iz žice okoli 0,98

Na KV področju se pojavi še **efekt koncev** (izolator + konec žice)  
Iz prakse, najugodnejši skrajševalni faktor: 0,95

----

### Sevanje antene

<div class="hg">
<div>

**Izotropna antena:**

- Točkast izvor, seva v vse smeri enako
- V praksi je NE moremo narediti

**Usmerjenost sevanja** predstavimo s:
- 3D sliko, ali s
- horizontalnim / vertikalnim sevalnim diagramom
</div>

<img src="https://www.researchgate.net/profile/Hong-Ning-Dai/publication/271847875/figure/fig1/AS:271760067133451@1441804057902/The-radiation-pattern-of-an-isotropic-antenna-an-omni-directional-antenna.png" width=400 class="white" style="padding:20px">
</div>

----

### Sevalni diagram

<img src="images/sevalni_diagram.jpg">



<div class="row-even">
<div class="center-t">

Horizontalni sevalni diagram
<img src="images/hor_sevalni_diagram.jpg">
</div>
<div class="center-t">

Vertikalni sevalni diagram
<img src="images/vert_sevalni_diagram.jpg">
</div>
</div>

----

### Kot sevanja

**Širina sevanja antene v glavni smeri**

V diagramu na glavnem snopu pri **0,71** maksimalne vrednosti.  
To je 50% padec moči oz. **-3dB**.

<div class="row-even">
<img src="images/kot_sevanja_1.jpg" height=300>
<img src="images/kot_sevanja_2.jpg" height=300>
</div>



### Razmerja sevanja

<div class="hg">
<div>

**F/B ratio – front to back ratio:**  
razmerje med napetostjo v smeri maksimalnega sevanja (0°) in njemu nasprotnega sevanja (180°)

**F/S ratio – front to side ratio:**  
 razmerje sevanja v direktni smeri in sevanja v bočni smeri (90°, 270°)
</div>

<img src="images/fb_ratio.jpg" height=400>
</div>

----

### Dobiček antene (ojačanje)

Razmerje ojačanja moči glede na referenčno anteno

<div class="row-even">
<div>

$$ G = \frac{P_1}{P_2} $$
</div>
<div>

$P_1$ – moč antene, ki se troši na anteni  
$P_2$ – moč referenčne antene v istem polju
</div>
</div>

$$ G(\mathrm{dB}) = 10 \cdot \log \bigg( \frac {P_1}{P_2} \bigg) = 20 \cdot \log \bigg( \frac {U_1}{U_2} \bigg) $$

----

### Referenčne antene

**Izotropna (točkasta) antena:**  
Ojačanje merimo z **dBi – decibel glede na izotropni radiator**

**Polvalni dipol:**  
Ojačanje merimo z **dBd – decibel glede na dipol**

Ojačanje dipola glede na izotropni radiator je 2,14 dBi

----

### Efektivna izsevana moč – ERP

$$ P_\text{ERP} = G \cdot P $$

**Primer**:  
Imamo oddajnik z močjo 25 W, anteno z ojačenjem 12 dBd in napajalni kabel, v katerem imamo 2 dB izgub. Iz navedenega je razvidno, da je skupno ojačenje antenskega sistema 10 dB oziroma 10-krat.

$$ P_\text{ERP} = 10 \cdot 25 \ \mathrm{W} = 250 \ \mathrm{W} $$

"Ob uporabi dipola bi za isto efektivno moč potrebovali 250 W oddajnik."

$ P_\text{EIRP}(\mathrm{W}) = 1,64 \cdot P_\text{ERP}(\mathrm{W}) $  
$ P_\text{EIRP}(\mathrm{dB}) = P_\text{ERP}(\mathrm{dB}) + 2,15 $

----

### Praktične oblike anten

----

### Polvalni dipol

<div class="hg">
<div>

Še enkrat:

$$ l(\mathrm{m}) = \frac{150}{f(\mathrm{MHz})} \cdot k $$

Na seva na vse strani enako

Ločimo:
- horizontalni dipol
- vertikalni dipol
</div>

<img src="images/wire_dipole.jpg" height=250>
</div>

Če nimamo prostora lahko zavijemo konce proti tlem, to vpliva na sevalni diagram, rezonanco in impedanco antene.



Idealno postavljen **vsaj ½ "𝜆" od tal**, če ni, se popači sevalni diagram.

<div class="row-even">
<div class="center-t">

Vertikalni sevalni diagram  
vertikalnega dipola  
<img src="images/vert_dipole.jpg" width=450>  
a) v praznem prostoru  
b) blizu tal
</div>
<div class="center-t img-stack">

Horizontalni dipol

<img src="images/hor_dipole_1.jpg" width=450><br/>
<img src="images/hor_dipole_2.jpg" width=450>
</div>
</div>

----

### Obrnjeni V – Inverted V

<div class="hg">
<div>

**Varianta dipola** (malenkost daljša, 5%)

- Potrebuje le eno visoko točko
- Okoli 90° (60 - 120°)
- Konci vsaj 3 m od tal (zaradi varnosti mimoidočih)

Oglašujemo jo s:

- spreminjanjem **dolžine žice** in
- spreminjanjem **naklona**

Možno napajanje večih anten različnih dolžin.
</div>

<div class="img-stack">
<img src="images/inv_v_1.jpg" width=300>
<img src="images/inv_v_2.jpg" width=300>
</div>
</div>

----

### Zaprt (zavit) polvalni dipol

<div class="hg">
<div>

Uporablja predvsem na UKV področju (tudi KV).  
Tudi varianta dipola – bolj **širokopasoven**.

Impedanca je okoli 300 &Omega;, to pomeni, da anteno napajamo z:

- 300 &Omega; odprtim vodom ali pa
- 50 &Omega; koaksialnim vodom z 6:1 (balunom)
</div>

<img src="images/zaprt_dipol.jpg" width=500>
</div>

----

### Dipol antene za delo na več frekvenčnih pasovih <br/> "Multiband dipoli"

<div class="hg">
<div>

**Zepp antena**: polvalna antena, napajamo z odprtim vodom dolg $\frac14 \lambda$  
Ločimo: **Enojni** (a) in **dvojni** (b) Zepp

**Windom antena** (c): polvalna antena, napajamo na $\frac13$ dolžine antene (impedanca 300 &Omega; &rArr; 6:1 balun in koaksialni vod)

**Dvojna Windom antena**: dve anteni na istem balunu, pokrijemo več pasov
</div>

<div class="img-stack">
<img src="images/zepp.jpg" width=300>
<img src="images/zepp_dvojni.jpg" width=300>
<img src="images/windom.jpg" width=300>
</div>
</div>



### "Trap" dipol

<div class="hg">
<div>

V antenski žici imamo **vgrajena posebna vezja**/pasti ali "trape"

Pasti so **vzporedni nihajni krogi** – pri resonanci **velika upornost**

**W3DZZ** antena: z enim parom trapov pokrije več amaterskih pasov  
To dosežemo s pravilnim razmerjem med L in C
</div>

<img src="images/trap_dipol.jpg" width=500>
</div>

----

### Yagi–Uda antena

<div class="hg">
<div>

Tipična predstavnica **usmerjenih** anten

**Aktivni** element: **sevalec**  
**Parazitni** elementi: **reflektor**, **direktorji**

<img src="images/yagi.jpg" width=500>
</div>

<div class="img-stack">
<img src="images/yagi_polarization.jpg" width=500><br/>
<img src="images/yagi_tla.jpg" width=500>
</div>
</div>



<div class="row-even">
<div>

**Več direktorjev** &rarr; **ožji glavni snop**  
Po določeni velikosti, ni smiselno povečevanje.

<img src="images/yagi_long.jpg" width=400>
</div>
<div class="center-t">

"Multiband" Yagi antena  
<img src="images/multiband_yagi.jpg" width=500>
</div>

----

### Zančne (loop) antene

<div class="hg">
<div>

**Quad** (4) in **Delta** (3) **Loop**

Dva ali več kvadratov/trikotnikov

Sevalec (dolg &lambda;), reflektor (&lambda; + 3-5%), direktorji (&lambda; - 3-5%)

Razmik približno 0,2 &lambda;

Nižji vertikalni kot sevanja na majhnih višinah  
Manj občutljive na šum  
Slabša odpornost na vreme

KV – prevladujejo loop, UKV – yagi
</div>

<div class="img-stack">
<img src="images/quad.jpg" width=350>
<img src="images/delta.jpg" width=350>
</div>

----

### Logaritmično – periodične dipol antene (LPDA) <br/> "log-periodik" (LP)

<div class="hg">
<div>

Najpogostejše za TV sprejemnike

Pokrivajo **širok frekvenčni pas**, konstantno obnašanje

Najdaljši in najkrajši določata zgornjo in spodnjo mejo frekvenčnega pasu

Razmiki določajo ojačanje antene

**Napaja na sprednjem delu**

Predolgi – reflektorji, prekratki – direktorji
</div>

<div class="img-stack">
<img src="images/lpda_ant.jpg" height=200>
<img src="images/lpda.jpg" height=300>
</div>

----

### Long – wire antena (LW)

<div class="hg">
<div>

Ko nimamo prostora za polvalni dipol ali usmerjeno anteno

Žica postavljena čim višje, ne nujno v ravni liniji

**Moramo** uporabljati **prilagoditveno vezje** (prilagodimo impedanco)

Idealna dolžina je nekaj valovnih dolžin

Na najnižji frekvenci mora biti dolga vsaj $\frac34 \lambda$
</div>

<img src="images/longwire.jpg" width=500>
</div>

----

### Vertikalne antene

<div class="hg">
<div>

Malo prostora, delo iz vozila, ročne postaje

**Dobro narejena** in primerno **ozemljena**!

Horizontalno seva v vse smeri enako ("omnidirekcionalna"), vertikalno precej usmerjena

Polovica vertikalnega dipola ($\frac14 \lambda$), druga polovica je zemlja pod anteno

Ozemljimo z **radiali** (na ali pod zemljo) 0,2 - 0,5 &lambda;
</div>

<img src="images/vertikalna_ant.jpg" width=500>
</div>



<div class="hg">
<div>

Na KV pogosto dodamo "trape"

$\frac14 \lambda$ najbolj razširjena,  
**AMPAK** optimalni kot sevanja dosežemo z **$\bf{\frac58 \lambda}$**

Problemi: **ni napajalnih vodov** s pravilno impedanco in antena **ni resonančna** (kapacitivna)

Pomagamo si s tuljavo pri vznožju

Oddaja: odlična  
Sprejem: **več šuma** kot horizontalne
</div>

<img src="images/vert_5_8_ant.jpg" height=400>
</div>



#### Ground plane – GP antene

Vertikalna antena postavljena visoko nad zemljo – potrebujemo "**umetno zemljo**" ali "ground plane"

Radiali – žica (KV) ali aluminjaste cevi

<div class="row-even">
<img src="images/gp_ant.jpg" height=400>
<img src="https://m0ukd.com/static/calculators/Quarter_Wave_Ground_Plane/23cm_quarter_wave_antenna_1296MHz.jpg" height=400>
<img src="images/gp_6_ant.jpg" height=400>
</div>

----

### Parabolična antena

<div class="hg">
<div>

Predvsem na UHF in SHF

Zakaj? Na 144MHz je premer reflektorja okoli 15m

Reflektor – "**parabolično zrcalo**"  
**Sevalec** – **v gorišču**

Sevalci različnih oblik – z menjavo, različni frekvenčni pasovi

**VELIKO ojačanje** in **ozek kot sevanja**

Satelitske in EME (lahko tudi tropo) zveze
</div>

<img src="images/parabolicna_ant.jpg" height=400>
</div>

----

### Umetna antena

<div class="hg">
<div>

**Ne seva** energije v prostor

Upori primerne moči

Predstavljajo popolnoma prilagojeno breme

**Uglaševanje in testiranje** oddajnikov
</div>

<img src="https://www.onallbands.com/wp-content/uploads/2020/03/DXEPartType_Dummy-Loads.jpg" width=300>
</div>

----

### Postavljanje anten

<div class="center-t">

**VARNOST!!**
</div>

<div class="row-even">
<img src="images/varnost_antene.jpg" height=400>
<img src="images/antenna_crane.jpg" height=400>
</div>

----

## Napajanje anten

----

### Antenski / napajalni vod

Poveže anteno in oddajnik

Največji prenos moči: končna stopnja oddajnika in antena **impedančno prilagojena**

Dober vod:
- **ne sme sevati**
- **energija** pri prenosu **se ne sme izgubiti**
- mora imeti **konstantne električne karakteristike**
- mora biti odporen na **vreme**

----

### Vrste antenskih vodov

Dve glavni vrsti: **dvožilni** in **koaksialni** vod

<div class="row-even">
<img src="images/ladder_air.jpg" height=220>
<img src="images/sim_ant_vod.jpg" height=220>
<img src="images/ladder_img.jpg" height=220>
</div>

<div class="row-even">
<img src="images/dvozilni_oklepni_vod.jpg" height=220>
<img src="images/zgradba_koaksa.jpg" height=220>
<img src="images/coax_img.jpg" height=220>
</div>



**Valovod** (Waveguide) – cev ustreznega preseka (za mikrovalovno področje)

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Radar_antenna_feed_waveguide.png" width=400>

----

### Karakteristična impedanca voda (Z)

Razmerje napetosti U in toka I na neskončno dolgem vodniku

Impedanca (zračni izolator):
<div class="row-even">
<div>

$$ Z = \sqrt{ \frac{L}{C} } $$
</div>

<div>

$L$ – "debelina vodnika"  
$C$ – "medsebojna razdalja"
</div>
</div>

<img src="images/dvozilni_ant_vod.jpg" width=500>



<div class="row-even">
<div class="center-t">

Dvožilni antenski vod  
<img src="images/sim_dvozilni_vod.jpg" height=200>

$$ Z(\Omega) = \frac{120}{ \sqrt{\varepsilon_r} } \cdot \ln \frac{2 \cdot D(\mathrm{mm})}{d(\mathrm{mm})} $$
</div>
<div class="center-t">

Koaksialni vod  
<img src="images/asim_koaks.jpg" height=200>

$$ Z(\Omega) = \frac{60}{ \sqrt{\varepsilon_r} } \cdot \ln \frac{D(\mathrm{mm})}{d(\mathrm{mm})} $$
</div>
</div>

----

### Vpliv dielektrika

<div class="row-even">
<div>

Hitrost širjenja valovanja v snovi:

$$ v = \frac{c}{\sqrt{\varepsilon_r}} $$

$v$ – hitrost v snovi ($\frac{\mathrm{km}}{\mathrm{s}}$)  
$c$ – hitrost svetlobe (300000 $\frac{\mathrm{km}}{\mathrm{s}}$)  
$\varepsilon_r$ – relativna dielektrična konstanta
</div>
<div>

Skrajševalni faktor koaksialnega voda:

$$ V = \frac{v}{c} = \frac{1}{\sqrt{\varepsilon_r}} $$

<table class="compact">
<thead>
<tr><th>Snov</th><th>$\varepsilon_r$</th></tr>
</thead>
<tbody>
<tr><td>Zrak</td><td>1,0</td></tr>
<tr><td>Teflon</td><td>2,0</td></tr>
<tr><td>Polietilen</td><td>2,3</td></tr>
<tr><td>Pleksi steklo</td><td>3,0 &hellip; 3,6</td></tr>
<tr><td>Polivinil (PVC)</td><td>3,1 &hellip; 3,5</td></tr>
<tr><td>Epoksi smola</td><td>3,5</td></tr>
<tr><td>Porcelan</td><td>6,5</td></tr>
</tbody>
</table>
<table class="compact">
<thead>
<tr><th>Tip koaksialnega kabla</th><th>$V$</th></tr>
</thead>
<tbody>
<tr><td>RG58</td><td>0,66</td></tr>
<tr><td>RG</td><td>0,66</td></tr>
<tr><td>RG</td><td>0,66</td></tr>
<tr><td>RG</td><td>0,71</td></tr>
<tr><td>RG</td><td>0,72</td></tr>
<tr><td>H155</td><td>0,81</td></tr>
<tr><td>H500</td><td>0,81</td></tr>
</tbody>
</table>
</div>
</div>

----

### Izgube v napajalnih vodih

**Izgube** zaradi ohmske **upornosti žice** (skin efekt), **izgube v dielektriku** in **sevanja voda**

<img src="images/ant_vod_loss.jpg" height=300>

----

### Porazdelitev toka in napetosti vzdolž voda <br/> Stojno valovanje

<div class="row-even">
<div class="center-t">

Prilagojeno breme  
R = Z  
<img src="images/vod_prilagojeno.jpg" height=280>
</div>
<div class="center-t">

Odprt vod  
R = &infin;  
<img src="images/vod_odprti.jpg" height=280>
</div>
<div class="center-t">

Kratko slenjen vod  
R = 0  
<img src="images/vod_stik.jpg" height=280>
</div>
</div>



Del VF energije se potroši na bremenu, preostali del se vrne

<div class="row-even">
<div class="center-t">

R > Z  
<img src="images/vod_r_gt_z.jpg" height=280>
</div>
<div class="center-t">

R < Z  
<img src="images/vod_r_lt_z.jpg" height=280>
</div>
</div>



### Razmerje stojnega valovanja (SWR)

"Standing wave ratio"

$$ \text{SWR} = \frac{U_\text{max}}{U_\text{min}} $$

Merimo s **SWR metrom**

Slab SWR povzroči:
- Izgube / gretje / poškodbe na antenskem vodu
- Manjša izsevana moč
- **Poškodba končne stopnje** na oddajniku!

Dopustna meja: SWR = 3 (25% moči)

----

### Elementi za prilagoditev in transformacijo

**Gama**: s kratkostično objemalko in spremenljivim kondenzatorjem prilagajamo SWR

**Delta**: priključne žice na sredino dipola, sredino lahko ozemljimo

**Hairpin**: Lažje kot gama, ampak mora sevalec biti prekinjen in v primeru koaksa potreben člen za simetriranje (balun)

<div class="row-even">
<div class="center-t">

Gama  
<img src="images/vod_gama.jpg" height=250>
</div>
<div class="center-t">

Delta  
<img src="images/vod_delta.jpg" height=250>
</div>
<div class="center-t">

Hairpin  
<img src="images/vod_hairpin.jpg" height=250>
</div>
</div>



### Transformatorji impedance

<div class="row-even">
<div>

<img src="images/vod_1_4.jpg" height=200>

**Četrtvalni transformator** impedance

$Z_v$ – vhodna impedanca  
$Z_i$ – izhodna impedanca
</div>
<div>

<img src="images/polvalna_zanka.jpg" height=200>

**Polvalna zanka**

Transformira impedanco 4:1  
Omogoča simetriranje
</div>
</div>

<div class="center-t mt-20">
Upoštevamo skrajševalni faktor voda!
</div>



### Transformatorji za simetriranje

Polvalni dipol (simetrični) -?- koaksialni vod (nesimetrični)

Balun (**bal**anced-**un**balanced) – prehod, simetrično na nesimetrično

<div class="row-even">
<div class="center-t">

**Polvalna zanka**  
<img src="images/polvalna_zanka.jpg" height=200>
</div>
<div class="center-t">

**Bazooka** simetrirni člen  
<img src="images/vod_bazooka.jpg" height=200>
</div>
<div class="center-t">

Trifilarno navitje  
<img src="images/trifilarno_navitje.jpg" height=200>
</div>
</div>

In še mnogo več…

----

### Antenski tunerji

<div class="row-even">
<img src="images/tuner_vezje.jpg" width=500>
<img src="images/tuner_img.jpg" width=500>
</div>

----

### Napajalni vod kot element za uglaševanje

<div class="row-even">
<div class="img-stack">
<img src="images/vod_imp_stik.jpg" width=300><br/>
<img src="images/vod_imp_odprt.jpg" width=300>
</div>
<div>
<img src="images/vod_karakteristike.jpg" width=500>
</div>
</div>

----

<div style="font-size:50px">🚧 Under construction 🚧</div>
