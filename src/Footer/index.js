import "./style.css";

function Navigation() {
  return (
    <div>
      <div className="container mt-16">Subscribe</div>
      <div className="bg-white">
        <header className="container flex items-center mt-16">
          <div className="w-6/12 flex">
            <img src="/logo.png" className="nav-logo" alt="logo" />
          </div>
          <div className="w-6/12 flex justify-end">
            Built by Matthew Martin, 2021
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navigation;
