import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "@/content/editorial";
import { Invitation } from "@/components/Invitation";
import { Arrow } from "@/components/brand/Arrow";
import { pageMetadata } from "@/lib/metadata";
export function generateStaticParams(){return stories.map(story=>({slug:story.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const story=stories.find(item=>item.slug===slug);if(!story)return {};return pageMetadata({title:story.title,description:story.description,path:`/insights/${slug}`});}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const story=stories.find(item=>item.slug===slug);if(!story)notFound();return <><article><header className="article-heading"><Link href="/insights" className="inline-arrow"><Arrow className="rotate-180"/>The Riona journal</Link><span className="overline mt-8">{story.category}</span><h1>{story.title}</h1><p>{story.description}</p></header><div className="article-photo"><Image src={story.image} alt={story.alt} fill sizes="(max-width: 1100px) 100vw, 1100px" preload/></div><div className="article-body">{story.paragraphs.map(text=><p key={text}>{text}</p>)}<p className="article-note">Demo editorial perspective for design review. Imagery is illustrative and does not depict Riona’s actual people, products or facilities.</p><Link href="/insights" className="inline-arrow">Explore more perspectives<Arrow /></Link></div></article><Invitation/></>;}
