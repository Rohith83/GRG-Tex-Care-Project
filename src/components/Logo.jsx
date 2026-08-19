export default function Logo({ light = false, size = 22 }) {
  const stroke = light ? '#F7F6F2' : '#123330';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g stroke={stroke} strokeWidth="2.2" strokeLinecap="round">
        <line x1="12" y1="2" x2="12" y2="7" />
        <line x1="12" y1="17" x2="12" y2="22" />
        <line x1="2" y1="12" x2="7" y2="12" />
        <line x1="17" y1="12" x2="22" y2="12" />
        <line x1="4.9" y1="4.9" x2="8.3" y2="8.3" />
        <line x1="15.7" y1="15.7" x2="19.1" y2="19.1" />
        <line x1="19.1" y1="4.9" x2="15.7" y2="8.3" />
        <line x1="8.3" y1="15.7" x2="4.9" y2="19.1" />
      </g>
    </svg>
  );
}
