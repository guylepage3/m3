import { karla } from '../app/fonts';
import { open_sans } from '../app/fonts';

const Hero = () => {
  return (
    <main 
      className="
        text-center 
        text-white
      "
      style={{marginTop: '10%'}}>
      <div>
        <h1 
          className={`
            ${karla.className} 
            ${'fw-semibold'} 
            ${'display-1'} 
            ${'mb-2'}`}
          >
          <span className={`${open_sans.className} ${'fw-light'}`}>[</span>
            m3
          <span className={`${open_sans.className} ${'fw-light'}`}>]</span>
        </h1>
        <p className="  
          fw-semibold 
          mb-4
          h1
        ">
          CSS Framework
        </p>
      </div>
      <div 
        className="
        container  
        lead
      ">
        A Web3 front-end framework with advanced typography.
        <br />
        <br />
        <p>
          <a href="https://github.com/guylepage3/m3">GitHub</a>
        </p>
      </div>
    </main>
  );
}

export default Hero
