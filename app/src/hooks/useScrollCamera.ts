import { useEffect } from 'react';
import gsap from 'gsap';
import { Camera } from 'three';

export const useScrollCamera = (camera: Camera | null) => {
  useEffect(() => {
    if (!camera) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(camera.position, {
      z: 3.5,
      ease: 'none',
    });

    return () => {
      tl.kill();
    };
  }, [camera]);
};
