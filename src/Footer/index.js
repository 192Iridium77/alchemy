import "./style.css";

function Footer() {
  return (
    <div className="bg-white">
      <header className="container flex items-center justify-between py-8">
        <div className="flex gap-2 items-center">
          <a className="w-6 h-6 block" href="https://github.com/192Iridium77">
            <img src="/images/github-mark.webp" alt="github" />
          </a>
          <a
            className="w-6 h-6 block"
            href="https://www.linkedin.com/in/matthew-martin0108/"
            style={{ marginTop: 2 }}
          >
            <img src="/images/linkedin.webp" alt="linkedin" />
          </a>
          <a
            href="mailto:matt.martin0108@gmail.com"
            className="text-xs md:text-sm"
          >
            matt.martin0108@gmail.com
          </a>
        </div>
        <div className="text-xs md:text-sm">Matthew Martin</div>
      </header>
    </div>
  );
}

export default Footer;
