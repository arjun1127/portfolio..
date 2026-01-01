import { RefObject, useEffect } from 'react';

export const useMouseParallax = (
  ref: RefObject<THREE.Mesh>,
  intensity = 0.15
) => {
  useEffect(() => {
    if (!ref.current) return;

    // Disable on touch devices
    if ('ontouchstart' in window) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * intensity;
      const y = (e.clientY / window.innerHeight - 0.5) * intensity;

      ref.current.rotation.y += x;
      ref.current.rotation.x += y;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [ref, intensity]);
};
