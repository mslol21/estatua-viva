'use client';

import { Component, Suspense, useEffect, useMemo, useRef, type MutableRefObject, type ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Center, ContactShadows, Environment, Float, Html, useGLTF } from '@react-three/drei';
import { Group, MathUtils, TorusKnotGeometry } from 'three';
import gsap from 'gsap';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils.js';

export type SceneMotion = { rotation: number; scale: number; x: number };
type Props = { motion: MutableRefObject<SceneMotion>; active: boolean; reduced: boolean; modelUrl?: string };

function StaticForm({ motion, active, reduced }: Props) {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = () => {
      element.current?.style.setProperty('--sculpture-fallback-x', `${50 + motion.current.x * 14}%`);
      element.current?.style.setProperty('--sculpture-fallback-scale', String(motion.current.scale));
    };
    update();
    if (active && !reduced) gsap.ticker.add(update);
    return () => { gsap.ticker.remove(update); };
  }, [motion, active, reduced]);
  return <div ref={element} className="sculpture-static" role="img" aria-label="Estudo escultórico abstrato em cerâmica" />;
}

class SceneBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

function OrganicForm() {
  const geometry = useMemo(() => {
    const shape = new TorusKnotGeometry(0.88, 0.29, 180, 32, 2, 3);
    const position = shape.attributes.position;
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i), y = position.getY(i), z = position.getZ(i);
      const wave = 1 + 0.035 * Math.sin(y * 8 + z * 3) * Math.cos(x * 6);
      position.setXYZ(i, x * wave, y * 1.15 * wave, z * wave);
    }
    shape.computeVertexNormals();
    return shape;
  }, []);
  useEffect(() => () => geometry.dispose(), [geometry]);
  return <mesh geometry={geometry} castShadow receiveShadow rotation={[0.18, 0, -0.2]}>
    <meshPhysicalMaterial color="#c9bda8" metalness={0.48} roughness={0.31} clearcoat={0.28} clearcoatRoughness={0.42} />
  </mesh>;
}

function ExternalModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  // Clone transforms without disposing the shared useGLTF resource cache.
  const model = useMemo(() => clone(scene), [scene]);
  return <Center><primitive object={model} dispose={null} /></Center>;
}

function Sculpture({ motion, reduced, modelUrl }: Props) {
  const group = useRef<Group>(null);
  const { viewport, invalidate } = useThree();
  useEffect(() => { invalidate(); }, [reduced, invalidate]);
  useFrame(({ pointer }, delta) => {
    if (!group.current) return;
    const object = group.current;
    const narrow = viewport.width < 6;
    const target = motion.current;
    object.rotation.y = MathUtils.damp(object.rotation.y, target.rotation + (reduced ? 0 : pointer.x * 0.12), 5, delta);
    object.rotation.x = MathUtils.damp(object.rotation.x, reduced ? 0 : -pointer.y * 0.06, 5, delta);
    object.position.x = MathUtils.damp(object.position.x, narrow ? 0 : target.x, 5, delta);
    object.position.y = narrow ? 0.65 : 0;
    object.scale.setScalar((narrow ? 0.75 : 1) * target.scale);
  });
  return <group ref={group}>
    <Float floatIntensity={reduced ? 0 : 0.5} rotationIntensity={reduced ? 0 : 0.2} speed={1.5}>
      <SceneBoundary fallback={<OrganicForm />}>
        <Suspense fallback={<Html center><span className="sculpture-loader" role="status">Preparando a cena…</span></Html>}>
          {modelUrl ? <ExternalModel url={modelUrl} /> : <OrganicForm />}
        </Suspense>
      </SceneBoundary>
    </Float>
  </group>;
}

export default function SculptureCanvas(props: Props) {
  return <SceneBoundary fallback={<StaticForm {...props} />}>
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0.25, 6.5], fov: 42 }} shadows frameloop={!props.active ? 'never' : props.reduced ? 'demand' : 'always'} gl={{ antialias: true, powerPreference: 'low-power' }} fallback={<StaticForm {...props} />}>
      <ambientLight intensity={0.65} />
      <directionalLight position={[-4, 2, 3]} intensity={1.6} color="#aec7db" />
      <spotLight position={[2, 6, 4]} angle={0.45} penumbra={0.9} intensity={65} castShadow shadow-mapSize={[1024, 1024]} />
      <SceneBoundary fallback={null}><Suspense fallback={null}><Environment preset="city" environmentIntensity={0.45} /></Suspense></SceneBoundary>
      <Sculpture {...props} />
      <ContactShadows position={[0, -1.85, 0]} opacity={0.35} scale={12} blur={2.8} far={4} resolution={256} frames={props.reduced ? 1 : Infinity} />
    </Canvas>
  </SceneBoundary>;
}
