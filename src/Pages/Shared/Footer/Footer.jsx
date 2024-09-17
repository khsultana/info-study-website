import { FaLinkedin, FaYoutube } from "react-icons/fa";
import logos from "../../../../logo.svg";
import { FaMeta, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-10 ">
      <footer className="bg-[url('Plane-bg.png')] footer bg-[#ee4036] text-white p-20">
        <aside>
          <img src={logos} alt="" />
          <p className="text-lg font-Jakarta font mt-6">
            Corporate business typically
            <br />
            refers to large-scale mansola
            <br /> it enterprises or organizat
          </p>

          <p className="flex justify-center gap-5 text-lg mt-10">
            <FaMeta className="motion-safe:animate-ping" />
            <FaLinkedin className="motion-safe:animate-ping" />
            <FaYoutube className="motion-safe:animate-ping" />
            <FaXTwitter className="motion-safe:animate-ping" />
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-[#ffcc00] join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      ;
    </div>
  );
};

export default Footer;
