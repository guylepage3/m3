
const NavbarToggler = () => {
  return (
    <button 
      className="navbar-toggler collapsed" 
      id="toggle"
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarBasic" 
      aria-controls="navbarBasic" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className={`icon-bar top-bar`}></span>
      <span className={`icon-bar bottom-bar`}></span>
    </button>
  );
}

export default NavbarToggler;
