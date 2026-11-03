import Image from "next/image";
import Link from "next/link";
import { stories } from "@/content/editorial";
import { PageHero } from "@/components/PageHero";
import { Arrow } from "@/components/brand/Arrow";
import { Invitation } from "@/components/Invitation";
import { pageMetadata } from "@/lib/metadata";
export const metadata=pageMetadata({title:"The Riona journal",description:"Perspectives on science, quality, people and thoughtful progress.",path:"/insights"});
export default function InsightsPage(){return <><PageHero eyebrow="THE RIONA JOURNAL" title="Ideas worth exploring." lead="Perspectives on science, quality, people and the possibilities of working together." image="/images/people.webp"/><div className="wide-container article-grid">{stories.map(story=><article className="journal-card" key={story.slug}><Link href={`/insights/${story.slug}`}><div className="journal-card-copy"><span className="overline">{story.category}</span><h2 className="text-card mt-4">{story.title}</h2><p className="mt-4">{story.description}</p><span className="inline-arrow">Read perspective<Arrow /></span></div><div className="journal-photo"><Image src={story.image} alt={story.alt} fill sizes="(max-width: 700px) 100vw, 50vw"/></div></Link></article>)}</div><Invitation /></>;}
