# ✈️ Flight Seat Planner

Veebirakendus, mis võimaldab kasutajal:
- valida sobiva lennu
- sisestada reisijate arv
- määrata istekoha eelistused (akna all, rohkem jalaruumi, istmed koos, väljapääsule lähemal)
- näha visuaalselt soovitatud istekohti lennuki plaanil

---

## 🔧 Tehnoloogiad
- React
- Vite
- TailwindCSS
- React Router
- (Tulevikus: Spring Boot REST API)

---

## ✅ Projekti seis
- ✅ Projekti struktuur ja seadistus tehtud
- ✅ Routing töötab
- ✅ Lennuvaliku vaade valmis (mock andmed)
- ✅ Eelistuste vorm töötab ja suunab edasi
- ✅ Istekohtade leht tehtud
- ✅ Deploy tehtud Verceliga
- ⬜ Istekohtade plaani visuaaliga jäin toppama (hõivatud, soovitatud, vabad kohad)
- ⬜ Üleüldine UI võiks parem olla
- ⬜ Docker konteiner jäi seekord tegemata

---

## 💬 Märkused ja õpikohad

See proovitöö oli minu jaoks suur õppimise võimalus. Olen õppinud front-end arendust alles ~5 kuud, seega oli see esimene kord, kus püüdsin teha midagi täismahus — koos disaini, navigeerimise ja komponentide ülesehitusega.

### Mis sain tehtud:
- Lendude list koos mock-andmetega
- Kasutaja eelistuste sisestamine ja haldamine URL query stringide kaudu
- Lennuki istekohtade visuaalne esitlus (hõivatud/sobivad)
- Vercel deploy
- GitHub versioonihaldus

### Mis oli keeruline:
- Tailwindi seadistamine Vite projektis — versioon 4 tõi kaasa uusi muudatusi, mis ei sobinud varasema PostCSS konfiguratsiooniga. Tekkinud konfliktid takistasid Tailwindi klasside rakendumist ka pärast mitmeid parandusi. Proovisin isegi GitHubist malli kloonida (https://github.com/theodorusclarence/vite-react-tailwind-starter), kuid probleemid püsisid. Proovisin terve päeva ainuüksi seda probleemi lahendada, aga ei saanud hakkama.
- Docker jäi seekord ajapuuduse tõttu tegemata

### Kuidas õppisin:
Kasutasingi seda projekti kui õppimise võimalust. Kasutasin ChatGPT abi nagu mentorit, et saada aru erinevatest tehnilistest sammudest, mitte lihtsalt kopeerida. Kogu kood on ise kirjutatud, testitud ja kohandatud. Isegi kui midagi jäi poolikuks, sain väga palju juurde arusaamises, kuidas rakendused toimivad. Ma polnud elus varem ka Tailwind CSS-i kasutanud. Positiivse noodina kasvatas see mu huvi koodimise osas veelgi enam ja tahan ikkagi selle projekti lõpuni ära teha.

---

## 🚀 Kuidas käivitada lokaalselt

```bash
npm install
npm run dev
