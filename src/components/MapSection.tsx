import React from 'react';

interface MapSectionProps {
  className?: string;
}

export const MapSection: React.FC<MapSectionProps> = ({ className = '' }) => {
  return (
    <aside className={`absolute left-[798px] right-[map] top-0 max-md:relative max-md:flex max-md:justify-center max-md:mt-10 max-md:left-auto ${className}`}>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/ab3969dcadf61fc974de65d5659d20cf96f53a7e?width=1728"
        alt="Global map showing Finsage's reach across India and international markets"
        className="w-[864px] h-[965px] shrink-0 max-md:w-full max-md:max-w-[600px] max-md:h-auto max-sm:max-w-full"
      />
    </aside>
  );
};
