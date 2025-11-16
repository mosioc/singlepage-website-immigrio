import React from 'react';
import styles from './style.js';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      {/* // navbar section */}
      <div className={`bg-red-50 ${styles.paddingX} ${styles.paddingY} ${styles.boxWidth}`}>
        test
      </div>
      {/* // promo section */}
      <div className={`${styles.flexCenter}`}></div>
      {/* // stats section */}
      <div className={`${styles.flexCenter}`}></div>
      {/* // sales section */}
      <div></div>
      {/* // promo 2 section */}
      <div></div>
      {/* // testimonials section */}
      <div></div>
      {/* // call to action section */}
      <div></div>
      {/* // footer section */}
      <div></div>
    </div>
  );
};

export default App;
