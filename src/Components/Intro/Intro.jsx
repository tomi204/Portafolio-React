import React, { Suspense} from 'react'
import { FaIdCard } from 'react-icons/fa'
import { Model } from '../3d/Disco'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
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
            <div className='d3'>
                <Canvas camera={{zoom: 5, position: [5, 15, 20]}} >
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                
                <Model />
                </Suspense>
                <OrbitControls />
                </Canvas>
                </div>
        </div>
    )
}

export default Intro