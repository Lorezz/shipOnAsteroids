import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Cloud, Stars, OrbitControls } from '@react-three/drei';
import Asteroids from './models/Asteroids';
import Spacecraft from './models/Spacecraft';

export default function Viewer() {
  return (
    <Canvas shadows camera>
      <Suspense fallback={null}>
        <Stars
          radius={50}
          depth={25}
          count={2500}
          factor={2}
          saturation={0}
          fade
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Spacecraft scale={1} position={[0, 0, 0]} />
        <Asteroids scale={1.5} position={[0, -10, 0]} />
        <Cloud
          opacity={0.1}
          speed={0.1} // Rotation speed
          width={10} // Width of the full cloud
          depth={10} // Z-dir depth
          segments={10} // Number of particles
        />
        <OrbitControls autoRotate autoRotateSpeed={0.2} />
      </Suspense>
    </Canvas>
  );
}
