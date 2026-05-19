export function Footer({ wedding, couple }) {
  return (
    <footer className="footer">
      <p className="script">Thank you for celebrating with us</p>
      <strong>{couple.initials}</strong>
      <span>{wedding.displayDate}</span>
    </footer>
  )
}
