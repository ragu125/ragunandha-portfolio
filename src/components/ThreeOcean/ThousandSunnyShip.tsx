import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const ThousandSunnyShip: React.FC<{ scrollOffset?: number }> = () => {
  const shipGroup = useRef<THREE.Group>(null);
  const flagRef = useRef<THREE.Mesh>(null);
  const sailRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (shipGroup.current) {
      // Bobbing on the waves
      shipGroup.current.position.y = Math.sin(t * 1.8) * 0.25 - 0.1;
      // Gentle wave roll & pitch
      shipGroup.current.rotation.z = Math.sin(t * 1.2) * 0.06;
      shipGroup.current.rotation.x = Math.cos(t * 1.5) * 0.04;
      // Gentle forward gliding sensation
      shipGroup.current.position.z = Math.sin(t * 0.8) * 0.4;
    }

    if (flagRef.current) {
      // Flag flutter in sea breeze
      flagRef.current.rotation.y = Math.sin(t * 5) * 0.25;
    }

    if (sailRef.current) {
      // Sail billowing in wind
      sailRef.current.scale.z = 1 + Math.sin(t * 2) * 0.08;
    }
  });

  return (
    <group ref={shipGroup} position={[0, 0, 0]} rotation={[0, -Math.PI / 5, 0]} scale={[0.85, 0.85, 0.85]}>
      {/* ================= HULL & KEEL ================= */}
      {/* Lower Hull (Red Keel) */}
      <mesh position={[0, -0.6, 0]} castShadow>
        <boxGeometry args={[2.2, 0.6, 6.2]} />
        <meshStandardMaterial color="#A82824" roughness={0.6} />
      </mesh>

      {/* Main Hull (Deep Navy/Ebony Wood) */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 0.8, 6.8]} />
        <meshStandardMaterial color="#1E293B" roughness={0.7} />
      </mesh>

      {/* Upper Cream/Gold Hull Trim */}
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[2.7, 0.15, 6.9]} />
        <meshStandardMaterial color="#E9D4A6" roughness={0.4} metalness={0.2} />
      </mesh>

      {/* Wooden Deck Planks */}
      <mesh position={[0, 0.48, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[2.5, 6.6]} />
        <meshStandardMaterial color="#C8A66A" roughness={0.8} />
      </mesh>

      {/* Bow (Curved Front) */}
      <mesh position={[0, 0.1, 3.8]} rotation={[0.3, 0, 0]}>
        <coneGeometry args={[1.3, 1.8, 4]} />
        <meshStandardMaterial color="#1E293B" roughness={0.7} />
      </mesh>

      {/* ================= SUNNY LION FIGUREHEAD ================= */}
      <group position={[0, 0.6, 4.3]}>
        {/* Lion Face (Golden Core Sphere) */}
        <mesh castShadow>
          <sphereGeometry args={[0.65, 32, 32]} />
          <meshStandardMaterial color="#F59E0B" roughness={0.3} metalness={0.4} />
        </mesh>

        {/* Lion Sun Petals (12 radiating golden rays) */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 12;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 0.85, Math.sin(angle) * 0.85, -0.1]}
              rotation={[0, 0, angle + Math.PI / 2]}
            >
              <coneGeometry args={[0.22, 0.6, 4]} />
              <meshStandardMaterial color="#D6AF62" roughness={0.2} metalness={0.6} />
            </mesh>
          );
        })}

        {/* Lion Snout / Mouth */}
        <mesh position={[0, -0.15, 0.55]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial color="#FEF3C7" roughness={0.4} />
        </mesh>

        {/* Lion Eyes */}
        <mesh position={[-0.22, 0.15, 0.55]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#111111" roughness={0.2} />
        </mesh>
        <mesh position={[0.22, 0.15, 0.55]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#111111" roughness={0.2} />
        </mesh>

        {/* Crossed Bones / Anchor below head */}
        <mesh position={[0, -0.7, 0]} rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[0.08, 0.08, 1.6, 8]} />
          <meshStandardMaterial color="#E9D4A6" roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.7, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <cylinderGeometry args={[0.08, 0.08, 1.6, 8]} />
          <meshStandardMaterial color="#E9D4A6" roughness={0.5} />
        </mesh>
      </group>

      {/* ================= CABIN & LAWN DECK ================= */}
      {/* Lawn Deck (Green grass turf on Thousand Sunny) */}
      <mesh position={[0, 0.5, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.3, 3.2]} />
        <meshStandardMaterial color="#15803D" roughness={0.9} />
      </mesh>

      {/* Main Stern Cabin (Multi-level Quarterdeck) */}
      <mesh position={[0, 1.0, -2.2]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 1.2, 2.0]} />
        <meshStandardMaterial color="#D6AF62" roughness={0.6} />
      </mesh>
      {/* Cabin Roof */}
      <mesh position={[0, 1.7, -2.2]}>
        <boxGeometry args={[2.4, 0.2, 2.2]} />
        <meshStandardMaterial color="#991B1B" roughness={0.5} />
      </mesh>
      {/* Cabin Windows */}
      <mesh position={[0, 1.1, -1.18]}>
        <planeGeometry args={[1.4, 0.5]} />
        <meshStandardMaterial color="#60A5FA" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* ================= MASTS & SAILS ================= */}
      {/* Main Mast */}
      <mesh position={[0, 2.5, -0.2]} castShadow>
        <cylinderGeometry args={[0.12, 0.15, 4.8, 12]} />
        <meshStandardMaterial color="#78350F" roughness={0.7} />
      </mesh>

      {/* Main Yardarm (Horizontal spar) */}
      <mesh position={[0, 3.6, -0.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 3.6, 8]} />
        <meshStandardMaterial color="#78350F" roughness={0.7} />
      </mesh>

      {/* Lower Main Yardarm */}
      <mesh position={[0, 2.0, -0.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 3.2, 8]} />
        <meshStandardMaterial color="#78350F" roughness={0.7} />
      </mesh>

      {/* Fore Mast */}
      <mesh position={[0, 2.1, 2.2]} castShadow>
        <cylinderGeometry args={[0.1, 0.12, 3.8, 12]} />
        <meshStandardMaterial color="#78350F" roughness={0.7} />
      </mesh>
      <mesh position={[0, 3.0, 2.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 2.6, 8]} />
        <meshStandardMaterial color="#78350F" roughness={0.7} />
      </mesh>

      {/* Main Billowing Sail */}
      <mesh ref={sailRef} position={[0, 2.8, -0.05]} rotation={[0.15, 0, 0]}>
        <planeGeometry args={[3.4, 1.8, 16, 16]} />
        <meshStandardMaterial
          color="#FDFBF7"
          roughness={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Fore Sail */}
      <mesh position={[0, 2.2, 2.3]} rotation={[0.15, 0, 0]}>
        <planeGeometry args={[2.4, 1.4, 12, 12]} />
        <meshStandardMaterial
          color="#FDFBF7"
          roughness={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Crow's Nest atop Main Mast */}
      <mesh position={[0, 4.4, -0.2]}>
        <cylinderGeometry args={[0.45, 0.35, 0.5, 12]} />
        <meshStandardMaterial color="#C8A66A" roughness={0.6} />
      </mesh>

      {/* Pirate Flag on Crow's Nest */}
      <group position={[0, 4.9, -0.2]}>
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.8, 6]} />
          <meshStandardMaterial color="#451A03" />
        </mesh>
        <mesh ref={flagRef} position={[0.45, 0.45, 0]} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.8, 0.45]} />
          <meshStandardMaterial color="#111111" side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* ================= SOLDIER DOCK PADDLE WHEELS ================= */}
      {/* Port Paddle Hub */}
      <mesh position={[-1.4, -0.1, 0.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.65, 0.65, 0.3, 16]} />
        <meshStandardMaterial color="#D6AF62" roughness={0.5} metalness={0.4} />
      </mesh>
      {/* Starboard Paddle Hub */}
      <mesh position={[1.4, -0.1, 0.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.65, 0.65, 0.3, 16]} />
        <meshStandardMaterial color="#D6AF62" roughness={0.5} metalness={0.4} />
      </mesh>

      {/* Deck Railings */}
      <mesh position={[-1.25, 0.65, 0]}>
        <boxGeometry args={[0.06, 0.25, 6.4]} />
        <meshStandardMaterial color="#E9D4A6" roughness={0.4} />
      </mesh>
      <mesh position={[1.25, 0.65, 0]}>
        <boxGeometry args={[0.06, 0.25, 6.4]} />
        <meshStandardMaterial color="#E9D4A6" roughness={0.4} />
      </mesh>
    </group>
  );
};
