import React from 'react';

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <header className={`flex w-[997px] flex-col items-center gap-[11px] absolute h-[290px] left-[258px] top-[91px] max-md:relative max-md:w-full max-md:mb-10 max-md:left-auto max-md:top-auto max-sm:gap-5 ${className}`}>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/3ad9e021d5c7bf0f77cf23feb9ac5f48a66eddfa?width=167"
        alt="Finsage Logo"
        className="w-[84px] h-[72.4px] relative max-sm:w-[60px] max-sm:h-[52px]"
      />
      <div className="flex flex-col items-center gap-[29px] self-stretch relative">
        <h1 className="self-stretch text-black text-center text-5xl font-bold relative max-md:text-4xl max-sm:text-[28px] max-sm:leading-[1.2]">
          Built for India. Aligned with Global Goals
        </h1>
        <p className="w-[691px] h-[62px] text-black text-center text-xl font-normal relative max-md:w-full max-md:text-lg max-sm:text-base max-sm:leading-[1.4]">
          Whether you're a global firm with Indian teams or a homegrown startup that cares deeply — Finsage fits right in
        </p>
      </div>
    </header>
  );
};
