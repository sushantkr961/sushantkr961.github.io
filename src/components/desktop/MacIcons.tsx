// macOS 26 Tahoe-style app icons — high-fidelity SVG recreations

export function AppleLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
    </svg>
  );
}

export function FinderIcon({ size = 44 }: { size?: number }) {
  const id = `fi-${size}`;
  return (
    <div style={{ width: size, height: size }} className="rounded-[22%] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6EC6FF" />
            <stop offset="100%" stopColor="#1976D2" />
          </linearGradient>
          <linearGradient id={`${id}-face`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E8E8E8" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="26" fill={`url(#${id}-bg)`} />
        {/* Shine */}
        <rect width="120" height="60" rx="26" fill="white" opacity="0.12" />
        {/* Face */}
        <rect x="28" y="18" width="64" height="82" rx="8" fill={`url(#${id}-face)`} />
        {/* Divider line */}
        <line x1="60" y1="18" x2="60" y2="100" stroke="#D0D0D0" strokeWidth="0.8" />
        {/* Left eye */}
        <ellipse cx="46" cy="48" rx="5" ry="9" fill="#333" />
        <ellipse cx="44.5" cy="45" rx="2" ry="3.5" fill="white" opacity="0.5" />
        {/* Right eye */}
        <ellipse cx="74" cy="48" rx="5" ry="9" fill="#333" />
        <ellipse cx="72.5" cy="45" rx="2" ry="3.5" fill="white" opacity="0.5" />
        {/* Nose */}
        <line x1="60" y1="55" x2="60" y2="68" stroke="#888" strokeWidth="2" strokeLinecap="round" />
        {/* Smile */}
        <path d="M43 76 Q52 86 60 86 Q68 86 77 76" stroke="#888" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function TerminalIcon({ size = 44 }: { size?: number }) {
  const id = `te-${size}`;
  return (
    <div style={{ width: size, height: size }} className="rounded-[22%] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A4A4A" />
            <stop offset="100%" stopColor="#1C1C1C" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="26" fill={`url(#${id}-bg)`} />
        {/* Shine */}
        <rect width="120" height="55" rx="26" fill="white" opacity="0.06" />
        {/* Screen bezel */}
        <rect x="12" y="14" width="96" height="92" rx="10" fill="#0D0D0D" />
        {/* Screen inner */}
        <rect x="15" y="30" width="90" height="73" rx="7" fill="#1A1A1A" />
        {/* Title bar */}
        <rect x="15" y="17" width="90" height="16" rx="7" fill="#333" />
        <rect x="15" y="26" width="90" height="7" fill="#333" />
        {/* Traffic lights */}
        <circle cx="27" cy="25" r="3" fill="#FF5F57" />
        <circle cx="37" cy="25" r="3" fill="#FEBC2E" />
        <circle cx="47" cy="25" r="3" fill="#28C840" />
        {/* Prompt */}
        <path d="M26 52 L40 62 L26 72" stroke="#32D74B" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Cursor line */}
        <rect x="48" y="58" width="36" height="3" rx="1.5" fill="#fff" opacity="0.6" />
        {/* Second line */}
        <rect x="26" y="82" width="24" height="2.5" rx="1" fill="#555" opacity="0.4" />
      </svg>
    </div>
  );
}

export function SafariIcon({ size = 44 }: { size?: number }) {
  const id = `sa-${size}`;
  return (
    <div style={{ width: size, height: size }} className="rounded-[22%] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#78D5FF" />
            <stop offset="50%" stopColor="#4BA3F5" />
            <stop offset="100%" stopColor="#1A6AE0" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="26" fill={`url(#${id}-bg)`} />
        {/* Shine */}
        <rect width="120" height="55" rx="26" fill="white" opacity="0.15" />
        {/* Compass outer ring */}
        <circle cx="60" cy="60" r="42" fill="none" stroke="white" strokeWidth="2.5" opacity="0.9" />
        {/* Tick marks */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
          <line
            key={a}
            x1="60" y1={a % 90 === 0 ? "20" : "22"} x2="60" y2={a % 90 === 0 ? "28" : "26"}
            stroke="white" strokeWidth={a % 90 === 0 ? "2.5" : "1.2"} opacity="0.7"
            transform={`rotate(${a} 60 60)`}
          />
        ))}
        {/* Red needle (north) */}
        <polygon points="60,22 55.5,57 60,52 64.5,57" fill="#FF3B30" />
        {/* White needle (south) */}
        <polygon points="60,98 55.5,63 60,68 64.5,63" fill="white" opacity="0.9" />
        {/* Center jewel */}
        <circle cx="60" cy="60" r="3.5" fill="white" />
        <circle cx="60" cy="60" r="2" fill="#ccc" />
      </svg>
    </div>
  );
}

export function MailIcon({ size = 44 }: { size?: number }) {
  const id = `ma-${size}`;
  return (
    <div style={{ width: size, height: size }} className="rounded-[22%] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#64B5F6" />
            <stop offset="100%" stopColor="#1565C0" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="26" fill={`url(#${id}-bg)`} />
        {/* Shine */}
        <rect width="120" height="55" rx="26" fill="white" opacity="0.12" />
        {/* Envelope body */}
        <rect x="16" y="34" width="88" height="56" rx="7" fill="white" />
        {/* Envelope flap */}
        <path d="M16 38 C16 34 19 31 23 31 L97 31 C101 31 104 34 104 38 L60 66 Z" fill="#F5F5F5" />
        <path d="M16 38 L60 66 L104 38" stroke="#E0E0E0" strokeWidth="1" fill="none" />
        {/* Shadow crease */}
        <path d="M16 90 L50 66" stroke="#E8E8E8" strokeWidth="0.6" fill="none" />
        <path d="M104 90 L70 66" stroke="#E8E8E8" strokeWidth="0.6" fill="none" />
        {/* Blue accent line */}
        <path d="M16 38 L60 66 L104 38" stroke="#1E88E5" strokeWidth="0.5" fill="none" opacity="0.3" />
      </svg>
    </div>
  );
}

export function NotesIcon({ size = 44 }: { size?: number }) {
  const id = `no-${size}`;
  return (
    <div style={{ width: size, height: size }} className="rounded-[22%] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF59D" />
            <stop offset="100%" stopColor="#F9A825" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="26" fill={`url(#${id}-bg)`} />
        {/* Shine */}
        <rect width="120" height="55" rx="26" fill="white" opacity="0.2" />
        {/* Paper */}
        <rect x="20" y="10" width="80" height="100" rx="6" fill="white" opacity="0.97" />
        {/* Yellow header */}
        <rect x="20" y="10" width="80" height="22" rx="6" fill="#FFD54F" opacity="0.5" />
        <rect x="20" y="26" width="80" height="6" fill="#FFD54F" opacity="0.5" />
        {/* Title line */}
        <rect x="28" y="17" width="44" height="4.5" rx="2" fill="#E6A800" opacity="0.45" />
        {/* Ruled lines */}
        {[42, 54, 66, 78, 90].map((y) => (
          <line key={y} x1="28" y1={y} x2="92" y2={y} stroke="#E8DFC8" strokeWidth="0.7" />
        ))}
        {/* Content */}
        <rect x="28" y="44" width="56" height="3.5" rx="1.5" fill="#C8C0A8" opacity="0.45" />
        <rect x="28" y="56" width="42" height="3.5" rx="1.5" fill="#C8C0A8" opacity="0.45" />
        <rect x="28" y="68" width="50" height="3.5" rx="1.5" fill="#C8C0A8" opacity="0.45" />
        <rect x="28" y="80" width="36" height="3.5" rx="1.5" fill="#C8C0A8" opacity="0.35" />
      </svg>
    </div>
  );
}

export function LaunchpadIcon({ size = 44 }: { size?: number }) {
  const id = `lp-${size}`;
  return (
    <div style={{ width: size, height: size }} className="rounded-[22%] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#555" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="26" fill={`url(#${id}-bg)`} />
        {/* Shine */}
        <rect width="120" height="55" rx="26" fill="white" opacity="0.06" />
        {/* Grid of colored circles — like real Launchpad icon */}
        {[
          { cx: 36, cy: 36, color: "#FF6B6B" },
          { cx: 60, cy: 36, color: "#4ECDC4" },
          { cx: 84, cy: 36, color: "#FFE66D" },
          { cx: 36, cy: 60, color: "#A78BFA" },
          { cx: 60, cy: 60, color: "#60A5FA" },
          { cx: 84, cy: 60, color: "#F97316" },
          { cx: 36, cy: 84, color: "#34D399" },
          { cx: 60, cy: 84, color: "#F472B6" },
          { cx: 84, cy: 84, color: "#38BDF8" },
        ].map(({ cx, cy, color }) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="10" fill={color} opacity="0.9" />
        ))}
      </svg>
    </div>
  );
}

export function CalendarIcon({ size = 44 }: { size?: number }) {
  const today = new Date();
  const day = today.getDate().toString();
  const weekday = today.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();

  return (
    <div style={{ width: size, height: size }} className="rounded-[22%] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <rect width="120" height="120" rx="26" fill="#fff" />
        {/* Red header with rounded top */}
        <rect x="0" y="0" width="120" height="36" rx="26" fill="#FF3B30" />
        <rect x="0" y="16" width="120" height="20" fill="#FF3B30" />
        {/* Header shine */}
        <rect x="0" y="0" width="120" height="18" rx="26" fill="white" opacity="0.15" />
        {/* Day name */}
        <text
          x="60" y="28" textAnchor="middle"
          fill="white" fontSize="13" fontWeight="700"
          fontFamily="-apple-system, SF Pro Display, Helvetica Neue, sans-serif"
          letterSpacing="1"
        >
          {weekday}
        </text>
        {/* Day number */}
        <text
          x="60" y="90" textAnchor="middle"
          fill="#1a1a1a" fontSize="56" fontWeight="200"
          fontFamily="-apple-system, SF Pro Display, Helvetica Neue, sans-serif"
          letterSpacing="-2"
        >
          {day}
        </text>
      </svg>
    </div>
  );
}
