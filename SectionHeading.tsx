import React from 'react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ badge, title, description, light = false }) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16 px-4">
      <span className={`inline-block font-bold tracking-[0.2em] uppercase text-xs mb-4 px-3 py-1 rounded-full border ${
        light ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' : 'text-emerald-600 border-emerald-500/20 bg-emerald-50'
      }`}>
        {badge}
      </span>
      <h2 className={`text-4xl md:text-5xl font-black mb-6 tracking-tighter text-balance ${
        light ? 'text-white' : 'text-zinc-900'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${
          light ? 'text-zinc-400' : 'text-zinc-500'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;