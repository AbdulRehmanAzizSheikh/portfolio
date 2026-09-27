"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Simple particle system
function ParticleSystem() {
  const pointsRef = useRef<THREE.Points | null>(null);
  const [positions] = useState(() => {
    const pos = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  });

  // Initialize geometry
  useEffect(() => {
    if (pointsRef.current) {
      const geometry = pointsRef.current.geometry;
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }
  }, []);

  useFrame(({ clock, mouse }) => {
    if (pointsRef.current) {
      const posArray = pointsRef.current.geometry.attributes.position.array;
      const time = clock.getElapsedTime();
      
      for (let i = 0; i < posArray.length; i += 3) {
        // Gentle floating motion
        posArray[i + 1] += Math.sin(time * 0.3 + i * 0.01) * 0.003;
        posArray[i] += Math.cos(time * 0.2 + i * 0.01) * 0.002;
        
        // Mouse attraction
        const dx = mouse.x * 15 - posArray[i];
        const dy = -mouse.y * 15 - posArray[i + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 8) {
          posArray[i] += dx * 0.015;
          posArray[i + 1] += dy * 0.015;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y += 0.00015;
      pointsRef.current.rotation.x += 0.0001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.04}
        color="#00ffff"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Mouse tracker for canvas
function MouseTracker() {
  const { gl } = useThree();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      });
    };

    gl.domElement.addEventListener("mousemove", handleMouseMove);
    return () => gl.domElement.removeEventListener("mousemove", handleMouseMove);
  }, [gl]);

  return null;
}

// Simple animated gradient background
function GradientBackground() {
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  
  useFrame(({ clock, mouse }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      materialRef.current.uniforms.uMouse.value.set(mouse.x, mouse.y);
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
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
            
            // Animated gradient with mouse influence
            float t = uTime * 0.1;
            float dist = distance(uv, mouse);
            
            // Multiple color waves
            float wave1 = sin(uv.x * 10.0 + t) * 0.5 + 0.5;
            float wave2 = sin(uv.y * 8.0 - t * 1.5) * 0.5 + 0.5;
            float mouseInfluence = 1.0 - smoothstep(0.0, 0.6, dist);
            
            vec3 color1 = vec3(0.0, 0.3, 0.6);   // dark cyan
            vec3 color2 = vec3(0.3, 0.1, 0.5);   // dark purple
            vec3 color3 = vec3(0.0, 0.4, 0.3);   // dark green
            vec3 color4 = vec3(0.1, 0.05, 0.2);  // very dark base
            
            vec3 color = mix(color4, color1, wave1 * 0.3 + mouseInfluence * 0.4);
            color = mix(color, color2, wave2 * 0.3);
            color = mix(color, color3, mouseInfluence * 0.3);
            
            // Subtle grid
            float grid = step(0.95, fract(uv.x * 30.0)) + step(0.95, fract(uv.y * 30.0));
            color += vec3(grid * 0.03);
            
            // Vignette
            float vignette = 1.0 - distance(uv, vec2(0.5)) * 1.0;
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
  // Debug: render a visible test element
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10">
      <div className="absolute inset-0 flex items-center justify-center text-cyan-400/50 text-2xl font-mono">
        3D Background Loading...
      </div>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
        className="w-full h-full"
      >
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 2, 20]} />
        
        <GradientBackground />
        <ParticleSystem />
        <MouseTracker />
        
        {/* Subtle lighting */}
        <ambientLight intensity={0.4} color="#00ffff" />
        <directionalLight position={[10, 10, 10]} intensity={0.3} color="#a855f7" />
        <pointLight position={[-10, 5, 10]} intensity={0.5} color="#00ffff" decay={2} />
        <pointLight position={[10, -5, -10]} intensity={0.3} color="#a855f7" decay={2} />
      </Canvas>
      
      {/* Overlay gradients for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050505_100%)]" />
    </div>
  );
}

export default ServicesBackground3D;