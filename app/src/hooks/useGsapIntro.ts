import gsap from 'gsap';
import { RefObject, useEffect } from 'react';

export const useGsapIntro = (ref: RefObject<any>) => {
  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current.scale,
      { x: 0, y: 0, z: 0 },
      { x: 1, y: 1, z: 1, duration: 1.4, ease: 'power3.out' }
    );
  }, [ref]);
};
