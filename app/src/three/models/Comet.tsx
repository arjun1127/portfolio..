import { useGLTF } from '@react-three/drei';
import { Group } from 'three';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface CometProps {
  active: boolean;
}

const Comet: React.FC<CometProps> = ({ active }) => {
  const groupRef = useRef<Group>(null!);
  const { scene } = useGLTF('public/models/Comet.glb');

  useEffect(() => {
    if (!groupRef.current) return;

    gsap.to(groupRef.current, {
      scale: active ? 1 : 0,
      opacity: active ? 1 : 0,
      duration: 1.2,
      ease: 'power3.out',
    });
  }, [active]);

  return (
    <group ref={groupRef} scale={0}>
      <primitive object={scene} />
    </group>
  );
};

export default Comet;
useGLTF.preload('public/models/Comet.glb');
