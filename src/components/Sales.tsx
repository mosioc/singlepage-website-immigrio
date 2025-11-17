import React from 'react';
import { Star, Quote } from 'lucide-react';
import { feedback, clients, testimonials, features } from '../consts/bundle';

const FeatureCard = ({ icon, title, content }: any) => (
  <div className="flex flex-row items-start gap-4 p-6 rounded-[20px] border border-white/10 bg-[#1b1b1b] hover:bg-[#222] transition-all">
    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-gradient-to-br from-blue-400 to-blue-600">
      <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain" />
    </div>

    <div className="flex flex-col">
      <h4 className="font-poppins font-semibold text-[20px] md:text-[22px] text-white leading-tight">
        {title}
      </h4>
      <p className="font-poppins font-normal text-gray-400 text-[15px] md:text-[16px] leading-relaxed mt-1">
        {content}
      </p>
    </div>
  </div>
);

const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="flex flex-col md:flex-row items-start justify-center gap-16 py-16 px-6
                 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative"
    >
      <div className="absolute z-[0] w-[40%] h-[40%] -left-[25%] top-[20%] blue__gradient opacity-40" />

      <div className="flex flex-col max-w-[500px] relative z-[1]">
        <h2 className="font-poppins font-semibold text-4xl md:text-5xl text-white leading-tight">
          Our <span className="text-gradient">Core Features</span>
        </h2>

        <p className="font-poppins font-normal text-gray-400 text-base leading-relaxed mt-5 max-w-[420px]">
          Explore the services and strengths that make our immigration assistance reliable,
          transparent, and fast.
        </p>
      </div>

      <div className="flex flex-col gap-6 max-w-[540px] relative z-[1]">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

interface FeedbackCardProps {
  content: string;
  name: string;
  title: string;
  img: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-[#1c1c1c] hover:bg-[#272727] transition-all border border-white/10">
    <Quote className="w-10 h-10 text-blue-400 mb-4" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row items-center">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-gray-400">{title}</p>
      </div>
    </div>

    <div className="flex mt-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  </div>
);

const Sales: React.FC = () => {
  return (
    <>
      {/* features section */}
      <FeaturesSection />

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
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
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
