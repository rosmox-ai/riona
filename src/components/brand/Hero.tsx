"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Arrow } from "./Arrow";
const slides = [
  { label: "A purpose in every detail", title: "Precision in science.\nCare in every step.", text: "A new chapter in life science, shaped by a commitment to quality, thoughtful collaboration and the people healthcare serves.", image: "/images/science.webp", action: "Discover Riona", href: "/about" },
  { label: "People. Ideas. Possibilities.", title: "Great possibilities\nbegin together.", text: "We believe progress starts with curiosity, a shared purpose and the willingness to see things from a different perspective.", image: "/images/people.webp", action: "Our perspective", href: "/science" },
  { label: "Thoughtfully moving forward", title: "Small details.\nMeaningful purpose.", text: "Building a healthcare company with care at its heart. Responsible decisions today, a thoughtful foundation for tomorrow.", image: "/images/medicines.webp", action: "Explore our approach", href: "/quality" },
];
export function Hero() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (!playing || hovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => { if (!document.hidden) setActive(v => (v + 1) % slides.length); }, 7000);
    return () => clearInterval(timer);
  }, [playing, hovered]);
  const select = (index: number) => {setActive((index+slides.length)%slides.length);setPlaying(false);};
  return <section className="cinema-hero" aria-label="Introducing Riona" aria-roledescription="carousel" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onFocusCapture={()=>setPlaying(false)}>
    <div className="hero-images" aria-hidden="true">{slides.map((slide,i)=><div key={slide.image} className={`hero-image ${i===active?'is-active':''}`}><Image src={slide.image} alt="" fill sizes="100vw" preload={i===0} className="object-cover" /></div>)}</div>
    <div className="hero-shade" />
    <div className="hero-content" aria-live={playing?"off":"polite"}>
      <span className="hero-kicker"><span />{slides[active].label}</span>
      <h1>{slides[active].title}</h1>
      <p>{slides[active].text}</p>
      <Link href={slides[active].href} className="hero-action">{slides[active].action}<Arrow /></Link>
    </div>
    <div className="hero-bottom">
      <div className="hero-tabs">{slides.map((slide,i)=><button type="button" key={slide.label} className={i===active?'selected':''} onClick={()=>select(i)} aria-label={`Show slide ${i+1}: ${slide.label}`} aria-pressed={i===active}><span>0{i+1}</span><span>{["Science with purpose", "Better, together", "Care in the details"][i]}</span></button>)}</div>
      <div className="hero-controls"><button type="button" aria-label="Previous hero slide" onClick={()=>select(active-1)}><Arrow className="rotate-180" /></button><button type="button" aria-label={playing?"Pause slideshow":"Play slideshow"} aria-pressed={playing} onClick={()=>setPlaying(!playing)}>{playing?<span aria-hidden="true">Ⅱ</span>:<svg aria-hidden="true" width="14" height="16" viewBox="0 0 14 16"><path d="m2 1 11 7-11 7Z" fill="currentColor"/></svg>}</button><button type="button" aria-label="Next hero slide" onClick={()=>select(active+1)}><Arrow /></button></div>
    </div>
  </section>;
}
