import logo from "./logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 mb-5 mt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <img src={logo} alt="" />{" "}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg font-Jakarta font-semibold">Home</a>
            </li>
            <li>
              <details>
                <summary className="text-lg font-Jakarta font-semibold">
                  About Us
                </summary>
                <ul className="p-5">
                  <li>
                    <a className="text-lg font-Jakarta">How Can We Help?</a>
                  </li>
                  <li>
                    <a className="text-lg font-Jakarta">CEO Message</a>
                  </li>
                  <li>
                    <a className="text-lg font-Jakarta">Mission & Vision</a>
                  </li>
                  <li>
                    <a className="text-lg font-Jakarta">Why Choose Us?</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-lg font-Jakarta font-semibold">
                  Our Services
                </summary>
                <ul className="p-2">
                  <li>
                    <a className="text-lg font-Jakarta">Submenu 1</a>
                  </li>
                  <li>
                    <a className="text-lg font-Jakarta font-semibold">
                      Submenu 2
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="text-lg font-Jakarta font-semibold">
                  Destination
                </summary>
                <ul className="p-2">
                  <li>
                    <a className="text-lg font-Jakarta font-semibold">
                      Submenu 1
                    </a>
                  </li>
                  <li>
                    <a className="text-lg font-Jakarta">Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="text-lg font-Jakarta font-semibold">Our Partner</a>
            </li>
            <li>
              <a className="text-lg font-Jakarta font-semibold">
                Success Stories
              </a>
            </li>
            <li>
              <a className="text-lg font-Jakarta font-semibold">
                Find Your Program
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="/"
            className="text-lg font-Jakarta  bg-[#da563f] rounded-md p-3 text-white "
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
