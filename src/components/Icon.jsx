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
