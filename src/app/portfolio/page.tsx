import { PageHero } from "@/components/PageHero";
import { FocusCards } from "@/components/brand/FocusCards";
import { Invitation } from "@/components/Invitation";
import { pageMetadata } from "@/lib/metadata";
export const metadata=pageMetadata({title:"Our focus",description:"Explore the principles shaping Riona's approach to healthcare.",path:"/portfolio"});
export default function PortfolioPage(){return <><PageHero eyebrow="OUR FOCUS" title="Built around healthcare needs." lead="Science, quality, care and collaboration. A shared focus for the company we are building." image="/images/medicines.webp"/><section className="focus-section"><div className="wide-container"><div className="section-heading-row"><div><span className="overline">OUR PERSPECTIVE</span><h2>A considered approach.<br/>At every step.</h2></div><p className="section-description">Explore the ideas that guide us. For specific product or business requirements, start a conversation with Riona.</p></div><FocusCards/></div></section><Invitation heading="Looking for something specific?" text="Tell us about your requirements and we can discuss the next steps."/></>;}
