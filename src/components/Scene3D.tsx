"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Site palette
const FLAME = "#e8541a";
const GOLD  = "#a87c2a";
const WARM  = "#f5ede0";

// Central hero object — torus knot, flame metallic
function HeroObject() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.055;
    ref.current.rotation.x += delta * 0.022;
  });

  const geo = useMemo(() => new THREE.TorusKnotGeometry(1.3, 0.34, 256, 40, 2, 3), []);

  return (
    <Float speed={0.6} floatIntensity={0.35} rotationIntensity={0.06}>
      <mesh ref={ref} geometry={geo} castShadow>
        <meshPhysicalMaterial
          color={FLAME}
          metalness={0.92}
          roughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0.04}
          envMapIntensity={3}
        />
      </mesh>
    </Float>
  );
}

// Outer wireframe cage — very subtle warm depth layer
function AtmosphereSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta * 0.015;
    ref.current.rotation.z += delta * 0.01;
  });
  const geo = useMemo(() => new THREE.IcosahedronGeometry(4.2, 1), []);
  return (
    <mesh ref={ref} geometry={geo}>
      <meshBasicMaterial color={FLAME} wireframe transparent opacity={0.018} />
    </mesh>
  );
}

// Small orbiting gold tetrahedron
function OrbitShape() {
  const ref = useRef<THREE.Mesh>(null);
  const pivot = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (pivot.current) pivot.current.rotation.y += delta * 0.2;
    if (ref.current) {
      ref.current.rotation.x += delta * 0.28;
      ref.current.rotation.z += delta * 0.18;
    }
  });

  const geo = useMemo(() => new THREE.TetrahedronGeometry(0.24, 0), []);

  return (
    <group ref={pivot}>
      <Float speed={2.2} floatIntensity={0.25}>
        <mesh ref={ref} geometry={geo} position={[2.4, 0.5, 0.4]}>
          <meshPhysicalMaterial
            color={GOLD}
            metalness={0.95}
            roughness={0.06}
            clearcoat={1}
            transparent
            opacity={0.75}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Smaller orbiting flame octahedron
function OrbitShape2() {
  const pivot = useRef<THREE.Group>(null);
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (pivot.current) pivot.current.rotation.y -= delta * 0.13;
    if (ref.current) ref.current.rotation.y += delta * 0.35;
  });

  const geo = useMemo(() => new THREE.OctahedronGeometry(0.18, 0), []);

  return (
    <group ref={pivot} rotation={[0.7, 0, 0.3]}>
      <mesh ref={ref} geometry={geo} position={[2.9, 0, 0]}>
        <meshPhysicalMaterial
          color={FLAME}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          transparent
          opacity={0.55}
        />
      </mesh>
    </group>
  );
}

// Mouse-tracking camera parallax
function CameraParallax() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 0.6,
        y: -(e.clientY / window.innerHeight - 0.5) * 0.4,
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    target.current.x += (mouse.current.x - target.current.x) * 0.03;
    target.current.y += (mouse.current.y - target.current.y) * 0.03;
    camera.position.x = 3.2 + target.current.x;
    camera.position.y = target.current.y;
    camera.lookAt(3.2, 0, 0);
  });

  return null;
}

export function Scene3D() {
  return (
    // Shift entire scene right so 3D sits in the right half
    <group position={[3.2, 0, 0]}>
      {/* Warm soft fill — no harsh blacks */}
      <ambientLight intensity={1.4} color={WARM} />

      {/* Key light — warm top-right */}
      <directionalLight position={[6, 8, 4]} intensity={2.2} color="#fff5e8" />

      {/* Rim light from left — separation from bg */}
      <directionalLight position={[-4, 2, 3]} intensity={1.0} color="#ffd6b0" />

      {/* Flame accent point — gives the orange glow */}
      <pointLight position={[0, 1.5, 4]} intensity={4} color={FLAME} distance={10} decay={2} />

      {/* Gold fill from below */}
      <pointLight position={[3, -3, 2]} intensity={2} color={GOLD} distance={8} decay={2} />

      {/* Soft back light — prevents total silhouette */}
      <pointLight position={[-2, 0, -3]} intensity={0.8} color="#ffe8d0" distance={10} decay={2} />

      <CameraParallax />
      <AtmosphereSphere />
      <HeroObject />
      <OrbitShape />
      <OrbitShape2 />
    </group>
  );
}
