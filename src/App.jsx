import React, { useMemo, useState } from "react";
import { BedDouble, CalendarDays, ChevronDown, Clock3, ExternalLink, Flower2, Gift, Heart, MapPin, Send, UsersRound } from "lucide-react";

const RSVP_URL = "https://forms.cloud.microsoft/e/JfMz0sX62T";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Vila+Santa+Barbara%2C+Grauz%C4%97%2C+33354+Mol%C4%97t%C5%B3+rajonas";
const openExternal = (url) => window.open(url, "_blank", "noopener,noreferrer");
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const copy = {
  lt: {
    htmlLang: "lt",
    names: <>Dominykas <span>ir</span> Viktorija</>, namesPlain: "Dominykas ir Viktorija",
    nav: [["home","Kvietimas"],["program","Programa"],["place","Vieta"],["info","Svarbi informacija"]],
    wedding: "MŪSŲ VESTUVĖS",
    intro: "Su dideliu džiaugsmu kviečiame Jus būti kartu mūsų ypatingą dieną ir pasidalinti akimirkomis, kurias norėsime prisiminti dar ilgai.",
    confirm: "Patvirtinti dalyvavimą", until: "Iki šventės liko", days: "d.", more: "DAUGIAU", dayTitle: "Šventės diena",
    program: [
      {time:"15:00", title:"Laukiame atvykstant svečių", text:"Renkamės ir pradedame šventę", note:"Jei planuojate nakvoti, galėsite iš karto įsikurti, pasirinkti savo vietą ir palikti daiktus. Šventės vietoje Jūsų lauks šampanas ir užkandžiai, kad laukiant ceremonijos laikas neprailgtų."},
      {time:"16:00", title:"Santuokos ceremonija", text:"Ceremonija vyks šventės vietoje"}
    ],
    after: "Po ceremonijos kviečiame švęsti kartu – jaukiai pabendrauti, pasijuokti, pašokti ir pasidžiaugti gražiomis akimirkomis kartu.",
    venueLabel:"ŠVENTĖS VIETA", venue:"Vila Santa Barbara", address:"Graužė, 33354 Molėtų rajonas", maps:"Atidaryti „Google Maps“ žemėlapį",
    infoTitle:"Svarbi informacija",
    info:[
      {title:"Apie vaikus",text:"Suteikime tėveliams galimybę vakaru pasimėgauti be rūpesčių – šventę rengiame tik suaugusiems."},
      {title:"Gėlės ir dovanos",text:"Jūsų buvimas mums – pati gražiausia dovana. Jei norėsite pradžiuginti mus gėle, tegu tai būna viena, išsirinkta iš širdies. O vietoje didelės dovanos mums mieliausia būtų maža, simbolinė staigmena."},
      {title:"Nakvynė",text:"Kad po šventės nereikėtų skubėti namo, pasirūpinsime nakvyne. Pranešdami apie savo atvykimą, parašykite, ar planuojate pasilikti nakvynei."}
    ],
    rsvpTitle:"Praneškite apie atvykimą", rsvpText:"Mieli artimieji ir draugai, prašome pranešti, ar galėsite būti kartu su mumis mūsų vestuvių dieną.", footer:"Labai lauksime Jūsų!"
  },
  pl: {
    htmlLang:"pl", names:<>Dominik <span>i</span> Wiktoria</>, namesPlain:"Dominik i Wiktoria",
    nav:[["home","Zaproszenie"],["program","Program"],["place","Miejsce"],["info","Ważne informacje"]], wedding:"NASZ ŚLUB",
    intro:"Z wielką radością zapraszamy Was, abyście byli z nami w tym wyjątkowym dniu i dzielili chwile, które na długo pozostaną w naszej pamięci.",
    confirm:"Potwierdź obecność", until:"Do uroczystości pozostało", days:"dni", more:"WIĘCEJ", dayTitle:"Dzień uroczystości",
    program:[
      {time:"15:00",title:"Rozpoczęcie przyjęcia i powitanie gości",text:"",note:"Jeśli planujecie nocleg, będziecie mogli od razu się zakwaterować, wybrać swoje miejsce i zostawić rzeczy. Na miejscu będą na Was czekać szampan i przekąski, aby czas oczekiwania na ceremonię upłynął przyjemnie."},
      {time:"16:00",title:"Ceremonia ślubna",text:"Ceremonia odbędzie się w miejscu uroczystości"}
    ],
    after:"Po ceremonii zapraszamy na wspólne świętowanie – pełne rozmów, śmiechu, tańca i pięknych chwil razem.",
    venueLabel:"MIEJSCE UROCZYSTOŚCI",venue:"Vila Santa Barbara",address:"Graužė, 33354 rejon Molėtai",maps:"Otwórz mapę w Google Maps", infoTitle:"Ważne informacje",
    info:[
      {title:"O dzieciach",text:"Dajmy rodzicom możliwość cieszenia się wieczorem bez trosk – uroczystość organizujemy wyłącznie dla dorosłych."},
      {title:"Kwiaty i prezenty",text:"Wasza obecność jest dla nas najpiękniejszym prezentem. Jeśli zechcecie sprawić nam radość kwiatem, niech będzie to jeden, wybrany od serca. Zamiast dużego prezentu najbardziej ucieszy nas mała, symboliczna niespodzianka."},
      {title:"Nocleg",text:"Aby po uroczystości nie trzeba było spieszyć się do domu, zadbamy o nocleg. Potwierdzając przybycie, napiszcie proszę, czy planujecie zostać na noc."}
    ],
    rsvpTitle:"Potwierdźcie swoją obecność",rsvpText:"Drodzy Bliscy i Przyjaciele, prosimy o informację, czy będziecie mogli towarzyszyć nam w dniu naszego ślubu.",footer:"Z radością będziemy na Was czekać!"
  }
};

export default function App(){
  const [lang,setLang]=useState("lt"); const t=copy[lang];
  const days=useMemo(()=>Math.max(0,Math.ceil((new Date("2027-05-29T15:00:00+03:00")-Date.now())/86400000)),[]);
  const switchLang=(next)=>{setLang(next);document.documentElement.lang=copy[next].htmlLang};
  return <div className="site">
    <header className="topbar"><button className="monogram" onClick={()=>scrollTo("home")}>D <b>&</b> V</button><nav>{t.nav.map(([id,label])=><button key={id} onClick={()=>scrollTo(id)}>{label}</button>)}</nav><div className="top-actions"><div className="language-switch"><button className={lang==="lt"?"active":""} onClick={()=>switchLang("lt")}>LT</button><span>/</span><button className={lang==="pl"?"active":""} onClick={()=>switchLang("pl")}>PL</button></div><button className="text-link" onClick={()=>openExternal(RSVP_URL)}>RSVP</button></div></header>
    <main className="continuous-page">
      {['a','b','c','d','e'].map(x=><img key={x} className={`floral floral-${x}`} src="/floral-corner.png" alt="" aria-hidden="true"/>)}
      <section id="home" className="flow-section hero"><div className="section-inner hero-inner"><Flower2 className="gold icon"/><p className="eyebrow">{t.wedding}</p><h1>{t.names}</h1><p className="date">2027 · 05 · 29</p><Ornament/><p className="lead">{t.intro}</p><div className="actions"><button className="btn" onClick={()=>openExternal(RSVP_URL)}><Send/>{t.confirm}</button><div className="count"><CalendarDays/>{t.until} {days} {t.days}</div></div></div><button className="more" onClick={()=>scrollTo("program")}>{t.more}<ChevronDown/></button></section>
      <div className="flow-line" aria-hidden="true"/>
      <section id="program" className="flow-section program-section"><div className="section-inner"><p className="eyebrow">2027 · 05 · 29</p><h2>{t.dayTitle}</h2><Ornament/><div className="program">{t.program.map(p=><Program key={p.time} {...p}/>)}</div><p className="lead after">{t.after}</p></div></section>
      <section id="place" className="flow-section place"><div className="venue-photo"/><div className="venue-veil"/><div className="section-inner venue-content"><MapPin className="gold icon"/><p className="eyebrow">{t.venueLabel}</p><h2>{t.venue}</h2><p className="address">{t.address}</p><button className="outline-btn" onClick={()=>openExternal(MAPS_URL)}><MapPin/>{t.maps}<ExternalLink/></button></div></section>
      <section id="info" className="flow-section info-section"><div className="section-inner narrow"><h2>{t.infoTitle}</h2><Ornament/><Info icon={UsersRound} {...t.info[0]}/><Info icon={Gift} {...t.info[1]}/><Info icon={BedDouble} {...t.info[2]}/></div></section>
      <section id="rsvp" className="flow-section rsvp"><div className="section-inner narrow"><Heart className="rust icon"/><h2>{t.rsvpTitle}</h2><p className="lead">{t.rsvpText}</p><button className="btn" onClick={()=>openExternal(RSVP_URL)}><Send/>{t.confirm}<ExternalLink/></button></div></section>
    </main><footer><h3>{t.namesPlain}</h3><p>2027 · 05 · 29</p><small>{t.footer}</small></footer>
  </div>
}
function Ornament(){return <div className="orn"><i/><Heart/><i/></div>}
function Program({time,title,text,note}){return <article className="program-item"><Clock3/><strong>{time}</strong><h3>{title}</h3>{text&&<p>{text}</p>}{note&&<p className="program-note">({note})</p>}</article>}
function Info({icon:Icon,title,text}){return <article className="info"><span><Icon/></span><div><h3>{title}</h3><p>{text}</p></div></article>}
