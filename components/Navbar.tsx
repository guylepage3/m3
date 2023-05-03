import Link from 'next/link'
import { karla, abcdiatypemono } from '../app/fonts';
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
          ${'align-items-center'}
          ${'text-white'}`}
          style={{ 
            fontWeight: '700',
            fontSize: '1.65rem'
          }}
          href="/"
        >
          <span className={`${abcdiatypemono.className} ${'fw-light'}`}>[</span>
            m3
          <span className={`${abcdiatypemono.className} ${'fw-light'}`}>]</span>
        </a>
        <NavbarToggler />
        <div className="collapse navbar-collapse text-white" id="navbarBasic">
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
                className="nav-link text-white">
                 Home
              </a>
            </li>
            <li className="nav-item">
              <Link 
                href="/typography"
                className="nav-link mt-md-1 text-white"
                style={{ marginLeft: '4rem'}}
              >
                Typography
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href="/editorial"
                className="nav-link mt-md-1 text-white"
                style={{ marginLeft: '4rem'}}
              >
                Editorial
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
