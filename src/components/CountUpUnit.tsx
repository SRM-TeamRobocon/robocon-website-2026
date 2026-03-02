"use client";

import { useState, useEffect } from 'react';
import CountUp from 'react-countup';

interface CountUpUnitPropsType {
  upto: number;
  label: string;
}

export default function CountUpUnit({ upto, label }: CountUpUnitPropsType) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex items-center justify-center gap-10 flex-wrap text-white">
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl md:text-6xl flex items-center justify-center w-32 md:w-48">
          <div className="invisible">+</div>
          {isMounted ? (
            <CountUp end={upto} duration={2} enableScrollSpy scrollSpyOnce />
          ) : (
            <span>{upto}</span>
          )}
          <div className="text-red">+</div>
        </div>
        <div className="w-full text-wrap text-center">{label}</div>
      </div>
    </div>
  );
}
