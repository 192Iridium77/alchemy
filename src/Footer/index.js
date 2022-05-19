import "./style.css";

function Navigation() {
  return (
    <div className="bg-white">
      <header className="container flex items-center py-8">
        <div className="w-6/12 flex">
          <img src="/logo.png" className="nav-logo" alt="logo" />
        </div>
        <div className="w-6/12 flex justify-end text-xs">Matthew Martin</div>
      </header>
    </div>
  );
}

export default Navigation;
