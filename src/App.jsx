import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";

import { Leva } from "leva";

const App = () => {

    return (

        <Canvas>
            <Leva hidden />
            <color attach="background" args={["#6f1cff"]} />
            {/* <OrbitControls makeDefault /> */}
            {/* <PresentationControls /> */}
            <Experience />
        </Canvas>
    );
};

export default App;
