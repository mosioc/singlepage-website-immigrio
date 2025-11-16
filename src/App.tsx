import React from 'react';
import styles from './style';

import { Navbar, Promo, Stats, Sales, CTA, Footer } from './components/index';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      {/* // navbar section */}
      <div className={`bg-red-500 ${styles.paddingX} ${styles.paddingY} ${styles.boxWidth}`}>
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
      <div className={`bg-blue-700 ${styles.flexCenter} ${styles.paddingX} $`}>
        <div className={`${styles.boxWidth}`}>
          {/* // sales section */}
          <Sales />

          {/* // call to action section */}
          <CTA />
          {/* // footer section */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
