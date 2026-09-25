"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Project = { src: string; title: string; description: string; href: string };

const projects: Project[] = [
  { src: "https://zjjcbyeirsumszohvtvu.supabase.co/storage/v1/object/public/portfolio/projects/d22d833d-dfb5-40dc-97d7-4267f44d49cd.jpg", title: "Designer Portfolio", description: "Glass UI, motion-led presentation and a visual-first portfolio experience.", href: "https://designer-portfolio-adx.vercel.app/" },
  { src: "https://zjjcbyeirsumszohvtvu.supabase.co/storage/v1/object/public/portfolio/projects/2c41cac4-7cb6-4c78-83b8-9f4f5faf1427.png", title: "Developer Portfolio", description: "A polished front-end portfolio with responsive layouts and interaction.", href: "https://www.pratikdhandare.in" },
  { src: "https://zjjcbyeirsumszohvtvu.supabase.co/storage/v1/object/public/portfolio/projects/22371395-fcc1-4c24-883d-00808591055b.png", title: "SPYLT", description: "A cinematic product experience with personality-led visual direction.", href: "https://try-spylt.vercel.app" },
  { src: "https://zjjcbyeirsumszohvtvu.supabase.co/storage/v1/object/public/portfolio/projects/5ee4fab7-08a3-465e-a4a7-ce5c85d50a35.png", title: "iOS / macOS Portfolio", description: "An interface that behaves like an operating system.", href: "https://ios-macos-portfolio.vercel.app" }
];

function Reveal({children,delay=0}:{children:React.ReactNode;delay?:number}) {
  return <motion.div initial={{opacity:0,y:24,filter:"blur(8px)"}} whileInView={{opacity:1,y:0,filter:"blur(0px)"}} viewport={{once:true,margin:"-60px"}} transition={{duration:.8,delay,ease:[.16,1,.3,1]}}>{children}</motion.div>
}

export default function Page(){
  const [active,setActive]=useState<Project|null>(null);
  const aRef=useRef<HTMLDivElement>(null);
  const bRef=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    let lastY=window.scrollY, dir:"normal"|"reverse"="normal", acc=0, lastFlip=0, raf=0;
    const onScroll=()=>{
      if(raf) return;
      raf=requestAnimationFrame(()=>{
        raf=0;
        const y=window.scrollY,d=y-lastY;lastY=y;if(!d)return;
        if(Math.sign(d)!==Math.sign(acc)) acc=d; else acc+=d;
        if(Math.abs(acc)<30)return;
        const now=performance.now(); if(now-lastFlip<400)return;
        const next=d>0?"normal":"reverse" as "normal"|"reverse";
        if(next!==dir){dir=next;lastFlip=now;acc=0;if(aRef.current)aRef.current.style.animationDirection=next;if(bRef.current)bRef.current.style.animationDirection=next;}
      });
    };
    window.addEventListener("scroll",onScroll,{passive:true});
    return()=>{window.removeEventListener("scroll",onScroll);cancelAnimationFrame(raf)};
  },[]);

  const marqueeA=useMemo(()=>[...projects,...projects],[ ]);
  const marqueeB=useMemo(()=>[...projects,...projects],[ ]);

  useEffect(()=>{ if(!active)return; const prev=document.body.style.overflow; document.body.style.overflow="hidden"; const onKey=(e:KeyboardEvent)=>e.key==="Escape"&&setActive(null); window.addEventListener("keydown",onKey); return()=>{document.body.style.overflow=prev;window.removeEventListener("keydown",onKey)} },[active]);

  return <>
    <nav className="nav glass">
      <a href="#" className="logo">Saket.</a>
      <div className="navlinks">
        <a href="#work">Work</a><a href="#about">About</a><a href="#capabilities">Capabilities</a><a href="#contact">Contact</a>
      </div>
      <a className="btn primary" href="#contact">Let's talk <span>↗</span></a>
    </nav>

    <main>
      <section className="hero">
        <div className="glow"/>
        <div className="hero-inner container">
          <Reveal><span className="badge glass"><span className="dot"/> Available for selected projects</span></Reveal>
          <Reveal delay={.08}><h1 className="display">I design digital<br/><span style={{color:"var(--accent)"}}>experiences</span> that move.</h1></Reveal>
          <Reveal delay={.16}><p>Strategy, visual design and front-end craft — brought together into polished interfaces with depth, motion and a point of view.</p></Reveal>
          <Reveal delay={.24}><div className="actions"><a href="#work" className="btn primary">Explore work →</a><a href="#about" className="btn secondary">About me</a></div></Reveal>
        </div>
      </section>

      <section id="work" className="section">
        <div className="container">
          <Reveal><div className="section-head"><div className="mono">Selected work</div><h2 className="display">A few things I’ve built.</h2><p>Click a card to open it like a window. Scroll direction reverses the motion for a more tactile gallery.</p></div></Reveal>

          <div className="marquee-wrap"><div ref={aRef} className="marquee">{marqueeA.map((p,i)=><ProjectCard key={"a"+i} p={p} onOpen={setActive}/>)}</div></div>
          <div className="marquee-wrap" style={{marginTop:18}}><div ref={bRef} className="marquee reverse">{marqueeB.map((p,i)=><ProjectCard key={"b"+i} p={p} onOpen={setActive}/>)}</div></div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container grid">
          <Reveal><div className="panel glass"><div className="mono">About</div><h3>Design-minded. Detail-obsessed. Built for the web.</h3><p>I care about the space between a strong concept and the tiny interaction that makes it feel alive. My workflow blends brand thinking, UI systems, motion and implementation.</p></div></Reveal>
          <Reveal delay={.08}><div className="panel glass"><div className="mono">Approach</div><h3>Make the interface feel inevitable.</h3><p>Clear hierarchy, deliberate motion, fast feedback and responsive behavior — without turning the experience into visual noise.</p></div></Reveal>
        </div>
      </section>

      <section id="capabilities" className="section">
        <div className="container">
          <Reveal><div className="section-head"><div className="mono">Capabilities</div><h2 className="display">From first frame to final deploy.</h2></div></Reveal>
          <div className="project-list">
            {[["01","Brand & Visual Systems","Identity, art direction, typography and component languages that stay coherent as the product grows."],["02","UI / UX Design","Flows, layouts, responsive systems and interaction details shaped around clarity and conversion."],["03","Motion & Interaction","Scroll choreography, micro-interactions, transitions and motion that communicates rather than distracts."],["04","Front-end Build","Next.js, React, Tailwind and production-minded implementation with performance in mind."]].map(([k,t,d],i)=><Reveal key={k} delay={i*.05}><article className="project glass"><div><div className="kicker">{k}</div><h3>{t}</h3><p>{d}</p></div><span className="mono">Explore ↗</span></article></Reveal>)}
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          <Reveal><div className="footer-main"><div><div className="mono">Have a project in mind?</div><h2 className="display">Let’s make something<br/><span style={{color:"var(--accent)"}}>worth remembering.</span></h2></div><div><a className="btn primary" href="mailto:saket1dandekar@gmail.com">Start a conversation ↗</a><small>© {new Date().getFullYear()} Saket Dandekar</small></div></div></Reveal>
        </div>
      </footer>
    </main>

    <AnimatePresence>
      {active && <motion.div className="modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className="backdrop" onClick={()=>setActive(null)}/>
        <motion.div className="window" initial={{scale:.92,y:24,opacity:0}} animate={{scale:1,y:0,opacity:1}} exit={{scale:.95,y:16,opacity:0}} transition={{duration:.2,ease:[.16,1,.3,1]}} onClick={e=>e.stopPropagation()}>
          <div className="chrome"><button aria-label="Close" onClick={()=>setActive(null)} className="traffic r"/><span className="traffic y"/><span className="traffic g"/><span style={{marginLeft:8,color:"rgba(255,255,255,.38)",font:"11px DM Mono"}}>{active.title.toLowerCase().replace(/\s+/g,"-")}.aura</span></div>
          <div className="window-body"><img src={active.src} alt={active.title}/><div className="info"><div className="info-copy"><h3>{active.title}</h3><p>{active.description}</p></div><a className="live" href={active.href} target="_blank" rel="noreferrer">Live preview ↗</a></div></div>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  </>
}

function ProjectCard({p,onOpen}:{p:Project;onOpen:(p:Project)=>void}){
  return <button className="card" onClick={()=>onOpen(p)} aria-label={p.title}><img src={p.src} alt="" loading="lazy"/></button>
}
