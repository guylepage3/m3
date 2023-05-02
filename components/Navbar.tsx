import { karla } from '../app/fonts';
import NavbarToggler from './NavbarToggler';

const Navbar = () => {
  return (
      <nav className={`${'navbar'} ${'navbar-expand-md'} ${'text-white'}`}
        style={{ padding: '0.15rem 0', backgroundColor: 'transparent' }}
        >
        <div className="container">
          <a 
            className={`
            ${karla.className} 
            ${'fw-semibold'}
            ${'d-flex'} 
            ${'align-items-center'}`}
            style={{ 
              fontWeight: '700',
              fontSize: '1.75rem'
            }}
            href="/"
          >
            <span className="fw-light">[</span>
              m3
            <span className="fw-light">]</span>
          </a>
        <NavbarToggler />
        <div className="collapse navbar-collapse" id="navbarBasic">
          <div 
            className="
              container 
              d-flex 
              align-items-center 
              justify-content-center 
              d-md-none"
            style={{
              height: '45px'
            }}>
            <a 
              className="
                navbar-brand 
                d-flex 
                align-items-center 
                justify-content-center" 
              href="/"
              style={{
              marginRight: 0
            }}>
            </a>
          </div>
          <ul className="navbar-nav" style={{ backgroundColor: '#000'}}>
            <li className="nav-item d-md-none">
              <a 
                href="/"
                className="nav-link">
                 Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/type"
                className="nav-link mt-md-2 ml-md-5">
                 Type
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/type-editorial"
                className="nav-link mt-md-2 ml-md-3">
                 Type Editorial
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
