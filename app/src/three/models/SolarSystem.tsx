import { useGLTF } from '@react-three/drei';
import { Group } from 'three';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

interface SolarSystemProps {
  active: boolean;
}

const SolarSystem: React.FC<SolarSystemProps> = ({ active }) => {
  const groupRef = useRef<Group>(null!);
  const { scene } = useGLTF('models/SolarSystem.glb');

  // Idle rotation ONLY when active
  useFrame(() => {
    if (!groupRef.current || !active) return;
    groupRef.current.rotation.y += 0.001;
  });

  useEffect(() => {
    if (!groupRef.current) return;

    gsap.to(groupRef.current.scale, {
      x: active ? 1.2 : 0,
      y: active ? 1.2 : 0,
      z: active ? 1.2 : 0,
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

export default SolarSystem;
useGLTF.preload('models/SolarSystem.glb');
