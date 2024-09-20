
import { useGLTF, Environment, Float, Center, PresentationControls, ContactShadows, Html, Text3D, Text } from "@react-three/drei"

const Macbook = () => {

    const {nodes,materials} = useGLTF('./model.gltf')

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
                <primitive object={macbook.scene} position-y={-1.50}>
                    <Html transform wrapperClass="htmlScreen" distanceFactor={1.17} position={[0, 1.56, -1.4]} rotation-x={-0.256} >
                        <iframe className="scroll-smooth"
                            // src='https://abhishek-dolli.vercel.app/'
                            src='https://www.yuyadesigninnovations.com/'
                        />
                    </Html>
                </primitive>
                <Text
                    fontSize={1}
                    rotation-y={-1.25}
                    position={[2, 1.75, 0.75]}
                    maxWidth={2}
                    textAlign="center"
                    lineHeight={0.75}
                    font="./ClashDisplay-Semibold.otf" >
                    {"YUYA MEI"}
                </Text>
            </PresentationControls>
            <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
        </>
    )
}

export default Macbook


/*  <Html transform wrapperClass="htmlScreen" distanceFactor={1.17} position={[0, 1.56, -1.4]} rotation-x={-0.256} >
                        <iframe className="scroll-smooth"
                            // src='https://abhishek-dolli.vercel.app/'
                            src='https://www.yuyadesigninnovations.com/'
                        />
                    </Html> */
