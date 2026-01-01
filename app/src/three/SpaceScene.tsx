import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import Lights from './Lights';
import Hero from './models/hero';
import SolarSystem from './models/SolarSystem';
import Planet from './models/PLanet';
import Moon from './models/Moon';
import Comet from './models/Comet';
import Spaceship from './models/Spaceship';

import { useSpaceScroll } from '../hooks/useSpaceScroll';

const SpaceScene: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useSpaceScroll(setActiveSection);

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <fog attach="fog" args={['#020617', 8, 15]} />

      <Suspense fallback={null}>
        <Lights />

        {/* <Hero active={activeSection === 'hero'} /> */}
        {/* <Planet active={activeSection === 'about'} /> */}
        {/* <Moon active={activeSection === 'about'} />
        <Comet active={activeSection === 'projects'} />
        <Spaceship active={activeSection === 'contact'} /> */}

      </Suspense>
    </Canvas>
  );
};

export default SpaceScene;
