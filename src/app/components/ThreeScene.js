"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create buildings in a grid pattern
    const buildings = [];
    const buildingColors = [0xff69b4, 0xff1493, 0xc71585, 0xdb7093];
    
    for (let x = -3; x <= 3; x += 1.5) {
      for (let z = -3; z <= 3; z += 1.5) {
        const height = Math.random() * 2 + 1;
        const geometry = new THREE.BoxGeometry(0.8, height, 0.8);
        const color = buildingColors[Math.floor(Math.random() * buildingColors.length)];
        
        const material = new THREE.MeshPhongMaterial({
          color: color,
          emissive: color,
          emissiveIntensity: 0.4,
          transparent: true,
          opacity: 0.85
        });
        
        const building = new THREE.Mesh(geometry, material);
        building.position.set(x, height / 2, z);
        
        // Add edges
        const edges = new THREE.EdgesGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({ 
          color: 0xffffff, 
          transparent: true, 
          opacity: 0.3 
        });
        const wireframe = new THREE.LineSegments(edges, lineMaterial);
        building.add(wireframe);
        
        scene.add(building);
        buildings.push(building);
      }
    }

    const gridHelper = new THREE.GridHelper(10, 10, 0xff69b4, 0x444444);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // Lighting
    const mainLight = new THREE.PointLight(0xff69b4, 2, 50);
    mainLight.position.set(0, 5, 5);
    scene.add(mainLight);

    const secondLight = new THREE.PointLight(0xff1493, 1.5, 50);
    secondLight.position.set(-5, 3, -5);
    scene.add(secondLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    camera.position.set(4, 4, 6);
    camera.lookAt(0, 0, 0);

    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate entire scene slowly
      scene.rotation.y += 0.002;

      // Pulse buildings' emissive intensity
      buildings.forEach((building, index) => {
        const pulse = Math.sin(Date.now() * 0.001 + index * 0.5) * 0.3 + 0.5;
        building.material.emissiveIntensity = pulse;
      });

      // Move lights in a circle
      const time = Date.now() * 0.001;
      mainLight.position.x = Math.cos(time) * 5;
      mainLight.position.z = Math.sin(time) * 5;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      
      buildings.forEach(building => {
        building.geometry.dispose();
        building.material.dispose();
      });
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}