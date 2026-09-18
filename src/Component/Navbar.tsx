import Logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <div>
            

<div className="navbar bg-base-100 shadow-sm pl-10 pr-10">
  <div className="navbar-start">

    <img src={Logo} alt="Logo" className="h-10 w-40" />
  </div>
  <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className="text-2xlfont-bold text-[#DB2777]">Home</a></li>
      <li><a>Technologies</a></li>
      <li><a>Projects</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <ul className="menu menu-horizontal px-1">
        <li><a>Sign In</a></li>
    </ul>
    <button className="btn btn-active btn-secondary rounded-3xl">Sign Up</button>
  </div>
</div>

        </div>
    );
};

export default Navbar;