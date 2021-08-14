import "./style.css";

function Navigation() {
  return (
    <div className="bg-white">
      <header className="container flex items-center">
        <div className="w-4/12 flex">
          <a href="/">Home</a>
        </div>
        <div className="w-4/12 flex justify-center">
          <img src="/logo.png" className="nav-logo" alt="logo" />
        </div>
        <div className="w-4/12 flex justify-end">
          <a
            className="bg-primary-200 rounded text-white px-4 py-2"
            href="mailto:matt.martin0108@gmail.com"
          >
            Contact
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
