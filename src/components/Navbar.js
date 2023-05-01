export default function Navbar() {
  return (
    <nav className="nav">
      <h1 className="name">eventbrite</h1>
      <input
        className="search"
        type="text"
        id="search"
        placeholder="Search"
        size="50"
      />
      <ul className="nav-items">
        <li>Browse events</li>
        <li>Host</li>
        <li>Help</li>
      </ul>
    </nav>
  );
}
