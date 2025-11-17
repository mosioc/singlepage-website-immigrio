import React from 'react';
import styles from '../style';


const Footer: React.FC = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-gray-900`}>
      {/* logo + links */}
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10"></div>

        {/* footer links */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10"></div>
      </div>

      {/* copyright + social media */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <div className="flex flex-row md:mt-0 mt-6"></div>
      </div>
    </section>
  );
};

export default Footer;
