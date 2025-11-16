import React from 'react';
import styles from './style.js';
import Navbar from './components/Navbar.js';
import Promo from './components/PromoHead.js';
import Stats from './components/Stats.js';
import Sales from './components/Sales.js';
import PromoSub from './components/PromoSub.js';
import Testimonials from './components/Testimonials.js';
import CTA from './components/CTA.js';
import Footer from './components/Footer.js';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      {/* // navbar section */}
      <div className={`bg-red-50 ${styles.paddingX} ${styles.paddingY} ${styles.boxWidth}`}>
        <Navbar />
      </div>
      {/* // promo section */}
      <div className={`${styles.flexCenter}`}>
        <Promo />
      </div>
      {/* // stats section */}
      <div className={`${styles.flexCenter}`}>
        <Stats />
      </div>
      {/* // sales section */}
      <Sales />
      {/* // promo-sub section */}
      <PromoSub />
      {/* // testimonials section */}
      <Testimonials />
      {/* // call to action section */}
      <CTA />
      {/* // footer section */}
      <Footer />
    </div>
  );
};

export default App;
