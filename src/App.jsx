import React, { useMemo } from "react";
import { BedDouble, CalendarDays, ChevronDown, Clock3, ExternalLink, Flower2, Gift, Heart, MapPin, Send, UsersRound } from "lucide-react";

const RSVP_URL = "https://forms.cloud.microsoft/e/JfMz0sX62T";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Vila+Santa+Barbara%2C+Grauz%C4%97%2C+33354+Mol%C4%97t%C5%B3+rajonas";
const openExternal = url => window.open(url, "_blank", "noopener,noreferrer");
const scrollTo = id => document.getElementById(id)?.scrollIntoView({behavior:"smooth"});

export default function App(){
 const days=useMemo(()=>Math.max(0,Math.ceil((new Date("2027-05-29T15:00:00+03:00")-Date.now())/86400000)),[]);
 return <div className="site">
  <header><button className="monogram" onClick={()=>scrollTo('home')}>D <b>&</b> V</button><nav>{[['home','Kvietimas'],['program','Programa'],['info','Svarbi informacija'],['place','Vieta']].map(x=><button key={x[0]} onClick={()=>scrollTo(x[0])}>{x[1]}</button>)}</nav><button className="btn small" onClick={()=>openExternal(RSVP_URL)}>RSVP</button></header>
  <main>
   <section id="home" className="paper hero"><Botanical side="tl"/><Botanical side="br"/><div className="content"><Flower2 className="gold icon"/><p className="eyebrow">MŪSŲ VESTUVĖS</p><h1>Dominykas <span>ir</span> Viktorija</h1><p className="date">2027 · 05 · 29</p><Ornament/><p className="lead">Su dideliu džiaugsmu kviečiame Jus būti kartu mūsų ypatingą dieną ir pasidalinti akimirkomis, kurias norėsime prisiminti dar ilgai.</p><div className="actions"><button className="btn" onClick={()=>openExternal(RSVP_URL)}><Send/>Patvirtinti dalyvavimą</button><div className="count"><CalendarDays/>Iki šventės liko {days} d.</div></div></div><button className="more" onClick={()=>scrollTo('program')}>DAUGIAU<ChevronDown/></button></section>
   <section id="program" className="paper section"><Botanical side="tr" small/><div className="section-inner"><p className="eyebrow">2027 · 05 · 29</p><h2>Šventės diena</h2><Ornament/><div className="program"><Program time="15:00" title="Laukiame atvykstant svečių" text="Ren­kamės ir pradedame šventę"/><Program time="16:00" title="Santuokos ceremonija" text="Ceremonija vyks šventės vietoje"/></div><p className="lead after">Po ceremonijos kviečiame švęsti kartu – jaukiai pabendrauti, pasijuokti, pašokti ir pasidžiaugti gražiomis akimirkomis kartu.</p></div></section>
   <section id="place" className="place section"><div className="section-inner"><MapPin className="gold icon"/><p className="eyebrow gold">ŠVENTĖS VIETA</p><h2>Vila Santa Barbara</h2><p className="address">Graužė, 33354 Molėtų rajonas</p><button className="btn light" onClick={()=>openExternal(MAPS_URL)}><MapPin/>Atidaryti „Google Maps“ žemėlapį<ExternalLink/></button></div></section>
   <section id="info" className="paper section"><Botanical side="br" small/><div className="section-inner narrow"><h2>Svarbi informacija</h2><Ornament/><Info icon={UsersRound} title="Apie vaikus">Suteikime tėveliams galimybę vakaru pasimėgauti be rūpesčių – šventę rengiame tik suaugusiems.</Info><Info icon={Gift} title="Gėlės ir dovanos">Jūsų buvimas mums – pati gražiausia dovana. Jei norėsite pradžiuginti mus gėle, tegu tai būna viena, išsirinkta iš širdies. O vietoje didelės dovanos mums mieliausia būtų maža, simbolinė staigmena.</Info><Info icon={BedDouble} title="Nakvynė">Kad po šventės nereikėtų skubėti namo, pasirūpinsime nakvyne. Pranešdami apie savo atvykimą, parašykite, ar planuojate pasilikti nakvynei.</Info></div></section>
   <section id="rsvp" className="rsvp section"><div className="section-inner narrow"><Heart className="rust icon"/><h2>Praneškite apie atvykimą</h2><p className="lead">Mieli artimieji ir draugai, prašome pranešti, ar galėsite būti kartu su mumis mūsų vestuvių dieną.</p><p className="deadline">Atsakymo laukiame iki 2027 m. balandžio 15 d.</p><button className="btn" onClick={()=>openExternal(RSVP_URL)}><Send/>Atidaryti RSVP formą<ExternalLink/></button></div></section>
  </main><footer><h3>Dominykas ir Viktorija</h3><p>2027 · 05 · 29</p><small>Labai lauksime Jūsų!</small></footer>
 </div>
}
function Ornament(){return <div className="orn"><i/><Heart/><i/></div>}
function Program({time,title,text}){return <article className="card program-card"><Clock3/><strong>{time}</strong><h3>{title}</h3><p>{text}</p></article>}
function Info({icon:Icon,title,children}){return <article className="card info"><span><Icon/></span><div><h3>{title}</h3><p>{children}</p></div></article>}
function Botanical({side,small}){return <div aria-hidden className={`botanical ${side} ${small?'small':''}`}><i className="stem"/>{[0,1,2,3,4,5].map(n=><i key={n} className={`leaf l${n}`}/>)}<i className="flower f1"/><i className="flower f2"/></div>}
