
import { useGLTF, Environment, PresentationControls, ContactShadows, Html, Text3D, Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useEffect, useRef } from "react"
import { MeshBasicMaterial, MeshStandardMaterial } from "three"

const Macbook = (props) => {

    const { nodes, materials } = useGLTF('./model.gltf')
    const website = useRef()
    const macbook = useRef()

    const {rotX, rotY, rotZ, posX,posY,posZ } = useControls('Iframe',{
            rotX: {value:-1.56},
            rotY: {value:0.0},
            rotZ: {value:0.0},
            posX: {value:0.02},
            posY: {value:-0.05},
            posZ: {value:-1.9},
    })
    const {MrotX, MrotY, MrotZ, MposX,MposY,MposZ } = useControls('Macbook',{
            MrotX: {value:0.0,min:-5,max:10},
            MrotY: {value:0.0,min:-5,max:10},
            MrotZ: {value:0.0,min:-5,max:10},
            MposX: {value:0.00,min:-10,max:10},
            MposY: {value:-.80,min:-10,max:10},
            MposZ: {value:0.40,min:-10,max:10},
    })


    useEffect(()=>{
        macbook.current.rotation.x =  MrotX
        macbook.current.rotation.y =  MrotY
        macbook.current.rotation.z =  MrotZ
        macbook.current.position.x =  MposX
        macbook.current.position.y =  MposY
        macbook.current.position.z =  MposZ
    },[ macbook,MrotX,MrotY, MrotZ,MposX,MposY, MposZ,])



    return (
        <>
            <Environment preset="city" />
            <PresentationControls
                global
                rotation={[0.13, 0.1, 0]}
            polar={[-.04, 0.2]}
            azimuth={[-1, 0.75]}
            config={{
                mass: 2, tension: 400
            }}
            snap={
                {
                    mass: 2, tension: 400
                }
            }
            >
                <group {...props} ref={macbook} dispose={null}>
                    <group name="Macbook" scale={0.1}>
                        <mesh
                            name="Body Metal"
                            castShadow
                            receiveShadow
                            geometry={nodes.Circle001.geometry}
                            material={materials['Frame.001']}
                        />
                        <mesh
                            name="Circle001_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Circle001_1.geometry}
                            material={materials['Frame.001']}
                        />
                        <mesh
                            name="Circle001_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Circle001_2.geometry}
                            material={materials.HeadPhoneHole}
                        />
                        <mesh
                            name="Circle001_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Circle001_3.geometry}
                            material={materials.USB_C_INSIDE}
                        />
                        <mesh
                            name="Circle001_4"
                            castShadow
                            receiveShadow
                            geometry={nodes.Circle001_4.geometry}
                            material={materials['Frame.001']}
                        />
                        <mesh
                            name="Circle001_5"
                            castShadow
                            receiveShadow
                            geometry={nodes.Circle001_5.geometry}
                            material={materials.TouchbarBorder}
                        />
                        <mesh
                            name="Circle001_6"

                            castShadow
                            receiveShadow
                            geometry={nodes.Circle001_6.geometry}
                            material={materials.Keyboard}
                        />
                        <group name="Bottom" position={[0, -0.509, 0]} scale={5.796}>
                            <mesh

                                name="Circle006"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle006.geometry}
                                material={materials['Frame.001']}
                            />
                            <mesh
                                name="Circle006_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle006_1.geometry}
                                material={materials.USB_C_INSIDE}
                            />
                        </group>
                        <mesh
                            name="FrontCameraRing001"
                            castShadow
                            receiveShadow
                            geometry={nodes.FrontCameraRing001.geometry}
                            material={materials['CameraRIngBlack.002']}
                            position={[-0.155, 19.571, -16.151]}
                            scale={5.796}
                        />
                        <group name="Keyboard" position={[-11.786, -0.15, -8.301]} scale={5.796}>
                            <mesh
                                name="Circle"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle.geometry}
                                material={materials['Keyboard.001']}
                            />
                            <mesh
                                name="Circle_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle_1.geometry}
                                material={materials.Key}
                            />
                            <mesh
                                name="Circle_2"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle_2.geometry}
                                material={materials.Touchbar}
                            />
                        </group>
                        <mesh
                            name="KeyboardKeyHole"
                            castShadow
                            receiveShadow
                            geometry={nodes.KeyboardKeyHole.geometry}
                            material={materials['Keyboard.001']}
                            position={[-11.786, -0.152, -8.301]}
                            scale={5.796}
                        />
                        <mesh
                            name="RubberFoot"
                            castShadow
                            receiveShadow
                            geometry={nodes.RubberFoot.geometry}
                            material={materials.DarkRubber}
                            position={[-11.951, -0.751, 7.857]}
                            scale={5.796}
                        />
                        <group name="ScreenHinge" position={[0.011, -0.211, -10.559]} scale={5.796}>
                            <mesh
                                name="Circle012"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle012.geometry}
                                material={materials.HingeBlack}
                            />
                            <mesh
                                name="Circle012_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle012_1.geometry}
                                material={materials.HingeMetal}
                            />
                        </group>
                        <group name="SpeakerLeft" position={[-15.026, 0.031, 0.604]} scale={5.796}>
                            <mesh
                                name="Circle009"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle009.geometry}
                                material={materials['Frame.001']}
                            />
                            <mesh
                                name="Circle009_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle009_1.geometry}
                                material={materials.SpeakerHole}
                            />
                        </group>
                        <group name="SpeakerRight" position={[12.204, 0.031, 0.604]} scale={5.796}>
                            <mesh
                                name="Circle003"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle003.geometry}
                                material={materials['Frame.001']}
                            />
                            <mesh
                                name="Circle003_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle003_1.geometry}
                                material={materials.SpeakerHole}
                            />
                        </group>
                        <group
                            name="Top"
                            position={[0.007, -0.472, -10.412]}
                            rotation={[1.311, 0, 0]}
                            scale={5.796}>
                            <mesh
                                name="Circle002"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle002.geometry}
                                material={materials['Frame.001']}
                            />
                            <mesh
                                name="Circle002_1"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle002_1.geometry}
                                material={materials.Screen}
                            />
                            <mesh
                                name="Circle002_2"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle002_2.geometry}
                                material={materials.ScreenGlass}
                            />
                            <mesh
                                name="Circle002_3"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle002_3.geometry}
                                material={materials.Rubber}
                            />
                            <mesh
                                name="Circle002_4"
                                castShadow
                                receiveShadow
                                geometry={nodes.Circle002_4.geometry}
                                material={materials.DisplayGlass}
                            >
                                <Html transform wrapperClass="htmlScreen"  distanceFactor={1.9} ref={website} position={[posX,posY,posZ]} rotation={[rotX,rotY,rotZ]} >
                                    <iframe className="scroll-smooth"
                                        // src='https://abhishek-dolli.vercel.app/'
                                        src='https://www.yuyadesigninnovations.com/'
                                    />
                                </Html>
                            </mesh>

                        </group>
                    </group>
                </group>
                <Text
                    fontSize={1}
                    rotation-y={-1.3}
                    rotation-x={-.05}
                    position={[2, 0.2,0.5]}
                    material={new MeshStandardMaterial({
                        // color:'white'
                    })}
                    maxWidth={2}
                    textAlign="left"
                    lineHeight={0.75}
                    font="./ClashDisplay-Semibold.otf" >
                    {"YUYA MEI"}
                </Text>
            </PresentationControls>
            <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
        </>
    )
}
useGLTF.preload('/model.gltf')

export default Macbook


/*   */
