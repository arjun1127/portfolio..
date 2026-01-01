import { useGLTF } from '@react-three/drei';
import { Group } from 'three';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MoonProps {
  active: boolean;
}

const Moon: React.FC<MoonProps> = ({ active }) => {
  const groupRef = useRef<Group>(null!);
  const { scene } = useGLTF('public/models/Moon.glb');

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

export default Moon;
useGLTF.preload('public/models/Moon.glb');
