import React from 'react';
import { Star, Quote } from 'lucide-react';
import { feedback, clients, testimonials, features } from '../consts/bundle';

const Sales: React.FC = () => {
  return (
    <>
      {/* features section */}
      {/* <FeaturesSection /> */}

      {/* testimonials section */}
      <section
        id="testimonials"
        className="flex flex-col py-16 px-6 relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] max-w-[1280px] mx-auto">
          <h2 className="font-poppins font-semibold text-4xl md:text-5xl text-white leading-tight">
            {testimonials.heading} <br className="sm:block hidden" />
            <span className="text-gradient">{testimonials.highlightedHeading}</span>
          </h2>
          <div className="w-full md:w-auto md:mt-0 mt-6">
            <p className="font-poppins font-normal text-[18px] leading-[30.8px] text-gray-400 text-left max-w-[450px]">
              {testimonials.description}
            </p>
          </div>
        </div>

        {/* testimonials cards */}
        <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1] max-w-[1280px] mx-auto">
          
        </div>

        {/* trusted section */}
        <div className="flex flex-col items-center mt-20 relative z-[1]">
          <h3 className="font-poppins font-semibold text-2xl text-white mb-8">
            Trusted By Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center w-full max-w-[1000px]">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5"
              >
                <img
                  src={client.logo}
                  alt="trusted partner logo"
                  className="sm:w-[192px] w-[100px] object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sales;
