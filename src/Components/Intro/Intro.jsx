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
                <h1 className='nombre'> Tomás Oliver</h1>
                <h3> I am 20 years old and live in Argentina, Buenos Aires. I am a very proactive, problem solver and dedicated person. Passionate about technology, Blockchain and everything it has to offer.</h3>
                <a href="https://drive.google.com/file/d/1Aeusjbh75eXEPl4yp27JYi-6t_0vjprk/view?usp=sharing" target={'_blank'} >
                    <button className='boton-d'>
                         CV <FaIdCard />
                    </button>
                </a>
            </div>
            <div className='d3' >
                <Canvas  camera={{zoom: 105, position: [20, 20, 420]}} >
            
                <Suspense fallback={null}>
                <Model />
                
                </Suspense>
                
                <OrbitControls autoRotate={true} autoRotateSpeed={6} />
                
                </Canvas>
                </div>
        </div>
    )
}

export default Intro