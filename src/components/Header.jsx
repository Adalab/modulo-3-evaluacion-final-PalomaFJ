import logo from '../images/logo.png';
import '../scss/App.scss';

function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="Rick and Morty" />
    </header>
  );
}

export default Header;
