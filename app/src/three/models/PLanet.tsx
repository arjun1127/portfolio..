import { useGLTF } from '@react-three/drei';
import { Group } from 'three';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface PlanetProps {
  active: boolean;
}

const Planet: React.FC<PlanetProps> = ({ active }) => {
  const groupRef = useRef<Group>(null!);
  const { scene } = useGLTF('public/models/Planet.glb');

  useEffect(() => {
    if (!groupRef.current) return;

    gsap.to(groupRef.current.scale, {
      x: active ? 1 : 0,
      y: active ? 1 : 0,
      z: active ? 1 : 0,
      duration: 1.2,
      ease: 'power3.out',
    });

  }, [active]);

  return (
    <group ref={groupRef} scale={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
};

export default Planet;
useGLTF.preload('public/models/Planet.glb');
