import { useRef } from 'react'
import { Cylinder } from '@react-three/drei'
import * as THREE from 'three'
import { Vector3 } from '@react-three/fiber'

export const Lights = ({ position }: { position: Vector3 }) => {
  const mainLightRef = useRef<THREE.SpotLight>(null)
  const rayRef = useRef<THREE.Mesh>(null)

  const fragmentShader = `
		varying vec3 v_eye;
		varying vec3 v_normal;
			float Fresnel(vec3 eyeVector, vec3 worldNormal) {
				return pow(1.0 + dot(eyeVector, worldNormal), 2.5);
			}

			void main() {
				vec3 color = vec3(1.0, 1.0, 0.5);
				float fresnel = Fresnel(v_eye, normalize(v_normal));
				float a = pow(fresnel * 0.1, 1.2);
				color *= fresnel;
				gl_FragColor = vec4(color, a);
			}
		`
  const vertexShader = `
			varying vec3 v_eye;
			varying vec3 v_normal;

			void main() {
				vec4 mPos = modelMatrix * vec4(position, 1.0);
				v_eye = normalize(mPos.xyz - cameraPosition);
				v_normal = normal;

				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}	
	`
  const shader: THREE.ShaderLibShader = {
    uniforms: {},
    vertexShader,
    fragmentShader,
  }

  return (
    <group position={position}>
      <spotLight
        ref={mainLightRef}
        color="#fefdb2"
        castShadow
        angle={3}
        position={[0, 0, 0]}
        intensity={2}
        power={10}
        distance={20}
        decay={1}
        shadow-normalBias={1}
      />
      <Cylinder
        ref={rayRef}
        position={[0, 0, 0]}
        rotation-y={Math.PI}
        args={[0.7, 6.8, 7, 256, 1, true]}
      >
        <shaderMaterial args={[shader]} transparent />
      </Cylinder>
    </group>
  )
}
