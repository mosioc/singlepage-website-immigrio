import React from "react";
import { FileCheck, Globe, TrendingUp } from "lucide-react";
import { stats, immigrationStats } from "../consts/bundle";

const Stats: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "stats-1":
        return <FileCheck className="w-12 h-12 text-blue-400" />;
      case "stats-2":
        return <Globe className="w-12 h-12 text-blue-400" />;
      case "stats-3":
        return <TrendingUp className="w-12 h-12 text-blue-400" />;
      default:
        return <FileCheck className="w-12 h-12 text-blue-400" />;
    }
  };

  return (
    <section
      id="services"
      className="flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
    >
      {/* left side - stats */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-8 flex-1">
        {stats.map((stat) => (
          <div key={stat.id} className="flex items-center gap-4 min-w-[200px]">
            <div className="flex-shrink-0">{getIcon(stat.id)}</div>
            <div>
              <h4 className="font-poppins font-semibold text-3xl md:text-4xl text-white">
                {stat.value}
              </h4>
              <p className="font-poppins font-normal text-sm md:text-base text-gradient uppercase">
                {stat.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* right side - inof card */}
      <div className="flex-1 max-w-[500px]">
        <h2 className="font-poppins font-semibold text-4xl md:text-5xl text-white leading-tight">
          {immigrationStats.heading} <br className="sm:block hidden" />
          <span className="text-gradient">
            {immigrationStats.highlightedHeading}
          </span>
        </h2>
        <p className="font-poppins font-normal text-base text-gray-400 leading-relaxed mt-5 max-w-[470px]">
          {immigrationStats.description}
        </p>

        <button
          onClick={() => (window.location.href = "mailto:mosiocode@gmail.com")}
          className="mt-10 py-4 px-8 bg-blue-gradient font-poppins font-medium text-lg text-primary rounded-lg outline-none hover:scale-105 transition-transform"
        >
          {immigrationStats.buttonText}
        </button>
      </div>
    </section>
  );
};

export default Stats;
