import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ThousandSunnyShip } from './ThousandSunnyShip';
import { OceanWaves, Seagulls } from './OceanWaves';
import { FallbackOcean } from './FallbackOcean';

// Distant Grand Line Islands
const DistantIslands: React.FC = () => {
  return (
    <group position={[0, 0, -32]}>
      {/* Island 1 (Left silhouette) */}
      <mesh position={[-18, 1, 0]}>
        <coneGeometry args={[6, 3.5, 6]} />
        <meshStandardMaterial color="#071E30" roughness={0.9} />
      </mesh>
      {/* Island 2 (Center far mountain) */}
      <mesh position={[8, 1.8, -8]}>
        <coneGeometry args={[9, 5.5, 7]} />
        <meshStandardMaterial color="#051421" roughness={0.9} />
      </mesh>
      {/* Island 3 (Right reef) */}
      <mesh position={[24, 0.8, -4]}>
        <coneGeometry args={[5, 2.5, 5]} />
        <meshStandardMaterial color="#061B2C" roughness={0.9} />
      </mesh>
    </group>
  );
};

// Anime Clouds Floating in Sky
const AnimeClouds: React.FC = () => {
  return (
    <group position={[0, 9, -20]}>
      {/* Cloud cluster 1 */}
      <group position={[-12, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[2.5, 12, 12]} />
          <meshStandardMaterial color="#E0EDF8" transparent opacity={0.65} roughness={0.5} />
        </mesh>
        <mesh position={[2, -0.4, 0]}>
          <sphereGeometry args={[2, 12, 12]} />
          <meshStandardMaterial color="#E0EDF8" transparent opacity={0.65} roughness={0.5} />
        </mesh>
        <mesh position={[-1.8, -0.3, 0]}>
          <sphereGeometry args={[1.7, 12, 12]} />
          <meshStandardMaterial color="#E0EDF8" transparent opacity={0.65} roughness={0.5} />
        </mesh>
      </group>

      {/* Cloud cluster 2 */}
      <group position={[14, 1.5, -4]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[3, 12, 12]} />
          <meshStandardMaterial color="#F4E8D1" transparent opacity={0.6} roughness={0.5} />
        </mesh>
        <mesh position={[2.5, -0.5, 0]}>
          <sphereGeometry args={[2.2, 12, 12]} />
          <meshStandardMaterial color="#F4E8D1" transparent opacity={0.6} roughness={0.5} />
        </mesh>
      </group>
    </group>
  );
};

interface GrandLineSceneProps {
  scrollProgress?: number;
}

export const GrandLineScene: React.FC<GrandLineSceneProps> = () => {
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!isClient) return null;

  if (!hasWebGL) {
    return <FallbackOcean />;
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 2.5, 8.5], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          {/* Ambient light for Grand Line atmosphere */}
          <ambientLight intensity={0.85} color="#A5D8F3" />

          {/* Golden Sun Light */}
          <directionalLight
            position={[12, 18, 10]}
            intensity={2.2}
            color="#FFDF9E"
            castShadow
          />

          {/* Sunset Horizon Rim Light */}
          <directionalLight
            position={[-15, 6, -15]}
            intensity={1.0}
            color="#E78B45"
          />

          {/* Fill Light for Hull Details */}
          <pointLight position={[0, 1, 4]} intensity={0.5} color="#D6AF62" />

          {/* 3D Scene Elements */}
          <OceanWaves />
          <ThousandSunnyShip />
          <Seagulls />
          <DistantIslands />
          <AnimeClouds />
        </Suspense>
      </Canvas>

      {/* Atmospheric Vignette & Color Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-transparent to-ocean-midnight/40 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />
    </div>
  );
};

