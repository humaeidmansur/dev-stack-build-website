import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
          <img src={Logo} alt="Logo" className="h-10 w-40" />
          <p className="text-[#64748B]">
            Curated tools, technologies, and resources for developers building{" "}
            <br />
            modern software.
          </p>
          <div className="grid grid-flow-col gap-4 mt-4 text-[#475569]">
            <a className="link link-hover">GitHub</a>
            <a className="link link-hover">Twitter</a>
            <a className="link link-hover">LinkedIn</a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title text-[#0F172A]">PRODUCT</h6>
          <a className="link link-hover text-[#64748B]">Home</a>
          <a className="link link-hover text-[#64748B]">Technologies</a>
          <a className="link link-hover text-[#64748B]">Projects</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#0F172A]">COMPANY</h6>
          <a className="link link-hover text-[#64748B]">About</a>
          <a className="link link-hover text-[#64748B]">Contacts</a>
          <a className="link link-hover text-[#64748B]">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#0F172A]">LEGAL</h6>

          <a className="link link-hover text-[#64748B]">Privacy policy</a>
          <a className="link link-hover text-[#64748B]">Terms of Service</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">

        <div className="flex w-full items-center justify-between text-[#94A3B8]">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div >
            <ul className="flex gap-4">
              <a className="link link-hover ">Privacy</a>
              <a className="link link-hover ">Terms</a>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
