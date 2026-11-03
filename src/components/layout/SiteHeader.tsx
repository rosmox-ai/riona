"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/editorial";
import { Wordmark } from "./Wordmark";
import { Arrow } from "../brand/Arrow";
export function SiteHeader() {
  const [open, setOpen]=useState<number|null>(null);
  const [mobile,setMobile]=useState(false);
  const header=useRef<HTMLElement>(null);
  const toggle=useRef<HTMLButtonElement>(null);
  const buttons=useRef<(HTMLButtonElement|null)[]>([]);
  const pathname=usePathname();
  function close(){setOpen(null);setMobile(false);}
  useEffect(()=>{
    function outside(e:PointerEvent){if(!header.current?.contains(e.target as Node))close();}
    function escape(e:KeyboardEvent){if(e.key==='Escape'){if(open!==null)buttons.current[open]?.focus();else if(mobile)toggle.current?.focus();close();}}
    document.addEventListener('pointerdown',outside);document.addEventListener('keydown',escape);
    return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);};
  },[open,mobile]);
  return <header className="site-header" ref={header} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))close();}}>
    <div className="header-inner"><Wordmark /><nav className="desktop-nav" aria-label="Main navigation">{navigation.map((group,i)=><div className="nav-group" key={group.label}><button ref={el=>{buttons.current[i]=el;}} className={`nav-trigger ${open===i?'open':''} ${pathname===group.href?'current':''}`} aria-expanded={open===i} aria-controls={`mega-${i}`} onClick={()=>setOpen(open===i?null:i)}>{group.label}<svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor"><path d="m2 4 4 4 4-4" /></svg></button><div id={`mega-${i}`} className="mega-menu" hidden={open!==i}><div className="mega-intro"><span className="overline">EXPLORE RIONA</span><h2>{group.intro}</h2><p>{group.description}</p><Link onClick={close} href={group.href} className="inline-arrow">Explore {group.label.toLowerCase()}<Arrow /></Link></div><div className="mega-links">{group.links.map(link=><Link onClick={close} href={link.href} key={link.href}><div><strong>{link.label}</strong><span>{link.detail}</span></div><Arrow /></Link>)}</div><Link onClick={close} className="mega-feature" href={group.href}><Image src={group.image} alt="Illustrative science imagery" fill sizes="320px"/><span>Discover a new perspective<Arrow /></span></Link></div></div>)}<Link className="nav-direct" href="/careers" onClick={close}>Careers</Link></nav><Link href="/contact" onClick={close} className="header-contact">Let’s connect<Arrow /></Link><button ref={toggle} className="mobile-toggle" aria-expanded={mobile} aria-controls="mobile-navigation" aria-label={mobile?'Close navigation':'Open navigation'} onClick={()=>setMobile(!mobile)}><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{mobile?<path d="m5 5 14 14M19 5 5 19"/>:<path d="M3 7h18M3 12h18M3 17h18"/>}</svg></button></div>
    <nav id="mobile-navigation" hidden={!mobile} className="mobile-navigation" aria-label="Mobile navigation">{navigation.map(group=><details key={group.label}><summary>{group.label}<span aria-hidden="true">+</span></summary><div>{group.links.map(link=><Link onClick={close} key={link.href} href={link.href}>{link.label}<Arrow /></Link>)}</div></details>)}<Link onClick={close} href="/careers">Careers<Arrow /></Link><Link onClick={close} href="/contact">Contact Riona<Arrow /></Link></nav>
  </header>;
}
