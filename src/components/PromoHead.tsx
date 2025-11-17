import React from 'react';
import styles from '../style';
import { Plane } from 'lucide-react';
import { promo } from '../consts/bundle';

const Promo: React.FC = () => {
  return (
    <section id="home" className={`w-full flex md:flex-row flex-col ${styles.paddingY} bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 `}>
      {/* left col */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="
              flex-1 font-poppins font-semibold
              ss:text-[72px] text-[52px]
              text-white
              ss:leading-[100.8px] leading-[75px]
            "
          >
            {promo.mainTitle} <br className="sm:block hidden" />{' '}
            <span className="text-gradient">{promo.highlightedText}</span>
          </h1>
        </div>

        <h1
          className="
            font-poppins font-semibold
            ss:text-[68px] text-[52px]
            text-white
            ss:leading-[100.8px] leading-[75px]
            w-full
          "
        >
          {promo.subheading}
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{promo.description}</p>
      </div>

      {/* right col */}
      <div className={`flex-1 flex ${styles.flexCenter} relative md:my-0 my-10`}>
        <Plane className="w-[80%] h-[80%] text-white relative z-[5]" strokeWidth={1.8} />
      </div>
    </section>
  );
};

export default Promo;
