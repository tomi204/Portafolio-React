import React, { Suspense} from 'react'
import { FaIdCard } from 'react-icons/fa'
import { Model } from '../3d/Disco'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PresentationControls } from '@react-three/drei'
import "./Intro.css"

const Intro = () => {
    return (
        <div className='intro-main'>
            <div className='titulo'>
                <h1> Tomás Oliver</h1>
                <h3>I am a very proactive, focused and dedicated person.
                    dedicated.
                    I am passionate about technology, Blockchain
                    and all it has to offer.</h3>
                <a href="">
                    <button>
                        Download CV <FaIdCard />
                    </button>
                </a>
            </div>
            <div className='d3' >
                <Canvas  camera={{zoom: 0.4, position: [20, 0, 420]}} >
                

                <ambientLight intensity={0.5} />
                <pointLight position={[10, 15, 10]} />
                <pointLight position={[-10, -15, -10]} />

                <Suspense fallback={null}>
                <Model />
                
                </Suspense>
                
                <OrbitControls autoRotate={true} autoRotateSpeed={5} />
                
                </Canvas>
                </div>
        </div>
    )
}

export default Intro