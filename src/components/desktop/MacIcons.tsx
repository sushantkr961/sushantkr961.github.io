// macOS 26 Tahoe-style app icons — high-fidelity SVG recreations

export function AppleLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
    </svg>
  );
}

export function FinderIcon({ size = 44 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="rounded-[22%] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="fi-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4FC3F7" />
            <stop offset="50%" stopColor="#2196F3" />
            <stop offset="100%" stopColor="#1565C0" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="26" fill="url(#fi-bg)" />
        {/* Face outline */}
        <rect x="28" y="22" width="64" height="76" rx="10" fill="white" />
        {/* Left eye */}
        <ellipse cx="46" cy="50" rx="5.5" ry="8" fill="#333" />
        <ellipse cx="44.5" cy="48" rx="2" ry="3" fill="white" opacity="0.4" />
        {/* Right eye */}
        <ellipse cx="74" cy="50" rx="5.5" ry="8" fill="#333" />
        <ellipse cx="72.5" cy="48" rx="2" ry="3" fill="white" opacity="0.4" />
        {/* Nose */}
        <line x1="60" y1="52" x2="60" y2="66" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
        {/* Smile */}
        <path d="M42 74 Q52 84 60 84 Q68 84 78 74" stroke="#555" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function TerminalIcon({ size = 44 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="rounded-[22%] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="te-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#424242" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="26" fill="url(#te-bg)" />
        {/* Screen */}
        <rect x="14" y="18" width="92" height="84" rx="8" fill="#000" opacity="0.6" />
        {/* Top bar */}
        <rect x="14" y="18" width="92" height="18" rx="8" fill="#2d2d2d" />
        <rect x="14" y="28" width="92" height="8" fill="#2d2d2d" />
        {/* Traffic lights */}
        <circle cx="27" cy="27" r="3.5" fill="#FF5F57" />
        <circle cx="38" cy="27" r="3.5" fill="#FEBC2E" />
        <circle cx="49" cy="27" r="3.5" fill="#28C840" />
        {/* Prompt chevron */}
        <path d="M28 56 L44 68 L28 80" stroke="#2ECC40" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Cursor */}
        <rect x="52" y="62" width="32" height="4" rx="2" fill="white" opacity="0.7" />
      </svg>
    </div>
  );
}

export function SafariIcon({ size = 44 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="rounded-[22%] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="sa-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#64B5F6" />
            <stop offset="50%" stopColor="#2196F3" />
            <stop offset="100%" stopColor="#1565C0" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="26" fill="url(#sa-bg)" />
        {/* Compass ring */}
        <circle cx="60" cy="60" r="40" fill="none" stroke="white" strokeWidth="3" opacity="0.85" />
        <circle cx="60" cy="60" r="36" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
        {/* Direction ticks */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
          <line
            key={a}
            x1="60" y1={a % 90 === 0 ? "22" : "24"} x2="60" y2={a % 90 === 0 ? "28" : "27"}
            stroke="white" strokeWidth={a % 90 === 0 ? "2" : "1"} opacity="0.6"
            transform={`rotate(${a} 60 60)`}
          />
        ))}
        {/* Red needle */}
        <polygon points="60,24 55,58 60,54 65,58" fill="#FF3B30" />
        {/* White needle */}
        <polygon points="60,96 55,62 60,66 65,62" fill="white" opacity="0.85" />
        {/* Center dot */}
        <circle cx="60" cy="60" r="3" fill="white" />
      </svg>
    </div>
  );
}

export function MailIcon({ size = 44 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="rounded-[22%] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="ma-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#42A5F5" />
            <stop offset="100%" stopColor="#1565C0" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="26" fill="url(#ma-bg)" />
        {/* Envelope */}
        <rect x="18" y="36" width="84" height="54" rx="6" fill="white" />
        {/* Flap lines */}
        <path d="M18 40 L60 70 L102 40" stroke="#1565C0" strokeWidth="1" fill="none" opacity="0.15" />
        {/* Top flap */}
        <path d="M18 36 L60 64 L102 36" fill="white" />
        <path d="M18 36 L60 64 L102 36" stroke="#e0e0e0" strokeWidth="0.8" fill="none" />
        {/* Bottom flap crease */}
        <path d="M18 90 L48 68" stroke="#e0e0e0" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M102 90 L72 68" stroke="#e0e0e0" strokeWidth="0.5" fill="none" opacity="0.5" />
      </svg>
    </div>
  );
}

export function NotesIcon({ size = 44 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="rounded-[22%] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="no-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="100%" stopColor="#FBC02D" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="26" fill="url(#no-bg)" />
        {/* Paper */}
        <rect x="22" y="12" width="76" height="96" rx="5" fill="white" opacity="0.95" />
        {/* Yellow header bar */}
        <rect x="22" y="12" width="76" height="20" rx="5" fill="#FDD835" opacity="0.4" />
        <rect x="22" y="27" width="76" height="5" fill="#FDD835" opacity="0.4" />
        {/* Title text */}
        <rect x="30" y="18" width="40" height="5" rx="2" fill="#E6A800" opacity="0.5" />
        {/* Lines */}
        {[42, 54, 66, 78, 90].map((y) => (
          <line key={y} x1="30" y1={y} x2="90" y2={y} stroke="#e8e0c8" strokeWidth="0.8" />
        ))}
        {/* Text content lines */}
        <rect x="30" y="44" width="52" height="3" rx="1" fill="#bbb" opacity="0.5" />
        <rect x="30" y="56" width="44" height="3" rx="1" fill="#bbb" opacity="0.5" />
        <rect x="30" y="68" width="48" height="3" rx="1" fill="#bbb" opacity="0.5" />
      </svg>
    </div>
  );
}

export function LaunchpadIcon({ size = 44 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="rounded-[22%] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="lp-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#424242" />
            <stop offset="100%" stopColor="#212121" />
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="26" fill="url(#lp-bg)" />
        {/* Rocket */}
        <g transform="translate(60,60) scale(1.1)">
          {/* Flame */}
          <ellipse cx="0" cy="24" rx="5" ry="10" fill="#FF6B35" opacity="0.9" />
          <ellipse cx="0" cy="22" rx="3" ry="7" fill="#FFD700" opacity="0.8" />
          {/* Body */}
          <path d="M0,-28 C8,-28 12,-10 12,8 L12,14 C12,17 8,20 0,20 C-8,20 -12,17 -12,14 L-12,8 C-12,-10 -8,-28 0,-28Z" fill="white" />
          {/* Nose */}
          <path d="M0,-28 C4,-28 6,-22 6,-16 L-6,-16 C-6,-22 -4,-28 0,-28Z" fill="#FF3B30" />
          {/* Window */}
          <circle cx="0" cy="-4" r="5" fill="#42A5F5" />
          <circle cx="0" cy="-4" r="3.5" fill="#64B5F6" />
          {/* Fins */}
          <path d="M-12,8 L-20,18 L-12,16 Z" fill="#FF3B30" />
          <path d="M12,8 L20,18 L12,16 Z" fill="#FF3B30" />
        </g>
      </svg>
    </div>
  );
}

export function CalendarIcon({ size = 44 }: { size?: number }) {
  const today = new Date();
  const day = today.getDate().toString();
  const weekday = today.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();

  return (
    <div style={{ width: size, height: size }} className="rounded-[22%] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <rect width="120" height="120" rx="26" fill="#fff" />
        {/* Red header */}
        <rect x="0" y="0" width="120" height="34" rx="26" fill="#FF3B30" />
        <rect x="0" y="14" width="120" height="20" fill="#FF3B30" />
        {/* Day name in header */}
        <text
          x="60" y="26" textAnchor="middle"
          fill="white" fontSize="13" fontWeight="600"
          fontFamily="-apple-system, SF Pro Display, Helvetica Neue, sans-serif"
        >
          {weekday}
        </text>
        {/* Day number */}
        <text
          x="60" y="88" textAnchor="middle"
          fill="#1a1a1a" fontSize="54" fontWeight="200"
          fontFamily="-apple-system, SF Pro Display, Helvetica Neue, sans-serif"
          letterSpacing="-2"
        >
          {day}
        </text>
      </svg>
    </div>
  );
}
