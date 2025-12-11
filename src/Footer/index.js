import "./style.css";

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
    />
  </svg>
);

function Footer() {
  return (
    <div className="bg-white">
      <header className="container flex items-center justify-between py-8">
        <div className="flex gap-2">
          <a className="w-6 h-6 block" href="https://github.com/192Iridium77">
            <img src="/images/github-mark.webp" alt="github" />
          </a>
          <a
            className="w-6 h-6 block"
            href="https://www.linkedin.com/in/matthew-martin0108/"
            style={{ marginTop: 2 }}
          >
            <img
              src="/images/linkedin.webp"
              alt="linkedin"
              style={{ filter: "grayscale(100%)" }}
            />
          </a>
          <a href="mailto:matt.martin0108@gmail.com">
            <EmailIcon></EmailIcon>
          </a>
        </div>
        <div className="text-xs">Matthew Martin</div>
      </header>
    </div>
  );
}

export default Footer;
