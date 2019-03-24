import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Typography extends Component {
  render() {
    return (
      <div>
      <div 
        style={{
          paddingTop: '57px'
        }}>
      </div>
      <main 
        role="main" 
        className="
          container 
          mb-9
          mt-auto 
          mx-auto 
          anima-fadein
        ">
        <div className="row px-3">
          <div className="col-lg-12 col-xl-11 mx-auto">
            <h6 className="h6-editorial text-white">
              Pattern Library / Typography
            </h6>
            <h1 className="display-1 display-1-editorial text-white mb-1">
              Aa
            </h1>
            <ul className="list-inline text-white mb-6"
              style={{
                fontSize: '1rem'
              }}>
              <li className="list-inline-item mr-3">
                SF Pro
                <span className="small ml-3">›</span> 
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '900' }}>Black</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '800' }}>Heavy</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '700' }}>Bold</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '600' }}>Semibold</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '500' }}>Medium</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '400' }}>Regular</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '300' }}>Light</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '200' }}>Ultralight</span>
                <span className="small ml-2">›</span>
              </li>
              <li className="list-inline-item">
                <span style={{ fontWeight: '100' }}>Thin</span>
              </li>
            </ul>
            <div className="row">
              <div className="col-md-6">
                <p className="lead lead-editorial text-white">
                  Sed ac dolor finibus libero bibendum maximus. Cras aliquet dapibus nunc, eu mattis felis mollis quis. Integer ut ullamcorper tellus. Donec porttitor nunc non sapien sagittis ultrices. Duis gravida diam mi, in vulputate neque volutpat ac.
                </p>
                <p className="text-white">
                  Curabitur feugiat pellentesque sem ac lobortis. Vestibulum finibus finibus odio, vel maximus justo. Mauris lacinia dui ut velit mollis, id finibus lectus pulvinar. Vivamus tellus felis, imperdiet at vestibulum sit amet, faucibus ut orci. Vivamus nec erat sagittis, sodales sem eget, malesuada quam. Nullam ultrices risus id luctus suscipit. Etiam id massa pharetra, rhoncus felis id, laoreet diam. 
                </p>
                <p className="pattern-library-typography-footnote mt-3">
                  <FontAwesomeIcon className="mr-2" icon="angle-up" />
                  <code 
                  className="pattern-libarary-typography-code">
                    .lead .lead-editorial</code> with <code 
                    className="pattern-libarary-typography-code">p</code> paragraph.
                </p>
              </div>
              <div className="col-md-6">
                <p className="lead-lg lead-lg-editorial text-white font-italic text-center">
                  Typography is the craft of endowing human language with visual form. <br />
                  ― Robert Bringhurst
                </p>
                <p className=" text-white">
                  Ut a imperdiet dui. Mauris egestas semper est ac imperdiet. Ut placerat libero et mi lobortis placerat. In consectetur fermentum accumsan. Nam et dolor eget ex ultricies convallis. Donec ullamcorper ullamcorper mauris nec laoreet. Pellentesque hendrerit, sapien at lacinia fringilla, dolor metus varius diam, feugiat ullamcorper massa neque et justo. 
                </p>
                <p className="pattern-library-typography-footnote mt-3">
                  <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">.lead-lg .lead-lg-editorial</code> centered with <code className="pattern-libarary-typography-code">p</code> paragraph.
                </p>
              </div>
            </div>
            <h1 className="h1-editorial text-white">
              Duis ullamcorper feugiat sodales. Maecenas in nisl venenatis, volutpat nisl quis.
            </h1>
            <p className="text-white">
              Nam sit amet tincidunt erat. Etiam non tortor finibus, tincidunt purus sed, pretium sapien. Nulla facilisi. Aenean faucibus consequat leo ut aliquam. Quisque pharetra diam ac suscipit tristique. Nam consectetur vestibulum magna sed commodo. Phasellus ut tempus urna, sed rhoncus arcu. Praesent interdum dignissim felis ac facilisis. Phasellus consequat molestie augue. Maecenas quis massa purus. Vivamus quis ipsum nec tellus tempor pellentesque. In cursus molestie felis eget laoreet. Cras vitae condimentum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum tincidunt tempus quam nec laoreet. Duis suscipit justo in mi rutrum aliquet.
            </p>
            <p className="text-white">
              Sed maximus aliquam lectus eget sodales. Donec id quam interdum, varius magna at, scelerisque purus. Mauris neque risus, lacinia feugiat nisi quis, porta interdum magna. Etiam eu auctor ligula, eu commodo ligula. Donec eu facilisis sem. Vivamus eget ante vel odio dictum porttitor in at neque. Proin vulputate sollicitudin tellus sit amet auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">h1, .h1-editorial</code> with two <code className="pattern-libarary-typography-code">p</code> paragraphs.
            </p>

            <div 
              className="
                container 
                typetemplate-boxy-line 
                text-center
                ">
            </div>
            
            <h2 className="h2-editorial text-white">
              Aenean in velit ut ante congue euismod. Sed ligula enim, facilisis id posuere vel, feugiat non diam. Donec ullamcorper molestie maximus.
            </h2>
            <div className="container typetemplate-boxy-img-box"></div>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. Etiam aliquet nibh eu vulputate pellentesque.
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel facilisis sapien. Vestibulum nec viverra magna, quis cursus lectus. Maecenas egestas elit nisi, a fringilla mi feugiat eget. Suspendisse sollicitudin tristique fringilla. Ut non risus nulla.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">h2, .h2-editorial</code> with <code className="pattern-libarary-typography-code">img</code> and two <code className="pattern-libarary-typography-code">p</code> paragraphs.
            </p>
            <h2 className="h2-editorial text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h2>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris. Etiam aliquet nibh eu vulputate pellentesque.
            </p>
            <p className="text-white">
              Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable
            </p>
            <p className="text-white">
              Maecenas in rhoncus augue. Fusce diam purus, consequat non enim eget, feugiat dictum velit. Vestibulum ac tincidunt mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent vulputate tortor quam, non pulvinar ante porta at. Maecenas finibus bibendum euismod. Maecenas vehicula nunc turpis, non dictum dui scelerisque non. In vulputate convallis porttitor. Cras fringilla diam dolor, eget commodo erat dapibus sed. Nunc in quam congue, aliquet nulla eget, gravida lacus. Quisque fringilla felis a lorem volutpat consequat. Nunc nibh neque, lobortis vel elementum vel, mattis ac neque.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">h2, .h2-editorial</code> with <code className="pattern-libarary-typography-code">img</code> and three <code className="pattern-libarary-typography-code">p</code> paragraphs.
            </p>

            <div 
              className="
                container 
                typetemplate-boxy-line 
                text-center
                ">
            </div>

            <h1 className="h1-editorial text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h1>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">h1, .h1-editorial</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
            </p>
            <h2 className="h2-editorial text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h2>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">h2, .h2-editorial</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
            </p>
            <h3 className="h3-editorial text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h3>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">h3, .h3-editorial</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
            </p>
            <h4 className="h4-editorial text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h4>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">h4, .h4-editorial</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
            </p>
            <h5 className="h5-editorial text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue. Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis.
            </h5>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">h5, .h5-editorial</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
            </p>
            <h6 className="h6-editorial text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue. Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue. Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h6>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">h6, .h6-editorial</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
            </p>

            <div 
              className="
                container 
                typetemplate-boxy-line 
                text-center
                ">
            </div>

            <div className="lead lead-editorial text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue. Sed suscipit mauris et quam sagittis, eget rhoncus diam lobortis. Integer nec eros magna. Duis non ipsum tincidunt, sodales nulla sed, tempor eros.
            </div>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">.lead .lead-editorial</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
            </p>
            <div className="lead-md lead-md-editorial text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue. Sed suscipit mauris et quam sagittis, eget rhoncus diam lobortis. Integer nec eros magna. Duis non ipsum tincidunt, sodales nulla sed, tempor eros.
            </div>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">.lead-md .lead-md-editorial</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
            </p>
            <div className="lead-lg lead-lg-editorial text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue. Sed suscipit mauris et quam sagittis, eget rhoncus diam lobortis. Integer nec eros magna. Duis non ipsum tincidunt, sodales nulla sed, tempor eros.
            </div>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">.lead-lg .lead-lg-editorial</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
            </p>

            <div 
              className="
                container 
                typetemplate-boxy-line 
                text-center
                ">
            </div>

            <h3 className="h3-editorial text-white">Shopping (unordered) list</h3>
            
            <p className="text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue. Sed suscipit mauris et quam sagittis, eget rhoncus diam lobortis. Integer nec eros magna. Duis non ipsum tincidunt, sodales nulla sed, tempor eros.
            </p>
            
            <ul className="text-white">
              <li>Hummus</li>
              <li>Pita</li>
              <li>Green salad</li>
              <li>Halloumi
              </li>
            </ul>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">h3, h3-editorial</code> with <code className="pattern-libarary-typography-code">ul,li</code> unordered list.
            </p>
          
            <h3 className="h3-editorial text-white">Recipe (ordered) list</h3>
            
            <p className="text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue. Sed suscipit mauris et quam sagittis, eget rhoncus diam lobortis. Integer nec eros magna. Duis non ipsum tincidunt, sodales nulla sed, tempor eros.
            </p>
            
            <ol className="text-white">
              <li>Toast pita, leave to cool, then slice down the edge.</li>
              <li>Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
              <li>Wash and chop the salad.</li>
              <li>Fill pita with salad, hummus, and fried halloumi.
              </li>
            </ol>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">h3, h3-editorial</code> with <code className="pattern-libarary-typography-code">ol,li</code> ordered list.
            </p>
            
            <h3 className="h3-editorial text-white">Ingredient description list</h3>
            
            <p className="text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue. Sed suscipit mauris et quam sagittis, eget rhoncus diam lobortis. Integer nec eros magna. Duis non ipsum tincidunt, sodales nulla sed, tempor eros.
            </p>
            
            <dl className="row text-white">
              <dt className="col-md-2">Hummus</dt>
              <dd className="col-md-10">A thick dip/sauce generally made from chick peas blended with tahini, lemon juice, salt, garlic, and other ingredients.</dd>
              <dt className="col-md-2">Pita</dt>
              <dd className="col-md-10">A soft, slightly leavened flatbread.</dd>
              <dt className="col-md-2">Halloumi</dt>
              <dd className="col-md-10">A semi-hard, unripened, brined cheese with a higher-than-usual melting point, usually made from goat/sheep milk.</dd>
              <dt className="col-md-2">Green salad</dt>
              <dd className="col-md-10">That green healthy stuff that many of us just use to garnish kebabs.
              </dd>
            </dl>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-1" icon="angle-up" /><code className="pattern-libarary-typography-code">h3, h3-editorial</code> with <code className="pattern-libarary-typography-code">dl,dt,dd</code> description list.
            </p>

            <p className="text-white-50 small">
              <FontAwesomeIcon className="mr-2" icon="angle-right" />Visit <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists" className="underline">Mozilla Styling Lists</a> <FontAwesomeIcon className="small-font-size-70 font-weight-light mr-1 mb-1" icon="external-link-alt" /> to learn more about styling lists.
            </p>

            <div 
              className="
                container 
                typetemplate-boxy-line 
                text-center
                ">
            </div>

            <div className="row">
              <div className="col-md-12">
                <blockquote className="blockquote blockquote-editorial">
                  <p className="text-white">
                    Sed ac dolor finibus libero bibendum maximus. Cras aliquet dapibus nunc, eu mattis felis mollis quis. Integer ut ullamcorper tellus. Donec porttitor nunc non sapien sagittis ultrices. Duis gravida diam mi, in vulputate neque volutpat ac.
                  </p>
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                <p className="pattern-library-typography-footnote mt-3">
                  <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">blockquote</code>, <code className="pattern-libarary-typography-code">.blockquote .blockquote-editorial</code> and <code className="pattern-libarary-typography-code">.blockquote-footer</code>.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <blockquote className="blockquote-md blockquote-md-editorial">
                  <p className="text-white">
                    Sed ac dolor finibus libero bibendum maximus. Cras aliquet dapibus nunc, eu mattis felis mollis quis. Integer ut ullamcorper tellus. Donec porttitor nunc non sapien sagittis ultrices. Duis gravida diam mi, in vulputate neque volutpat ac.
                  </p>
                  <footer className="blockquote-footer-md">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                <p className="pattern-library-typography-footnote mt-3">
                  <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">.blockquote-md .blockquote-md-editorial</code> and <code className="pattern-libarary-typography-code">.blockquote-footer-md</code>.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <blockquote className="blockquote-lg blockquote-lg-editorial">
                  <p className="text-white">
                    Sed ac dolor finibus libero bibendum maximus. Cras aliquet dapibus nunc, eu mattis felis mollis quis. Integer ut ullamcorper tellus. Donec porttitor nunc non sapien sagittis ultrices. Duis gravida diam mi, in vulputate neque volutpat ac.
                  </p>
                  <footer className="blockquote-footer-lg">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                <p className="pattern-library-typography-footnote mt-3">
                  <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">.blockquote-lg .blockquote-lg-editorial</code> and <code className="pattern-libarary-typography-code">.blockquote-footer-lg</code>.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <blockquote className="blockquote blockquote-editorial text-center">
                  <p className="text-white">
                    Sed ac dolor finibus libero bibendum maximus. Cras aliquet dapibus nunc, eu mattis felis mollis quis. Integer ut ullamcorper tellus. Donec porttitor nunc non sapien sagittis ultrices. Duis gravida diam mi, in vulputate neque volutpat ac.
                  </p>
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                <p className="pattern-library-typography-footnote mt-3">
                  <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">blockquote .blockquote-editorial</code> with <code className="pattern-libarary-typography-code">.text-center</code>.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <blockquote className="blockquote blockquote-editorial text-right">
                  <p className="text-white">
                    Sed ac dolor finibus libero bibendum maximus. Cras aliquet dapibus nunc, eu mattis felis mollis quis. Integer ut ullamcorper tellus. Donec porttitor nunc non sapien sagittis ultrices. Duis gravida diam mi, in vulputate neque volutpat ac.
                  </p>
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                <p className="pattern-library-typography-footnote mt-3">
                  <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">blockquote  .blockquote-editorial</code> with <code className="pattern-libarary-typography-code">.text-right</code>.
                </p>
              </div>
            </div>

            <div 
              className="
                container 
                typetemplate-boxy-line 
                text-center
                ">
            </div>

            <h1 className="display-1 display-1-editorial text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h1>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">.display-1 .display-1-editorial</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
            </p>
            <h1 className="display-2 display-2-editorial text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h1>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">.display-2 .display-2-editorial</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
            </p>
            <h1 className="display-3 display-3-editorial text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h1>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">.display-3 .display-3-editorial</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
            </p>
            <h1 className="display-4 display-4-editorial text-white">
              Praesent sodales felis pretium orci aliquet egestas. Nunc eget interdum augue.
            </h1>
            <p className="text-white">
              Sed sapien erat, finibus vitae dolor eget, lobortis dignissim ante. Aliquam pharetra ac sem vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna turpis, interdum quis venenatis in, porta nec mauris.
            </p>
            <p className="pattern-library-typography-footnote mt-3">
              <FontAwesomeIcon className="mr-2" icon="angle-up" /><code className="pattern-libarary-typography-code">.display-4 .display-4-editorial</code> with <code className="pattern-libarary-typography-code">p</code> paragraph.
            </p>

          </div>
        </div>
      </main>
      </div>
    );
  }
}

export default Typography;
