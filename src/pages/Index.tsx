import React from 'react';
import { Hero } from '@/components/Hero';
import { FeatureSection } from '@/components/FeatureSection';
import { MapSection } from '@/components/MapSection';

const Index = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
      />
      <main className="max-w-[1662px] w-full h-[1525px] relative bg-[#F9F5EE] mx-auto my-0 max-md:max-w-[991px] max-md:h-auto max-md:p-5 max-sm:max-w-screen-sm max-sm:p-4">
        <Hero />
        
        <div className="flex w-full absolute left-0 top-[461px] max-md:flex-col max-md:relative max-md:top-auto">
          <FeatureSection />
          <MapSection />
        </div>
      </main>
    </>
  );
};

export default Index;
