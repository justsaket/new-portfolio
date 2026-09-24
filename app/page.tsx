"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const flavors = [
  { name: "Chocolate", note: "classic / rich", color: "#d8b49b", accent: "#6d321e" },
  { name: "Strawberry", note: "sweet / bright", color: "#f2a7a7", accent: "#9c303d" },
  { name: "Cookies & Cream", note: "crunch / creamy", color: "#d6d2c9", accent: "#2b2926" },
  { name: "Peanut Butter", note: "nutty / smooth", color: "#e6c27a", accent: "#7c4e18" },
  { name: "Vanilla", note: "soft / silky", color: "#eee5c8", accent: "#8b6f35" },
  { name: "Max Choco", note: "deep / intense", color: "#8e756a", accent: "#241713" },
];

function Can({ flavor, large = false }: { flavor: typeof flavors[number]; large?: boolean }) {
  return (
    <div className={large ? "can canLarge" : "can"} style={{ "--can": flavor.color, "--ink": flavor.accent } as React.CSSProperties}>
      <div className="canTop" />
      <div className="canBody">
        <span className="tiny">PROTEIN + CAFFEINE</span>
        <strong>SPYLT</strong>
        <span className="flavor">{flavor.name}</span>
        <span className="milk">MILK</span>
      </div>
      <div className="canBottom" />
    </div>
  );
}

export default function Page() {
  const [active, setActive] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 16]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setActive((v) => (v + 1) % flavors.length);
      if (e.key === "ArrowLeft") setActive((v) => (v - 1 + flavors.length) % flavors.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const current = flavors[active];

  return (
    <main style={{ "--theme": current.color, "--ink": current.accent } as React.CSSProperties}>
      <nav className="nav">
        <a className="wordmark" href="#">SPYLT<span>®</span></a>
        <div className="navLinks">
          <a href="#flavors">FLAVORS</a><a href="#benefits">WHY SPYLT</a><a href="#stories">STORIES</a>
        </div>
        <a className="order" href="#shop">SHOP <span>↗</span></a>
      </nav>

      <section ref={heroRef} className="hero">
        <div className="heroNoise" />
        <div className="heroCopy">
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">THE MILK THAT DOES MORE</motion.p>
          <motion.h1 initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }} className="heroTitle">
            PROTEIN<br /><em>WITH A</em><br />PERSONALITY.
          </motion.h1>
          <p className="heroSub">A seriously good chocolate milk packed with protein and a kick of caffeine. No boring shakes. No compromise.</p>
          <div className="heroCtas"><a className="pill dark" href="#flavors">MEET THE FLAVORS <span>↓</span></a><a className="pill" href="#benefits">WHY IT HITS</a></div>
        </div>
        <motion.div style={{ y, rotate }} className="heroCan"><Can flavor={current} large /></motion.div>
        <div className="ticker"><span>HIGH PROTEIN • REAL MILK • CAFFEINE • ZERO BORING • </span><span>HIGH PROTEIN • REAL MILK • CAFFEINE • ZERO BORING • </span></div>
      </section>

      <section className="statement">
        <div className="statementInner">
          <p className="eyebrow">NOT YOUR AVERAGE MILK</p>
          <h2>THE GOOD STUFF<br /><i>SHOULDN’T</i> BE BORING.</h2>
          <p className="statementText">SPYLT turns the post-workout routine into something you actually look forward to. Big flavor, useful fuel, and a visual identity with zero chill.</p>
        </div>
      </section>

      <section id="flavors" className="flavors">
        <div className="sectionTop"><p className="eyebrow">PICK YOUR MOOD</p><span>0{active + 1} / 0{flavors.length}</span></div>
        <div className="flavorStage">
          <div className="flavorWords">
            <p>FLAVOR</p>
            <h2>{current.name}</h2>
            <span>{current.note}</span>
          </div>
          <motion.div key={current.name} initial={{ y: 80, opacity: 0, rotate: -8 }} animate={{ y: 0, opacity: 1, rotate: 4 }} transition={{ type: "spring", stiffness: 110, damping: 14 }} className="flavorCan"><Can flavor={current} large /></motion.div>
          <div className="flavorNav"><button onClick={() => setActive((active - 1 + flavors.length) % flavors.length)}>←</button><button onClick={() => setActive((active + 1) % flavors.length)}>→</button></div>
        </div>
        <div className="flavorRail">{flavors.map((f, i) => <button key={f.name} onClick={() => setActive(i)} className={i === active ? "flavorDot active" : "flavorDot"}><span style={{ background: f.color }} /><b>{f.name}</b></button>)}</div>
      </section>

      <section id="benefits" className="benefits">
        <div className="benefitTitle"><p className="eyebrow">THE WHY</p><h2>FUNCTION<br /><i>MEETS</i><br />FLAVOR.</h2></div>
        <div className="benefitGrid">
          {[
            ["30g+", "PROTEIN", "Built to help you hit your protein without choking down another sad shake."],
            ["180mg", "CAFFEINE", "A clean little jolt for training, creating, commuting, or surviving Monday."],
            ["REAL", "MILK", "Creamy, familiar, ridiculously drinkable. The original comfort food got an upgrade."],
            ["0", "BORING", "No beige branding. No sleepy copy. No reason to hide your drink in the back of the fridge."]
          ].map(([big, label, copy], i) => <motion.article whileHover={{ y: -8, rotate: i % 2 ? 1 : -1 }} key={label} className="benefitCard"><strong>{big}</strong><h3>{label}</h3><p>{copy}</p><span>0{i + 1}</span></motion.article>)}
        </div>
      </section>

      <section id="stories" className="stories">
        <div className="storyBig">GOOD<br /><i>ENERGY</i><br />LOOKS<br />LIKE THIS.</div>
        <div className="storyCards"><article><span>01</span><h3>Gym bag approved.</h3><p>Protein without the powdery aftertaste. Grab it cold and go.</p></article><article><span>02</span><h3>Desk drawer essential.</h3><p>When the 3PM crash arrives, make the fridge your new meeting room.</p></article><article><span>03</span><h3>Flavor first.</h3><p>Because nutrition is easier to stick with when it tastes like a treat.</p></article></div>
      </section>

      <section id="shop" className="shop">
        <div className="shopCan"><Can flavor={flavors[5]} large /></div>
        <div><p className="eyebrow">READY WHEN YOU ARE</p><h2>GRAB A<br /><i>SPYLT.</i></h2><p className="shopCopy">Six flavors. One very unserious approach to serious nutrition.</p><a className="pill dark" href="#">SHOP THE RANGE <span>↗</span></a></div>
      </section>

      <footer><a className="wordmark" href="#">SPYLT<span>®</span></a><p>Protein milk with personality.</p><div><a href="#">Instagram</a><a href="#">TikTok</a><a href="#">Contact</a></div><small>© {new Date().getFullYear()} SPYLT. Built as an independent front-end recreation.</small></footer>
    </main>
  );
}
