import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, MeshDistortMaterial, Box } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} position={position} ref={meshRef}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  );
};

const PixelGrid = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const pixelBoxes = [];
  const gridSize = 20;
  const spacing = 2;

  for (let x = -gridSize; x <= gridSize; x += spacing) {
    for (let y = -gridSize; y <= gridSize; y += spacing) {
      for (let z = -gridSize; z <= gridSize; z += spacing) {
        if (Math.random() > 0.8) {
          pixelBoxes.push([x, y, z]);
        }
      }
    }
  }

  return (
    <group ref={groupRef}>
      {pixelBoxes.map(([x, y, z], index) => (
        <Float key={index} speed={1 + Math.random()} rotationIntensity={0.5} floatIntensity={0.5}>
          <Box args={[0.3, 0.3, 0.3]} position={[x, y, z]}>
            <meshStandardMaterial
              color={Math.random() > 0.5 ? "#8b5cf6" : "#06b6d4"}
              transparent
              opacity={0.6}
              wireframe={Math.random() > 0.7}
            />
          </Box>
        </Float>
      ))}
    </group>
  );
};

const Particles = () => {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  const particlesPosition = new Float32Array(1500 * 3);
  for (let i = 0; i < 1500; i++) {
    particlesPosition[i * 3] = (Math.random() - 0.5) * 30;
    particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 30;
    particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 30;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1500}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#06b6d4" size={0.03} sizeAttenuation />
    </points>
  );
};

const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <PixelGrid />
        <Particles />
        <AnimatedSphere position={[-6, 3, -8]} />
        <AnimatedSphere position={[6, -3, -12]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
};

export default InteractiveBackground;