import { OrbitControls, Stage } from "@react-three/drei";

export const Experience = () => {
    return (
        <>
            <Stage 
            intensity={1.5} 
            environment="city" 
            shadows={{ type: "accumulative", color: "#d9afd9", colorBlend: 2, opacity: 2 }}
            adjustCamera={8}
            >
                <mesh castShadow>
                    <meshNormalMaterial />
                    <boxGeometry />
                </mesh>
            </Stage>
            <OrbitControls
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI /  2}
                enablePan={false}
            />
        </>
    )
}