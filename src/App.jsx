import { OrbitControls } from '@react-three/drei';
import Experience from './Experience';
import { Canvas } from '@react-three/fiber';

const App = () => {
	return (
		<Canvas>
			<OrbitControls makeDefault />
			<Experience />
		</Canvas>
	);
};

export default App;
