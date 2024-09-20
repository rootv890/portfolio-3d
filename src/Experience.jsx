import { Center, Float } from "@react-three/drei";
import Macbook from "./Macbook";
import { Leva } from "leva";
import { useState } from "react";

function Experience() {


    return <>
    <Float rotationIntensity={0.5}>
        <Center>


            <rectAreaLight
                width={2.5} height={1.65} intensity={65}
                color={'white'}
                rotation={[0.1, Math.PI, 0]}
                position={[0, 0.55, -1.55]}
            />
            <Macbook  />
        </Center>
    </Float>
    </>
}

export default Experience;
