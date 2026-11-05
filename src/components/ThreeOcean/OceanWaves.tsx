import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const OceanWaves: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry>(null);

  // Initial vertex positions cache for harmonic displacement
  const originalPositions = useMemo(() => {
    const geom = new THREE.PlaneGeometry(80, 80, 60, 60);
    return geom.attributes.position.array.slice();
  }, []);

  useFrame((state) => {
    if (!geomRef.current) return;
    const t = state.clock.getElapsedTime();
    const posAttr = geomRef.current.attributes.position;
    const array = posAttr.array as Float32Array;

    for (let i = 0; i < posAttr.count; i++) {
      const u = originalPositions[i * 3];     // X
      const v = originalPositions[i * 3 + 1]; // Y

      // Multi-harmonic ocean waves
      const wave1 = Math.sin(u * 0.25 + t * 1.6) * 0.35;
      const wave2 = Math.cos(v * 0.2 + t * 1.2) * 0.25;
      const wave3 = Math.sin((u + v) * 0.4 + t * 2.2) * 0.12;

      array[i * 3 + 2] = wave1 + wave2 + wave3; // Z displacement
    }

    posAttr.needsUpdate = true;
    geomRef.current.computeVertexNormals();
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.6, -10]}
      receiveShadow
    >
      <planeGeometry ref={geomRef} args={[80, 80, 60, 60]} />
      <meshStandardMaterial
        color="#082B46"
        emissive="#041523"
        roughness={0.15}
        metalness={0.65}
        flatShading={false}
        transparent
        opacity={0.92}
      />
    </mesh>
  );
};

// Animated Flying Seagulls
export const Seagulls: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const birds = useMemo(() => [
    { radius: 14, speed: 0.6, height: 7, phase: 0 },
    { radius: 19, speed: 0.45, height: 9, phase: 1.8 },
    { radius: 24, speed: 0.35, height: 6.5, phase: 3.5 },
    { radius: 16, speed: 0.5, height: 8.5, phase: 4.8 },
  ], []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    groupRef.current.children.forEach((child, idx) => {
      const b = birds[idx];
      const angle = t * b.speed + b.phase;
      child.position.x = Math.cos(angle) * b.radius;
      child.position.z = Math.sin(angle) * b.radius - 8;
      child.position.y = b.height + Math.sin(t * 2 + idx) * 0.5;
      child.rotation.y = -angle + Math.PI / 2;

      // Wing flap animation
      const leftWing = child.children[1] as THREE.Mesh;
      const rightWing = child.children[2] as THREE.Mesh;
      if (leftWing && rightWing) {
        const flap = Math.sin(t * 8 + idx) * 0.4;
        leftWing.rotation.z = flap;
        rightWing.rotation.z = -flap;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {birds.map((_, i) => (
        <group key={i}>
          {/* Bird body */}
          <mesh>
            <coneGeometry args={[0.08, 0.5, 4]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          {/* Left Wing */}
          <mesh position={[-0.35, 0.05, 0]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.6, 0.02, 0.2]} />
            <meshStandardMaterial color="#F4F1E8" />
          </mesh>
          {/* Right Wing */}
          <mesh position={[0.35, 0.05, 0]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.6, 0.02, 0.2]} />
            <meshStandardMaterial color="#F4F1E8" />
          </mesh>
        </group>
      ))}
    </group>
  );
};
