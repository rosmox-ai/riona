/** Original vector illustrations; decorative editorial concepts, not product diagrams. */
export function ScienceArt({ variant }: { variant: "science" | "care" | "quality" | "partnership" }) {
  return <svg aria-hidden="true" viewBox="0 0 400 270" fill="none" className={`science-art art-${variant}`}>
    {variant === "science" && <>
      <path fill="#D9E6F6" d="M0 0h400v270H0z"/><circle cx="330" cy="55" r="140" fill="#B9D2F2"/><path d="M0 220L220 0H0v220Z" fill="#EDF3FC"/>
      <path d="M260 0c-110 60 110 120 0 180s-80 60-40 90M330 0c110 60-110 120 0 180s80 60 40 90" stroke="#3763A6" strokeWidth="2"/>
      {[25,50,75,100,125,150,175,200,225].map((y,i)=><path key={y} d={`M${260+(i%3)*12} ${y}h${70-(i%3)*24}`} stroke="#3763A6" opacity=".5"/>)}
      <path d="M100 75h42v77l54 77c9 14 0 29-16 29H61c-16 0-25-15-16-29l55-77V75Z" fill="#FAFDFF" stroke="#1E47C8" strokeWidth="3"/>
      <path d="M86 177h71l37 54c6 10 0 22-12 22H60c-12 0-18-12-12-22l38-54Z" fill="#1E47C8"/>
      <path d="M91 75h61" stroke="#1E47C8" strokeWidth="6"/><circle cx="112" cy="204" r="10" fill="#72D5D3"/><circle cx="145" cy="230" r="5" fill="#72D5D3"/><circle cx="125" cy="159" r="5" fill="#1E47C8"/>
    </>}
    {variant === "care" && <>
      <path fill="#DDEFEA" d="M0 0h400v270H0z"/><circle cx="70" cy="260" r="190" fill="#B8D9CC"/><path d="M250 0h150v270H250z" fill="#C9E4DD"/>
      <g transform="rotate(-18 180 155)"><rect x="92" y="45" width="170" height="250" rx="18" fill="#F4F9F5" stroke="#428878" strokeWidth="2"/>{[0,1,2].map(i=><g key={i}><rect x="116" y={76+i*67} width="48" height="38" rx="19" fill="#8CBBA9"/><path d={`M140 ${78+i*67}v34`} stroke="#F4F9F5" strokeWidth="2"/><rect x="189" y={76+i*67} width="48" height="38" rx="19" fill="#B5D3C7"/><path d={`M213 ${78+i*67}v34`} stroke="#F4F9F5" strokeWidth="2"/></g>)}</g>
      <g transform="rotate(35 310 140)"><rect x="282" y="70" width="56" height="142" rx="28" fill="#08796A"/><path d="M282 140h56v44a28 28 0 0 1-56 0v-44Z" fill="#68B8A3"/><path d="M294 99v27" stroke="#B9DFD2" strokeWidth="4" strokeLinecap="round"/></g>
    </>}
    {variant === "quality" && <>
      <path fill="#E9E6F5" d="M0 0h400v270H0z"/><path d="M0 270V140L140 0h260v270H0Z" fill="#D5D1EB"/><circle cx="330" cy="230" r="125" fill="#B4AED5"/>
      <rect x="64" y="45" width="170" height="225" rx="10" fill="#FAFAFF"/><path d="M96 85h100M96 105h70M96 195h100M96 216h75" stroke="#B4AED5" strokeWidth="5"/><circle cx="178" cy="151" r="52" fill="#E9E6F5" stroke="#655A9A" strokeWidth="9"/><path d="m215 188 47 48" stroke="#655A9A" strokeWidth="17" strokeLinecap="round"/><path d="m156 151 16 16 29-32" stroke="#655A9A" strokeWidth="5"/>
      <path d="m320 50 32 18v37l-32 19-32-19V68l32-18Z" stroke="#8276AF" strokeWidth="2"/><circle cx="320" cy="86" r="8" fill="#8276AF"/>
    </>}
    {variant === "partnership" && <>
      <path fill="#F4E9DB" d="M0 0h400v270H0z"/><circle cx="345" cy="70" r="145" fill="#E9D4B7"/><path d="M0 200h400v70H0z" fill="#DDC4A4"/>
      <path d="M85 270v-65a50 50 0 0 1 100 0v65" fill="#A8734E"/><circle cx="135" cy="127" r="34" fill="#A8734E"/>
      <path d="M225 270v-65a50 50 0 0 1 100 0v65" fill="#755239"/><circle cx="275" cy="127" r="34" fill="#755239"/>
      <path d="M112 57h166M124 57l-13 13M124 57l-13-13M266 57l13 13M266 57l13-13" stroke="#B68B65" strokeWidth="2"/><path d="M164 221c36-37 47-37 82 0" stroke="#F4E9DB" strokeWidth="13" strokeLinecap="round"/>
    </>}
  </svg>;
}
