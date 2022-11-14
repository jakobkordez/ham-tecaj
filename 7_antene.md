## 7. Antene

----

### Zakaj?

>“Čas, sredstva in napor, ki smo ga vložili v izgradnjo kvalitetnega antenskega sistema, nam bodo prinesli dosti več zadovoljstva ob kvalitetnih zvezah, kot pa če bi te iste zveze dosegli z večanjem moči oddajnika.”

----

### Antena

**Kaj dela antena?**  
Električno moč iz oddajnika pretvori v **elektromagnetne valove** in jih **izzseva v prostor**.

<br/>

**Tudi obratno:** EM valovi, ki zadanejo anteno povzročijo nihanje elek. delcev v anteni

<br/>

Kaj so signali, kaj motnje?

----

### Dolžina antene

Ponovimo:

$$\lambda\ \text{(m)} = \frac{300}{f\ \text{(MHz)}}$$

Tipične resonančne dolžine: **$\bm{\frac12 \lambda}$**, $\frac14 \lambda$, $\frac34 \lambda$, $1 \lambda$

----

### Polvalni dipol

<img src="images/dipole.jpg">

Najbolj **razširjena** in **najpreprostejša** antena

Uporablja se tudi kot sestavni del drugih anten (npr. yagi)

Referenčna antena: z njo določamo ojačanje drugih anten (več kasneje)

----

### Dolžina polvalnega dipola

$$l\ \text{(m)} = \frac{150}{f\ \text{(MHz)}} \sdot k$$

𝑙 – dolžina v metrih \
𝑓 – frekvenca v MHz \
𝑘 – faktor vitkosti

odvisen od **razmerja valovne dolžine** in **debeline vodnika**
0,93 ≲ 𝑘 ≲ 0,98

<img src="https://">

----

### Impedanca antene

Impedanca: **Razporeditev toka in napetosti** v točki.

Napetost in tok fazno zamaknjena za 90° oz. ¼ λ

$Z = \frac{U}{I}$

<img src="https://">

Rezonančna antena: impedanca je **ohmska**

Antena **predolga**: pojavi se **induktivna reaktanca**\
Antena **prekratka**: pojavi se **kapacitivna reaktanca**

**Impedanco antene** razumemo kot impedanco **v točki napajanja**

----

### Sevalna upornost

Z njo določamo več lastnosti antene

Računa se v **točki največje amplitude toka**
Ekvivalentna upornost, na kateri bi se porabila moč oddajnika

Na upornost sevanja vplivajo:\
**višina** antene, **predmeti v okolici**, kvaliteta tal, dimenzije/oblike anten, …

𝜂 = $\frac{1}{ 1+ \frac{Ri}{Rs} }$

𝜂 – (eta) izkoristek\
𝑅𝑖 – upornost žice\
𝑅𝑠 – upornost sevanja

----

### Skrajševalni faktor

Ločimo **mehansko** in **električno dolžino antene**\
_Enaki le v primeru neskončno tanke žice, v praznem prostoru_

**Faktor vitkosti:** debelejši vodnik => večja kapacitivnost\
Nihajni krog: večja kapacitivnost => nižja frekvenca \
Torej: debelejšo anteno moramo skrajšatiZa polvalni dipol iz žice okoli 0,98

Na KV področju se pojavi še **efekt koncev** (izolator + konec žice)Iz prakse, najugodnejši skrajševalni faktor: 0,95

----

### Sevanje antene

**Izotropna antena:**

- Točkast izvor, seva v vse smeri enako
- V praksi je NE moremo narediti

<img src="https://">

**Usmerjenost sevanja** predstavimo s:

- 3D sliko, ali s
- 3D sliko, ali s

----

### Sevalni diagram

<img src="https://">

----

### Kot sevanja

**Širina sevanja antene v glavni smeri**

V diagramu na glavnem snopu pri **0,71** maksimalne vrednosti. \
To je 50% padec moči oz. **-3dB**.

<img src="https://">

<img src="https://">

----

### Sevalni diagram usmerjene antene

<img src="https://">

<img src="https://">

----

### Razmerja sevanja

**F/B ratio – front to back ratio:** \
razmerje med napetostjo v smeri maksimalnega sevanja (0°) in njemu nasprotnega sevanja (180°)

**F/S ratio – front to side ratio:** \
 razmerje sevanja v direktni smeri in sevanja v bočni smeri (90°, 270°)

<img src="https://">

----

### Dobiček antene (ojačanje)

Razmerje ojačanja moči glede na referenčno anteno\
G = $\frac{P_1}{P_2}$

P<sub>1</sub> - moč antene, ki se troši na anteni \
P<sub>2</sub> - moč referenčne antene v istem polju

G(dB) = 10 log $[$ $\frac {P_1}{P_2}$ $]$

G(dB) = 20 log $[$ $\frac {U_1}{U_2}$ $]$

----

### Referenčne antene

**Izotropna (točkasta) antena:**\
Ojačanje merimo z **dBi – decibel glede na izotropni radiator**

**Polvalni dipol:** \
Ojačanje merimo z **dBd – decibel glede na dipol**

Ojačanje dipola glede na izotropni radiator je 2,14 dBi

----

### Efektivna izsevana moč – ERP

P<sub>ERP</sub> = G ∙ P

_Primer:_ \
Imamo oddajnik z močjo 25 W, anteno z ojačenjem 12 dBd in napajalni kabel, v katerem imamo 2 dB izgub. Iz navedenega je razvidno, da je skupno ojačenje antenskega sistema 10 dB oziroma 10-krat.

P<sub>ERP</sub> = 10 ∙ 25W = 250W

"Ob uporabi dipola bi za isto efektivno moč potrebovali 250 W oddajnik."

P<sub>EIRP</sub>(W) = 1,64 ∙ P<sub>ERP</sub>(W)\
P<sub>EIRP</sub>(dB) = P<sub>ERP</sub>(dB) + 2,15

----

## Praktične oblike anten

----

### Polvalni dipol

Še enkrat:

l(m) = $\frac{150}{f(MHz)}$ ∙ k

Ne seva na vse strani enako.

Ločimo:

- horizontalni in
- vertikalni dipol

Če nimamo prostora lahko zavijemo konce proti tlem, to vpliva na sevalni diagram, rezonanco in impedanco antene.

<img src="https://">

Idealno postavljen **vsaj ½ "𝜆" od tal**, če ni, se popači sevalni diagram.

<img src="https://">

----

### Obrnjeni V – Inverted V

**Varianta dipola** (malenkost daljša, 5%)

- Potrebuje le eno visoko točko
- Okoli 90° (60 - 120°)
- Konci vsaj 3 m od tal (zaradi varnosti mimoidočih)

Oglašujemo jo s:

- spreminjanjem **dolžine žice** in
- spreminjanjem **naklona**

Možno napajanje večih anten različnih dolžin.

<img src="https://">

----

### Zaprt (zavit) polvalni dipol

Uporablja predvsem na UKV področju (tudi KV).\
Tudi varianta dipola – bolj **širokopasoven**.

Impedanca je okoli 300 Ω, to pomeni, da anteno napajamo z:

- 300 Ω odprtim vodom ali pa
- 50 Ω koaksialnim vodom z 6:1 (balunom)

<img src="https://">

----

### Dipol antene za delo na več frekvenčnih pasovih "Multiband dipoli"

**Zepp antena**: polvalna antena, napajamo z odprtim vodom dolg ¼ 𝜆\
Ločimo: **Enojni** in **dvojni** Zepp

**Windom antena**: polvalna antena, napajamo na ⅓ dolžine antene (impedanca 300 Ω => 6:1 balun in koaksialni vod)\
**Dvojna Windom antena**: dve anteni na istem balunu, pokrijemo več pasov

----

### "Trap" dipol

V antensko žico imamo **vgrajena posebna vezja - pasti** ali "trape" \
Pasti so **vzporedni nihajni krogi** – pri resonanci **velika upornost**\
**W3DZZ** antena: z enim parom trapov pokrije več amaterskih pasov\
To dosežemo s pravilnim razmerjem med L in C

<img src="https://">

----

### Yagi–Uda antena

Tipična predstavnica **usmerjenih** anten

**Aktivni** element: **sevalec**\
**Parazitni** elementi: **reflektor, direktorji**

<img src="https://">

<img src="https://">

**Več direktorjev** = **ožji glavni snop**\
Po določeni velikosti, ni smiselno povečevanje.

"Multiband" Yagi antena

<img src="https://">

<img src="https://">

----

### Zančne (loop) antene

**Quad** in **Delta Loop**\
Dva ali več kvadratov/trikotnikov\
Sevalec (dolg 1 λ), reflektor (λ + 3-5%), direktorji (λ - 3-5%)\
Razmik približno 0.2 λ\
Nižji vertikalni kot sevanja na majhnih višinah, manj občutljive na šum\
Slabša odpornost na vreme\
KV – prevladujejo loop, UKV – yagi

<img src="https://">

<img src="https://">

----

### Logaritmično – periodične dipol antene (LPDA) "log-periodik" (LP)

Najpogostejše za TV sprejemnike\
Pokrivajo **širok frekvenčni pas**, konstantno obnašanje\
Najdaljši in najkrajši določata zgornjo in spodnjo mejo frekvenčnega pasu\
Razmiki določajo ojačanje antene\
**Napaja na sprednjem delu**\
Predolgi – reflektorji, prekratki - direktorji

<img src="https://">

<img src="https://">

----

### Long – wire antena (LW)

Ko nimamo prostora za polvalni dipol ali usmerjeno anteno\
Žica postavljena čim višje, ne nujno v ravni liniji\
**Moramo** uporabljati **prilagoditveno vezje** (prilagaja impedanco)\
Idealna dolžina je nekaj valovnih dolžin\
Na najnižji frekvenci mora biti dolga vsaj ¾ λ

<img src="https://">

----

### Vertikalne antene

Malo prostora, delo iz vozila, ročne postaje\
**Dobro narejena** in primerno **ozemljena**!\
Horizontalno seva v vse smeri enako ("omnidirekcionalna"), vertikalno precej usmerjena\
Polovica vertikalnega dipola (¼ λ), druga polovica je zemlja pod anteno\
Ozemljimo z **radiali** (na ali pod zemljo) 0,2 - 0,5 λ

<img src="https://">

Na KV pogosto dodamo "trape"\
¼ λ najbolj razširjena, **AMPAK** optimalni kot sevanja dosežemo z **5/8 λ** \
Problemi: **ni napajalnih vodov** s pravilno impedanco in antena **ni resonančna** (kapacitivna)\
Pomagamo si s tuljavo pri vznožju\
Oddaja: odlična\
Sprejem: **več šuma** kot horizontalne

<img src="https://">

----

### Ground plane – GP antene

Vertikalna antena postavljena visoko nad zemljo – potrebujemo "**umetno zemljo**" ali "ground plane"\
Radiali – žica (KV) ali aluminjaste cevi

<img src="https://">

<img src="https://">

----

### Parabolična antena

Predvsem na UHF in SHF\
Zakaj? Na 144MHz je premer reflektorja okoli 15m\
Reflektor – "**parabolično zrcalo**"\
**Sevalec – v gorišču**\
Sevalci različnih oblik – z menjavo, različni frekvenčni pasovi\
**VELIKO ojačanje** in **ozek kot sevanja**\
Satelitske in EME (lahko tudi tropo) zveze

<img src="https://">

----

### Umetna antena

**Ne seva** energije v prostor\
Upori primerne moči\
Predstavljajo popolnoma prilagojeno breme\
**Uglaševanje in testiranje** oddajnikov

<img src="https://">

----

### Postavljanje anten

**VARNOST!!**

<img src="https://">

<img src="https://">

----

## Napajanje anten

----

### Antenski / napajalni vod

Poveže anteno in oddajnik\
Največji prenos moči: končna stopnja oddajnika in antena **impedančno prilagojena**

Vod **ne sme sevati**, **energija** pri prenosu **se ne sme izgubiti**, mora imeti **konstantne električne karakteristike**, in mora biti odporen na **vreme**

----

### Vrste antenskih vodov

Dve glavni vrsti: **dvožilni** in **koaksialni** vod\
**Valovod** – cev ustreznega preseka (za mikrovalovno področje)

<img src="https://">

<img src="https://">

----

### Karakteristična impedanca voda (Z)

Razmerje napetosti U in toka I na neskončno dolgem vodniku\
Impedanca (zrak): Z = $\sqrt{ \frac{L}{C} }$ \
L – "debelina vodnika"\
C – "medsebojna razdalja"

<img src="https://">

Dvožilni antenski vod:

<img src="https://">

Z(Ω) = $\frac{120}{ \sqrt{ξ_r} }$ ∙ ln $\frac{2D(mm)}{d(mm)}$

Koaksialni vod:

<img src="https://">

Z(Ω) = $\frac{60}{ \sqrt{ξ_r} }$ ∙ ln $\frac{D(mm)}{d(mm)}$

----

### Vpliv dielektrika

Hitrost širjenja valovanja v snovi:

v = $ \frac{c}{\sqrt{ξ_r}}$

v - hitrost v snovi ($\frac{km}{s}$)\
c - hitrost svetlobe (300000 $\frac{km}{s}$)\
ξ<sub> r</sub> - relativna dielektrična konstanta

<img src="https://">

Skrajševalni faktor koaksialnega voda:

V = $ \frac{v}{c}$ = $ \frac{1}{\sqrt{ξ_r}}$

<img src="https://">

----

### Izgube v napajalnih vodih

**Izgube** zaradi ohmske **upornosti žice** (skin efekt), **izgube v dielektriku** in **sevanja voda** <font size="1"> “Nobody’s perfect” (Hannah Montana, 2007) </font>

<img src="https://">

----

### Porazdelitev toka in napetosti vzdolž voda - Stojno valovanje

<img src="https://">

<img src="https://">

<img src="https://">

<img src="https://">

<img src="https://">

----

### Razmerje stojnega valovanja (SWR)

"Standing wave ratio"

SWR = $\frac{U_(max)}{U_(min)}$

Merimo s **SWR metrom**\
Slab SWR:

- Izgube / gretje / poškodbe na antenskem vodu
- Manjša izsevana moč
- **Poškodba končne stopnje** na oddajniku!
- Dopustna meja: SWR = 3 (25% moči)

----

### Elementi za prilagoditev in transformacijo

**Gama**: s kratkostično objemalko in spremenljivim kondenzatorjem prilagajamo SWR\
**Delta**: priključne žice na sredino dipola, sredino lahko ozemljimo\
**"Hairpin"**: Lažje kot gama, ampak mora sevalec biti prekinjen in v primeru koaksa potreben člen za simetriranje (balun)

<img src="https://">

<img src="https://">

<img src="https://">

----

### Elementi za prilagoditev in transformacijo Transformatorji impedance

<img src="https://">

Z<sub>v</sub> – vhodna impedanca\
Z<sub>i</sub> – izhodna impedanca

<img src="https://">

Transformira impedanco 4:1\
Omogoča simetriranje

Upoštevamo skrajševalni faktor voda!

----

### Transformatorji za simetriranje

Polvalni dipol (simetrični) -?- koaksialni vod (nesimetrični)\
Balun (**bal**anced-**un**balanced) – prehod, simetrično na nesimetrično

<img src="https://">

<img src="https://">

<img src="https://">

In še mnogo več…

----

### Antenski tunerji

<img src="https://">

<img src="https://">

----

### Napajalni vod kot element za uglaševanje

<img src="https://">

<img src="https://">

<img src="https://">
