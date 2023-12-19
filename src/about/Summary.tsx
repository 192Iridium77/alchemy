import React from "react";

const PhoneIcon = () => (
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
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);

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

const Summary = () => {
  return (
    <div
      style={{
        height: 400,
        backgroundImage: "url(/images/office.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <div className="text-4xl bg-white">Matt Martin</div>
        <div className="text-xl bg-white mt-4">Software Engineer</div>
        <div className="flex justify-center gap-2 mt-4 bg-white py-1">
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
          <a href="tel:0477789182">
            <PhoneIcon></PhoneIcon>
          </a>
          <a href="mailto:matt.martin0108@gmail.com">
            <EmailIcon></EmailIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Summary;
