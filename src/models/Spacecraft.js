import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Spacecraft Speeder.glb');

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-2, 0, -1.5]} scale={10}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.craft_speederD_1.geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.craft_speederD_2.geometry}
          material={materials.metalDark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.craft_speederD_3.geometry}
          material={materials.dark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.craft_speederD_4.geometry}
          material={materials.metalRed}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/Spacecraft Speeder.glb');
