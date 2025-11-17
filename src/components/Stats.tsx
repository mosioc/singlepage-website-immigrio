import React from 'react';
import { FileCheck, Globe, TrendingUp } from 'lucide-react';
import { stats, immigrationStats } from '../consts/bundle';

const Stats: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'stats-1':
        return <FileCheck className="w-12 h-12 text-blue-400" />;
      case 'stats-2':
        return <Globe className="w-12 h-12 text-blue-400" />;
      case 'stats-3':
        return <TrendingUp className="w-12 h-12 text-blue-400" />;
      default:
        return <FileCheck className="w-12 h-12 text-blue-400" />;
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      {/* left side - stats */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-8 flex-1"></div>

      {/* right side - inof card */}
      <div className="flex-1 max-w-[500px]"></div>
    </section>
  );
};

export default Stats;
