import Image from "next/image";
import type { ReactNode } from "react";
type PageHeroProps={eyebrow:string;title:string;lead:string;children?:ReactNode;image?:string};
export function PageHero({eyebrow,title,lead,children,image="/images/science.webp"}:PageHeroProps){return <section className="interior-hero"><div className="interior-hero-copy"><span className="overline">{eyebrow}</span><h1>{title}</h1><p>{lead}</p>{children&&<div className="mt-8">{children}</div>}</div><div className="interior-hero-image"><Image src={image} alt="Illustrative life science imagery" fill sizes="(max-width: 800px) 100vw, 45vw" preload/></div></section>;}
