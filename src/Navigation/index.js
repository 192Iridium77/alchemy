import "./style.css";

function Navigation() {
  return (
    <div className="bg-white">
      <div className="container">
        <header className="flex w-full items-center space-between py-8">
          <div className="w-4/12 flex justify-start">
            <img src="/logo.png" className="nav-logo" alt="logo" />
          </div>
          <div className="w-4/12"></div>
          <div className="w-4/12 justify-end flex">
            <a
              className="bg-primary-200 rounded text-white px-4 py-2"
              href="mailto:matt.martin0108@gmail.com"
            >
              Contact
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navigation;
