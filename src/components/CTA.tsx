import React from "react";
import styles from "../style";

const CTA: React.FC = () => {
  return (
    <section
      id="contact"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      {/* left side */}
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>
          Are you <span className="text-gradient">ready?</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Connect with our team of experienced immigration consultants and get
          expert guidance for visas, residency, and citizenship applications.
          Let us help make your move abroad smooth and successful.
        </p>
      </div>

      {/* right side */}
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <button
          type="button"
          onClick={() => (window.location.href = "mailto:mosiocode@gmail.com")}
          className="py-4 px-8 bg-blue-gradient font-poppins font-medium text-lg text-primary rounded-lg outline-none hover:scale-105 transition-transform"
        >
          Book a Free Consultation
        </button>
      </div>
    </section>
  );
};

export default CTA;
