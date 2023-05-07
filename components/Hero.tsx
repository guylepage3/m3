import { abcdiatype, abcdiatypemono, karla } from '../app/fonts';

const Hero = () => {
  return (
    <main 
      className="
        container
        text-center 
        text-white
      ">
      <div>
        <h1 
          className={`
            ${karla.className} 
            ${'fw-700'} 
            ${'display-3'} 
            ${'mb-3'}`}
          style={{ letterSpacing: '-0.05rem' }}
          >
          <span 
            className={`${abcdiatypemono.className} ${'fw-light'}`}>[</span>
          m3
          <span 
            className={`${abcdiatypemono.className} ${'fw-light'}`}>]</span>
        </h1>
        <p className="  
          fw-600 
          mb-3
          h3
        "
        style={{ letterSpacing: '.03em'}}>
          CSS Framework
        </p>
      </div>
      <div 
        className={`
          ${abcdiatype.className}
          ${'container'} 
          ${'lead'}
        `}
      >
        A Web3 front-end framework with advanced typography.
        <br />
        <p style={{ marginTop: '1rem'}}>
          <a href="https://github.com/guylepage3/m3" target='_blank'>GitHub</a>
        </p>
      </div>
    </main>
  );
}

export default Hero
