"use client";

import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Shared pointer state — window mousemove se update hota hai taake
// page ke kisi bhi hisse par cursor hile poora scene react kare
const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };

// Smoothly lerp shared pointer toward target every frame
function PointerLerp() {
  useFrame(() => {
    pointer.x += (pointer.targetX - pointer.x) * 0.06;
    pointer.y += (pointer.targetY - pointer.y) * 0.06;
  });
  return null;
}

// Camera parallax — poora 3D scene cursor ke sath hilta hai
function CameraRig() {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 1.5 - camera.position.x) * 0.05;
    camera.position.y += (pointer.y * 1.0 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

interface ParticleFieldProps {
  count: number;
  color: string;
  size: number;
  opacity: number;
  radius: number;
}

// Particle field — float karta hai, cursor ki taraf attract hota hai,
// aur thori der baad wapas apni jagah spring-back hota hai
function ParticleField({ count, color, size, opacity, radius }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points | null>(null);

  const { positions, base } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * radius * 0.7;
      pos[i * 3 + 2] = (Math.random() - 0.5) * radius;
    }
    return { positions: pos, base: pos.slice() };
  }, [count, radius]);

  useEffect(() => {
    if (pointsRef.current) {
      pointsRef.current.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
    }
  }, [positions]);

  useFrame(({ clock }) => {
    const pts = pointsRef.current;
    if (!pts) return;
    const attr = pts.geometry.attributes.position as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const time = clock.getElapsedTime();

    // Cursor world position (scene space)
    const cx = pointer.x * radius * 0.5;
    const cy = pointer.y * radius * 0.35;

    for (let i = 0; i < arr.length; i += 3) {
      // Gentle floating motion
      arr[i + 1] += Math.sin(time * 0.6 + i * 0.013) * 0.006;
      arr[i] += Math.cos(time * 0.4 + i * 0.011) * 0.005;

      // Spring back home so particles never clump permanently
      arr[i] += (base[i] - arr[i]) * 0.006;
      arr[i + 1] += (base[i + 1] - arr[i + 1]) * 0.006;

      // Cursor attraction (strong)
      const dx = cx - arr[i];
      const dy = cy - arr[i + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < radius * 0.35) {
        const pull = (1 - dist / (radius * 0.35)) * 0.06;
        arr[i] += dx * pull;
        arr[i + 1] += dy * pull;
      }
    }
    attr.needsUpdate = true;
    pts.rotation.y += 0.0006;
    pts.rotation.x += 0.0003;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Full-screen animated shader gradient — cursor par glow/ripple
function GradientBackground() {
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      materialRef.current.uniforms.uMouse.value.set(pointer.x, pointer.y);
    }
  });

  return (
    <mesh position={[0, 0, -6]}>
      <planeGeometry args={[44, 26]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec2 uMouse;
          varying vec2 vUv;

          void main() {
            vec2 uv = vUv;
            vec2 mouse = (uMouse + 1.0) * 0.5;

            float t = uTime * 0.15;
            float dist = distance(uv, mouse);

            // Flowing color waves
            float wave1 = sin(uv.x * 9.0 + t * 2.0) * 0.5 + 0.5;
            float wave2 = sin(uv.y * 7.0 - t * 2.5 + uv.x * 4.0) * 0.5 + 0.5;
            float wave3 = sin((uv.x + uv.y) * 12.0 + t * 1.5) * 0.5 + 0.5;

            // Cursor glow + ripple rings
            float glow = 1.0 - smoothstep(0.0, 0.45, dist);
            float ring = sin(dist * 34.0 - uTime * 3.5) * 0.5 + 0.5;

            vec3 deep     = vec3(0.02, 0.03, 0.08);   // near-black base
            vec3 cyan     = vec3(0.0, 0.75, 0.95);     // neon cyan
            vec3 purple   = vec3(0.45, 0.15, 0.85);    // neon purple
            vec3 teal     = vec3(0.0, 0.5, 0.45);      // teal

            vec3 color = mix(deep, cyan, wave1 * 0.35);
            color = mix(color, purple, wave2 * 0.35);
            color = mix(color, teal, wave3 * 0.18);

            // Cursor influence
            color += cyan * glow * 0.45;
            color += purple * ring * glow * 0.30;

            // Subtle grid
            float grid = step(0.96, fract(uv.x * 40.0)) + step(0.96, fract(uv.y * 40.0));
            color += vec3(grid * 0.04);

            // Vignette (soft)
            float vignette = 1.0 - distance(uv, vec2(0.5)) * 0.75;
            color *= vignette;

            gl_FragColor = vec4(color, 1.0);
          }
        `}
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0, 0) },
        }}
      />
    </mesh>
  );
}

// Main background component
function ServicesBackground3D() {
  // Window-level tracking — canvas ke upar content hone par bhi chalta hai
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pointer.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.targetY = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
        style={{ width: "100%", height: "100%" }}
      >
        <color attach="background" args={["#0a0a0a"]} />
        <fog attach="fog" args={["#0a0a0a", 6, 34]} />

        <GradientBackground />
        <ParticleField count={1800} color="#00ffff" size={0.07} opacity={0.75} radius={30} />
        <ParticleField count={1200} color="#a855f7" size={0.09} opacity={0.6} radius={34} />
        <PointerLerp />
        <CameraRig />

        {/* Lighting */}
        <ambientLight intensity={0.5} color="#00ffff" />
        <directionalLight position={[10, 10, 10]} intensity={0.4} color="#a855f7" />
        <pointLight position={[-10, 5, 10]} intensity={0.6} color="#00ffff" decay={2} />
        <pointLight position={[10, -5, -10]} intensity={0.4} color="#a855f7" decay={2} />
      </Canvas>

      {/* Soft overlays — text readable rahe, background bhi dikhe */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(10,10,10,0.85)_100%)] pointer-events-none" />
    </div>
  );
}

export default ServicesBackground3D;
