import "../assets/Header.css";

function Header() {
  return (
    <div className="HeaderContainer">
      <nav className="headerNav">
        <ul>
          <li>Home</li>
          <li>Make/Model</li>
          <li>List Your Car</li>
          <li>About Us</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
