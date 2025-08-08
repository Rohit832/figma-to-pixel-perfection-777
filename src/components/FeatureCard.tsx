import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, className = '' }) => {
  return (
    <article className={`flex w-[602px] h-[295px] flex-col items-center gap-5 shrink-0 border shadow-[0_4px_0_0_#000] bg-white px-[53px] py-[50px] rounded-[18px] border-solid border-black max-md:w-full max-md:h-auto max-md:px-5 max-md:py-[30px] max-sm:gap-4 max-sm:px-4 max-sm:py-5 ${className}`}>
      <div className="flex justify-center items-center">
        {icon}
      </div>
      <h3 className="w-[416px] text-black text-center text-2xl font-normal relative max-md:w-full max-md:text-xl max-sm:text-lg max-sm:leading-[1.3]">
        {title}
      </h3>
    </article>
  );
};
