const icons = {
  rings: (
    <>
      <circle cx="9" cy="14" r="5" />
      <circle cx="15" cy="14" r="5" />
      <path d="M9 8 12 4l3 4" />
    </>
  ),
  glass: (
    <>
      <path d="M8 3h8l-1 8a4 4 0 0 1-6 0L8 3Z" />
      <path d="M12 13v6" />
      <path d="M9 21h6" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h4l1.5-2h5L16 8h4v11H4V8Z" />
      <circle cx="12" cy="14" r="3" />
    </>
  ),
  dinner: (
    <>
      <path d="M7 3v18" />
      <path d="M5 3v6a2 2 0 0 0 4 0V3" />
      <path d="M16 3v18" />
      <path d="M16 3c2 1 3 3 3 6s-1 5-3 6" />
    </>
  ),
  church: (
    <>
      <path d="M12 3v5" />
      <path d="M9.5 5.5h5" />
      <path d="M5 21V10l7-5 7 5v11" />
      <path d="M9 21v-6a3 3 0 0 1 6 0v6" />
      <path d="M4 21h16" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l10-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="16" cy="16" r="3" />
    </>
  ),
  play: <path d="M8 5v14l11-7L8 5Z" />,
  pause: (
    <>
      <path d="M8 5v14" />
      <path d="M16 5v14" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  calendar: (
    <>
      <path d="M7 3v4" />
      <path d="M17 3v4" />
      <path d="M4 8h16" />
      <path d="M5 5h14v16H5V5Z" />
      <path d="M8 12h3" />
      <path d="M8 16h6" />
    </>
  ),
  copy: (
    <>
      <path d="M8 8h11v11H8V8Z" />
      <path d="M5 16H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 13.5 6.8 4" />
      <path d="m15.4 6.5-6.8 4" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6" />
      <path d="M12 7h.01" />
    </>
  ),
  gift: (
    <>
      <path d="M4 10h16v11H4V10Z" />
      <path d="M3 6h18v4H3V6Z" />
      <path d="M12 6v15" />
      <path d="M12 6C10 2 6 3 7 6" />
      <path d="M12 6c2-4 6-3 5 0" />
    </>
  ),
  heart: (
    <path d="M12 21s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.2-8 11-8 11Z" />
  ),
}

export function Icon({ name, className = '' }) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  )
}
