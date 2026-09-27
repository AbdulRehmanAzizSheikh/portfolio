"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Stars } from "@react-three/drei";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  varying vec2 vUv;
  
  // Simplex 3D Noise by Ian McEwan, Ashima Arts
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}
  
  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amplitude * snoise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }
  
  void main() {
    vec2 uv = vUv;
    vec2 mouse = uMouse / uResolution;
    vec2 center = vec2(0.5, 0.5);
    float dist = distance(uv, mouse);
    
    // Create flowing field effect
    vec3 p = vec3(uv * 3.0, uTime * 0.1);
    float noise = fbm(p + vec3(mouse * 2.0, 0.0));
    
    // Ripple effect from mouse
    float ripple = sin(30.0 * dist - uTime * 3.0) * 0.05 * (1.0 - smoothstep(0.0, 0.5, dist));
    
    // Color based on noise and mouse position
    vec3 color1 = vec3(0.0, 0.5, 1.0);  // cyan
    vec3 color2 = vec3(0.6, 0.2, 0.8);  // purple
    vec3 color3 = vec3(0.0, 0.8, 0.4);  // green
    
    float mixFactor = noise * 0.5 + 0.5 + ripple;
    vec3 color = mix(color1, color2, mixFactor);
    color = mix(color, color3, abs(mouse.x - 0.5));
    
    // Vignette
    float vignette = 1.0 - distance(uv, center) * 1.2;
    color *= vignette;
    
    // Add subtle grid lines
    float grid = step(0.98, fract(uv.x * 20.0)) + step(0.98, fract(uv.y * 20.0));
    color += vec3(grid * 0.1);
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

function ShaderBackground() {
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
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
          uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        }}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points | null>(null);
  const [positions] = useState(() => {
    const pos = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
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
        posArray[i + 1] += Math.sin(time * 0.5 + i * 0.01) * 0.002;
        posArray[i] += Math.cos(time * 0.3 + i * 0.01) * 0.001;
        
        // Mouse attraction
        const dx = mouse.x * 10 - posArray[i];
        const dy = -mouse.y * 10 - posArray[i + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 5) {
          posArray[i] += dx * 0.01;
          posArray[i + 1] += dy * 0.01;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y += 0.0001;
      pointsRef.current.rotation.x += 0.00005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.02}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

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

export default function ServicesBackground3D() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
        className="w-full h-full"
      >
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 1, 15]} />
        
        <ShaderBackground />
        <FloatingParticles />
        <MouseTracker />
        
        {/* Ambient subtle lights */}
        <ambientLight intensity={0.3} color="#00ffff" />
        <directionalLight position={[5, 5, 5]} intensity={0.2} color="#a855f7" />
        <pointLight position={[-5, 3, 5]} intensity={0.3} color="#00ffff" decay={2} />
        <pointLight position={[5, -3, -5]} intensity={0.2} color="#a855f7" decay={2} />
      </Canvas>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#050505_100%)]" />
    </div>
  );
}