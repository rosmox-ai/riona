import Link from "next/link";
export function Wordmark({ onInk = false }: { onInk?: boolean }) {
  return <Link href="/" className={`riona-wordmark ${onInk?'on-ink':''}`} aria-label="Riona Life Science — home"><svg aria-hidden="true" width="39" height="44" viewBox="0 0 39 44" fill="none"><path d="M5 36V12a7 7 0 0 1 7-7h8a10 10 0 0 1 0 20H9" stroke="currentColor" strokeWidth="5"/><path d="m18 25 15 14" stroke="currentColor" strokeWidth="5"/><circle cx="32" cy="7" r="5" fill="#12B5A4"/></svg><span><strong>riona<span>.</span></strong><small>LIFE SCIENCE</small></span></Link>;
}
