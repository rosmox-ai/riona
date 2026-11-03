"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { stories } from "@/content/editorial";
import { Arrow } from "./Arrow";
export function Journal() {
  const rail=useRef<HTMLDivElement>(null);
  function move(direction:number){const el=rail.current;if(el)el.scrollBy({left:direction*(el.querySelector('article')?.getBoundingClientRect().width??400)+direction*24,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
  return <section className="journal-section" aria-labelledby="journal-title"><div className="wide-container section-heading-row"><div><span className="overline">THE RIONA JOURNAL</span><h2 id="journal-title">A closer look at what matters.</h2></div><Link className="inline-arrow" href="/insights">All perspectives<Arrow /></Link></div><div ref={rail} className="journal-rail" tabIndex={0} aria-label="Journal articles, scroll horizontally">{stories.map(story=><article className="journal-card" key={story.slug}><Link href={`/insights/${story.slug}`}><div className="journal-card-copy"><span className="overline">{story.category}</span><h3>{story.title}</h3><p>{story.description}</p><span className="inline-arrow">Read perspective<Arrow /></span></div><div className="journal-photo"><Image src={story.image} alt={story.alt} fill sizes="(max-width: 700px) 85vw, 420px" /></div></Link></article>)}</div><div className="wide-container rail-footer"><span>Ideas on science, people and thoughtful progress.</span><div className="rail-controls"><button aria-label="Previous articles" onClick={()=>move(-1)}><Arrow className="rotate-180" /></button><button aria-label="Next articles" onClick={()=>move(1)}><Arrow /></button></div></div></section>;
}
