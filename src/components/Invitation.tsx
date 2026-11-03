import Link from "next/link";
import { Arrow } from "./brand/Arrow";
import { site } from "@/content/site";
type InvitationProps={heading?:string;text?:string;actionLabel?:string};
export function Invitation({heading="Let’s start something meaningful.",text=site.invitation.text,actionLabel="Start a conversation"}:InvitationProps){return <section className="invitation-band"><div className="wide-container"><div><span className="overline">CONNECT WITH RIONA</span><h2>{heading}</h2><p>{text}</p></div><Link href="/contact" className="solid-action">{actionLabel}<Arrow /></Link></div></section>;}
