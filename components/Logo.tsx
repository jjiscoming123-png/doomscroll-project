export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Three downward chevrons - infinite scroll symbol */}
      <polyline points="8,6 20,16 32,6" stroke="#ff1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4"/>
      <polyline points="8,16 20,26 32,16" stroke="#ff1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7"/>
      <polyline points="8,26 20,36 32,26" stroke="#ff1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="1"/>
    </svg>
  );
}
