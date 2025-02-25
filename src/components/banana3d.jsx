import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Banana3d = () => {
  const mountRef = useRef(null);
  const bananaRef = useRef(null);
  const speed = 0.02;

  // useEffect(() => {
  //   const scene = new THREE.Scene();

  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   camera.position.set(0, 2, 5);

  //   const renderer = new THREE.WebGLRenderer({ antialias: true });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   mountRef.current.appendChild(renderer.domElement);

  //   const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  //   scene.add(ambientLight);
  //   const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  //   directionalLight.position.set(1, 2, 3);
  //   scene.add(directionalLight);

  //   const planeGeometry = new THREE.PlaneGeometry(100, 100);
  //   const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
  //   const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  //   plane.rotation.x = -Math.PI / 2;
  //   scene.add(plane);

  //   const loader = new GLTFLoader();
  //   loader.load(
  //     '/models/banana.glb', 
  //     (gltf) => {
  //       const banana = gltf.scene;
  //       banana.scale.set(0.5, 0.5, 0.5);
  //       banana.position.set(0, 0.5, 0);
  //       scene.add(banana);
  //       bananaRef.current = banana;
  //     },
  //     undefined,
  //     (error) => {
  //       console.error('Error loading banana model:', error);
  //     }
  //   );

  //   const onWindowResize = () => {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   };
  //   window.addEventListener('resize', onWindowResize);

  //   const animate = () => {
  //     requestAnimationFrame(animate);

  //     if (bananaRef.current) {
  //       bananaRef.current.position.z -= speed;
  //       bananaRef.current.rotation.z += speed * 10;
  //     }

  //     renderer.render(scene, camera);
  //   };
  //   animate();

  //   return () => {
  //     window.removeEventListener('resize', onWindowResize);
  //     mountRef.current.removeChild(renderer.domElement);
  //     renderer.dispose();
  //   };
  // }, []);

  return <div ref={mountRef} />;
};

export default Banana3d;
