import Link from "next/link";
import { ScienceArt } from "./ScienceArt";
import { Arrow } from "./Arrow";
export const focusCards=[
  {variant:"science",title:"Science with purpose",text:"Curiosity, considered questions and a thoughtful perspective on healthcare.",href:"/science"},
  {variant:"care",title:"Care in every detail",text:"Keeping the people healthcare serves at the heart of the conversation.",href:"/quality#care"},
  {variant:"quality",title:"A quality mindset",text:"Building a culture of care, clarity and responsible decisions from the start.",href:"/quality"},
  {variant:"partnership",title:"Progress, together",text:"Listening closely. Exploring possibilities. Finding a shared way forward.",href:"/partnerships"},
] as const;
export function FocusCards(){return <div className="focus-grid">{focusCards.map(card=><Link href={card.href} className={`focus-card focus-${card.variant}`} key={card.title}><div className="focus-card-copy"><h3>{card.title}</h3><p>{card.text}</p><span className="focus-link">Explore<Arrow /></span></div><ScienceArt variant={card.variant}/></Link>)}</div>;}
